import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-mono selection:bg-indigo-600 selection:text-white relative overflow-hidden">

            {/* Background HUD Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[120px] opacity-40"></div>

            <div className="relative z-10 text-center max-w-2xl">
                {/* Big 404 Visual */}
                <div className="relative mb-12">
                    <h1 className="text-[180px] font-[950] text-slate-900 leading-none tracking-tighter opacity-10 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-8 border-indigo-600 border-t-transparent animate-spin"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-black text-slate-950 uppercase tracking-[0.2em] italic">Signal Lost</span>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Endpoint Synchronization Failed</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                        The Requested <span className="text-indigo-600 italic underline decoration-slate-200 decoration-4 underline-offset-8">Node</span> Does Not Exist.
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-md mx-auto">
                        The neural path you are following has been terminated or relocated within the documentation archive.
                    </p>
                </div>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link
                        to="/dashboard"
                        className="px-12 py-6 bg-slate-950 text-white rounded-[28px] font-black text-xs uppercase tracking-[0.4em] hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-200 active:scale-95 flex items-center gap-3 group"
                    >
                        Return to Active Hub
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:-translate-x-1 transition-transform rotate-180"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-10 py-6 bg-white border border-slate-200 text-slate-400 rounded-[28px] font-black text-xs uppercase tracking-[0.3em] hover:text-slate-900 hover:border-slate-900 transition-all active:scale-95"
                    >
                        Revert to Last Known Sync
                    </button>
                </div>

                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center gap-4 opacity-40">
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em]">System Status: SEARCHING_FOR_LOST_PACKETS...</p>
                    <div className="flex gap-1">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-6 bg-slate-200 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
