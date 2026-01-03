const Issues = () => {
    const issues = [
        {
            title: 'ANOMALOUS POWER SURGE',
            id: 'ERR_PWR_402',
            description: 'Utility expenditure spiked by 42%. No correlated increase in production data detected in current node cluster. Internal hardware overheat warning is active.',
            severity: 'CRITICAL',
            status: 'TERMINATED',
            timestamp: '02h 45m',
            intel: 'High Risk'
        },
        {
            title: 'RETENTION NODE DECAY',
            id: 'ERR_CLI_912',
            description: 'Repeat client interaction dropped to 15%. Neural follow-up protocols are underperforming expectations. Regional sales node North-G has lost its velocity.',
            severity: 'WARNING',
            status: 'THROTTLED',
            timestamp: '05h 12m',
            intel: 'Medium Decay'
        },
        {
            title: 'CAPITAL OVERFLOW: ASSETS',
            id: 'OPT_INV_012',
            description: 'Excess "Item Node Alpha" stockpiled. ₹25,000 currently locked in non-liquid storage state. Recommend immediate liquidation or repurpose cycle.',
            severity: 'OPTIMIZE',
            status: 'STABLE',
            timestamp: '1d 04h',
            intel: 'Efficiency Gap'
        }
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-right-10 duration-1000">
            {/* HUD Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-4 px-2">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex gap-1">
                            <span className="w-1 h-3 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="w-1 h-3 bg-indigo-500 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                            <span className="w-1 h-3 bg-orange-500 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Anomaly Guardian Protocol</span>
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        Detection <span className="text-red-600 italic underline decoration-slate-200 decoration-4 underline-offset-8">Feed</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-4 max-w-xl">Live scan of business vulnerabilities, structural leaks, and neural performance gaps.</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-14 px-8 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-red-500 transition-all shadow-sm">
                        Refresh Feed
                    </button>
                    <button className="h-14 px-8 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-red-500/10">
                        Clear Nominal
                    </button>
                </div>
            </div>

            {/* Futuristic Anomaly Feed */}
            <div className="space-y-8">
                {issues.map((issue, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-white/40 backdrop-blur-3xl rounded-[48px] border border-white p-1 md:p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
                    >
                        <div className="bg-white rounded-[44px] p-8 md:p-12 relative overflow-hidden">

                            {/* Internal Severity Background Glow */}
                            <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity -mr-20 -mt-20 ${issue.severity === 'CRITICAL' ? 'bg-red-500' :
                                    issue.severity === 'WARNING' ? 'bg-orange-500' : 'bg-indigo-500'
                                }`}></div>

                            <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                                {/* Status Node */}
                                <div className="flex flex-col gap-6 shrink-0 lg:w-48">
                                    <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-500 ${issue.severity === 'CRITICAL' ? 'bg-red-50 border-red-100 text-red-600' :
                                            issue.severity === 'WARNING' ? 'bg-orange-50 border-orange-100 text-orange-600' :
                                                'bg-indigo-50 border-indigo-100 text-indigo-600'
                                        }`}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Stored</p>
                                        <p className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase">{issue.id}</p>
                                    </div>
                                    <div className="mt-auto hidden lg:block">
                                        <span className={`text-[9px] font-black px-3 py-1.5 rounded-xl border-2 ${issue.severity === 'CRITICAL' ? 'bg-red-50 border-red-100 text-red-600' :
                                                issue.severity === 'WARNING' ? 'bg-orange-50 border-orange-100 text-orange-600' :
                                                    'bg-indigo-50 border-indigo-100 text-indigo-600'
                                            }`}>
                                            {issue.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Divider Line (Desktop) */}
                                <div className="hidden lg:block w-[1px] bg-slate-100 h-auto self-stretch"></div>

                                {/* Content Node */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:tracking-normal transition-all duration-500">{issue.title}</h3>
                                            <span className={`w-2 h-2 rounded-full animate-ping ${issue.severity === 'CRITICAL' ? 'bg-red-500' :
                                                    issue.severity === 'WARNING' ? 'bg-orange-500' : 'bg-indigo-500'
                                                }`}></span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="px-3 py-1 bg-slate-50 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none flex items-center">{issue.intel}</span>
                                            <span className="px-3 py-1 bg-slate-50 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none flex items-center underline decoration-indigo-200">{issue.timestamp}</span>
                                        </div>
                                    </div>

                                    <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-3xl mb-10">
                                        {issue.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                                        <button className={`flex-1 md:flex-none h-14 px-8 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${issue.severity === 'CRITICAL' ? 'bg-red-600 text-white shadow-xl shadow-red-100 hover:bg-red-700' :
                                                issue.severity === 'WARNING' ? 'bg-orange-500 text-white shadow-xl shadow-orange-100 hover:bg-orange-600' :
                                                    'bg-indigo-600 text-white shadow-xl shadow-indigo-100 hover:bg-indigo-700'
                                            }`}>
                                            INITIALIZE RECOVERY
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="m12 19 9 2-9-18-9 18 9-2ZM12 19v-7" /></svg>
                                        </button>
                                        <button className="flex-1 md:flex-none h-14 px-8 bg-slate-50 text-slate-600 rounded-2xl font-black text-[10px] uppercase tracking-[.3em] hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200">
                                            LOG TO ANALYTICS
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Tech-Pattern Decoration */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] pointer-events-none rotate-12">
                                <svg width="100%" height="100%" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M50 10v80M10 50h80" stroke="currentColor" strokeWidth="2" /></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Global Meta Footer */}
            <div className="pt-12 flex items-center justify-between border-t border-slate-100 px-4">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Shield Protocol: v4.1 Active</span>
                </div>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Core Anomaly detection cluster online</p>
            </div>
        </div>
    );
};

export default Issues;
