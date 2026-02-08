import { useState } from 'react';
import Navbar from '../components/Navbar';

// Mock Data for Vault
const MOCK_RECORDS = [
    {
        id: 1,
        date: '2024-03-08',
        diagnosis: 'Pneumonia',
        confidence: 94,
        txHash: '0x7129...8921',
        ipfsCid: 'QmXyZ...9abc',
        preview: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
        id: 2,
        date: '2024-02-15',
        diagnosis: 'Normal',
        confidence: 98,
        txHash: '0x8231...1120',
        ipfsCid: 'QmBaC...7xyz',
        preview: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
        id: 3,
        date: '2024-01-22',
        diagnosis: 'Normal',
        confidence: 97,
        txHash: '0x9912...3341',
        ipfsCid: 'QmDeF...2mno',
        preview: 'https://images.unsplash.com/photo-1584036561566-b93a50208c3c?auto=format&fit=crop&q=80&w=300&h=300'
    }
];

export default function PatientVault() {
    const [selectedRecord, setSelectedRecord] = useState<typeof MOCK_RECORDS[0] | null>(null);

    return (
        <div className="text-slate-400 antialiased min-h-screen flex flex-col selection:bg-sky-500/20 selection:text-sky-200">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                    <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">
                        Patient Vault
                    </h1>
                    <p className="text-slate-400">
                        Your immutable medical history, secured on the XDC Network.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                                <iconify-icon icon="solar:folder-with-files-bold" width="24"></iconify-icon>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Total Records</p>
                                <p className="text-2xl font-semibold text-white">12</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <iconify-icon icon="solar:shield-check-bold" width="24"></iconify-icon>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Health Score</p>
                                <p className="text-2xl font-semibold text-white">94/100</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                <iconify-icon icon="solar:link-circle-bold" width="24"></iconify-icon>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Network Status</p>
                                <p className="text-lg font-medium text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    XDC Apothem
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Records Table */}
                    <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-white/5 bg-white/5 text-slate-400">
                                        <th className="px-6 py-4 font-medium">Scan ID</th>
                                        <th className="px-6 py-4 font-medium">Date Verified</th>
                                        <th className="px-6 py-4 font-medium">Diagnosis</th>
                                        <th className="px-6 py-4 font-medium">Confidence</th>
                                        <th className="px-6 py-4 font-medium">Blockchain Verification</th>
                                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {MOCK_RECORDS.map((record) => (
                                        <tr key={record.id} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-6 py-4 text-slate-500 font-mono">
                                                #{record.id.toString().padStart(4, '0')}
                                            </td>
                                            <td className="px-6 py-4 text-white">
                                                {record.date}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${record.diagnosis === 'Normal'
                                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                                    : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                                    }`}>
                                                    {record.diagnosis === 'Normal'
                                                        ? <iconify-icon icon="solar:shield-check-bold" width="12"></iconify-icon>
                                                        : <iconify-icon icon="solar:danger-triangle-bold" width="12"></iconify-icon>
                                                    }
                                                    {record.diagnosis}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-slate-300">
                                                {record.confidence}%
                                            </td>
                                            <td className="px-6 py-4">
                                                <a
                                                    href={`https://explorer.apothem.network/tx/${record.txHash}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-500/10 hover:bg-indigo-500/20 px-3 py-1.5 rounded-lg border border-indigo-500/20"
                                                >
                                                    <iconify-icon icon="solar:link-minimalistic-2-bold" width="12"></iconify-icon>
                                                    {record.txHash}
                                                    <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => setSelectedRecord(record)}
                                                    className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                                                >
                                                    <iconify-icon icon="solar:eye-bold" width="20"></iconify-icon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* IPFS Viewer Modal */}
                {selectedRecord && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedRecord(null)}
                        ></div>
                        <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative z-10 animate-fade-in-up flex flex-col md:flex-row shadow-2xl shadow-black">

                            {/* Left: Image */}
                            <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/5">
                                <img
                                    src={selectedRecord.preview}
                                    alt="X-ray Scan"
                                    className="max-h-[50vh] md:max-h-full max-w-full object-contain rounded-lg"
                                />
                            </div>

                            {/* Right: Metadata */}
                            <div className="w-full md:w-1/2 p-8 flex flex-col">
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <h3 className="text-xl font-medium text-white mb-1">Medical Report</h3>
                                        <p className="text-sm text-slate-500 font-mono">ID: #{selectedRecord.id.toString().padStart(4, '0')}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedRecord(null)}
                                        className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                                    >
                                        <iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
                                    </button>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Diagnosis Result</p>
                                        <div className="flex items-center gap-3">
                                            <div className={`text-lg font-medium ${selectedRecord.diagnosis === 'Normal' ? 'text-emerald-400' : 'text-rose-400'
                                                }`}>
                                                {selectedRecord.diagnosis}
                                            </div>
                                            <div className="h-4 w-[1px] bg-white/10"></div>
                                            <div className="text-sm text-slate-300">
                                                {selectedRecord.confidence}% Confidence
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Storage Details</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                                <span className="text-sm text-slate-400">Network</span>
                                                <span className="text-sm text-white font-medium">XDC Apothem</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                                <span className="text-sm text-slate-400">IPFS CID</span>
                                                <a href="#" className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
                                                    {selectedRecord.ipfsCid}
                                                    <iconify-icon icon="solar:copy-linear" width="14"></iconify-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <button className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors">
                                        Download Original DICOM
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </main>

        </div>
    );
}
