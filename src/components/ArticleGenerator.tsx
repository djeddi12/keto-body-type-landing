
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, AlertCircle, Clock, Settings } from 'lucide-react';
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
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [nextGenTime, setNextGenTime] = useState<Date | null>(null);

  const seoOptimizedTopics = [
    'كيفية اتباع حمية الكيتو حسب شكل الجسم - دليل شامل 2025',
    'أفضل استراتيجيات الكيتو لشكل الجسم التفاحي - نصائح مجربة',
    'حمية الكيتو لشكل الجسم الكمثري - خطة فعالة لحرق الدهون',
    'نظام الكيتو المخصص لشكل الجسم الساعة الرملية',
    'دليل الكيتو الشامل لشكل الجسم المستطيل',
    'الصيام المتقطع مع الكيتو حسب نوع الجسم',
    'تمارين الكيتو المناسبة لكل شكل جسم',
    'أخطاء شائعة في حمية الكيتو وكيفية تجنبها',
    'أطعمة الكيتو الأساسية لإنقاص الوزن بسرعة',
    'علاج أعراض إنفلونزا الكيتو طبيعياً',
    'كيفية تتبع التقدم في حمية الكيتو بفعالية',
    'قصص نجاح حقيقية مع حمية الكيتو',
    'المكملات الضرورية لنجاح حمية الكيتو',
    'تحضير وجبات الكيتو للمبتدئين - دليل أسبوعي',
    'فهم الماكروز في حمية الكيتو للمبتدئين'
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoGenerate) {
      // Generate an article every 6 hours
      interval = setInterval(() => {
        generateArticle();
      }, 6 * 60 * 60 * 1000);
      
      // Set next generation time
      const next = new Date();
      next.setHours(next.getHours() + 6);
      setNextGenTime(next);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoGenerate]);

  const generateArticle = async () => {
    if (!apiKey.trim()) {
      toast.error('مطلوب مفتاح Gemini API');
      return;
    }

    setIsGenerating(true);
    
    try {
      const randomTopic = seoOptimizedTopics[Math.floor(Math.random() * seoOptimizedTopics.length)];
      
      const prompt = `اكتب مقالة شاملة ومحسنة لمحركات البحث حول "${randomTopic}" لموقع حمية الكيتو. يجب أن تكون المقالة:

1. من 1000-1200 كلمة
2. مكتوبة بأسلوب جذاب ومحادثي
3. تتضمن نصائح عملية وقابلة للتطبيق
4. محسنة لمحركات البحث مع استخدام الكلمات المفتاحية بشكل طبيعي
5. تتضمن أمثلة واستراتيجيات محددة
6. دقيقة علمياً ولكن مفهومة للقارئ العام
7. تحتوي على عناوين فرعية منظمة
8. تتضمن دعوة للعمل في النهاية

يرجى تنسيق الرد كـ JSON بالهيكل التالي:
{
  "title": "عنوان المقالة",
  "excerpt": "ملخص مختصر من 2-3 جمل",
  "content": "محتوى المقالة الكامل مع فقرات منظمة",
  "tags": ["علامة1", "علامة2", "علامة3"],
  "readTime": "X دقيقة قراءة"
}

تأكد من أن المحتوى أصلي ومفيد ومرتبط مباشرة بالأشخاص الذين يتبعون حمية الكيتو حسب شكل الجسم.`;

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
            maxOutputTokens: 4096,
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API Error:', errorData);
        throw new Error(`خطأ في API: ${response.status} - ${errorData.error?.message || 'خطأ غير معروف'}`);
      }

      const data = await response.json();
      console.log('Gemini API Response:', data);
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('استجابة غير صحيحة من Gemini API');
      }

      const generatedText = data.candidates[0].content.parts[0].text;
      console.log('Generated Text:', generatedText);
      
      let articleData;
      try {
        // Clean the response to extract JSON
        const cleanedText = generatedText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          articleData = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error('لم يتم العثور على JSON في الاستجابة');
        }
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        // Fallback: create article from the raw text
        articleData = {
          title: randomTopic,
          excerpt: generatedText.substring(0, 200) + '...',
          content: generatedText,
          tags: ['كيتو', 'حمية', 'إنقاص الوزن'],
          readTime: '5 دقائق قراءة'
        };
      }

      const article: Article = {
        id: Date.now().toString(),
        title: articleData.title || randomTopic,
        excerpt: articleData.excerpt || generatedText.substring(0, 200) + '...',
        content: articleData.content || generatedText,
        publishedAt: new Date().toISOString(),
        readTime: articleData.readTime || '5 دقائق قراءة',
        author: 'خبير الكيتو',
        tags: articleData.tags || ['كيتو', 'حمية', 'صحة']
      };

      onArticleGenerated(article);
      toast.success('تم توليد المقالة بنجاح!');
      
      // Update next generation time if auto-generating
      if (autoGenerate) {
        const next = new Date();
        next.setHours(next.getHours() + 6);
        setNextGenTime(next);
      }
      
    } catch (error) {
      console.error('Error generating article:', error);
      toast.error(`فشل في توليد المقالة: ${error instanceof Error ? error.message : 'خطأ غير معروف'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleAutoGenerate = () => {
    setAutoGenerate(!autoGenerate);
    if (!autoGenerate) {
      toast.success('تم تفعيل التوليد التلقائي - سيتم توليد مقالة كل 6 ساعات');
    } else {
      toast.info('تم إيقاف التوليد التلقائي');
      setNextGenTime(null);
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-keto-teal" />
          مولد المقالات بالذكاء الاصطناعي
        </CardTitle>
        <CardDescription>
          توليد مقالات جذابة حول حمية الكيتو تلقائياً مع تحسين SEO
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="api-key" className="block text-sm font-medium text-gray-700 mb-2">
              مفتاح Gemini API
            </label>
            <input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="أدخل مفتاح Gemini API"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-keto-teal"
            />
            <p className="text-xs text-gray-500 mt-1">
              مفتاح API محفوظ محلياً ويستخدم فقط لتوليد المقالات
            </p>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Settings className="h-5 w-5 text-keto-teal" />
              <div>
                <h4 className="font-medium">التوليد التلقائي</h4>
                <p className="text-sm text-gray-600">توليد مقالة جديدة كل 6 ساعات</p>
              </div>
            </div>
            <Button
              onClick={toggleAutoGenerate}
              variant={autoGenerate ? "default" : "outline"}
              size="sm"
            >
              {autoGenerate ? 'مفعل' : 'معطل'}
            </Button>
          </div>

          {autoGenerate && nextGenTime && (
            <div className="flex items-center space-x-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
              <Clock className="h-4 w-4" />
              <span>
                المقالة التالية في: {nextGenTime.toLocaleString('ar')}
              </span>
            </div>
          )}
          
          <div className="flex items-center space-x-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
            <AlertCircle className="h-4 w-4" />
            <span>
              المقالات محسنة لمحركات البحث مع كلمات مفتاحية مستهدفة
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
                جاري توليد المقالة...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                توليد مقالة جديدة
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleGenerator;
