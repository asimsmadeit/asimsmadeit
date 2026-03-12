import React from 'react';
import { RSS_FEED } from '../constants';
import { Rss, ExternalLink } from 'lucide-react';

const RssFeed: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-8 text-slate-400">
        <Rss size={14} />
        <span className="text-xs font-mono uppercase tracking-widest">Live Feed</span>
      </div>

      <div className="space-y-8 flex-1">
        {RSS_FEED.map((item) => (
          <a 
            key={item.id} 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer" 
            className="group cursor-pointer block"
          >
            <div className="flex items-center justify-between mb-1">
               <span className="text-[10px] font-mono text-slate-400 uppercase group-hover:text-blue-500 transition-colors">{item.source}</span>
               <span className="text-[10px] text-slate-400">{item.date}</span>
            </div>
            <h4 className="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors leading-snug flex items-start gap-1">
              {item.title}
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
            </h4>
          </a>
        ))}
        
        <div className="pt-4 border-t border-slate-200 border-dashed mt-auto">
          <p className="text-[10px] text-slate-400 italic">
          </p>
        </div>
      </div>
    </div>
  );
};

export default RssFeed;