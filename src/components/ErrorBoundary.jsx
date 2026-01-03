import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }
    static getDerivedStateFromError(error) {
        console.error("SYSTEM_FATAL_ERROR:", error);
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error("SYSTEM_FATAL_ERROR:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-mono selection:bg-red-500 selection:text-white">
                    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden text-[10px] text-red-500 break-all leading-none p-4">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div key={i} className="mb-1">CRITICAL_MEMORY_DUMP_{i}_CORE_FAILED_REBOOT_REQUIRED_SYSTEM_HALTED</div>
                        ))}
                    </div>
                    <div className="relative z-10 w-full max-w-3xl">
                        <div className="bg-red-950/20 backdrop-blur-3xl border-2 border-red-500/30 rounded-[56px] p-12 md:p-16 shadow-[0_0_100px_rgba(239,68,68,0.2)]">
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-20 h-20 rounded-3xl bg-red-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] animate-pulse">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.4em]">Fatal Software Exception</span>
                                        <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                                    </div>
                                    <h1 className="text-5xl font-[950] text-white tracking-tighter uppercase leading-none">Kernel <span className="text-red-500 italic">Panic</span></h1>
                                </div>
                            </div>
                            <div className="bg-black/40 rounded-[32px] p-8 border border-red-500/20 mb-10">
                                <p className="text-red-400 text-xs font-black uppercase tracking-widest mb-4">Error Diagnostics Trace:</p>
                                <div className="text-red-500/80 text-[11px] font-mono leading-relaxed max-h-40 overflow-y-auto custom-scrollbar">
                                    {this.state.error && this.state.error.toString()}
                                    <br />
                                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="flex-1 py-6 bg-red-600 text-white rounded-[28px] font-black text-xs uppercase tracking-[0.3em] hover:bg-red-500 transition-all shadow-xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-3"
                                >
                                    Initialize Recovery
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></svg>
                                </button>
                                <button
                                    onClick={() => window.location.href = '/dashboard'}
                                    className="flex-1 py-6 bg-white/5 border border-white/10 text-white rounded-[28px] font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                                >
                                    Emergency Exit to Hub
                                </button>
                            </div>
                            <div className="mt-12 pt-8 border-t border-white/5 text-center">
                                <p className="text-[9px] font-black text-red-500/40 uppercase tracking-[0.5em]">System Protected by BusinessOS Neural-Shield v4.1</p>
                            </div>
                        </div>
                    </div>
                    <style dangerouslySetInnerHTML={{
                        __html: `
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(239, 68, 68, 0.3); border-radius: 10px; }
            `}} />
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;