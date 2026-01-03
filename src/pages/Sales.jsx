const Sales = () => {
    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">

            {/* --- HUD HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative overflow-hidden p-2">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex gap-1">
                            <div className="w-1 h-4 bg-green-500 rounded-full animate-bounce"></div>
                            <div className="w-1 h-4 bg-green-500/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Revenue Intake Node</span>
                    </div>
                    <h1 className="text-6xl font-[950] text-slate-900 tracking-tighter leading-none uppercase">
                        Record <span className="text-indigo-600 italic">Sales</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-4 text-lg max-w-lg">Initialize a new capital transmission into the central mainframe registry.</p>
                </div>

                <div className="hidden lg:flex items-center gap-6 bg-slate-50 p-6 rounded-[32px] border border-slate-100 relative z-10">
                    <div className="text-right">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Inflow Status</p>
                        <p className="text-sm font-black text-green-600 uppercase">Operational</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-green-500 shadow-sm border border-slate-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </div>
                </div>
            </div>

            {/* --- MAIN INTERFACE MODULE --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* FORM MODULE */}
                <div className="lg:col-span-2 relative group">
                    {/* Futuristic Corner Accents */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-slate-100 group-focus-within:border-indigo-500 transition-colors duration-500"></div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-slate-100 group-focus-within:border-indigo-500 transition-colors duration-500"></div>

                    <div className="bg-white rounded-[48px] border border-slate-100 p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] relative z-10 transition-all duration-700 group-focus-within:shadow-[0_40px_100px_-20px_rgba(79,70,229,0.1)]">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Field: Client */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between px-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Source Identity</label>
                                    <span className="text-[8px] font-black text-indigo-400">#REQ_ID</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="CLIENT NAME / ID"
                                        className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all placeholder:text-slate-300 placeholder:font-black placeholder:uppercase placeholder:tracking-widest"
                                    />
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Field: Amount */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between px-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Transmission Volume</label>
                                    <span className="text-[8px] font-black text-green-400">VALUE_IN_INR</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-lg font-black outline-none focus:bg-white focus:border-indigo-600 transition-all placeholder:text-slate-300"
                                    />
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-black text-xs">₹</div>
                                </div>
                            </div>

                            {/* Field: Category */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Exchange Protocol</label>
                                <div className="relative group/sel">
                                    <select className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all appearance-none cursor-pointer uppercase tracking-widest text-[11px]">
                                        <option>Standard Product Node</option>
                                        <option>SaaS License Key</option>
                                        <option>Consultation Stream</option>
                                        <option>Hardware Exchange</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within/sel:rotate-180 transition-transform">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Field: Date */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Sync Timestamp</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        defaultValue={new Date().toISOString().split('T')[0]}
                                        className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Field: Notes */}
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Transmission Metadata</label>
                                <textarea
                                    rows="4"
                                    placeholder="ADDITIONAL CONTEXT FOR THE NEURAL HUB..."
                                    className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[32px] px-8 py-6 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all resize-none placeholder:text-slate-300 placeholder:font-black placeholder:uppercase placeholder:tracking-widest"
                                ></textarea>
                            </div>

                            {/* Submit Action */}
                            <div className="md:col-span-2 pt-6">
                                <button className="w-full py-6 bg-slate-950 text-white rounded-[32px] font-[900] text-sm md:text-base uppercase tracking-[0.5em] shadow-2xl shadow-indigo-200 hover:bg-indigo-600 transition-all active:scale-[0.98] group flex items-center justify-center gap-4 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                                    AUTHORIZE TRANSMISSION
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
                    {/* Summary Node */}
                    <div className="bg-slate-950 rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 blur-[80px] -mr-24 -mt-24"></div>
                        <h3 className="text-lg font-black uppercase tracking-tighter mb-8">Node Audit</h3>
                        <div className="space-y-8">
                            <div className="flex justify-between items-center px-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verification Status</span>
                                <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">Secured</span>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bandwidth Load</span>
                                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-indigo-500"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-10 border-t border-white/5">
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Notice:</p>
                            <p className="text-xs text-slate-300 font-medium leading-relaxed uppercase tracking-tighter italic">"Ensure all client references match the central database to avoid sync conflicts."</p>
                        </div>
                    </div>

                    {/* Quick Stats Node */}
                    <div className="bg-indigo-50/50 rounded-[48px] p-10 border border-indigo-100">
                        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">Daily Quota</p>
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-black text-slate-900 tracking-tighter">₹82,400</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-1 mb-1">Processed</span>
                        </div>
                        <div className="mt-8 flex gap-1">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className={`h-8 flex-1 rounded-md ${i < 8 ? 'bg-indigo-400' : 'bg-indigo-100'}`}></div>
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
        </div>
    );
};

export default Sales;
