'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Layout, ArrowLeft, Plus, Trash2, Share2, Copy, Check, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PropertyPresenter() {
  const [property, setProperty] = useState(() => {
    const initialState = {
      title: '',
      location: '',
      price: '',
      type: 'Apartment',
      bhk: '2 BHK',
      area: '',
      amenities: ['24/7 Security', 'Parking'],
      agentName: '',
      agentPhone: '',
      agentPhoto: '',
      reraId: '',
      agency: '',
      description: ''
    };

    if (typeof window !== 'undefined') {
      const savedProfile = localStorage.getItem('realtor_profile');
      if (savedProfile) {
        const p = JSON.parse(savedProfile);
        return {
          ...initialState,
          agentName: p.name || '',
          agentPhone: p.phone || '',
          agentPhoto: p.photoUrl || '',
          reraId: p.reraId || '',
          agency: p.agency || ''
        };
      }
    }
    return initialState;
  });

  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleAmenityAdd = () => {
    setProperty({ ...property, amenities: [...property.amenities, ''] });
  };

  const handleAmenityChange = (index: number, value: string) => {
    const newAmenities = [...property.amenities];
    newAmenities[index] = value;
    setProperty({ ...property, amenities: newAmenities });
  };

  const handleAmenityRemove = (index: number) => {
    const newAmenities = property.amenities.filter((_, i) => i !== index);
    setProperty({ ...property, amenities: newAmenities });
  };

  const generateLink = () => {
    // Basic validation
    if (!property.title || !property.price || !property.agentPhone) {
      alert('Please fill at least Title, Price, and Agent Phone.');
      return;
    }

    // Encode data to base64
    const dataStr = JSON.stringify(property);
    const encodedData = btoa(unescape(encodeURIComponent(dataStr)));
    const link = `${window.location.origin}/p/${encodedData}`;
    setGeneratedLink(link);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <div className="flex items-center gap-4 mb-10">
            <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Layout className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-display text-slate-900">Property Presenter</h1>
              <p className="text-slate-500">Create a beautiful shareable landing page for your property.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-4">Property Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Property Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Skyline Luxury Apartments"
                      value={property.title}
                      onChange={(e) => setProperty({ ...property, title: e.target.value })}
                      className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase">Price (₹)</label>
                      <input
                        type="text"
                        placeholder="e.g. 75 Lakhs"
                        value={property.price}
                        onChange={(e) => setProperty({ ...property, price: e.target.value })}
                        className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase">Type</label>
                      <select
                        value={property.type}
                        onChange={(e) => setProperty({ ...property, type: e.target.value })}
                        className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                      >
                        <option>Apartment</option>
                        <option>Villa</option>
                        <option>Plot</option>
                        <option>Office</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Sector 45, Gurgaon"
                      value={property.location}
                      onChange={(e) => setProperty({ ...property, location: e.target.value })}
                      className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-4">Agent Info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={property.agentName}
                      onChange={(e) => setProperty({ ...property, agentName: e.target.value })}
                      className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">WhatsApp Number</label>
                    <input
                      type="text"
                      placeholder="99999XXXXX"
                      value={property.agentPhone}
                      onChange={(e) => setProperty({ ...property, agentPhone: e.target.value })}
                      className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={generateLink}
                className="w-full py-4 rounded-2xl bg-brand-accent text-white font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Share2 className="h-5 w-5" />
                Generate Shareable Link
              </button>
            </div>

            {/* Link Generation Section */}
            <div className="space-y-6">
              {generatedLink ? (
                <div className="bg-white rounded-3xl p-8 border border-brand-accent shadow-xl animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-6 w-6 text-brand-accent" />
                    <h3 className="text-xl font-bold text-slate-900">Your Link is Ready!</h3>
                  </div>
                  
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Aap is link ko copy karke WhatsApp par clients ke saath share kar sakte hain. 
                    Unhe ek professional property presentation page dikhega.
                  </p>

                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 mb-6">
                    <input
                      type="text"
                      readOnly
                      value={generatedLink}
                      className="bg-transparent border-none focus:ring-0 text-xs text-slate-500 truncate flex-1"
                    />
                    <button
                      onClick={copyLink}
                      className={`p-2 rounded-lg transition-colors ${
                        copied ? 'bg-emerald-50 text-emerald-600' : 'bg-white border border-slate-200 text-slate-400'
                      }`}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={copyLink}
                      className="flex-1 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
                    >
                      {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                    <a
                      href={generatedLink}
                      target="_blank"
                      className="flex-1 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-bold text-center hover:bg-slate-100 transition-colors"
                    >
                      Preview Page
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-100/50 rounded-3xl p-12 border border-dashed border-slate-300 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <Layout className="h-12 w-12 text-slate-300 mb-4" />
                  <p className="text-slate-500 text-sm max-w-xs mx-auto">
                    Details fill karne ke baad &apos;Generate Link&apos; par click karein.
                  </p>
                </div>
              )}

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4">Why use this?</h4>
                <div className="space-y-4">
                  {[
                    "No login or database required.",
                    "Instantly share via WhatsApp.",
                    "Mobile-optimized for quick reading.",
                    "Builds trust with professional look."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                      <span className="text-sm text-slate-600">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
