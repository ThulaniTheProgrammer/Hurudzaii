import React from 'react';
import { LayoutDashboard, Trees, PiggyBank, FlaskConical, Tractor, Users, CheckSquare, DollarSign, Search, Sun, LayoutPanelLeft } from 'lucide-react';
import useSEO from '@/hooks/useSEO';

const CrmDashboard = () => {
    useSEO({
        title: 'Farm Manager CRM — Hurudza AI',
        description: 'Manage your fields, livestock, equipment, staff, and finances all in one place with the Hurudza AI Farm Manager dashboard.',
        canonical: 'https://www.hurudzaai.tech/crm',
    });
    return (
        <div className="flex h-screen bg-[#111827] text-white font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-[#1F2937] flex flex-col justify-between border-r border-[#374151]/30">
                <div className="flex flex-col flex-1 h-full">
                    <div className="p-6 flex items-center gap-3">
                        <div className="bg-white rounded-lg p-1.5 flex items-center justify-center">
                            <LayoutPanelLeft className="w-6 h-6 text-[#2ECC71]" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg leading-tight tracking-tight">HuradzaAi</h1>
                            <p className="text-xs text-gray-400">farm manager</p>
                        </div>
                    </div>

                    <nav className="mt-2 px-3 space-y-1 flex-1 overflow-y-auto">
                        <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#2ECC71] text-white font-medium shadow-[0_0_15px_rgba(46,204,113,0.2)]">
                            <LayoutDashboard className="w-5 h-5" />
                            Dashboard
                        </a>
                        {[
                            { icon: Trees, label: 'Fields' },
                            { icon: PiggyBank, label: 'Livestock' },
                            { icon: FlaskConical, label: 'Chemicals' },
                            { icon: Tractor, label: 'Equipment' },
                            { icon: Users, label: 'Staff' },
                            { icon: CheckSquare, label: 'Tasks' },
                            { icon: DollarSign, label: 'Finances' },
                        ].map((item, i) => (
                            <a key={i} href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="p-4 mt-auto border-t border-[#374151]/30 bg-[#1A2E24]/30">
                    <div className="rounded-xl p-3">
                        <h3 className="text-[#2ECC71] font-semibold text-sm mb-1">Need Help?</h3>
                        <p className="text-xs text-[#2ECC71]/70 leading-relaxed">Check our documentation for guides and tips.</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0F151F]">
                {/* Header */}
                <header className="h-20 flex items-center justify-between px-8 border-b border-[#374151]/30 shrink-0">
                    <div className="relative w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search fields, livestock, tasks..."
                            className="w-full bg-[#1F2937]/50 border border-[#374151]/30 rounded-full py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#2ECC71]/50 focus:bg-[#1F2937] transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-gray-400 hover:text-[#D4FF00] transition-colors">
                            <Sun className="w-5 h-5" />
                        </button>
                        <button className="bg-[#2ECC71] text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-[#27ae60] transition-colors hover:shadow-[0_0_15px_rgba(46,204,113,0.3)]">
                            Sign In
                        </button>
                    </div>
                </header>

                {/* Hero Section */}
                <main className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
                    <div className="max-w-3xl w-full text-center space-y-8 pb-12">
                        <div className="w-24 h-24 bg-[#2ECC71] text-white rounded-3xl mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(46,204,113,0.25)] relative group cursor-pointer hover:scale-105 transition-transform">
                            <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <LayoutPanelLeft className="w-12 h-12 relative z-10" />
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">Welcome to HuradzaAi farm manager</h1>
                            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                                Your complete farm management solution. Sign in to start managing your fields, livestock, equipment, and more.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            {['Fields', 'Livestock', 'Equipment', 'Analytics'].map((label, i) => (
                                <button key={i} className="px-6 py-3 rounded-xl border border-[#374151]/60 text-sm font-medium hover:bg-white/5 hover:border-[#2ECC71]/40 hover:text-[#2ECC71] transition-all">
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="h-16 flex items-center justify-between px-8 border-t border-[#374151]/30 text-sm shrink-0 bg-[#0F151F]">
                    <div className="flex items-center gap-3 text-gray-500">
                        <div className="w-5 h-5 bg-white rounded flex items-center justify-center shrink-0">
                            <LayoutPanelLeft className="w-3 h-3 text-black" />
                        </div>
                        HuradzaAi farm manager © 2026. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default CrmDashboard;
