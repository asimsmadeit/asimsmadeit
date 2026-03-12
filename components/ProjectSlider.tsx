import React from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectSliderProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects, onProjectClick }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-4 px-1">
        <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Selected Research</h3>
        <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">SCROLL &rarr;</span>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide items-stretch">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="
              flex-none 
              w-[85%] sm:w-[45%] lg:w-[40%] 
              snap-start 
              bg-white border border-slate-200 
              p-6 rounded-none 
              hover:border-slate-800 transition-colors cursor-pointer 
              flex flex-col justify-between
              h-auto
            "
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                 {project.context && (
                   <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 border border-slate-100 px-1.5 py-0.5">
                     {project.context}
                   </span>
                 )}
                 <ArrowRight size={14} className="text-slate-300 -mr-2 -mt-2 opacity-0 group-hover:opacity-100" />
              </div>
              
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-50">
               {project.tags.slice(0, 3).map(tag => (
                 <span key={tag} className="text-[10px] text-slate-500 bg-slate-50 px-1.5 py-0.5">
                   #{tag}
                 </span>
               ))}
            </div>
          </div>
        ))}
        
        {/* Spacer for right padding in scroll view */}
        <div className="w-4 flex-none"></div>
      </div>
    </div>
  );
};

export default ProjectSlider;