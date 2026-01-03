const Analytics = () => {
    const primaryStats = [
        { label: 'Revenue Velocity', value: '₹4,82,000', trend: '+18.4%', icon: '🚀' },
        { label: 'Op-Ex Efficiency', value: '₹1,12,000', trend: '-4.2%', icon: '⚡' },
        { label: 'Margin Density', value: '32.5%', trend: '+2.1%', icon: '💎' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Visual Data Processor v4.0</span>
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">
                        Growth <span className="text-indigo-600 italic">Intelligence</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-3 max-w-lg">Neural processing of revenue nodes and operational capital velocity.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-indigo-600 transition-all shadow-sm">
                        Export Node Data
                    </button>
                    <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
                        Sync Mainframe
                    </button>
                </div>
            </div>

            {/* Primary High-Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {primaryStats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group overflow-hidden relative">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-2xl">{stat.icon}</span>
                                <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                                    }`}>{stat.trend}</span>
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-1">{stat.value}</h3>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[48px] border border-slate-100 p-8 md:p-12 shadow-sm relative overflow-hidden group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Revenue Trajectory</h3>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Projection vs Actual Acquisition</p>
                        </div>
                        <div className="flex items-center p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                            {['24H', '7D', '30D', '90D'].map(t => (
                                <button key={t} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${t === '30D' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>{t}</button>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-72 w-full mt-4">
                        <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                            <line x1="0" y1="50" x2="1000" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="5,5" />
                            <line x1="0" y1="150" x2="1000" y2="150" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="5,5" />
                            <line x1="0" y1="250" x2="1000" y2="250" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="5,5" />
                            <path
                                d="M0,300 L0,220 C100,210 200,250 300,180 C400,110 500,150 600,80 C700,10 800,100 1000,50 L1000,300 Z"
                                fill="url(#gradient-indigo)"
                                className="opacity-10 group-hover:opacity-20 transition-opacity"
                            />
                            <path
                                d="M0,220 C100,210 200,250 300,180 C400,110 500,150 600,80 C700,10 800,100 1000,50"
                                fill="none"
                                stroke="#6366f1"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="drop-shadow-[0_10px_10px_rgba(99,102,241,0.3)]"
                            />
                            {[40, 200, 300, 450, 600, 850].map((x, i) => (
                                <circle key={i} cx={x} cy={220 - (i * 30)} r="6" fill="white" stroke="#6366f1" strokeWidth="3" className="hover:r-8 cursor-pointer transition-all" />
                            ))}

                            <defs>
                                <linearGradient id="gradient-indigo" x1="0%" y1="0%" x2="0%" fontVariant="100%">
                                    <stop offset="0%" stopColor="#6366f1" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent w-20 animate-[shimmer_3s_infinite] pointer-events-none"></div>
                    </div>

                    <div className="flex justify-between items-center mt-10">
                        <div className="flex gap-8">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Inflow Peak</span>
                                <span className="text-lg font-black text-slate-900 tracking-tighter uppercase">₹12,400</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Avg Pulse</span>
                                <span className="text-lg font-black text-slate-900 tracking-tighter uppercase">₹8,100</span>
                            </div>
                        </div>
                        <p className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl uppercase tracking-widest">Anomaly Scan: Clean</p>
                    </div>
                </div>
                <div className="bg-slate-950 rounded-[48px] p-8 md:p-12 text-white shadow-2xl shadow-indigo-100 flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/30 blur-[100px] -mr-32 -mb-32"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 2v10l4.5 4.5" /><circle cx="12" cy="12" r="10" /></svg>
                            </div>
                            <h3 className="text-lg font-black uppercase tracking-tighter">Velocity Lock</h3>
                        </div>
                        <div className="relative flex items-center justify-center mb-10">
                            <svg className="w-48 h-48 transform -rotate-90">
                                <circle cx="96" cy="96" r="80" stroke="rgba(255,255,255,0.05)" strokeWidth="16" fill="transparent" />
                                <circle cx="96" cy="96" r="80" stroke="#6366f1" strokeWidth="16" fill="transparent" strokeDasharray="502.4" strokeDashoffset="120" strokeLinecap="round" className="animate-[loading_2s_ease-out]" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-black tracking-tighter">84%</span>
                                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mt-1">Current Sync</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex justify-between items-center group hover:bg-white/10 transition-all">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Inventory Node</span>
                                <span className="text-sm font-black text-green-400">Optimal</span>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex justify-between items-center group hover:bg-white/10 transition-all">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Team Resource</span>
                                <span className="text-sm font-black text-indigo-400">92/100</span>
                            </div>
                        </div>
                    </div>

                    <button className="relative z-10 w-full py-4 mt-10 bg-white text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-400 hover:text-white transition-all">
                        Initialize Full Diagnostic
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes loading {
            from { stroke-dashoffset: 502.4; }
            to { stroke-dashoffset: 120; }
            }
            @keyframes shimmer {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateX(1000%); opacity: 0; }
            }
        `}} />
        </div>
    );
};

export default Analytics;
