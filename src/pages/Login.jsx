import { useState, useEffect } from 'react';

const Login = ({ onLogin }) => {
    const [loading, setLoading] = useState(false);
    const [activeInput, setActiveInput] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour12: false }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleActionClick = () => {
        setLoading(true);
        setTimeout(() => {
            if (isRegister) {
                setIsRegister(false);
                setLoading(false);
            } else {
                onLogin();
            }
        }, 2000);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#f0f4f8] font-mono selection:bg-indigo-500 selection:text-white overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[1px] border-indigo-100 rounded-full animate-[spin_60s_linear_infinite] opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border-[1px] border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse] opacity-30"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-200/40 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-100/40 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
            <div className="hidden lg:block absolute inset-10 border border-slate-200/50 pointer-events-none rounded-[40px]">
                <div className="absolute top-8 left-8 flex flex-col gap-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>
                        Interface: {isRegister ? 'Node Initialization' : 'Access Authorization'}
                    </span>
                    <span className="text-[14px] font-bold text-slate-800 tracking-tighter">{currentTime}</span>
                </div>
                <div className="absolute bottom-8 right-8 text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol: Neural-v4.0.2</p>
                    <p className="text-[10px] font-black text-indigo-500 mt-1 uppercase tracking-tighter italic">Securing Neural Pathways...</p>
                </div>
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-indigo-200 rounded-tl-[40px]"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-indigo-200 rounded-br-[40px]"></div>
            </div>

            {/* --- Main Entry Hub --- */}
            <div className="relative z-10 w-full max-w-lg px-6">
                <div className="bg-white/60 backdrop-blur-3xl rounded-[48px] border-2 border-white shadow-[0_40px_100px_-20px_rgba(79,70,229,0.12)] p-10 md:p-14 relative overflow-hidden group">

                    {/* Futuristic Scanner Line */}
                    <div className="absolute inset-0 w-full h-24 bg-gradient-to-b from-indigo-500/5 to-transparent -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none"></div>

                    <div className="flex flex-col items-center mb-10">
                        <div className="relative mb-6">
                            <div className="absolute -inset-8 bg-indigo-500/10 blur-3xl rounded-full scale-125 group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="relative w-20 h-20 bg-white shadow-[0_15px_35px_rgba(79,70,229,0.2)] rounded-[28px] flex items-center justify-center border border-indigo-50 transition-all duration-500 hover:rotate-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" className="stroke-indigo-600 drop-shadow-lg" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /></svg>
                            </div>
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-[-0.05em] mb-1 uppercase">
                            Business<span className="text-indigo-600 italic">OS</span> {isRegister && <span className="text-xs align-top bg-indigo-600 text-white px-2 py-0.5 rounded-full ml-1 font-black">NEW</span>}
                        </h1>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-1">{isRegister ? 'Initialize New Node' : 'Authorize Mainframe Access'}</p>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {/* Input fields with corner-glow effect */}
                        {isRegister && (
                            <div className={`relative p-0.5 rounded-2xl group transition-all duration-300 animate-in slide-in-from-top-4 ${activeInput === 'name' ? 'bg-indigo-600' : 'bg-slate-100'}`}>
                                <div className="bg-white rounded-[14px] p-2 pr-6 flex items-center">
                                    <div className="w-10 h-10 flex items-center justify-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-[8px] font-[900] text-slate-400 uppercase tracking-widest ml-1 block">Entity Name</span>
                                        <input
                                            onFocus={() => setActiveInput('name')}
                                            onBlur={() => setActiveInput(null)}
                                            type="text"
                                            placeholder="ENTER BUSINESS NAME"
                                            className="w-full bg-transparent px-1 py-1 text-slate-900 text-sm font-black outline-none placeholder:text-slate-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={`relative p-0.5 rounded-2xl group transition-all duration-300 ${activeInput === 'email' ? 'bg-indigo-600' : 'bg-slate-100'}`}>
                            <div className="bg-white rounded-[14px] p-2 pr-6 flex items-center">
                                <div className="w-10 h-10 flex items-center justify-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <div className="flex-1">
                                    <span className="text-[8px] font-[900] text-slate-400 uppercase tracking-widest ml-1 block">{isRegister ? 'Primary Link (Email)' : 'Neural Identity'}</span>
                                    <input
                                        onFocus={() => setActiveInput('email')}
                                        onBlur={() => setActiveInput(null)}
                                        type="email"
                                        placeholder={isRegister ? "ADMIN@BUSINESS.AI" : "ACCESS_KEY_001"}
                                        className="w-full bg-transparent px-1 py-1 text-slate-900 text-sm font-black outline-none placeholder:text-slate-200"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`relative p-0.5 rounded-2xl group transition-all duration-300 ${activeInput === 'pass' ? 'bg-indigo-600' : 'bg-slate-100'}`}>
                            <div className="bg-white rounded-[14px] p-2 pr-6 flex items-center">
                                <div className="w-10 h-10 flex items-center justify-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>
                                <div className="flex-1">
                                    <span className="text-[8px] font-[900] text-slate-400 uppercase tracking-widest ml-1 block">{isRegister ? 'Security Cipher' : 'Neural Token'}</span>
                                    <input
                                        onFocus={() => setActiveInput('pass')}
                                        onBlur={() => setActiveInput(null)}
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="w-full bg-transparent px-1 py-1 text-slate-900 text-sm font-black outline-none tracking-widest placeholder:text-slate-200"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={handleActionClick}
                                disabled={loading}
                                className="w-full relative py-6 bg-slate-950 rounded-[32px] text-white font-[900] text-sm uppercase tracking-[0.5em] overflow-hidden active:scale-[0.98] transition-all disabled:opacity-80 group/btn shadow-2xl shadow-indigo-200"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:animate-[shimmer_2s_infinite]"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-600 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>

                                <div className="relative flex items-center justify-center gap-4">
                                    {loading ? (
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.25s]"></span>
                                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.5s]"></span>
                                            </div>
                                            <span className="font-black italic text-xs">BOOTING NODE...</span>
                                        </div>
                                    ) : (
                                        <>
                                            <span>{isRegister ? 'Initialize Node' : 'Enter Neural Hub'}</span>
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-2 transition-transform duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>

                        <div className="text-center pt-2">
                            <button
                                onClick={() => setIsRegister(!isRegister)}
                                className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
                            >
                                {isRegister ? 'Already have a Node? Authorize Access →' : 'Register New Business Entity →'}
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-50 relative z-10 flex justify-between items-center px-2 opacity-50">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Neural Encryption Active
                        </span>
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">Global v4.0.2</span>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shimmer { 100% { transform: translate(100%); } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(400%); } }
        @keyframes spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
      `}} />
        </div>
    );
};

export default Login;
