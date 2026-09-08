import React, { useState } from 'react';
import { TabType, Article, Project } from './types';
import { ARTICLES_DATA, PROJECTS_DATA } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { SocialFooter } from './components/SocialFooter';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ArticlesView } from './views/ArticlesView';
import { WorksView } from './views/WorksView';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PodcastModal } from './components/PodcastModal';
import { CoffeeModal } from './components/CoffeeModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPodcastOpen, setIsPodcastOpen] = useState(false);
  const [isCoffeeOpen, setIsCoffeeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Switch tab helper with scroll to top
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticleById = (articleId: string) => {
    const found = ARTICLES_DATA.find((a) => a.id === articleId) || ARTICLES_DATA[0];
    setSelectedArticle(found);
  };

  const handleSelectProjectById = (projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];
    setSelectedProject(found);
  };

  return (
    <div className="min-h-screen bg-dot-pattern text-[#1e293b] flex flex-col selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenCoffee={() => setIsCoffeeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onSelectTab={handleTabChange}
            onOpenCoffee={() => setIsCoffeeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenPodcastModal={() => setIsPodcastOpen(true)}
            onSelectProject={handleSelectProjectById}
            onSelectArticle={handleSelectArticleById}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            onOpenContact={() => setIsContactOpen(true)}
            onOpenCoffee={() => setIsCoffeeOpen(true)}
          />
        )}

        {activeTab === 'articles' && (
          <ArticlesView onSelectArticle={(article) => setSelectedArticle(article)} />
        )}

        {activeTab === 'works' && (
          <WorksView
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}
      </main>

      {/* Social Footer */}
      <SocialFooter onSelectTab={handleTabChange} />

      {/* Interactive Modals */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <PodcastModal
        isOpen={isPodcastOpen}
        onClose={() => setIsPodcastOpen(false)}
      />

      <CoffeeModal
        isOpen={isCoffeeOpen}
        onClose={() => setIsCoffeeOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
