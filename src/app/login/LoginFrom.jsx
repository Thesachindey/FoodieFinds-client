'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Only render after client mount to avoid SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fillDemoCredentials = () => {
    setFormData({ email: 'admin@foodiefinds.com', password: 'admin123' });
    setError('');
  };

  // --- SIMPLE MOCK LOGIN LOGIC ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a short network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const { email, password } = formData;

    // Check credentials locally
    if (email === 'admin@foodiefinds.com' && password === 'admin123') {
      
      // Set a browser cookie
      document.cookie = "auth=true; path=/; max-age=86400"; 

      // Redirect to Admin Page
      router.push('/admin/add-dish');
      
    } else {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden bg-orange-50">
        <div className="absolute inset-0 z-0 opacity-90 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-orange-900/40 z-10"></div>
        <div className="relative z-20 text-center p-12 text-white">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            FoodieFinds<span className="text-orange-600">.</span>
          </h1>
          <p className="text-xl font-light text-orange-100 max-w-md mx-auto">
            Discover the best dishes, manage your menu, and delight your customers.
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
              FoodieFinds<span className="text-orange-600">.</span>
            </h1>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Admin Portal</h2>
            <p className="mt-2 text-sm text-slate-500">Welcome back! Please enter your details.</p>
          </div>

          {/* ERROR */}
          {error && (
            <div className="alert alert-error text-white text-sm py-3 flex items-center gap-2 shadow-md rounded-lg">
              <span className="font-medium">{error}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="form-control">
              <label className="label pt-0 pb-1">
                <span className="label-text font-bold text-slate-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="admin@foodiefinds.com"
                className="input input-bordered w-full bg-slate-50 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all rounded-lg h-12"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label pt-0 pb-1">
                <span className="label-text font-bold text-slate-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-slate-50 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all rounded-lg h-12"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn bg-orange-600 hover:bg-orange-700 text-white w-full h-12 text-lg font-medium shadow-lg shadow-orange-200 border-none rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? <span className="loading loading-dots loading-md"></span> : 'Sign In'}
            </button>
            
            {/* --- ADDED NOTE HERE --- */}
            <p className="text-xs text-center text-slate-400 mt-2">
              <span className="font-bold text-orange-500">Note:</span> If you cannot login on the first attempt, please <span className="underline cursor-pointer" onClick={() => window.location.reload()}>reload the page</span> and try again.
            </p>

          </form>

          {/* DEMO CREDENTIALS */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="btn btn-sm btn-ghost text-orange-600 hover:bg-orange-50 w-full normal-case font-medium"
            >
              🚀 Auto-fill Admin Credentials
            </button>
            <p className="text-center text-xs text-slate-400">
              Credentials: admin@foodiefinds.com / admin123
            </p>
          </div>

          {/* BACK LINK */}
          <div className="text-center">
            <Link href="/" className="text-sm font-semibold text-slate-400 hover:text-orange-600 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;