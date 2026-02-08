import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-white bg-white/10" : "text-slate-400 hover:text-white hover:bg-white/5";
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav backdrop-blur-md border-b border-white/5 bg-[#030303]/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-white">
            <iconify-icon icon="solar:pulse-2-linear" width="20"></iconify-icon>
          </div>
          <span className="text-white font-medium tracking-tight text-lg">XyraChain</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/analysis" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/analysis')}`}>
            Analysis
          </Link>
          <Link to="/triage" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/triage')}`}>
            Triage
          </Link>
          <Link to="/vault" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/vault')}`}>
            Vault
          </Link>
          <Link to="/profile" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/profile')}`}>
            Profile
          </Link>
        </div>

        {/* Wallet Connect */}
        <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-all hover:border-white/20">
          <iconify-icon icon="solar:wallet-linear" width="16" className="text-sky-400 group-hover:text-sky-300"></iconify-icon>
          <span>Connect Wallet</span>
        </button>
      </div>
    </nav>
  );
}
