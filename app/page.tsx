import Navigation from '@/components/Navigation';
import { 
  Calculator, 
  MessageSquare, 
  Layout, 
  ArrowRight, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Building2
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-6">
              <Zap className="h-3 w-3 text-brand-accent fill-brand-accent" />
              <span>The #1 Private Toolkit for Indian Realtors</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-slate-900 mb-8 text-wrap-balance">
              Aapka <span className="text-brand-accent">Private</span> Real Estate Sales System.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Individual realtors ke liye khas taur par banaya gaya. Apne personal brand ke saath properties share karein, 
              EMIs calculate karein, aur deals close karein—bina kisi complex CRM ke.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/tools"
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-brand-accent rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
              >
                Get Started for Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                View Features
              </Link>
            </div>
          </div>

          {/* Visual Anchor */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-2xl bg-slate-50">
              <div className="aspect-[16/9] flex items-center justify-center p-8 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {[
                    { icon: Calculator, label: "EMI Calculator", sub: "Lakhs & Crores support" },
                    { icon: MessageSquare, label: "WhatsApp Scripts", sub: "High converting templates" },
                    { icon: Layout, label: "Property Presenter", sub: "Share links, not big PDFs" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-brand-accent" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.label}</h3>
                      <p className="text-xs text-slate-500">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      </section>

      {/* Trust Section */}
      <section className="py-24 border-t border-slate-100" id="features">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">
                Indian Agents ke liye, <br />Indian Solution.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Normal CRMs bohot complex hote hain. Hame pata hai aapka kaam WhatsApp aur Calls par chalta hai. 
                Estate CRO aapke workflow ko smooth banati hai bina kisi headache ke.
              </p>
              
              <div className="space-y-4">
                {[
                  "No Database needed. Start using in 10 seconds.",
                  "WhatsApp ready property pages.",
                  "Precise Indian Area Units (Gaj, Bigha, Marla).",
                  "100% Mobile Friendly for on-the-field agents."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col justify-between h-64 hover:-translate-y-1 transition-transform">
                <ShieldCheck className="h-10 w-10 text-brand-accent" />
                <div>
                  <h3 className="text-xl font-bold mb-2">RERA Ready</h3>
                  <p className="text-slate-400 text-sm">Quick access to RERA websites and compliance tools.</p>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-64 hover:-translate-y-1 transition-transform">
                <Calculator className="h-10 w-10 text-brand-accent" />
                <div>
                  <h3 className="text-xl font-bold mb-2">EMI Experts</h3>
                  <p className="text-slate-600 text-sm">Calculate EMIs with Indian tax rules and stamp duty.</p>
                </div>
              </div>
              <div className="sm:col-span-2 p-8 rounded-3xl bg-blue-600 text-white flex flex-col justify-between min-h-48 hover:-translate-y-1 transition-transform relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">High Converting Offer</h3>
                  <p className="text-blue-100 max-w-md">Increase your response rate by 60% with professional property links that clients love to click.</p>
                </div>
                <ArrowUpRight className="absolute top-8 right-8 h-8 w-8 text-white/50 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-12 md:p-20 text-center shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">Ready to close more deals?</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
                Join 500+ Indian agents using Estate CRO to impress their clients and close faster.
              </p>
              <Link
                href="/tools"
                className="inline-flex px-10 py-5 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-lg active:scale-95"
              >
                Open Your Toolkit Now
              </Link>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Building2 className="h-5 w-5 text-brand-accent" />
            <span>Estate CRO</span>
          </div>
          <div className="flex gap-8">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <Link href="/tools" className="hover:text-slate-900">Dashboard</Link>
            <Link href="/tools/emi" className="hover:text-slate-900">EMI</Link>
          </div>
          <p>© 2026 Estate CRO. Made for Shakir.</p>
        </div>
      </footer>
    </div>
  );
}
