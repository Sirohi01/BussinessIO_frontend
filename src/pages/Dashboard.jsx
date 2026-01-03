const Dashboard = () => {
    const stats = [
        { label: 'Revenue Growth', value: '₹1,24,500', trend: '+12.4%', sub: 'Real-time Sales' },
        { label: 'Burn Rate', value: '₹45,200', trend: '-2.1%', sub: 'Operating Expense' },
        { label: 'Net Efficiency', value: '84.2%', trend: '+5.8%', sub: 'Performance Index' },
        { label: 'Staff Node', value: '12', trend: 'Active', sub: 'Resource Count' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* HUD Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Business Intelligence Node</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
                        Welcome, <span className="text-indigo-600">Chief Executive</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">System status: All parameters nominal. Analyzing nodes...</p>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl px-6 py-3 shadow-sm flex items-center gap-6">
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Scan</p>
                        <p className="text-sm font-bold text-slate-900">100% Complete</p>
                    </div>
                    <div className="text-center border-l border-slate-100 pl-6">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Anomalies</p>
                        <p className="text-sm font-bold text-red-500">2 Detected</p>
                    </div>
                </div>
            </div>

            {/* Futuristic Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white/60 backdrop-blur-xl p-8 rounded-[32px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-5px_rgba(79,70,229,0.1)] transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full blur-3xl -translate-x-[-50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                        <h3 className="text-3xl font-black text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors uppercase tracking-tighter">
                            {stat.value}
                        </h3>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                            <span className="text-xs font-bold text-slate-400">{stat.sub}</span>
                            <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                                }`}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hero AI Advice Section */}
            <div className="relative group overflow-hidden rounded-[40px] bg-slate-900 p-10 text-white shadow-2xl shadow-indigo-100">
                <div className="absolute top-0 right-0 w-[400px] h-full bg-indigo-600/20 blur-[100px] -mr-40 pointer-events-none"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full backdrop-blur-md mb-6 border border-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-indigo-400"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /></svg>
                            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Neural Advisor Active</span>
                        </div>
                        <h2 className="text-4xl font-black tracking-tighter mb-4 leading-tight">
                            Anomalous Expense Detected <br /> in <span className="text-indigo-400 italic">Utilities Hub</span>.
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-lg font-medium leading-relaxed">
                            "Your energy expenditure has spiked by 42% in the last 72 hours. This does not correlate with production output. Highly recommend investigating the Main Terminal hardware."
                        </p>
                        <button className="bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-indigo-500/20 active:scale-95">
                            Open Advisor Hub
                        </button>
                    </div>
                    <div className="hidden lg:flex justify-center relative">
                        {/* Visual HUD Representation */}
                        <div className="w-64 h-64 border-2 border-white/5 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                            <div className="w-48 h-48 border-2 border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" className="stroke-indigo-400" strokeWidth="1.5"><path d="M12 3v19" /><path d="M5 8v8" /><path d="M19 10v4" /><path d="M8 5v14" /><path d="M16 8v8" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub-grid: Analytics & Operations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
                <div className="lg:col-span-2 bg-white rounded-[40px] border border-slate-100 p-8 md:p-10">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Recent Transmissions</h3>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sales & Revenue Stream</p>
                        </div>
                        <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Full Audit →</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all cursor-default group overflow-hidden">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-sm font-black text-slate-400 uppercase group-hover:text-indigo-600 transition-colors">
                                        TX{i}
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="font-bold text-slate-900 truncate uppercase tracking-tight">Mainframe Client #{124 + i}</p>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol: Digital Exchange</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-slate-900 tracking-tight">₹{(2450 * i).toLocaleString()}</p>
                                    <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">Status: Sync</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-10 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-8">Pending Protocols</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-xs font-black text-orange-900 uppercase tracking-tight">Inventory Low-Alert</p>
                                        <p className="text-[10px] text-orange-700/80 font-medium leading-relaxed mt-1">Stock of "Neural Core X" below 10%.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-xs font-black text-indigo-900 uppercase tracking-tight">Staff Node Sync</p>
                                        <p className="text-[10px] text-indigo-700/80 font-medium leading-relaxed mt-1">Review quarterly performance nodes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="mt-8 w-full py-4 bg-slate-100/50 hover:bg-slate-100 text-slate-600 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all">
                            Initialize Full Protocol
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
