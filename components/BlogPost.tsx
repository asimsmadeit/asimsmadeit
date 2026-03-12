import React, { useState } from 'react';
import { BlogPost as BlogPostType } from '../types';
import { ArrowLeft, Sparkles, X } from 'lucide-react';
import { summarizeContent } from '../services/geminiService';
import AIAssistant from './AIAssistant';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);

  const handleSummarize = async () => {
    setLoadingSummary(true);
    const result = await summarizeContent(post.content);
    setSummary(result);
    setLoadingSummary(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-medium"
      >
        <ArrowLeft size={16} className="mr-1" /> Back to Blog
      </button>

      <article className="prose prose-slate prose-lg max-w-none mb-16">
        <header className="mb-8 not-prose">
          <div className="text-sm text-slate-400 font-medium mb-3">{post.date}</div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>
          
          {/* AI Feature: Summarization */}
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
            {!summary && !loadingSummary && (
              <button 
                onClick={handleSummarize}
                className="flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-800 transition-colors"
              >
                <Sparkles size={16} />
                Generate AI Summary
              </button>
            )}
            
            {loadingSummary && (
               <div className="flex items-center gap-2 text-sm text-slate-500 animate-pulse">
                 <Sparkles size={16} />
                 Gemini is reading...
               </div>
            )}

            {summary && (
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-wider mb-2">
                  <Sparkles size={12} />
                  TL;DR Summary
                </div>
                <p className="text-slate-700 italic text-lg leading-relaxed">{summary}</p>
                <button 
                  onClick={() => setSummary(null)}
                  className="absolute top-0 right-0 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Content Rendering (Simulated Markdown) */}
        <div className="whitespace-pre-line text-slate-800">
          {post.content.split('\n').map((paragraph, idx) => {
             // Simple naive markdown parsing for demo
             if (paragraph.startsWith('# ')) return <h1 key={idx} className="text-3xl font-bold font-serif mt-8 mb-4">{paragraph.replace('# ', '')}</h1>
             if (paragraph.startsWith('## ')) return <h2 key={idx} className="text-2xl font-bold font-serif mt-6 mb-3">{paragraph.replace('## ', '')}</h2>
             if (paragraph.startsWith('* ')) return <li key={idx} className="ml-4">{paragraph.replace('* ', '')}</li>
             return <p key={idx} className="mb-4">{paragraph}</p>
          })}
        </div>
      </article>

      {/* Grounding / Q&A Section specific to this post */}
      <div className="border-t border-slate-200 pt-10 pb-20">
         <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Deep Dive</h3>
         <p className="text-slate-600 mb-6">Have questions about this article? Use the assistant below to discuss concepts mentioned here or search for related papers.</p>
         <AIAssistant context={`Blog Post Title: ${post.title}. Content: ${post.excerpt}`} placeholder="Ask me about this article..." />
      </div>
    </div>
  );
};

export default BlogPost;