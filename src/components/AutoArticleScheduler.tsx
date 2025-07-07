
import { useEffect } from 'react';
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

interface AutoArticleSchedulerProps {
  onArticleGenerated: (article: Article) => void;
  isEnabled: boolean;
  apiKey: string;
}

const AutoArticleScheduler: React.FC<AutoArticleSchedulerProps> = ({
  onArticleGenerated,
  isEnabled,
  apiKey
}) => {
  useEffect(() => {
    if (!isEnabled || !apiKey) return;

    const generateDailyArticles = async () => {
      const lastGeneration = localStorage.getItem('lastAutoGeneration');
      const today = new Date().toDateString();
      
      if (lastGeneration === today) return;

      try {
        // Generate article logic here
        localStorage.setItem('lastAutoGeneration', today);
        toast.success('تم توليد المقالة اليومية تلقائياً');
      } catch (error) {
        console.error('Auto generation failed:', error);
      }
    };

    // Check every hour
    const interval = setInterval(generateDailyArticles, 60 * 60 * 1000);
    
    // Initial check
    generateDailyArticles();

    return () => clearInterval(interval);
  }, [isEnabled, apiKey, onArticleGenerated]);

  return null;
};

export default AutoArticleScheduler;
