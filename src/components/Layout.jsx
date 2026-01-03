import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
const Layout = ({ children, onLogout }) => {
    const location = useLocation();
    const getPageTitle = () => {
        const path = location.pathname.replace('/', '');
        if (!path) return 'Overview';
        return path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');
    };
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#fcfdfe] selection:bg-indigo-100 selection:text-indigo-600">
            <div className="lg:sticky lg:top-0 lg:h-screen z-50">
                <Sidebar onLogout={onLogout} />
            </div>
            <main className="flex-1 min-w-0 flex flex-col relative">
                <header className="h-20 bg-white/60 backdrop-blur-2xl border-b border-slate-100 flex items-center px-4 md:px-12 sticky top-0 z-40">
                    <div className="w-12 lg:hidden shrink-0"></div>
                    <div className="flex-1 flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-1 h-5 md:w-1.5 md:h-6 bg-indigo-600 rounded-full shrink-0"></div>
                        <h2 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.4em] truncate">
                            Node Control: <span className="text-slate-900">{getPageTitle()}</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 md:gap-6 shrink-0">
                        <div className="hidden sm:flex flex-col items-end mr-2">
                            <span className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest">System Load</span>
                            <div className="w-16 md:w-24 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                <div className="w-1/3 h-full bg-indigo-500 animate-[shimmer_2s_infinite]"></div>
                            </div>
                        </div>
                        <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-all hover:bg-indigo-50 rounded-xl">
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                        </button>
                        <div className="hidden xs:block w-[1px] h-6 md:h-8 bg-slate-100"></div>
                        <div className="flex items-center gap-2 md:gap-3 pl-1 md:pl-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-[10px] md:text-xs shadow-lg shadow-slate-200">
                                CE
                            </div>
                            <div className="hidden md:block">
                                <p className="text-[10px] font-black text-slate-900 leading-none">PRO</p>
                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">Verified</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex-1 p-4 md:p-12 max-w-[1600px] mx-auto w-full overflow-x-hidden">
                    {children}
                </div>
            </main>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
            }
        `}} />
        </div>
    );
};
export default Layout;