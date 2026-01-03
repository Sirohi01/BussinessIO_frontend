const Team = () => {
    const team = [
        { name: 'Sonu Kumar', role: 'Mainframe Owner', status: 'Online', id: 'USR_001', access: 'Level 10', activity: '98%' },
        { name: 'Raju Rastogi', role: 'Operations Manager', status: 'Active', id: 'USR_002', access: 'Level 7', activity: '84%' },
        { name: 'Ankit Mangla', role: 'Resource Team', status: 'Idle', id: 'USR_003', access: 'Level 4', activity: '12%' },
        { name: 'Prateek Rastogi', role: 'Infrastructure Node', status: 'Online', id: 'USR_004', access: 'Level 8', activity: '92%' },
    ];

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-right-10 duration-1000 pb-20">

            {/* --- HUD HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-4 px-2 relative z-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex gap-1">
                            <div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="w-1 h-4 bg-indigo-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Human Capital Cluster</span>
                    </div>
                    <h1 className="text-6xl font-[950] text-slate-900 tracking-tighter uppercase leading-none">
                        Team <span className="text-blue-600 italic underline decoration-slate-200 decoration-4 underline-offset-8">Nodes</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-6 text-lg max-w-xl">Manage authorized personnel, access protocols, and neural synchronization levels.</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-10 bg-white border border-slate-200 rounded-[28px] text-[10px] font-black uppercase tracking-widest hover:border-blue-500 transition-all shadow-sm">
                        Audit Permissions
                    </button>
                    <button className="h-16 px-10 bg-slate-950 text-white rounded-[28px] text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/10 active:scale-95">
                        Initialize New Node
                    </button>
                </div>
            </div>

            {/* --- INFRASTRUCTURE OVERVIEW --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { l: 'Total Capacity', v: '12 Nodes' },
                    { l: 'Active Sync', v: '08 Active' },
                    { l: 'Security Clearance', v: 'Encrypted' },
                    { l: 'Global Latency', v: '0.04ms' }
                ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-[32px] flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">{stat.l}</span>
                        <span className="text-lg font-black text-slate-900 mt-2 uppercase tracking-tighter">{stat.v}</span>
                    </div>
                ))}
            </div>

            {/* --- TEAM GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {team.map((member) => (
                    <div
                        key={member.id}
                        className="group relative bg-white rounded-[56px] border border-slate-100 p-10 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 overflow-hidden"
                    >
                        {/* Background Tech Decorative */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-10">
                                <div className="w-20 h-20 rounded-[32px] bg-slate-50 flex items-center justify-center text-2xl font-black text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-sm">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border ${member.status === 'Online' ? 'bg-green-50 border-green-100 text-green-600' :
                                        member.status === 'Active' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                                            'bg-slate-50 border-slate-100 text-slate-400'
                                    }`}>
                                    {member.status}
                                </span>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors">{member.name}</h3>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{member.role}</p>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                                        <span>Activity Sync</span>
                                        <span>{member.activity}</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-600 group-hover:animate-[shimmer_2s_infinite]"
                                            style={{ width: member.activity }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                                <div>
                                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Access Node</p>
                                    <p className="text-xs font-black text-slate-900 uppercase">{member.access}</p>
                                </div>
                                <button className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all group/btn shadow-sm">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover/btn:rotate-90 transition-transform"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Subtle Node ID Indicator on side */}
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 vertical-text text-[8px] font-black text-slate-100 uppercase tracking-[0.5em] pointer-events-none group-hover:text-slate-200 transition-colors">
                            REF://{member.id}
                        </div>
                    </div>
                ))}

                {/* --- ADD NEW NODE PLACEHOLDER --- */}
                <button className="group relative bg-slate-50 border-2 border-dashed border-slate-200 rounded-[56px] p-10 flex flex-col items-center justify-center gap-6 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-500 min-h-[400px]">
                    <div className="w-16 h-16 rounded-[28px] bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Connect Node</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Initialize Personnel</p>
                    </div>
                </button>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}} />
        </div>
    );
};

export default Team;
