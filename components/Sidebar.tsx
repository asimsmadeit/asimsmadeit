import React from 'react';
import { MY_NAME, MY_ROLE, MY_AFFILIATION, MY_EMAIL, SOCIAL_LINKS } from '../constants';
import { Github, Twitter, Linkedin, BookOpen, Instagram, GraduationCap } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('github')) return <Github size={16} />;
    if (n.includes('twitter') || n.includes('x')) return <Twitter size={16} />;
    if (n.includes('linkedin')) return <Linkedin size={16} />;
    if (n.includes('instagram')) return <Instagram size={16} />;
    if (n.includes('scholar')) return <GraduationCap size={16} />;
    return <BookOpen size={16} />;
  };

  const navItemClass = (view: ViewState) => 
    `cursor-pointer text-sm font-mono uppercase tracking-widest transition-colors block py-1 ${
      currentView === view 
        ? 'text-black font-bold border-l-2 border-black pl-3' 
        : 'text-slate-400 hover:text-slate-600 pl-3 border-l-2 border-transparent'
    }`;

  // Obfuscate email for display
  const displayEmail = MY_EMAIL.replace('@', ' [at] ').replace('.', ' [dot] ');

  return (
    <div className="h-full flex flex-col p-8 font-sans border-b lg:border-b-0 lg:border-r border-slate-200">
      
      {/* Identity Block */}
      <div className="mb-12">
        <h1 className="text-4xl font-serif text-slate-900 mb-4 tracking-tight leading-none">{MY_NAME}</h1>
        
        <div className="flex flex-col gap-1 mb-3">
          <span className="text-base text-slate-700">{MY_ROLE}</span>
          <span className="text-base text-slate-500">{MY_AFFILIATION}</span>
        </div>

        <div className="text-xs font-mono text-slate-400 mb-4">
          {displayEmail}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 flex-wrap">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-black transition-colors"
              title={link.name}
            >
              {getIcon(link.name)}
            </a>
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-4 mb-12">
        <div 
          onClick={() => onNavigate(ViewState.HOME)}
          className={navItemClass(ViewState.HOME)}
        >
          Overview
        </div>
        <div 
          onClick={() => onNavigate(ViewState.RESUME)}
          className={navItemClass(ViewState.RESUME)}
        >
          Resume
        </div>
        <div 
          onClick={() => onNavigate(ViewState.PROJECTS_LIST)}
          className={navItemClass(ViewState.PROJECTS_LIST)}
        >
          Projects
        </div>
        <div 
          onClick={() => onNavigate(ViewState.BLOG_LIST)}
          className={navItemClass(ViewState.BLOG_LIST)}
        >
          Blog
        </div>
      </nav>

      <div className="mt-auto pt-8 border-t border-slate-100">
        <p className="text-[10px] text-slate-300 font-mono">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;