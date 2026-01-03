import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loading, setLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            // Redirect or logic
            window.location.href = '/login';
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#f0f4f8] font-mono selection:bg-indigo-500 selection:text-white overflow-hidden relative p-6">
            <div className="absolute inset-0 pointer-events-none overflow-hidden text-[10px] text-slate-200 opacity-[0.2] font-mono leading-none break-all p-4">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="mb-2">INITIALIZING_NEW_ENTITY_SEQUENCE_0{i}_ACCESS_GRANTED_SECURE_PROTOCO_V4_INIT</div>
                ))}
            </div>

            <div className="relative z-10 w-full max-w-lg">
                <div className="bg-white/70 backdrop-blur-3xl rounded-[48px] border-2 border-white shadow-[0_40px_100px_-20px_rgba(79,70,229,0.1)] p-10 md:p-14">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-2">Create <span className="text-indigo-600">Entity</span></h1>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Register your Business Node</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleRegister}>
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Name</label>
                            <input type="text" placeholder="Global Tech Corp" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 text-sm font-bold shadow-sm outline-none focus:border-indigo-600 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Email</label>
                            <input type="email" placeholder="admin@domain.com" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 text-sm font-bold shadow-sm outline-none focus:border-indigo-600 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Access Cipher</label>
                            <input type="password" placeholder="••••••••••••" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 text-sm font-bold shadow-sm outline-none focus:border-indigo-600 transition-all" />
                        </div>

                        <button
                            disabled={loading}
                            className="w-full py-5 bg-slate-950 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.4em] shadow-xl shadow-slate-200 mt-4 hover:bg-slate-800 transition-all"
                        >
                            {loading ? 'Booting Node...' : 'Initialize Signup'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                        Already have a node? <Link to="/login" className="text-indigo-600 font-black">Authorize Access</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
