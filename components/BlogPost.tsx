import React from 'react';
import { BlogPost as BlogPostType } from '../types';
import { ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
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
        </header>

        {/* Content Rendering (Simulated Markdown) */}
        <div className="whitespace-pre-line text-slate-800">
          {post.content?.split('\n').map((paragraph, idx) => {
             if (paragraph.startsWith('# ')) return <h1 key={idx} className="text-3xl font-bold font-serif mt-8 mb-4">{paragraph.replace('# ', '')}</h1>
             if (paragraph.startsWith('## ')) return <h2 key={idx} className="text-2xl font-bold font-serif mt-6 mb-3">{paragraph.replace('## ', '')}</h2>
             if (paragraph.startsWith('* ')) return <li key={idx} className="ml-4">{paragraph.replace('* ', '')}</li>
             return <p key={idx} className="mb-4">{paragraph}</p>
          })}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
