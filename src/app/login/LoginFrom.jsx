'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const LoginForm = () => {
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Auto-fill Demo Credentials
  const fillDemoCredentials = () => {
    setFormData({
      email: 'admin@foodiefinds.com',
      password: 'admin123'
    });
    setError(''); 
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { email, password } = formData;

    // ----- MOCK AUTH -----
    if (email === 'admin@foodiefinds.com' && password === 'admin123') {
      document.cookie = "auth=true; path=/; max-age=86400";
      router.push('/admin/add-dish');
      setIsLoading(false);
    } else {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };

  return (
    // MAIN CONTAINER: Flex row for desktop, Column for mobile
    <div className="min-h-screen w-full flex bg-white">
      
      {/* LEFT SIDE: Image Section (Hidden on Mobile, Visible on LG screens) */}
      <div className="hidden lg:flex w-1/2 bg-orange-50 relative items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
            className="absolute inset-0 z-0 opacity-90"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        ></div>
        {/* Orange Overlay to match brand */}
        <div className="absolute inset-0 bg-orange-900/40 z-10"></div>
        
        {/* Text Content over Image */}
        <div className="relative z-20 text-center p-12 text-white">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">FoodieFinds<span className="text-orange-600">.</span></h1>
          <p className="text-xl font-light text-orange-100 max-w-md mx-auto">
            Discover the best dishes, manage your menu, and delight your customers.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Form Section (Full width on Mobile, Half on Desktop) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
            
            {/* Header (Mobile version of branding) */}
            <div className="text-center">
               <h1 className="text-5xl font-extrabold mb-4 tracking-tight">FoodieFinds<span className="text-orange-600">.</span></h1>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Admin Portal</h2>
                <p className="mt-2 text-sm text-slate-500">
                    Welcome back! Please enter your details.
                </p>
            </div>

            {/* Error Alert */}
            {error && (
            <div role="alert" className="alert alert-error text-white text-sm py-3 flex items-center gap-2 shadow-md rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{error}</span>
            </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="mt-8 space-y-6">
                <div className="space-y-4">
                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label pt-0 pb-1">
                            <span className="label-text font-bold text-slate-700">Email</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 text-slate-400">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="admin@foodiefinds.com"
                                className="input input-bordered w-full pl-10 bg-slate-50 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all rounded-lg h-12"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="form-control">
                        <label className="label pt-0 pb-1">
                            <span className="label-text font-bold text-slate-700">Password</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 text-slate-400">
                                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full pl-10 bg-slate-50 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all rounded-lg h-12"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn bg-orange-600 hover:bg-orange-700 text-white w-full h-12 text-lg font-medium shadow-lg shadow-orange-200 border-none rounded-lg"
                    disabled={isLoading}
                >
                    {isLoading ? (
                    <span className="loading loading-dots loading-md"></span>
                    ) : (
                    'Sign In'
                    )}
                </button>
            </form>

            {/* Demo Credentials Section */}
            <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex flex-col gap-3">
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
            </div>

            {/* Back Link */}
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