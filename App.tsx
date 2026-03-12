import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import RssFeed from './components/RssFeed';
import ProjectSlider from './components/ProjectSlider';
import ProjectModal from './components/ProjectModal';
import { Project, ViewState } from './types';
import { PROJECTS, MY_BIO, RESEARCH_PROBLEMS, RESUME_URL, BLOG_POSTS, PUBLICATIONS, CURRENT_FOCUS, RESUME_DATA } from './constants';
import { ArrowLeft, Download, Mail, ArrowRight, FileText, Github, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewFull = (project: Project) => {
    setIsModalOpen(false); // Close popup
    setSelectedProject(project);
    setViewState(ViewState.PROJECT_DETAIL);
  };

  const handleBackToOverview = () => {
    setViewState(ViewState.HOME);
    setSelectedProject(null);
  };

  const handleNavigation = (view: ViewState) => {
    setViewState(view);
    window.scrollTo(0, 0);
  };

  // Content Renderer for Center Column
  // Unified layout: max-w-3xl (matching prose width), w-full, left-aligned, consistent padding.
  const renderCenterContent = () => {
    // 1. Resume View
    if (viewState === ViewState.RESUME) {
      return (
        <div className="flex-1 p-6 lg:p-12 animate-fadeIn max-w-3xl w-full flex flex-col min-h-screen">
           <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-8">
             <h2 className="text-3xl font-serif text-slate-900">Curriculum Vitae</h2>
             <a 
               href={RESUME_URL} 
               download
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-slate-700 transition-colors"
             >
               <Download size={14} />
               <span>Download PDF</span>
             </a>
           </div>
           
           {/* Web Resume Rendering */}
           <div className="prose prose-slate max-w-none">
             {/* Education */}
             <section className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Education</h3>
                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-serif font-bold text-slate-900 m-0">{RESUME_DATA.education.school}</h4>
                    <span className="text-sm text-slate-500 font-mono">{RESUME_DATA.education.location}</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-slate-700 italic">{RESUME_DATA.education.degree}</span>
                    <span className="text-sm text-slate-500 font-mono">{RESUME_DATA.education.date}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600 marker:text-slate-300">
                    {RESUME_DATA.education.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
             </section>

             {/* Experience */}
             <section className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Experience</h3>
                <div className="space-y-8">
                  {RESUME_DATA.experience.map((exp, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-serif font-bold text-slate-900 m-0">{exp.role}</h4>
                        <span className="text-sm text-slate-500 font-mono">{exp.date}</span>
                      </div>
                      <div className="flex justify-between items-baseline mb-3">
                         <span className="text-slate-700 font-medium">{exp.company}</span>
                         <span className="text-xs text-slate-400 uppercase tracking-wide">{exp.location}</span>
                      </div>
                      <ul className="list-disc pl-4 space-y-2 text-sm text-slate-600 marker:text-slate-300 leading-relaxed">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
             </section>

             {/* Projects (Resume Version) */}
             <section className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Technical Projects</h3>
                <div className="space-y-6">
                  {RESUME_DATA.projects.map((proj, idx) => (
                    <div key={idx}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-1">
                        <h4 className="text-lg font-serif font-bold text-slate-900 m-0">{proj.title}</h4>
                        <span className="text-xs text-slate-500 font-mono border-l border-slate-300 pl-2 ml-0 sm:ml-1 italic">{proj.tech}</span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600 marker:text-slate-300 leading-relaxed">
                        {proj.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
             </section>

             {/* Skills */}
             <section className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Technical Skills</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-mono bg-slate-50 p-4 border border-slate-100 rounded-sm">
                  {RESUME_DATA.skills}
                </p>
             </section>

           </div>
        </div>
      );
    }

    // 2. Project Detail View
    if (viewState === ViewState.PROJECT_DETAIL && selectedProject) {
      return (
        <div className="flex-1 p-6 lg:p-12 animate-fadeIn w-full max-w-3xl">
           <button 
             onClick={handleBackToOverview}
             className="flex items-center gap-2 text-xs text-slate-400 hover:text-black mb-8 transition-colors uppercase tracking-widest font-mono"
           >
             <ArrowLeft size={12} /> Back
           </button>

           <article>
             <div className="mb-6">
               {selectedProject.context && (
                 <span className="inline-block bg-slate-100 text-slate-600 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded mb-4">
                   {selectedProject.context}
                 </span>
               )}
               <h1 className="text-3xl md:text-5xl font-serif text-black mb-4 leading-tight">
                 {selectedProject.title}
               </h1>
               <div className="flex flex-wrap gap-2">
                   {selectedProject.tags.map(tag => (
                     <span key={tag} className="text-xs font-medium text-slate-500">#{tag}</span>
                   ))}
               </div>
             </div>

             <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium">
               <p className="lead text-xl text-slate-700">{selectedProject.description}</p>
               
               {/* Image removed for text-focused layout */}
               
               <hr className="my-8 border-slate-200" />
               
               <h3>Methodology</h3>
               <p>We employed a novel architecture focusing on sparse features. By increasing the width of the autoencoder, we were able to disentangle polysemantic neurons into interpretable features.</p>
             </div>
           </article>
        </div>
      );
    }

    // 3. Projects List View (Grid Layout)
    if (viewState === ViewState.PROJECTS_LIST) {
        return (
            <div className="flex-1 p-6 lg:p-12 animate-fadeIn max-w-6xl w-full">
                <h2 className="text-3xl font-serif text-slate-900 mb-8 border-b border-slate-200 pb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map(project => (
                        <div 
                          key={project.id} 
                          className="group cursor-pointer flex flex-col h-full bg-white border border-slate-200 p-6 hover:border-slate-800 transition-all duration-200" 
                          onClick={() => handleProjectClick(project)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 border border-slate-100 px-1.5 py-0.5 rounded">
                                  {project.context || 'Personal'}
                                </span>
                                <ArrowRight size={16} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                            </div>
                            
                            <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                              {project.title}
                            </h3>
                            
                            <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded-sm border border-slate-100 font-medium">
                                      #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 4. Research / Publications View
    if (viewState === ViewState.RESEARCH) {
        return (
            <div className="flex-1 p-6 lg:p-12 animate-fadeIn max-w-3xl w-full">
                <h2 className="text-3xl font-serif text-slate-900 mb-8 border-b border-slate-200 pb-4">Publications</h2>
                <div className="space-y-8">
                    {PUBLICATIONS.map(pub => (
                      <div key={pub.id} className="block">
                        <div className="text-sm font-mono text-slate-400 mb-1">{pub.venue}</div>
                        <h3 className="text-lg font-serif font-medium text-slate-900 mb-1">{pub.title}</h3>
                        <p className="text-sm text-slate-600 mb-2">{pub.authors}</p>
                        <div className="flex gap-3 text-xs">
                             {pub.linkPdf && (
                               <a href={pub.linkPdf} className="flex items-center gap-1 text-slate-500 hover:text-black hover:underline"><FileText size={12}/> PDF</a>
                             )}
                             {pub.linkCode && (
                               <a href={pub.linkCode} className="flex items-center gap-1 text-slate-500 hover:text-black hover:underline"><Github size={12}/> Code</a>
                             )}
                        </div>
                      </div>
                    ))}
                    {PUBLICATIONS.length === 0 && (
                      <p className="text-slate-500 italic">No publications listed yet.</p>
                    )}
                </div>
            </div>
        );
    }
    
    // 5. Blog View
    if (viewState === ViewState.BLOG_LIST) {
         return (
            <div className="flex-1 p-6 lg:p-12 animate-fadeIn max-w-3xl w-full">
                <h2 className="text-3xl font-serif text-slate-900 mb-8 border-b border-slate-200 pb-4">Writing</h2>
                <div className="space-y-8">
                   {BLOG_POSTS.map((post) => (
                       <a 
                         key={post.id} 
                         href={post.link}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="group cursor-pointer block"
                       >
                           <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                             <span>{post.date}</span>
                             {post.link && <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                           </div>
                           <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:underline">{post.title}</h3>
                           <p className="text-sm text-slate-600 leading-relaxed">
                               {post.excerpt}
                           </p>
                       </a>
                   ))}
                   {BLOG_POSTS.length === 0 && (
                      <p className="text-slate-500 italic">No blog posts yet.</p>
                   )}
                </div>
            </div>
         );
    }

    // Default: Home / Overview View
    return (
      <div className="flex-1 p-6 lg:p-12 animate-fadeIn flex flex-col gap-16 max-w-3xl w-full">
         
         {/* Section: About Me */}
         <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-6">About</h2>
            <div className="prose prose-slate prose-lg">
              <p className="font-serif text-xl leading-relaxed text-slate-800">
                {MY_BIO}
              </p>
              <p className="text-base text-slate-600">
                {CURRENT_FOCUS}
              </p>
            </div>
            {/* Research Interests section removed */}
         </section>

         {/* Section: Active Problems (New) */}
         <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-6">Active Research Questions</h2>
            <div className="space-y-8">
               {RESEARCH_PROBLEMS.map((problem, idx) => (
                 <div key={problem.id} className="flex gap-4 group">
                    <span className="font-mono text-slate-300 text-sm pt-1">0{idx + 1}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-serif font-medium text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {problem.question}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {problem.context}
                      </p>
                    </div>
                 </div>
               ))}
            </div>
         </section>

         {/* Section: Project Gallery */}
         <section>
           <ProjectSlider 
             projects={PROJECTS} 
             onProjectClick={handleProjectClick} 
           />
         </section>

      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Layout Container: 3 Columns with Symmetrical Sidebars */}
      <div className="flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto">
        
        {/* Left Column: Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-0 lg:h-screen z-10 bg-white">
           <Sidebar currentView={viewState} onNavigate={handleNavigation} />
        </aside>

        {/* Center Column: Main Content */}
        <main className="flex-1 w-full flex flex-col min-h-screen">
           {renderCenterContent()}
        </main>

        {/* Right Column: RSS Feed (Same width as Left Sidebar, fixed padding) */}
        <aside className="hidden xl:flex w-72 shrink-0 sticky top-0 h-screen border-l border-slate-200 bg-slate-50/30 flex-col p-8 overflow-y-auto">
           <RssFeed />
        </aside>
        
        {/* Mobile RSS Feed (Stacked at bottom) */}
        <div className="xl:hidden w-full p-8 border-t border-slate-200 bg-slate-50">
           <RssFeed />
        </div>

      </div>

      {/* Popup Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onViewFull={handleViewFull}
      />
    </div>
  );
};

export default App;