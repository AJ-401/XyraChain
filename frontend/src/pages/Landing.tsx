import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="text-slate-400 antialiased bg-[#030303] selection:bg-sky-500/20 selection:text-sky-200 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Aurora Effect */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-sky-500/10 blur-[100px] animate-pulse opacity-30"></div>
        <div className="aurora-light top-0 left-0 animate-[aurora-shift_20s_infinite_alternate_ease-in-out]"></div>

        {/* Heart Rate / ECG Line Background */}
        <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 opacity-20" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path
            d="M0 50 H200 L220 50 L230 20 L240 80 L250 50 H300 L320 50 L330 20 L340 80 L350 50 H450 L470 50 L480 10 L500 90 L520 40 L530 60 L540 50 H650 L670 50 L680 20 L690 80 L700 50 H800 L820 50 L830 10 L850 90 L870 50 H1000"
            fill="none"
            stroke="url(#ecg-gradient)"
            strokeWidth="2"
            className="heart-rate"
          />
          <defs>
            <linearGradient id="ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="10%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
              <stop offset="90%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Page 1: Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden snap-start">
          {/* Glow Effect Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] hero-glow -z-10 opacity-60 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10 pt-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              XDC Apothem Testnet Live
            </div>

            <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-tight">
              The Future of Diagnostic Trust
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Secured by Blockchain.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience instant X-ray interpretation using advanced CNN models.
              Triage symptoms interactively and store immutable reports in your medical vault.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/analysis"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                Start Analysis
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors"
              >
                View Features
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <iconify-icon icon="solar:mouse-minimalistic-linear" width="24" className="text-slate-500"></iconify-icon>
          </div>
        </section>

        {/* Page 2: Features & Details */}
        <section id="features" className="min-h-screen flex flex-col justify-between relative snap-start">
          <div className="flex-grow flex flex-col justify-center items-center px-6 py-20">
            <div className="max-w-6xl w-full mx-auto">

              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Core Technology</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Powered by state-of-the-art diagnostic algorithms and decentralized infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                {/* Feature 1: Analysis */}
                <div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="bg-[#0a0a0a] rounded-xl p-8 h-full relative overflow-hidden">
                    <div className="mb-6 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Neural Analysis</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Drag & drop chest X-rays for instant AI processing with Grad-CAM heatmap visualization to pinpoint areas of interest.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Triage Chat */}
                <div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="bg-[#0a0a0a] rounded-xl p-8 h-full relative overflow-hidden">
                    <div className="mb-6 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Smart Triage</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Interactive symptom assessment chat that correlates patient feedback with scan results for a comprehensive report.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Vault */}
                <div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="bg-[#0a0a0a] rounded-xl p-8 h-full relative overflow-hidden">
                    <div className="mb-6 w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Patient Vault</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Decentralized storage on XDC Network. Access your medical history securely via IPFS anytime, anywhere.
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="max-w-3xl mx-auto">
                <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-6 flex flex-col sm:flex-row gap-4 items-start">
                  <div className="shrink-0 text-rose-400 mt-1">
                    <iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Medical Disclaimer</h4>
                    <p className="text-xs text-rose-200/70 leading-relaxed">
                      XyraChain is an educational tool and technical demonstration of AI and Blockchain technology. It is <strong>not</strong> a certified medical device and should not be used for primary diagnosis or treatment decisions. Always consult a qualified healthcare professional.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}
