import { useState } from 'react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'User Protocol', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
        { id: 'company', label: 'Core Entity', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect width="16" height="16" x="4" y="4" rx="2" /><path d="M9 22V12h6v10M15 2v10" /></svg> },
        { id: 'roles', label: 'Access Matrix', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">

            {/* --- HUD HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-4 px-2 relative z-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">System configuration Node</span>
                    </div>
                    <h1 className="text-6xl font-[950] text-slate-900 tracking-tighter uppercase leading-none">
                        Mainframe <span className="text-indigo-600 italic underline decoration-slate-200 decoration-4 underline-offset-8">Parameters</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-6 text-lg max-w-xl">Configure core operational protocols, security ciphers, and organizational hierarchy overrides.</p>
                </div>

                <div className="hidden lg:flex items-center gap-8 bg-slate-50 p-6 rounded-[32px] border border-slate-100 relative z-10 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/40">
                    <div className="text-right">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Global Latency</p>
                        <p className="text-sm font-black text-indigo-600 mt-1 uppercase">0.02ms Sync</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                </div>
            </div>

            {/* --- ELITE TABS --- */}
            <div className="flex flex-wrap gap-4 p-3 bg-slate-100/50 rounded-[36px] border border-slate-100 backdrop-blur-xl relative z-20">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[160px] flex items-center justify-center gap-3 py-5 rounded-[28px] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 transform active:scale-95 ${activeTab === tab.id
                                ? 'bg-slate-900 text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-slate-800'
                                : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
                            }`}
                    >
                        <span className={activeTab === tab.id ? 'text-indigo-400' : ''}>{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* --- PARAMETER INTERFACE --- */}
            <div className="relative group">
                {/* Static Corner Accents */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-slate-100 group-focus-within:border-indigo-500 transition-colors duration-500 pointer-events-none"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-slate-100 group-focus-within:border-indigo-500 transition-colors duration-500 pointer-events-none"></div>

                <div className="bg-white rounded-[56px] border border-slate-100 p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] relative z-10">

                    {activeTab === 'profile' && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Access Operator Name</label>
                                    <input type="text" defaultValue="Sonu Kumar" className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-sm" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Transmission Endpoint (Email)</label>
                                    <input type="email" defaultValue="sonu@businessos.ai" className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-sm" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Operator Clearance</label>
                                    <div className="w-full bg-slate-50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-400 text-sm font-black uppercase tracking-widest cursor-not-allowed">LEVEL 10 MASTER ACCESS</div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Temporal Zone (Timezone)</label>
                                    <select className="w-full bg-slate-50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all appearance-none cursor-pointer">
                                        <option>IST (GTM+5:30) - NEW DELHI</option>
                                        <option>PST (GTM-8:00) - SILICON VALLEY</option>
                                    </select>
                                </div>
                            </div>
                            <button className="px-12 py-6 bg-slate-950 text-white rounded-[28px] font-black text-[12px] uppercase tracking-[0.4em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 active:scale-95 group flex items-center gap-4">
                                Update System Profile
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    )}

                    {activeTab === 'company' && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="md:col-span-2 space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Business Entity Identifier</label>
                                    <input type="text" defaultValue="Antigravity Tech Solutions" className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-base font-black outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-sm" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Primary Node HQ (Location)</label>
                                    <input type="text" defaultValue="New Delhi, India" className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-sm" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Regional Tax Node (GST ID)</label>
                                    <input type="text" defaultValue="07AAAAA0000A1Z5" className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-[24px] px-8 py-5 text-slate-900 text-sm font-bold outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-sm" />
                                </div>
                            </div>
                            <button className="px-12 py-6 bg-slate-950 text-white rounded-[28px] font-black text-[12px] uppercase tracking-[0.4em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 active:scale-95 group flex items-center gap-4">
                                Save Entity Architecture
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    )}

                    {activeTab === 'roles' && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                            <div className="space-y-6">
                                {[
                                    { r: 'System Owner', desc: 'UNRESTRICTED ACCESS TO ALL NEURAL NODES.', lv: 'LEVEL 10', c: 'indigo' },
                                    { r: 'Manager Node', desc: 'ANALYTICS READ/WRITE + TEAM ORCHESTRATION.', lv: 'LEVEL 7', c: 'blue' },
                                    { r: 'Operator Node', desc: 'LOCAL FEED INPUT + BASIC DIAGNOSTICS.', lv: 'LEVEL 4', c: 'slate' },
                                ].map((role, i) => (
                                    <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-slate-50/30 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100/40 transition-all group overflow-hidden relative">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-${role.c}-500 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                                        <div className="flex items-center gap-8 relative z-10">
                                            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 font-black text-xs shadow-sm group-hover:bg-slate-950 group-hover:text-white transition-all">
                                                {role.lv}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-[900] text-slate-900 uppercase tracking-tighter">{role.r}</h4>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{role.desc}</p>
                                            </div>
                                        </div>
                                        <button className="mt-6 md:mt-0 text-[10px] font-black text-indigo-600 uppercase tracking-widest relative z-10 hover:underline">Override Protocol →</button>
                                    </div>
                                ))}
                            </div>
                            <button className="px-12 py-6 bg-slate-950 text-white rounded-[28px] font-black text-[12px] uppercase tracking-[0.4em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 active:scale-95 group flex items-center gap-4">
                                Commit Access Matrix
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    )}

                </div>
            </div>

            {/* --- PARAMETER FOOTER --- */}
            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-50">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,1)]"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Security Encryption: AES-4096 NODE-SYNC ACTIVE</span>
                </div>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] italic">Cluster Policy: v9.2.0-STABLE</p>
            </div>

        </div>
    );
};

export default Settings;
