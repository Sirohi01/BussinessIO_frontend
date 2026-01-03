const Expenses = () => {
    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">

            {/* --- HUD HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative overflow-hidden p-2">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex gap-1">
                            <div className="w-1 h-4 bg-orange-500 rounded-full animate-bounce"></div>
                            <div className="w-1 h-4 bg-orange-500/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Resource Outflow Node</span>
                    </div>
                    <h1 className="text-6xl font-[950] text-slate-900 tracking-tighter leading-none uppercase">
                        Record <span className="text-orange-600 italic">Expense</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-4 text-lg max-w-lg">Log operational burn and external capital flow into the monitoring cluster.</p>
                </div>

                <div className="hidden lg:flex items-center gap-6 bg-slate-50 p-6 rounded-[32px] border border-slate-100 relative z-10">
                    <div className="text-right">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Outflow Health</p>
                        <p className="text-sm font-black text-orange-600 uppercase">Monitored</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-orange-500 shadow-sm border border-slate-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                </div>
            </div>

            {/* --- MAIN INTERFACE MODULE --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* FORM MODULE */}
                <div className="lg:col-span-2 relative group">
                    {/* Futuristic Corner Accents */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-slate-100 group-focus-within:border-orange-500 transition-colors duration-500"></div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-slate-100 group-focus-within:border-orange-500 transition-colors duration-500"></div>

                    <div className="bg-white rounded-[48px] border border-slate-100 p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] relative z-10 transition-all duration-700 group-focus-within:shadow-[0_40px_100px_-20px_rgba(249,115,22,0.1)]">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Field: Vendor */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between px-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">System Recipient</label>
                                    <span className="text-[8px] font-black text-orange-400">#VENDOR_TAG</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="VENDOR / ENTITY"
                                        className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-orange-600 transition-all placeholder:text-slate-300 placeholder:font-black placeholder:uppercase placeholder:tracking-widest"
                                    />
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Field: Amount */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between px-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Outflow Magnitude</label>
                                    <span className="text-[8px] font-black text-red-400">BURN_IN_INR</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-lg font-black outline-none focus:bg-white focus:border-orange-600 transition-all placeholder:text-slate-300"
                                    />
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-black text-xs">₹</div>
                                </div>
                            </div>

                            {/* Field: Category */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Allocation Protocol</label>
                                <div className="relative group/sel">
                                    <select className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-orange-600 transition-all appearance-none cursor-pointer uppercase tracking-widest text-[11px]">
                                        <option>Infrastructure / Cloud</option>
                                        <option>Human Resource / Salary</option>
                                        <option>Growth / Marketing</option>
                                        <option>Operational Utility</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within/sel:rotate-180 transition-transform">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Field: Date */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Event Timestamp</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        defaultValue={new Date().toISOString().split('T')[0]}
                                        className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-orange-600 transition-all cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Field: Notes */}
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Transmission Justification</label>
                                <textarea
                                    rows="4"
                                    placeholder="EXECUTIVE SUMMARY FOR THIS RESOURCE FLOW..."
                                    className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[32px] px-8 py-6 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-orange-600 transition-all resize-none placeholder:text-slate-300 placeholder:font-black placeholder:uppercase placeholder:tracking-widest"
                                ></textarea>
                            </div>

                            {/* Submit Action */}
                            <div className="md:col-span-2 pt-6">
                                <button className="w-full py-6 bg-slate-950 text-white rounded-[32px] font-[900] text-sm md:text-base uppercase tracking-[0.5em] shadow-2xl shadow-orange-200 hover:bg-orange-600 transition-all active:scale-[0.98] group flex items-center justify-center gap-4 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                                    AUTHORIZE OUTFLOW
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* SIDEBAR INTELLIGENCE */}
                <div className="space-y-8">
                    {/* Budget Node */}
                    <div className="bg-slate-950 rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 blur-[80px] -mr-24 -mt-24"></div>
                        <h3 className="text-lg font-black uppercase tracking-tighter mb-8">Outflow Audit</h3>
                        <div className="space-y-8">
                            <div className="flex justify-between items-center px-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance Status</span>
                                <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Verified</span>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency Rating</span>
                                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="w-[74%] h-full bg-orange-500"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-10 border-t border-white/5">
                            <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-2">Policy Check:</p>
                            <p className="text-xs text-slate-300 font-medium leading-relaxed uppercase tracking-tighter italic">"Ensure all hardware acquisitions are logged under Infrastructure Node Cluster 4."</p>
                        </div>
                    </div>

                    {/* Monthly Burn Node */}
                    <div className="bg-orange-50/50 rounded-[48px] p-10 border border-orange-100">
                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-6">Monthly Burn</p>
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-black text-slate-900 tracking-tighter">₹1,12,000</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-1 mb-1">Total Burn</span>
                        </div>
                        <div className="mt-8 flex gap-1">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className={`h-8 flex-1 rounded-md ${i < 4 ? 'bg-orange-400' : 'bg-orange-100'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}} />

            {/* --- RECENT OUTFLOW FEED --- */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <h3 className="text-sm font-[900] text-slate-900 uppercase tracking-[0.3em]">Recent Outflow Feed</h3>
                    </div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Showing last 4 transmissions</span>
                </div>

                <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-slate-50">
                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Node Reference</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Magnitude</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[
                                { ref: 'UTILITY_POWER_SURGE', category: 'Infrastructure', amount: '₹14,200', status: 'Secured', id: 'TXN_4021' },
                                { ref: 'OFFICE_NODE_RENT', category: 'Operational', amount: '₹45,000', status: 'Secured', id: 'TXN_4022' },
                                { ref: 'CLOUD_STORAGE_HUB', category: 'Infrastructure', amount: '₹8,500', status: 'Pending', id: 'TXN_4023' },
                            ].map((row, i) => (
                                <tr key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer text-sm">
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col">
                                            <span className="font-black text-slate-900 uppercase tracking-tight">{row.ref}</span>
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">ID: {row.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 uppercase font-black text-slate-400 text-[10px] tracking-widest">{row.category}</td>
                                    <td className="px-8 py-6 text-right font-black text-slate-900">{row.amount}</td>
                                    <td className="px-8 py-6 text-center">
                                        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${row.status === 'Secured' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600 animate-pulse'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="bg-slate-50 px-8 py-4 flex justify-center">
                        <button className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Load Full Transmission History →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expenses;

