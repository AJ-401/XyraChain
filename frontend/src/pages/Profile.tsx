import Navbar from '../components/Navbar';

// Mock Data
const MOCK_PROFILE = {
    address: "xdc742d35Cc6634C0532925a3b844Bc454e4438f44e",
    balance: "1,245.50",
    network: {
        name: "XDC Apothem Testnet",
        chainId: 51,
        status: "connected"
    },
    stats: {
        totalReports: 42,
        aiAccuracy: 94.8,
        lastScanDate: "2024-03-08",
        storageUsed: "145 MB"
    }
};

export default function Profile() {
    const shortenAddress = (addr: string) => {
        return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // In a real app, I'd add a toast notification here
    };

    return (
        <div className="text-slate-400 antialiased h-screen flex flex-col selection:bg-sky-500/20 selection:text-sky-200 overflow-hidden bg-[#030303]">
            <Navbar />

            <main className="flex-grow pt-24 px-4 md:px-8 relative flex flex-col items-center justify-center h-full overflow-hidden">

                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 h-[calc(100vh-180px)] max-h-[600px]">

                    {/* Left Column: Account & Network (Span 4) */}
                    <div className="md:col-span-5 flex flex-col gap-6 h-full">

                        {/* Account Card */}
                        <div className="p-6 rounded-3xl border border-white/10 bg-[#0a0a0a] relative overflow-hidden flex-shrink-0">
                            <div className="absolute top-0 right-0 p-24 bg-indigo-500/5 blur-[60px] rounded-full pointer-events-none"></div>

                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <iconify-icon icon="solar:user-id-bold" width="32"></iconify-icon>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-medium text-white mb-1">Connected Wallet</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-slate-400 bg-white/5 px-2 py-1 rounded-lg border border-white/5 text-xs">
                                                {shortenAddress(MOCK_PROFILE.address)}
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(MOCK_PROFILE.address)}
                                                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition-colors"
                                            >
                                                <iconify-icon icon="solar:copy-linear" width="14"></iconify-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">XDC Balance</p>
                                        <p className="text-xl font-semibold text-white">{MOCK_PROFILE.balance} XDC</p>
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                        <iconify-icon icon="solar:wallet-money-bold" width="16"></iconify-icon>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Network Status */}
                        <div className="p-6 rounded-3xl border border-white/10 bg-[#0a0a0a] flex-grow flex flex-col">
                            <h3 className="text-base font-medium text-white mb-4 flex items-center gap-2">
                                <iconify-icon icon="solar:earth-bold" width="18" className="text-emerald-500"></iconify-icon>
                                Network Status
                            </h3>

                            <div className="space-y-3 flex-grow">
                                <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block absolute top-0 animate-ping opacity-50"></span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-emerald-400">{MOCK_PROFILE.network.name}</p>
                                            <p className="text-[10px] text-emerald-500/70">Connected</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Chain ID</p>
                                        <p className="text-xs font-mono text-white">{MOCK_PROFILE.network.chainId}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                                    <span className="text-xs text-slate-400">RPC Endpoint</span>
                                    <span className="text-[10px] font-mono text-slate-500">https://rpc.apothem.network</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stats & Settings (Span 7) */}
                    <div className="md:col-span-7 flex flex-col gap-6 h-full">

                        {/* System Statistics */}
                        <div className="p-6 rounded-3xl border border-white/10 bg-[#0a0a0a] flex-grow flex flex-col justify-center">
                            <h3 className="text-base font-medium text-white mb-4 flex items-center gap-2">
                                <iconify-icon icon="solar:chart-square-bold" width="18" className="text-sky-500"></iconify-icon>
                                System Statistics
                            </h3>

                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Total Reports</p>
                                    <p className="text-2xl font-semibold text-white">{MOCK_PROFILE.stats.totalReports}</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">AI Accuracy</p>
                                    <p className="text-2xl font-semibold text-white">{MOCK_PROFILE.stats.aiAccuracy}%</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Storage Used</p>
                                    <p className="text-lg font-medium text-white">{MOCK_PROFILE.stats.storageUsed}</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Last Scan</p>
                                    <p className="text-lg font-medium text-white">{MOCK_PROFILE.stats.lastScanDate}</p>
                                </div>
                            </div>
                        </div>

                        {/* Settings / Actions */}
                        <div className="p-6 rounded-3xl border border-white/10 bg-[#0a0a0a] flex-shrink-0">
                            <h3 className="text-base font-medium text-white mb-4">Account Settings</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                                            <iconify-icon icon="solar:key-minimalistic-bold" width="16"></iconify-icon>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-white">Export Private Keys</p>
                                        </div>
                                    </div>
                                    <iconify-icon icon="solar:arrow-right-linear" width="16" className="text-slate-500 group-hover:text-white transition-colors"></iconify-icon>
                                </button>

                                <button className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-rose-500/10 border border-white/5 hover:border-rose-500/20 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-rose-500/20 flex items-center justify-center text-slate-400 group-hover:text-rose-400 transition-colors">
                                            <iconify-icon icon="solar:logout-2-bold" width="16"></iconify-icon>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Disconnect Wallet</p>
                                        </div>
                                    </div>
                                    <iconify-icon icon="solar:arrow-right-linear" width="16" className="text-slate-500 group-hover:text-rose-400 transition-colors"></iconify-icon>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}
