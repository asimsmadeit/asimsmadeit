import React from 'react';
import { Project } from '../types';
import { X, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onViewFull: (project: Project) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, onViewFull }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl shadow-2xl animate-fadeIn rounded-sm border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white text-slate-500 hover:text-black z-10 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col h-full">
           {/* Text Content Only */}
           <div className="w-full p-8 md:p-10 flex flex-col">
              <span className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-widest">Project Overview</span>
              <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900">{project.title}</h3>
              <div className="mb-6">
                 {project.context && (
                   <span className="inline-block bg-slate-100 text-slate-600 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded">
                     {project.context}
                   </span>
                 )}
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                 {project.tags.map(tag => (
                   <span key={tag} className="text-xs text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1">#{tag}</span>
                 ))}
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => onViewFull(project)}
                  className="group flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider hover:text-blue-700 transition-colors"
                >
                  View Full Research
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;