
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  author: string;
  tags: string[];
}

interface ArticleGeneratorProps {
  onArticleGenerated: (article: Article) => void;
}

const ArticleGenerator: React.FC<ArticleGeneratorProps> = ({ onArticleGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiKey, setApiKey] = useState('AIzaSyAnDI-zhdKjSlAvBFYxZbo4ALVt7xbjt8k');

  const ketoTopics = [
    'Understanding Different Body Types and Keto',
    'Apple Body Shape Keto Strategies',
    'Pear Body Shape Fat Burning Tips',
    'Hourglass Body Type Keto Meal Planning',
    'Rectangle Body Shape Keto Guidelines',
    'Intermittent Fasting for Different Body Types',
    'Keto Exercise Plans by Body Type',
    'Common Keto Mistakes to Avoid',
    'Keto-Friendly Foods for Weight Loss',
    'Managing Keto Flu Symptoms',
    'Tracking Progress on Keto Diet',
    'Keto Success Stories and Transformations',
    'Supplements for Keto Diet Success',
    'Meal Prep Tips for Keto Beginners',
    'Understanding Macronutrients in Keto'
  ];

  const generateArticle = async () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Gemini API key');
      return;
    }

    setIsGenerating(true);
    
    try {
      const randomTopic = ketoTopics[Math.floor(Math.random() * ketoTopics.length)];
      
      const prompt = `Write a comprehensive, engaging article about "${randomTopic}" for a keto diet website. The article should be:
      
      1. Around 800-1000 words
      2. Written in an engaging, conversational tone
      3. Include practical tips and actionable advice
      4. Be SEO-friendly with natural keyword usage
      5. Include specific examples and strategies
      6. Be scientifically accurate but accessible to general readers
      
      Please format the response as a JSON object with the following structure:
      {
        "title": "Article title",
        "excerpt": "Brief 2-3 sentence summary",
        "content": "Full article content with proper paragraphs",
        "tags": ["tag1", "tag2", "tag3"],
        "readTime": "X min read"
      }
      
      Make sure the content is original, informative, and directly relevant to people following a keto diet based on their body type.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid response from Gemini API');
      }

      const generatedText = data.candidates[0].content.parts[0].text;
      
      // Try to parse the JSON response
      let articleData;
      try {
        // Clean the response to extract JSON
        const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          articleData = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error('No JSON found in response');
        }
      } catch (parseError) {
        // Fallback: create article from the raw text
        articleData = {
          title: randomTopic,
          excerpt: generatedText.substring(0, 200) + '...',
          content: generatedText,
          tags: ['keto', 'diet', 'weight-loss'],
          readTime: '5 min read'
        };
      }

      const article: Article = {
        id: Date.now().toString(),
        title: articleData.title || randomTopic,
        excerpt: articleData.excerpt || generatedText.substring(0, 200) + '...',
        content: articleData.content || generatedText,
        publishedAt: new Date().toISOString(),
        readTime: articleData.readTime || '5 min read',
        author: 'Keto Expert',
        tags: articleData.tags || ['keto', 'diet', 'health']
      };

      onArticleGenerated(article);
      toast.success('Article generated successfully!');
      
    } catch (error) {
      console.error('Error generating article:', error);
      toast.error('Failed to generate article. Please check your API key and try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-keto-teal" />
          AI Article Generator
        </CardTitle>
        <CardDescription>
          Generate engaging keto diet articles automatically using AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="api-key" className="block text-sm font-medium text-gray-700 mb-2">
              Gemini API Key
            </label>
            <input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Gemini API key"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-keto-teal"
            />
            <p className="text-xs text-gray-500 mt-1">
              Your API key is stored locally and used only for generating articles
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
            <AlertCircle className="h-4 w-4" />
            <span>
              Generate 2-3 articles daily for fresh, engaging content about keto and body types
            </span>
          </div>
          
          <Button 
            onClick={generateArticle} 
            disabled={isGenerating || !apiKey.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Article...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate New Article
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleGenerator;
