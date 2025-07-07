
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';
import ArticleGenerator from '@/components/ArticleGenerator';

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

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load articles from localStorage
    const savedArticles = localStorage.getItem('keto-articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
    setLoading(false);
  }, []);

  const handleNewArticle = (article: Article) => {
    const updatedArticles = [article, ...articles];
    setArticles(updatedArticles);
    localStorage.setItem('keto-articles', JSON.stringify(updatedArticles));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <Helmet>
        <title>Keto Diet Articles | ketodiet.it.com</title>
        <meta name="description" content="Discover the latest articles about keto diet, body types, and weight loss strategies. Expert insights and tips for your keto journey." />
        <link rel="canonical" href="https://ketodiet.it.com/articles" />
      </Helmet>

      <header className="py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="keto-container">
          <Link to="/" className="text-xl font-bold text-keto-navy">ketodiet.it.com</Link>
        </div>
      </header>

      <main className="flex-grow">
        <div className="keto-container py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Homepage
              </Button>
            </Link>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-keto-navy">Keto Diet Articles</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover expert insights, tips, and strategies for your personalized keto journey
              </p>
            </div>

            {/* Article Generator Component */}
            <div className="mb-12">
              <ArticleGenerator onArticleGenerated={handleNewArticle} />
            </div>

            {/* Articles Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-keto-teal mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading articles...</p>
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-12">
                <Sparkles className="h-16 w-16 text-keto-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
                <p className="text-gray-600 mb-6">Generate your first article using the button above!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-keto-navy line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="bg-keto-cream text-keto-navy text-xs px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => {
                            // Simple modal or expanded view - for now just show alert
                            alert(`Full article content:\n\n${article.content}`);
                          }}
                        >
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
