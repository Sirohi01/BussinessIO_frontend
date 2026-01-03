const Alerts = () => {
    const alerts = [
        {
            type: 'critical',
            title: 'EXPENSE THRESHOLD EXCEEDED',
            body: 'Monthly burn rate has crossed ₹1,00,000. Immediate audit required for auxiliary node clusters.',
            time: '10m ago',
            id: 'SIG_ERR_901',
            node: 'Cluster-4'
        },
        {
            type: 'warning',
            title: 'SALES VELOCITY DROP',
            body: 'Regional sales node "North-1" shows a 15% drop compared to previous cycle. Predictive analysis suggests supply gap.',
            time: '2h ago',
            id: 'SIG_WRN_122',
            node: 'North-1'
        },
        {
            type: 'info',
            title: 'SYSTEM INTEGRITY CHECK',
            body: 'Neural Copilot has successfully analyzed the last 1,000 transmissions. Integrity maintained at 99.8%.',
            time: '1d ago',
            id: 'SIG_INF_001',
            node: 'Neural-Hub'
        },
        {
            type: 'warning',
            title: 'TEAM SYNC DISRUPTION',
            body: 'Multiple nodes reporting high latency in Daily Quota updates. Recommend manual synchronization.',
            time: '4d ago',
            id: 'SIG_WRN_245',
            node: 'Resource-Node'
        }
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-top-10 duration-1000 pb-20">

            {/* --- HUD HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-4 px-2 relative z-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Signal Monitoring Hub</span>
                    </div>
                    <h1 className="text-6xl font-[950] text-slate-900 tracking-tighter uppercase leading-none">
                        System <span className="text-red-600 italic underline decoration-slate-200 decoration-4 underline-offset-8">Alerts</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-6 text-lg max-w-xl">Live diagnostic feed of business signals, performance drops, and security anomalies.</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-10 bg-slate-100/50 border border-slate-200 rounded-[28px] text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
                        Mark All Read
                    </button>
                    <button className="h-16 px-10 bg-slate-950 text-white rounded-[28px] text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-red-500/10">
                        Clear Nominal Signals
                    </button>
                </div>
            </div>

            {/* --- ALERT SUMMARY NODES --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Active Signals', value: '04', color: 'text-slate-900' },
                    { label: 'Unresolved Critical', value: '01', color: 'text-red-600' },
                    { label: 'Signal Stability', value: '94%', color: 'text-indigo-600' }
                ].map((s, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-8 rounded-[40px] flex flex-col justify-between hover:shadow-xl hover:shadow-slate-100/40 transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-3xl group-hover:bg-slate-100 transition-colors"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest relative z-10">{s.label}</span>
                        <span className={`text-4xl font-black mt-4 tracking-tighter relative z-10 ${s.color}`}>{s.value}</span>
                    </div>
                ))}
            </div>

            {/* --- ALERT FEED --- */}
            <div className="space-y-6">
                {alerts.map((alert, idx) => (
                    <div
                        key={idx}
                        className={`group relative bg-white rounded-[48px] border transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden ${alert.type === 'critical' ? 'border-red-50 hover:border-red-200' :
                                alert.type === 'warning' ? 'border-orange-50 hover:border-orange-200' :
                                    'border-indigo-50 hover:border-indigo-200'
                            }`}
                    >
                        {/* Background Texture Decoration */}
                        <div className={`absolute top-0 right-0 w-64 h-64 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity -mr-32 -mt-32 ${alert.type === 'critical' ? 'bg-red-500' :
                                alert.type === 'warning' ? 'bg-orange-500' : 'bg-indigo-500'
                            }`}></div>

                        <div className="p-10 md:p-12 flex flex-col md:flex-row gap-10 items-start relative z-10">
                            {/* Status Icon Node */}
                            <div className={`shrink-0 w-20 h-20 rounded-[32px] flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-500 ${alert.type === 'critical' ? 'bg-red-50 border-red-100 text-red-600 shadow-[0_0_30px_rgba(239,68,68,0.1)]' :
                                    alert.type === 'warning' ? 'bg-orange-50 border-orange-100 text-orange-600' :
                                        'bg-indigo-50 border-indigo-100 text-indigo-600'
                                }`}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter group-hover:tracking-normal transition-all duration-500 ${alert.type === 'critical' ? 'text-red-900' :
                                                alert.type === 'warning' ? 'text-orange-900' :
                                                    'text-indigo-900'
                                            }`}>
                                            {alert.title}
                                        </h3>
                                        <div className={`w-2 h-2 rounded-full animate-pulse ${alert.type === 'critical' ? 'bg-red-500' :
                                                alert.type === 'warning' ? 'bg-orange-500' : 'bg-indigo-500'
                                            }`}></div>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{alert.time}</span>
                                </div>

                                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
                                    {alert.body}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                                        <span className="text-slate-300">ID:</span> {alert.id}
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                                        <span className="text-slate-300">NODE:</span> {alert.node}
                                    </div>
                                    <div className="flex-1"></div>
                                    <button className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] hover:bg-indigo-50 px-6 py-2 rounded-xl transition-all">Resolve Signal →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- META FOOTER --- */}
            <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3 opacity-50">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Signal integrity node online</span>
                </div>
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] italic">Encrypted Transmission Stream: AES-256 Enabled</p>
            </div>
        </div>
    );
};

export default Alerts;
