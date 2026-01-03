import { useState, useRef, useEffect } from 'react';

const Copilot = () => {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Neural Link Established. Chief Executive, I have synchronized with the latest business nodes. Utility expense anomaly detected (+42%)—shall we run a full diagnostic sweep or initiate capital recovery protocols?',
            timestamp: 'SYSTEM READY 0.01ms'
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input, timestamp: new Date().toLocaleTimeString([], { hour12: false }) };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Mock AI Intelligence Sequence
        setTimeout(() => {
            setIsTyping(false);
            const aiResponse = {
                role: 'assistant',
                content: 'Observation: Operating expenses for Node Utilities have spiked for 3 consecutive cycles. Neural analysis suggests hardware inefficiency at Node Cluster 4. Recommendation: Reroute auxiliary power or replace thermal management hardware. Estimated ROI: 14.5% margin recovery within 12 days.',
                timestamp: 'AI ANALYZED'
            };
            setMessages((prev) => [...prev, aiResponse]);
        }, 1800);
    };

    const suggestions = [
        "Analyze Profit Dip",
        "Scan Anomaly Feed",
        "Efficiency Audit",
        "Revenue Projection"
    ];

    return (
        <div className="max-w-6xl mx-auto h-[calc(100vh-140px)] flex flex-col bg-white border border-slate-100 rounded-[56px] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.08)] overflow-hidden relative">

            {/* --- Immersive Background Overlay --- */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6366f1 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[120px] -mr-40 -mt-40 opacity-40"></div>

            {/* --- HUD Technical Header --- */}
            <div className="p-10 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between bg-slate-50/30 backdrop-blur-xl relative z-10">
                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-indigo-500/10 blur-2xl rounded-full animate-pulse group-hover:bg-indigo-500/20 transition-all"></div>
                        <div className="w-16 h-16 rounded-3xl bg-slate-900 flex items-center justify-center text-white shadow-2xl relative group-hover:rotate-6 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="stroke-indigo-400"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-[900] text-indigo-600 uppercase tracking-[0.4em]">Neural Link Established</span>
                        </div>
                        <h2 className="text-3xl font-[950] text-slate-900 tracking-tighter uppercase italic">Neural <span className="text-indigo-600">Copilot</span></h2>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-10 mt-6 md:mt-0">
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Memory Sync</span>
                        <span className="text-sm font-black text-slate-900">99.8% COMPLETED</span>
                    </div>
                    <div className="w-[1px] h-10 bg-slate-100"></div>
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Processing Node</span>
                        <span className="text-sm font-black text-indigo-600 uppercase">Cluster-Alpha</span>
                    </div>
                </div>
            </div>

            {/* --- Messages Stream --- */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 scroll-smooth bg-transparent relative z-10 custom-scrollbar">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-700`}
                    >
                        <div className={`max-w-[90%] md:max-w-[75%] group ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>

                            <div className={`flex items-center gap-3 mb-3 px-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-[10px] ${msg.role === 'user' ? 'bg-slate-100 text-slate-900' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                                    }`}>
                                    {msg.role === 'user' ? 'CE' : 'AI'}
                                </div>
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{msg.timestamp}</span>
                            </div>

                            <div className={`p-8 rounded-[40px] text-base md:text-lg font-medium leading-relaxed border transition-all duration-500 ${msg.role === 'user'
                                ? 'bg-slate-950 text-white border-slate-900 rounded-tr-none shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]'
                                : 'bg-white text-slate-800 border-slate-100 rounded-tl-none shadow-[0_15px_30px_-10px_rgba(0,0,0,0.03)] group-hover:border-indigo-100'
                                }`}>
                                {msg.content}
                            </div>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start animate-in fade-in duration-300">
                        <div className="p-8 bg-indigo-50/50 border border-indigo-100 rounded-[40px] rounded-tl-none flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest animate-pulse">Neural transmission in progress</span>
                        </div>
                    </div>
                )}
            </div>

            {/* --- Suggestions & Interaction Layer --- */}
            <div className="px-10 pb-4 flex flex-wrap gap-3 relative z-10">
                {suggestions.map((text, i) => (
                    <button
                        key={i}
                        onClick={() => { setInput(text); }}
                        className="px-5 py-2.5 bg-white border border-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/5 transition-all"
                    >
                        {text}
                    </button>
                ))}
            </div>

            {/* --- Command Entrance Terminal --- */}
            <div className="p-10 md:p-12 border-t border-slate-50 bg-slate-50/50 relative z-10">
                <div className="relative group">
                    {/* Futuristic Input Corner Decor */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-100 group-focus-within:border-indigo-500 transition-colors"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-indigo-100 group-focus-within:border-indigo-500 transition-colors"></div>

                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="TYPE COMMAND TO NEURAL HUB..."
                        className="w-full pl-10 pr-40 py-6 rounded-[32px] bg-white border-2 border-transparent shadow-[0_15px_45px_-10px_rgba(0,0,0,0.05)] focus:outline-none focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300 placeholder:font-black placeholder:uppercase placeholder:tracking-[0.3em] placeholder:text-[11px]"
                    />

                    <button
                        onClick={handleSend}
                        disabled={isTyping}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-950 text-white px-8 py-4 rounded-[24px] hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-95 flex items-center gap-3 group/btn disabled:opacity-50"
                    >
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] hidden sm:block">Transmit</span>
                        <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="m12 19 9 2-9-18-9 18 9-2ZM12 19v-7" /></svg>
                        </div>
                    </button>
                </div>

                <div className="flex items-center justify-between mt-6 px-4">
                    <div className="flex items-center gap-3">
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Neural Link: SECURE</span>
                        <div className="w-[1px] h-3 bg-slate-200"></div>
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Latency: 0.04ms</span>
                    </div>
                    <p className="text-[9px] font-black text-indigo-500 uppercase tracking-widest italic cursor-pointer hover:underline">Full Neural Logs →</p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #6366f1; }
      `}} />
        </div>
    );
};

export default Copilot;
