'use client';

import { useParams } from 'next/navigation';
import { 
  MapPin, 
  IndianRupee, 
  Home, 
  Square, 
  MessageCircle, 
  Phone, 
  Share2,
  CheckCircle2,
  Building2,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function PropertyView() {
  const params = useParams();
  const dataString = params.data as string;
  
  let data: any = null;
  let error = false;

  if (dataString) {
    try {
      // Convert URL-safe base64 back to standard base64
      let base64 = dataString.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) {
        base64 += '=';
      }
      const decodedStr = decodeURIComponent(escape(atob(base64)));
      data = JSON.parse(decodedStr);
    } catch (e) {
      console.error('Failed to decode property data', e);
      error = true;
    }
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Invalid Link</h1>
        <p className="text-slate-500 mb-8">This property link seems to be broken or invalid.</p>
        <Link href="/" className="px-6 py-3 bg-slate-900 text-white rounded-full font-bold">
          Go to Home
        </Link>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-slate-200 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Visual Header */}
      <div className="relative h-[40vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
        <Building2 className="h-24 w-24 text-white/20 relative z-0" />
        
        {/* Floaties */}
        <div className="absolute bottom-6 left-6 z-20">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-accent text-white text-[10px] font-bold uppercase tracking-wider mb-2">
            {data.type}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-display">
            {data.title}
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-6 py-10 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pb-10 border-b border-slate-100">
              <div className="flex flex-col items-center text-center">
                <IndianRupee className="h-6 w-6 text-brand-accent mb-2" />
                <p className="text-xs text-slate-400 font-bold uppercase">Price</p>
                <p className="font-bold">₹{data.price}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Home className="h-6 w-6 text-brand-accent mb-2" />
                <p className="text-xs text-slate-400 font-bold uppercase">Size</p>
                <p className="font-bold">{data.bhk || 'N/A'}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Square className="h-6 w-6 text-brand-accent mb-2" />
                <p className="text-xs text-slate-400 font-bold uppercase">Area</p>
                <p className="font-bold">{data.area || 'Ask Agent'}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-display">Property Description</h3>
              <p className="text-slate-600 leading-relaxed">
                {data.description || `This beautiful ${data.type} is located in ${data.location}. It offers a perfect blend of luxury and comfort for your family. Contact us today for more details and site visit.`}
              </p>
            </div>

            {/* Location */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-4">
              <MapPin className="h-6 w-6 text-brand-accent shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-slate-600 text-sm">{data.location}</p>
              </div>
            </div>

            {/* Amenities */}
            {data.amenities && data.amenities.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-6 font-display">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {data.amenities.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Agent Card */}
          <div className="relative">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="h-24 w-24 rounded-full bg-slate-100 border-2 border-brand-accent mb-4 overflow-hidden">
                    {data.agentPhoto ? (
                      <img src={data.agentPhoto} alt={data.agentName} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-3xl font-bold text-slate-300">
                        {data.agentName?.[0] || 'A'}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{data.agentName || 'Real Estate Agent'}</h3>
                  {data.agency && <p className="text-xs text-slate-500 font-medium">{data.agency}</p>}
                  {data.reraId && (
                    <div className="mt-2 px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-500 tracking-wider">
                      RERA: {data.reraId}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/91${data.agentPhone}?text=Hi, I am interested in ${data.title} (${data.price})`}
                    className="w-full py-4 rounded-xl bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-100"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Agent
                  </a>
                  <a
                    href={`tel:${data.agentPhone}`}
                    className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <p className="text-xs text-blue-600 font-bold uppercase mb-2">Want a page like this?</p>
                <Link href="/" className="text-sm font-bold text-blue-900 hover:underline">
                  Join Estate CRO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2026 Estate CRO Presentations</p>
      </footer>
    </div>
  );
}
