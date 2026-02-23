import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, Book, Webhook, Key, Layers, ChevronRight, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import GlassCard from './GlassCard';

const docSections = [
  { id: 'rest', label: 'REST API', icon: Code2 },
  { id: 'graphql', label: 'GraphQL', icon: Layers },
  { id: 'webhooks', label: 'Webhooks', icon: Webhook },
  { id: 'sdks', label: 'SDKs', icon: Terminal },
  { id: 'auth', label: 'Authentication', icon: Key },
  { id: 'guides', label: 'Guides', icon: Book },
];

const codeExamples: Record<string, { language: string; title: string; code: string }[]> = {
  rest: [
    {
      language: 'cURL',
      title: 'Get Farm Analytics',
      code: `curl -X GET "https://api.hurudza.ai/v2/farms/{farm_id}/analytics" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
    },
    {
      language: 'JSON Response',
      title: 'Response',
      code: `{
  "farm_id": "farm_zw_001",
  "period": "2026-02",
  "analytics": {
    "ndvi_score": 0.82,
    "soil_moisture": 72.4,
    "crop_health": "excellent",
    "yield_forecast": {
      "value": 4.2,
      "unit": "tonnes/hectare",
      "confidence": 0.94
    },
    "alerts": [
      {
        "type": "weather",
        "severity": "moderate",
        "message": "Heavy rainfall expected in 48hrs"
      }
    ]
  }
}`,
    },
  ],
  graphql: [
    {
      language: 'GraphQL',
      title: 'Query Farm Data',
      code: `query GetFarmInsights($farmId: ID!) {
  farm(id: $farmId) {
    name
    location { lat lng province }
    zones {
      id
      cropType
      healthScore
      soilMoisture
      lastUpdated
    }
    analytics {
      yieldForecast
      ndviTimeSeries(period: MONTHLY)
    }
  }
}`,
    },
  ],
  webhooks: [
    {
      language: 'JSON',
      title: 'Webhook Payload — Alert Event',
      code: `{
  "event": "alert.triggered",
  "timestamp": "2026-02-22T17:11:00Z",
  "data": {
    "farm_id": "farm_zw_001",
    "alert_type": "pest_detection",
    "severity": "high",
    "zone": "Zone A - Maize",
    "recommendation": "Apply targeted pesticide within 24hrs",
    "confidence": 0.96
  }
}`,
    },
  ],
  sdks: [
    {
      language: 'Python',
      title: 'Python SDK',
      code: `from hurudza_ai import HurudzaClient

client = AgroClient(api_key="YOUR_API_KEY")

# Get real-time farm data
farm = client.farms.get("farm_zw_001")
analytics = farm.get_analytics(period="current")

print(f"NDVI Score: {analytics.ndvi_score}")
print(f"Yield Forecast: {analytics.yield_forecast} t/ha")

# Subscribe to alerts
farm.alerts.subscribe(
    types=["weather", "pest", "harvest"],
    callback=handle_alert
)`,
    },
  ],
  auth: [
    {
      language: 'cURL',
      title: 'OAuth 2.0 Token Request',
      code: `curl -X POST "https://auth.hurudza.ai/oauth/token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=client_credentials" \\
  -d "client_id=YOUR_CLIENT_ID" \\
  -d "client_secret=YOUR_CLIENT_SECRET" \\
  -d "scope=farms:read analytics:read alerts:write"`,
    },
  ],
  guides: [
    {
      language: 'Markdown',
      title: 'Quick Start Guide',
      code: `# Getting Started with Hurudza AI API

## 1. Create an Account
   Sign up at developer.hurudza.ai

## 2. Generate API Keys
   Navigate to Settings → API Keys → Create New

## 3. Make Your First Request
   Use the REST API or install an SDK

## 4. Set Up Webhooks
   Configure real-time event notifications

## Rate Limits:
   - Free Tier:  100 requests/min
   - Pro Tier:   1,000 requests/min
   - Enterprise: Unlimited`,
    },
  ],
};

const APIPortal: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.08);
  const [activeSection, setActiveSection] = useState('rest');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }).catch(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const currentExamples = codeExamples[activeSection] || [];

  return (
    <section id="api" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-[#2ECC71]/[0.04] blur-[180px]" />


      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(46,204,113,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(46,204,113,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 mb-6">
            <Terminal className="w-3.5 h-3.5 text-[#2ECC71]" />
            <span className="text-[#2ECC71] text-xs font-medium uppercase tracking-wider">Developer Portal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Build with{' '}
            <span className="bg-gradient-to-r from-[#2ECC71] to-[#D4FF00] bg-clip-text text-transparent">
              Hurudza AI API
            </span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            Integrate agricultural intelligence into your applications with our comprehensive
            REST API, GraphQL endpoint, webhooks, and native SDKs.
          </p>
        </div>

        {/* API Stats */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<50ms', label: 'Avg Response' },
            { value: '200+', label: 'Endpoints' },
            { value: '4 SDKs', label: 'Native Libraries' },
          ].map((stat, i) => (
            <GlassCard key={i} className="p-5 text-center">
              <div className="text-2xl font-bold text-[#2ECC71]">{stat.value}</div>
              <div className="text-xs text-white/40 mt-1">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Documentation Layout */}
        <div className={`grid lg:grid-cols-[240px_1fr] gap-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <GlassCard className="p-3">
              <div className="space-y-1">
                {docSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/20'
                        : 'text-white/40 hover:text-white/60 hover:bg-white/[0.03] border border-transparent'
                    }`}
                  >
                    <section.icon className="w-4 h-4 flex-shrink-0" />
                    <span>{section.label}</span>
                    {activeSection === section.id && (
                      <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.06] px-4">
                <button className="flex items-center gap-2 text-xs text-white/30 hover:text-[#2ECC71] transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Full Documentation
                </button>
              </div>
            </GlassCard>
          </div>

          {/* Code Content */}
          <div className="space-y-5">
            {currentExamples.map((example, i) => (
              <GlassCard key={`${activeSection}-${i}`} className="overflow-hidden">
                {/* Code Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <span className="text-xs text-white/40 font-mono">{example.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#2ECC71]/60 font-mono uppercase px-2 py-0.5 rounded bg-[#2ECC71]/5">
                      {example.language}
                    </span>
                    <button
                      onClick={() => handleCopy(example.code, i)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/40 hover:text-white hover:bg-white/[0.05] transition-all"
                    >
                      {copiedIndex === i ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#2ECC71]" />
                          <span className="text-[#2ECC71]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Code Block */}
                <div className="p-5 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed">
                    <code className="text-white/70">
                      {example.code.split('\n').map((line, lineIdx) => (
                        <div key={lineIdx} className="flex">
                          <span className="text-white/15 select-none w-8 text-right mr-4 flex-shrink-0 text-xs leading-relaxed">
                            {lineIdx + 1}
                          </span>
                          <span className="flex-1">
                            {highlightSyntax(line)}
                          </span>
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </GlassCard>
            ))}

            {/* Try It Section */}
            <GlassCard className="p-6" hover>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold text-white">Try the API</h4>
                  <p className="text-sm text-white/40 mt-1">Get your free API key and start building in minutes.</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 text-sm font-medium text-[#050505] bg-gradient-to-r from-[#2ECC71] to-[#27ae60] rounded-lg shadow-[0_0_20px_rgba(46,204,113,0.2)] hover:shadow-[0_0_30px_rgba(46,204,113,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    Get API Key
                  </button>
                  <button className="px-5 py-2.5 text-sm text-white/60 border border-white/[0.1] rounded-lg hover:border-[#2ECC71]/20 hover:text-white transition-all">
                    View Docs
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple syntax highlighting
function highlightSyntax(line: string): React.ReactNode {
  // Highlight strings
  const parts = line.split(/(\"[^\"]*\")/g);
  return parts.map((part, i) => {
    if (part.startsWith('"') && part.endsWith('"')) {
      return <span key={i} className="text-[#2ECC71]/80">{part}</span>;
    }
    // Highlight keywords
    const keywords = ['curl', 'query', 'from', 'import', 'print', 'def', 'class', 'return', 'if', 'else', 'true', 'false', 'null', 'GET', 'POST', 'PUT', 'DELETE'];
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    const subParts = part.split(keywordRegex);
    return subParts.map((sub, j) => {
      if (keywords.some(k => k.toLowerCase() === sub.toLowerCase())) {
        return <span key={`${i}-${j}`} className="text-[#D4FF00]/80">{sub}</span>;
      }
      // Highlight numbers
      if (/^\d+\.?\d*$/.test(sub.trim())) {
        return <span key={`${i}-${j}`} className="text-[#D4FF00]/60">{sub}</span>;
      }
      // Highlight comments
      if (sub.trim().startsWith('#') || sub.trim().startsWith('//')) {
        return <span key={`${i}-${j}`} className="text-white/25 italic">{sub}</span>;
      }
      return <span key={`${i}-${j}`}>{sub}</span>;
    });
  });
}

export default APIPortal;
