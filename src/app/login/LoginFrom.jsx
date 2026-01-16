'use client';
import React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginFrom = () => {
    const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // --- MOCK AUTHENTICATION LOGIC ---
    // 1. Check Hardcoded Credentials
    if (formData.email === 'admin@foodiefinds.com' && formData.password === 'admin123') {
      
      // 2. Set Cookie (Expires in 1 day)
      // This is the "Token" that the Middleware looks for
      document.cookie = "auth=true; path=/; max-age=86400";
      
      // 3. Simulated Network Delay (Optional, for UX)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 4. Redirect to the Protected Page (Add Item)
      router.push('/admin/add-dish'); 
      router.refresh(); // Update client state
    } else {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };
    return (
        <div>
              <div className="card w-full max-w-sm bg-white shadow-xl border border-slate-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">Admin Login</h2>
          
          {error && (
            <div role="alert" className="alert alert-error text-white text-sm py-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label font-bold text-slate-600">Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="admin@foodiefinds.com" 
                className="input input-bordered bg-white" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-control">
              <label className="label font-bold text-slate-600">Password</label>
              <input 
                type="password" 
                name="password"
                placeholder="••••••••" 
                className="input input-bordered bg-white" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>

            <button 
              type="submit" 
              className="btn bg-orange-600 hover:bg-orange-700 text-white w-full mt-4"
              disabled={isLoading}
            >
              {isLoading ? <span className="loading loading-spinner"></span> : 'Login'}
            </button>
          </form>

          <div className="divider text-xs text-slate-400">Demo Credentials</div>
          
          <div className="text-center text-xs text-slate-500 bg-slate-100 p-3 rounded-lg">
            <p><span className="font-bold">Email:</span> admin@foodiefinds.com</p>
            <p><span className="font-bold">Pass:</span> admin123</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default LoginFrom;