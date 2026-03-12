import React, { useState } from 'react';
import { Search, Send, Loader2, ExternalLink, Bot } from 'lucide-react';
import { askResearchAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIAssistantProps {
  context?: string;
  placeholder?: string;
  className?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ 
  context, 
  placeholder = "Ask a research question...",
  className = "" 
}) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await askResearchAssistant(userMsg.text, context);
      
      const aiMsg: ChatMessage = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: response.text,
        sources: response.sources
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-700">
           <div className="bg-purple-100 p-1.5 rounded-md text-purple-600">
             <Bot size={18} />
           </div>
           <span className="font-semibold text-sm">Research Assistant</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400">
           <Search size={12} />
           <span>Google Search Grounding</span>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 bg-slate-50/30 max-h-[400px] overflow-y-auto space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-8 text-slate-400 text-sm">
            <p>I can help answer questions using Google Search.</p>
            <p className="mt-1">Try asking: "What are the latest trends in HCI?"</p>
          </div>
        )}
        
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
            }`}>
              <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              
              {/* Sources */}
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Sources</p>
                  <div className="flex flex-col gap-1.5">
                    {msg.sources.map((source, idx) => (
                      <a 
                        key={idx} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 hover:underline truncate"
                      >
                         <span className="w-4 h-4 flex-shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-[9px] font-bold text-blue-500 border border-blue-100">
                           {idx + 1}
                         </span>
                         <span className="truncate">{source.title}</span>
                         <ExternalLink size={10} className="flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                   <Loader2 size={16} className="animate-spin" />
                   <span>Researching...</span>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSearch} className="p-3 border-t border-slate-100 bg-white">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
          />
          <button 
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIAssistant;