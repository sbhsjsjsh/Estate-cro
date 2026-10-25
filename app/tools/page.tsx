'use client';

import Navigation from '@/components/Navigation';
import { 
  Calculator, 
  Ruler, 
  MessageSquare, 
  Layout, 
  ArrowRight,
  TrendingUp,
  FileText,
  Map,
  User
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function ToolsDashboard() {
  const tools = [
    {
      title: 'Personal Branding',
      description: 'Set your name, photo, and RERA ID to customize all tools and pages.',
      icon: User,
      href: '/tools/profile',
      color: 'bg-indigo-50 text-indigo-600',
      tag: 'Critical'
    },
    {
      title: 'EMI Calculator',
      description: 'Indian style EMI calculator with Lakhs/Crores support and tax breakdown.',
      icon: Calculator,
      href: '/tools/emi',
      color: 'bg-blue-50 text-blue-600',
      tag: 'Popular'
    },
    {
      title: 'Area Converter',
      description: 'Convert between Gaj, Bigha, Acre, Sq Ft, and Marla instantly.',
      icon: Ruler,
      href: '/tools/converter',
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'WhatsApp Scripts',
      description: 'High-converting Hindi/English templates for property sharing and follow-ups.',
      icon: MessageSquare,
      href: '/tools/scripts',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Property Presenter',
      description: 'Create a beautiful shareable page for your property in seconds.',
      icon: Layout,
      href: '/tools/presenter',
      color: 'bg-purple-50 text-purple-600',
      tag: 'New'
    },
    {
      title: 'Stamp Duty Calc',
      description: 'Check stamp duty and registration charges for major Indian states.',
      icon: FileText,
      href: '#',
      color: 'bg-orange-50 text-orange-600',
      disabled: true
    },
    {
      title: 'Market Trends',
      description: 'View average price per sq ft trends in top Indian cities.',
      icon: TrendingUp,
      href: '#',
      color: 'bg-pink-50 text-pink-600',
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-3xl font-bold font-display text-slate-900 mb-2">Agent Dashboard</h1>
          <p className="text-slate-500">Welcome back! Choose a tool to get started with your sales today.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={tool.href}
                className={`group block p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-brand-accent h-full relative overflow-hidden ${
                  tool.disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''
                }`}
              >
                <div className={`h-12 w-12 rounded-2xl ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="h-6 w-6" />
                </div>
                
                {tool.tag && (
                  <span className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                    {tool.tag}
                  </span>
                )}

                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  {tool.title}
                  {!tool.disabled && (
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-accent" />
                  )}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {tool.description}
                </p>
                
                {tool.disabled && (
                  <span className="inline-block mt-4 text-[10px] font-bold text-slate-400 italic">
                    Coming Soon
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Tips Section */}
        <section className="mt-16 bg-white rounded-3xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-lg bg-yellow-50 flex items-center justify-center">
              <Map className="h-4 w-4 text-yellow-600" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Sales Pro Tip</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            Jab bhi aap property share karein, hamesha <strong>EMI Calculator</strong> link saath bhejें. 
            Client ko budget clear hone se deal close hone ke chances 2x badh jaate hain. Estate CRO use karke 
            professional link banayein.
          </p>
        </section>
      </main>
    </div>
  );
}
