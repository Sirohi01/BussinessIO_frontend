const Reports = () => {
    const reports = [
        {
            title: 'Monthly Velocity Audit',
            date: 'January 2026',
            type: 'Archive-Full',
            id: 'REP_V701',
            size: '4.2 MB',
            integrity: 'Verified'
        },
        {
            title: 'Resource Efficiency Node',
            date: 'Q4 Summary 2025',
            type: 'Archive-Lite',
            id: 'REP_E204',
            size: '1.8 MB',
            integrity: 'Verified'
        },
        {
            title: 'Market Sentiment Scan',
            date: 'December 2025',
            type: 'Neural-Analysis',
            id: 'REP_AI_09',
            size: '12.4 MB',
            integrity: 'Verified'
        },
        {
            title: 'Taxation Compliance Node',
            date: 'FY 2025 Cycle',
            type: 'Compliance',
            id: 'REP_TAX_88',
            size: '8.1 MB',
            integrity: 'Pending'
        }
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">

            {/* --- HUD HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-4 px-2 relative z-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-4 bg-slate-900 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-4 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Documentation Archive Node</span>
                    </div>
                    <h1 className="text-6xl font-[950] text-slate-900 tracking-tighter uppercase leading-none">
                        Business <span className="text-indigo-600 italic underline decoration-slate-200 decoration-4 underline-offset-8">Reports</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-6 text-lg max-w-xl">Access detailed archival documentation, AI-generated technical summaries, and business velocity audits.</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-10 bg-white border-2 border-slate-100 rounded-[28px] text-[10px] font-black uppercase tracking-widest hover:border-indigo-600 transition-all shadow-sm">
                        Archive Bulk
                    </button>
                    <button className="h-16 px-10 bg-slate-950 text-white rounded-[28px] text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-500/10 active:scale-95">
                        Generate High-Level Scan
                    </button>
                </div>
            </div>

            {/* --- ARCHIVE STATS --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { l: 'Total Documentation', v: '142 GB' },
                    { l: 'Verified Integrity', v: '100%' },
                    { l: 'Last Audit Sync', v: '02h Ago' },
                    { l: 'Neural Summaries', v: '84 Active' }
                ].map((stat, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-8 rounded-[40px] flex flex-col justify-between group hover:shadow-xl hover:shadow-slate-100/40 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest relative z-10">{stat.l}</span>
                        <span className="text-xl font-black text-slate-900 mt-3 uppercase tracking-tighter relative z-10">{stat.v}</span>
                    </div>
                ))}
            </div>

            {/* --- REPORTS FEED --- */}
            <div className="grid grid-cols-1 gap-8">
                {reports.map((report, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-white rounded-[56px] border border-slate-100 p-1 md:p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
                    >
                        <div className="bg-white rounded-[52px] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">

                            {/* Internal Aura */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] opacity-0 group-hover:opacity-60 transition-opacity -mr-32 -mt-32"></div>

                            <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left flex-1">
                                {/* File Icon Module */}
                                <div className="w-20 h-24 bg-slate-50 rounded-[28px] flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm relative overflow-hidden group/icon">
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-slate-100 group-hover/icon:bg-indigo-500 transition-colors rounded-bl-xl"></div>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-center gap-3 justify-center md:justify-start mb-1">
                                            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] italic">{report.type}</span>
                                            <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest underline decoration-slate-100">{report.id}</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:text-indigo-600 transition-colors">{report.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-2">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Generated Clock</span>
                                            <span className="text-[11px] font-black text-slate-900 uppercase">{report.date}</span>
                                        </div>
                                        <div className="w-[1px] h-8 bg-slate-100 hidden md:block"></div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Encrypted Size</span>
                                            <span className="text-[11px] font-black text-slate-900 uppercase">{report.size}</span>
                                        </div>
                                        <div className="w-[1px] h-8 bg-slate-100 hidden md:block"></div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Data Scan</span>
                                            <span className={`text-[11px] font-[900] uppercase ${report.integrity === 'Verified' ? 'text-green-600' : 'text-orange-500 animate-pulse'}`}>{report.integrity}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Nodes */}
                            <div className="flex gap-4 shrink-0 transition-transform group-hover:translate-x-[-10px] duration-500">
                                <button className="h-16 px-8 bg-slate-50 text-slate-600 rounded-[24px] text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all shadow-sm flex items-center gap-3 group/btn">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                    Manifest
                                </button>
                                <button className="h-16 px-10 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-[24px] text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm flex items-center gap-3 group/btn">
                                    Open HUB
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="rotate-[-45deg] group-hover:rotate-0 transition-transform"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- ARCHIVE FOOTER --- */}
            <div className="pt-10 border-t border-slate-100 flex items-center justify-between opacity-50">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Archival nodes fully synchronized</span>
                </div>
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest italic">Node Cluster: Document-Alpha-Prime</p>
            </div>
        </div>
    );
};

export default Reports;
