'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { MessageSquare, ArrowLeft, Copy, Check, Search } from 'lucide-react';
import Link from 'next/link';

const SCRIPTS = [
  {
    id: 1,
    title: 'New Property Launch',
    category: 'Marketing',
    text: `🚀 *New Launch Alert!*

Hi [Client Name], 

Ek bohot hi exciting new project launch hua hai [Location] mein. 
✅ [BHK] Apartment starting at ₹[Price].
✅ Prime location with all luxury amenities.
✅ Ready by [Year].

Aap kab free hain site visit ke liye?
Link: [Property Link]

Regards,
[Your Name]`,
  },
  {
    id: 2,
    title: 'Post-Visit Follow Up',
    category: 'Follow-up',
    text: `Namaste [Client Name], 

Aapko kal ki site visit kaisi lagi? [Project Name] ke [BHK] unit ke liye bohot enquiries aa rahi hain. 

Agar aapko budget ya loan details chahiye to main aapke liye EMI options share kar sakta hoon. 

Batayein kab baat kar sakte hain.`,
  },
  {
    id: 3,
    title: 'Referral Request',
    category: 'Referral',
    text: `Hi [Client Name], 

Umeed hai aap apne naye ghar mein khush honge! 🏠

Agar aapke dosto ya family mein koi ghar search kar raha ho, to mera number zaroor share kijiye ga. Main unhe best deal dilane mein help karunga. 

Thank you!`,
  },
  {
    id: 4,
    title: 'Price Drop Alert',
    category: 'Marketing',
    text: `📢 *Breaking: Price Drop!*

Hi [Client Name], 

Aapne jis property mein interest dikhaya tha [Project Name], wahan ab limited period ke liye ₹[Discount] ka discount chal raha hai. 

Ye deal miss mat kijiye ga. Call me for details!`,
  }
];

export default function WhatsAppScripts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredScripts = SCRIPTS.filter(script => 
    script.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    script.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-accent mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold font-display text-slate-900">WhatsApp Scripts</h1>
                <p className="text-slate-500">Ready-to-use Hindi/English sales templates.</p>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search scripts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none w-full md:w-64 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredScripts.map((script) => (
              <div key={script.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 block">
                      {script.category}
                    </span>
                    <h3 className="font-bold text-slate-900">{script.title}</h3>
                  </div>
                  <button
                    onClick={() => copyToClipboard(script.text, script.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      copiedId === script.id ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {copiedId === script.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                
                <div className="flex-1 bg-slate-50 rounded-2xl p-4 text-sm text-slate-600 font-mono whitespace-pre-wrap mb-4 overflow-y-auto max-h-48 border border-slate-100">
                  {script.text}
                </div>
                
                <button
                  onClick={() => copyToClipboard(script.text, script.id)}
                  className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  {copiedId === script.id ? 'Copied to Clipboard' : 'Copy Template'}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Pro Tip: Personalization is Key
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Templates use [Brackets] for placeholders. Copy karne ke baad hamesha client ka naam aur property details 
              change karein. WhatsApp par Bold karne ke liye text ke aage aur peeche * (asterisk) use karein (e.g. *Price*).
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
