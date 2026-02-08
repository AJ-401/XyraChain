export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium tracking-tight text-sm">XyraChain</span>
          <span className="text-slate-600 text-xs">© 2026</span>
        </div>

        <div className="flex gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </a>
          <a href="https://github.com/harxhe/XyraChain" className="hover:text-slate-300 transition-colors">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
