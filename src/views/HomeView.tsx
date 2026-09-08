import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PastelFeatureCards } from '../components/PastelFeatureCards';
import { BlogsPreviewBanner } from '../components/BlogsPreviewBanner';
import { NewsletterSubscribe } from '../components/NewsletterSubscribe';
import { WorkTogetherBanner } from '../components/WorkTogetherBanner';
import { TabType } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenCoffee: () => void;
  onOpenContact: () => void;
  onOpenPodcastModal: () => void;
  onSelectProject: (projectId: string) => void;
  onSelectArticle: (articleId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenCoffee,
  onOpenContact,
  onOpenPodcastModal,
  onSelectProject,
  onSelectArticle,
}) => {
  return (
    <div className="space-y-4">
      {/* Hero Section matching Image 3 */}
      <HeroSection
        onGoToAbout={() => onSelectTab('about')}
        onOpenContact={onOpenContact}
      />

      {/* 4 Pastel Cards matching Image 1 */}
      <PastelFeatureCards
        onSelectTab={onSelectTab}
        onOpenPodcastModal={onOpenPodcastModal}
        onSelectProject={onSelectProject}
        onSelectArticle={onSelectArticle}
      />

      {/* Blogs Banner with Masonry Photos matching Image 1 bottom */}
      <BlogsPreviewBanner onGoToArticles={() => onSelectTab('articles')} />

      {/* Work Together Banner matching Image 2 */}
      <WorkTogetherBanner onOpenContact={onOpenContact} />

      {/* Newsletter Subscription matching Image 2 top */}
      <NewsletterSubscribe />
    </div>
  );
};
