import React, { useState, useEffect } from 'react';
import { Terminal, Key, Webhook, Book, Copy, Check, Eye, EyeOff, Plus, ArrowRight, Shield, Activity, Box, Trash2, X, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import GlassCard from '@/components/agritech/GlassCard';

interface ApiKey {
    id: string;
    name: string;
    token: string;
    createdAt: string;
    lastUsed: string | null;
}

const DeveloperPortal: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'keys' | 'webhooks'>('keys');

    // Load from local storage or set default
    const [apiKeys, setApiKeys] = useState<ApiKey[]>(() => {
        const saved = localStorage.getItem('hurudza_api_keys');
        if (saved) return JSON.parse(saved);
        return [
            {
                id: 'key_1',
                name: 'Production Environment',
                token: 'sk_live_hurudza_8f92bd3a7cc4819e0f',
                createdAt: new Date().toISOString(),
                lastUsed: new Date().toISOString()
            }
        ];
    });

    const [showKeyId, setShowKeyId] = useState<string | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newKeyName, setNewKeyName] = useState('');

    // Persist keys to local storage
    useEffect(() => {
        localStorage.setItem('hurudza_api_keys', JSON.stringify(apiKeys));
    }, [apiKeys]);

    const handleCopy = (token: string, id: string) => {
        navigator.clipboard.writeText(token).then(() => {
            setCopiedId(id);
            toast.success('API key copied to clipboard', {
                style: { background: '#111', border: '1px solid rgba(46,204,113,0.3)', color: '#fff' }
            });
            setTimeout(() => setCopiedId(null), 2000);
        }).catch(() => {
            toast.error('Failed to copy API key');
        });
    };

    const handleGenerateKey = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newKeyName.trim()) {
            toast.error('Please enter a name for the key', {
                style: { background: '#111', border: '1px solid rgba(239,68,68,0.3)', color: '#fff' }
            });
            return;
        }

        // Generate random hex string for the secret key
        const randomHex = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

        const newKey: ApiKey = {
            id: `key_${Date.now()}`,
            name: newKeyName,
            token: `sk_live_hurudza_${randomHex}`,
            createdAt: new Date().toISOString(),
            lastUsed: null
        };

        setApiKeys([newKey, ...apiKeys]);
        setIsModalOpen(false);
        setNewKeyName('');
        toast.success(`Generated new key: ${newKeyName}`, {
            style: { background: '#111', border: '1px solid rgba(46,204,113,0.5)', color: '#fff' },
            icon: <Sparkles className="w-4 h-4 text-[#D4FF00]" />
        });
    };

    const handleDeleteKey = (id: string, name: string) => {
        setApiKeys(apiKeys.filter(k => k.id !== id));
        toast('API key deleted', {
            description: name,
            style: { background: '#111', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }
        });
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 font-sans selection:bg-[#2ECC71]/30 selection:text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#2ECC71]/[0.05] blur-[150px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#D4FF00]/[0.03] blur-[220px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 mb-4 animate-fade-in">
                        <Terminal className="w-4 h-4 text-[#2ECC71]" />
                        <span className="text-[#2ECC71] text-xs font-semibold uppercase tracking-widest">Developers</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight animate-slide-up">
                        API <span className="bg-gradient-to-r from-[#2ECC71] to-[#D4FF00] bg-clip-text text-transparent">Dashboard</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Manage your API keys, configure webhooks, and monitor your integration with Hurudza AI.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-8">
                    {/* Sidebar Navigation */}
                    <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {[
                            { id: 'overview', label: 'Overview', icon: Activity },
                            { id: 'keys', label: 'API Keys', icon: Key },
                            { id: 'webhooks', label: 'Webhooks', icon: Webhook },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/20 shadow-[0_0_20px_rgba(46,204,113,0.1)]'
                                        : 'text-white/40 hover:text-white/80 hover:bg-white/[0.04] border border-transparent'
                                    }`}
                            >
                                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#2ECC71]' : 'text-white/40'}`} />
                                {tab.label}
                            </button>
                        ))}

                        <div className="pt-6 mt-6 border-t border-white/[0.04]">
                            <a href="/#api" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/40 hover:text-[#2ECC71] transition-colors group">
                                <Book className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(46,204,113,0.8)]" />
                                Documentation
                            </a>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="min-h-[500px] animate-slide-up" style={{ animationDelay: '0.3s' }}>

                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {[
                                        { title: 'Total Requests', val: '124.5K', sub: '+12% from last month', icon: Activity },
                                        { title: 'Success Rate', val: '99.9%', sub: 'Last 30 days', icon: Shield },
                                        { title: 'Avg Latency', val: '42ms', sub: 'Global edge network', icon: Box },
                                    ].map((stat, i) => (
                                        <GlassCard key={i} className="p-5 hover:-translate-y-1 transition-transform duration-300">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-8 h-8 rounded-lg bg-[#2ECC71]/10 flex items-center justify-center">
                                                    <stat.icon className="w-4 h-4 text-[#2ECC71]" />
                                                </div>
                                                <h3 className="text-sm font-medium text-white/60">{stat.title}</h3>
                                            </div>
                                            <div className="text-3xl font-bold text-white shadow-[#2ECC71] drop-shadow-sm">{stat.val}</div>
                                            <div className={`text-xs mt-2 ${i === 0 ? 'text-[#2ECC71]' : 'text-white/40'}`}>{stat.sub}</div>
                                        </GlassCard>
                                    ))}
                                </div>

                                <GlassCard className="p-8 mt-8 relative overflow-hidden group border border-[#2ECC71]/20">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                                <Sparkles className="w-5 h-5 text-[#D4FF00]" />
                                                Ready to start building?
                                            </h3>
                                            <p className="text-white/50 text-sm max-w-md">Explore our comprehensive guides, API references, and SDKs to integrate in minutes.</p>
                                        </div>
                                        <a href="/#api" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#050505] font-semibold rounded-xl hover:bg-[#E5FF66] transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)]">
                                            Read Docs
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </GlassCard>
                            </div>
                        )}

                        {/* API Keys Tab */}
                        {activeTab === 'keys' && (
                            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                                    <div>
                                        <h2 className="text-xl font-semibold">Secret Keys</h2>
                                        <p className="text-sm text-white/40 mt-1">These keys allow you to authenticate API requests.</p>
                                    </div>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2ECC71] to-[#27ae60] text-[#050505] font-semibold rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(46,204,113,0.3)] hover:shadow-[0_0_25px_rgba(46,204,113,0.5)] text-sm"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Create secret key
                                    </button>
                                </div>

                                <GlassCard className="overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm whitespace-nowrap">
                                            <thead>
                                                <tr className="border-b border-white/[0.04] bg-white/[0.01]">
                                                    <th className="px-6 py-4 font-medium text-white/40 uppercase tracking-wider text-xs">Name</th>
                                                    <th className="px-6 py-4 font-medium text-white/40 uppercase tracking-wider text-xs">Token</th>
                                                    <th className="px-6 py-4 font-medium text-white/40 uppercase tracking-wider text-xs">Created</th>
                                                    <th className="px-6 py-4 font-medium text-white/40 uppercase tracking-wider text-xs text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {apiKeys.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={4} className="px-6 py-12 text-center text-white/40">
                                                            No API keys found. Create one to get started.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    apiKeys.map((key) => (
                                                        <tr key={key.id} className="border-b last:border-0 border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                                                            <td className="px-6 py-5 font-medium flex items-center gap-2">
                                                                <Key className="w-3.5 h-3.5 text-[#2ECC71]/70" />
                                                                {key.name}
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <div className="flex items-center gap-3">
                                                                    <code className="px-3 py-1.5 bg-black/40 border border-white/[0.05] rounded-md font-mono text-white/80 select-all max-w-[200px] sm:max-w-none overflow-hidden text-ellipsis">
                                                                        {showKeyId === key.id ? key.token : key.token.substring(0, 12) + '•••••••••••••••••••••••••'}
                                                                    </code>
                                                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                        <button
                                                                            onClick={() => setShowKeyId(showKeyId === key.id ? null : key.id)}
                                                                            className="p-1.5 text-white/40 hover:text-white transition-colors rounded-md hover:bg-white/10"
                                                                            title={showKeyId === key.id ? "Hide key" : "Show key"}
                                                                        >
                                                                            {showKeyId === key.id ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                                        </button>
                                                                        <button
                                                                            onClick={() => handleCopy(key.token, key.id)}
                                                                            className="p-1.5 text-white/40 hover:text-[#2ECC71] transition-colors rounded-md hover:bg-[#2ECC71]/10"
                                                                            title="Copy key"
                                                                        >
                                                                            {copiedId === key.id ? <Check className="w-4 h-4 text-[#2ECC71]" /> : <Copy className="w-4 h-4" />}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5 text-white/50">{formatDate(key.createdAt)}</td>
                                                            <td className="px-6 py-5 text-right">
                                                                <button
                                                                    onClick={() => handleDeleteKey(key.id, key.name)}
                                                                    className="p-2 text-white/30 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all rounded-md hover:bg-red-500/10 inline-flex items-center"
                                                                    title="Delete key"
                                                                >
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="bg-[#D4FF00]/5 border-t border-[#D4FF00]/10 px-6 py-4">
                                        <p className="text-xs text-[#D4FF00]/80 flex items-start sm:items-center gap-2">
                                            <Shield className="w-4 h-4 shrink-0" />
                                            Never share your secret keys. Keep them secure and hidden from public repositories.
                                        </p>
                                    </div>
                                </GlassCard>
                            </div>
                        )}

                        {/* Webhooks Tab */}
                        {activeTab === 'webhooks' && (
                            <div className="space-y-6 animate-in fade-in duration-500">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h2 className="text-xl font-semibold">Webhook Endpoints</h2>
                                        <p className="text-sm text-white/40 mt-1">Receive real-time notifications for events on your account.</p>
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-[#2ECC71]/10 text-[#2ECC71] hover:bg-[#2ECC71]/20 font-medium rounded-lg transition-colors text-sm">
                                        <Plus className="w-4 h-4" />
                                        Add endpoint
                                    </button>
                                </div>

                                <GlassCard className="p-16 text-center border-dashed border-2 border-white/[0.05] bg-transparent">
                                    <div className="w-16 h-16 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center mx-auto mb-5 rotate-12 group-hover:rotate-0 transition-transform shadow-[0_0_20px_rgba(46,204,113,0.1)]">
                                        <Webhook className="w-8 h-8 text-[#2ECC71]" />
                                    </div>
                                    <h3 className="text-xl font-medium mb-3 text-white/90">No webhooks configured</h3>
                                    <p className="text-white/40 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                                        Configure a webhook endpoint to receive real-time updates when farm data changes, models complete, or alerts are generated.
                                    </p>
                                    <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium rounded-lg transition-colors text-sm border border-white/[0.1] hover:border-[#2ECC71]/30 hover:shadow-[0_0_15px_rgba(46,204,113,0.2)]">
                                        <Book className="w-4 h-4" />
                                        View Webhook Guide
                                    </button>
                                </GlassCard>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Create Key Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
                    <GlassCard className="w-full max-w-md bg-[#0a0a0a]/95 border-[#2ECC71]/20 shadow-[0_0_50px_rgba(46,204,113,0.15)] animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
                            <h2 className="text-xl font-semibold">Create new secret key</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleGenerateKey} className="p-6">
                            <div className="space-y-4 mb-8">
                                <div>
                                    <label htmlFor="keyName" className="block text-sm font-medium text-white/70 mb-2">
                                        Key Name
                                    </label>
                                    <input
                                        id="keyName"
                                        type="text"
                                        autoFocus
                                        value={newKeyName}
                                        onChange={(e) => setNewKeyName(e.target.value)}
                                        placeholder="e.g. Production Mobile App"
                                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 focus:ring-1 focus:ring-[#2ECC71]/30 transition-all font-medium"
                                    />
                                    <p className="text-xs text-white/40 mt-2">
                                        A recognizable name to help you identify this key later.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t border-white/[0.06]">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-5 py-2.5 text-sm font-medium text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-transparent"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 text-sm font-semibold bg-[#2ECC71] text-[#050505] hover:bg-[#27ae60] rounded-lg transition-colors shadow-[0_0_15px_rgba(46,204,113,0.2)] hover:shadow-[0_0_20px_rgba(46,204,113,0.4)] flex items-center gap-2"
                                >
                                    <Key className="w-4 h-4" />
                                    Generate Key
                                </button>
                            </div>
                        </form>
                    </GlassCard>
                </div>
            )}
        </div>
    );
};

export default DeveloperPortal;
