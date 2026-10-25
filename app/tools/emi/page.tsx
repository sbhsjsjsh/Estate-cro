'use client';

import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';
import { Calculator, IndianRupee, ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';

export default function EMICalculator() {
  const [amount, setAmount] = useState<number>(5000000);
  const [rate, setRate] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(20);

  const p = amount;
  const r = rate / 12 / 100;
  const n = tenure * 12;
  
  let emi = 0;
  let totalInterest = 0;
  let totalPayment = 0;

  if (p && r && n) {
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    emi = Math.round(emiValue);
    totalPayment = Math.round(emiValue * n);
    totalInterest = Math.round(totalPayment - p);
  }

  const formatIndianCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(num);
  };

  const toWords = (num: number) => {
    if (num >= 10000000) return `${(num / 10000000).toFixed(2)} Crore`;
    if (num >= 100000) return `${(num / 100000).toFixed(2)} Lakh`;
    return `${(num / 1000).toFixed(2)} Thousand`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-accent mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-display text-slate-900">EMI Calculator</h1>
              <p className="text-slate-500">Calculate home loan EMIs instantly for your clients.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="space-y-8">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-slate-700">Loan Amount (₹)</label>
                    <span className="text-brand-accent font-mono font-bold">{toWords(amount)}</span>
                  </div>
                  <div className="relative mb-4">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">₹</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none font-mono"
                    />
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="100000000"
                    step="100000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-slate-700">Interest Rate (%)</label>
                    <span className="text-brand-accent font-mono font-bold">{rate}%</span>
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="number"
                      step="0.1"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none font-mono"
                    />
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-slate-700">Tenure (Years)</label>
                    <span className="text-brand-accent font-mono font-bold">{tenure} Years</span>
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none font-mono"
                    />
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-blue-900/20">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Monthly EMI</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl md:text-5xl font-bold font-display">₹{formatIndianCurrency(emi)}</span>
                  <span className="text-slate-400">/ month</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-800">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Total Interest</p>
                    <p className="text-lg font-bold">₹{formatIndianCurrency(totalInterest)}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Total Amount</p>
                    <p className="text-lg font-bold">₹{formatIndianCurrency(totalPayment)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Info className="h-5 w-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-sm">Agent&apos;s Tip</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Most Indian banks offer home loans between 8.5% to 9.5%. Hamesha thoda buffer rakh kar client ko estimate dein. 
                      Aap ye calculation share bhi kar sakte hain (Screenshot lene par clean result milega).
                    </p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => window.print()}
                className="w-full py-4 rounded-2xl bg-white border border-slate-200 font-bold text-slate-900 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                Download PDF / Print
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
