'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Ruler, ArrowLeft, RefreshCw, Info } from 'lucide-react';
import Link from 'next/link';

type Unit = 'sqft' | 'gaj' | 'bigha' | 'acre' | 'marla' | 'sqmtr';

const CONVERSION_FACTORS: Record<Unit, number> = {
  sqft: 1,
  gaj: 9, // 1 Gaj (Sq Yard) = 9 Sq Ft
  bigha: 27000, // Standard Bigha (varies by state, using a common one)
  acre: 43560, // 1 Acre = 43560 Sq Ft
  marla: 272.25, // 1 Marla = 272.25 Sq Ft
  sqmtr: 10.7639, // 1 Sq Mtr = 10.7639 Sq Ft
};

const UNIT_NAMES: Record<Unit, string> = {
  sqft: 'Square Feet (Sq.Ft)',
  gaj: 'Gaj (Square Yard)',
  bigha: 'Bigha (Standard)',
  acre: 'Acre',
  marla: 'Marla',
  sqmtr: 'Square Meter',
};

export default function AreaConverter() {
  const [value, setValue] = useState<number>(1000);
  const [fromUnit, setFromUnit] = useState<Unit>('sqft');

  const convertValue = (toUnit: Unit) => {
    const sqftValue = value * CONVERSION_FACTORS[fromUnit];
    return (sqftValue / CONVERSION_FACTORS[toUnit]).toFixed(4);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-accent mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Ruler className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-display text-slate-900">Area Converter</h1>
              <p className="text-slate-500">Convert Indian property units instantly.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Value</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-accent focus:outline-none text-xl font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">From Unit</label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value as Unit)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-accent focus:outline-none text-lg font-medium appearance-none"
                >
                  {Object.entries(UNIT_NAMES).map(([key, name]) => (
                    <option key={key} value={key}>{name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.keys(UNIT_NAMES).map((unit) => {
              if (unit === fromUnit) return null;
              return (
                <div key={unit} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">{UNIT_NAMES[unit as Unit]}</p>
                  <p className="text-2xl font-bold font-display text-slate-900 truncate">
                    {convertValue(unit as Unit)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-4">
            <Info className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-sm text-emerald-800 leading-relaxed">
              <p className="font-bold mb-1">Note for Agents:</p>
              <p>
                Bigha ki size India ke alag-alag states mein alag hoti hai (UP vs Rajasthan vs Punjab). 
                Ye converter Standard Bigha (approx 27,000 sq.ft) use kar raha hai. Plot measurements ke liye hamesha 
                local registry documents double-check karein.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
