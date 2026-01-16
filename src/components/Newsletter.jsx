'use client';

import { useState, useEffect } from 'react';

export default function Newsletter() {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // 1. Set Loading State
    setStatus('loading');

    // 2. Simulate API Call (Wait 1.5 seconds)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (!isMounted) return null;

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden mt-10">
      
      {/* Background Pattern (Abstract Circles) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* SUCCESS STATE: Show Coupon Code */}
        {status === 'success' ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-lg mx-auto animate-in fade-in zoom-in duration-500">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-slate-300 mb-6">Here is your exclusive 20% off discount code:</p>
            
            <div className="bg-white text-slate-900 text-3xl font-mono font-bold py-4 px-8 rounded-lg border-2 border-orange-500 border-dashed inline-block tracking-widest selection:bg-orange-100">
              FOODIE20
            </div>
            
            <p className="text-sm text-slate-400 mt-4">Show this to your waiter to redeem.</p>
          </div>
        ) : (
          
          /* NORMAL STATE: Sign Up Form */
          <div className="max-w-2xl mx-auto">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Unlock 20% Off Your Next Meal
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Join our exclusive club to get the latest updates, secret menu items, and a special discount code instantly.
            </p>

            <form onSubmit={handleSubscribe} className="join w-full max-w-md shadow-2xl">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="input input-bordered join-item w-full text-white focus:outline-none focus:border-orange-500" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
              <button 
                className="btn btn-primary join-item px-8 border-none bg-orange-600 hover:bg-orange-700 text-white disabled:bg-slate-700 disabled:text-slate-400"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  'Get Code'
                )}
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}