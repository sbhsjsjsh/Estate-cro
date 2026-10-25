'use client';

import { useState, useEffect } from 'react';
import { User, Phone, Shield, Camera, Save, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function ProfileSettings() {
  const [profile, setProfile] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedProfile = localStorage.getItem('realtor_profile');
      if (savedProfile) {
        return JSON.parse(savedProfile);
      }
    }
    return {
      name: '',
      phone: '',
      reraId: '',
      photoUrl: '',
      agency: '',
      bio: ''
    };
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem('realtor_profile', JSON.stringify(profile));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl font-bold font-display text-slate-900 mb-2">Private Branding</h1>
            <p className="text-slate-500">Customize your tools and property pages with your personal brand.</p>
          </header>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl space-y-8">
            <div className="flex flex-col items-center gap-4 pb-8 border-b border-slate-100">
              <div className="h-24 w-24 rounded-full bg-slate-100 border-2 border-brand-accent flex items-center justify-center overflow-hidden">
                {profile.photoUrl ? (
                  <img src={profile.photoUrl} alt="Profile" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <User className="h-12 w-12 text-slate-300" />
                )}
              </div>
              <div className="text-center">
                <label className="text-sm font-bold text-brand-accent cursor-pointer hover:underline">
                  <input 
                    type="text" 
                    placeholder="Paste image URL here" 
                    className="hidden"
                    onChange={(e) => setProfile({...profile, photoUrl: e.target.value})}
                  />
                  Update Photo URL
                </label>
                <p className="text-xs text-slate-400 mt-1">Image URL from Google Drive or social media</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <User className="h-3 w-3" /> Full Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                  placeholder="Shakir Imam"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Phone className="h-3 w-3" /> WhatsApp Number
                </label>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                  placeholder="9999900000"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Shield className="h-3 w-3" /> RERA ID
                </label>
                <input
                  type="text"
                  value={profile.reraId}
                  onChange={(e) => setProfile({...profile, reraId: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                  placeholder="UPRERAXXXXXXXX"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Camera className="h-3 w-3" /> Agency Name
                </label>
                <input
                  type="text"
                  value={profile.agency}
                  onChange={(e) => setProfile({...profile, agency: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none"
                  placeholder="Luxury Homes Real Estate"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Short Bio / Tagline</label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none h-24"
                placeholder="Helping you find your dream home since 2015..."
              />
            </div>

            <div className="pt-6">
              <button
                onClick={handleSave}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-95"
              >
                {saved ? <CheckCircle className="h-5 w-5 text-emerald-400" /> : <Save className="h-5 w-5" />}
                {saved ? 'Profile Saved Locally' : 'Save Personal Branding'}
              </button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="text-blue-900 font-bold text-sm mb-2">Privacy Note</h4>
            <p className="text-xs text-blue-700 leading-relaxed">
              Ye data sirf aapke browser mein save hota hai. Koi bhi external server aapki personal details access nahi kar sakta. 
              Ye aapka &quot;Private Solution&quot; hai.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
