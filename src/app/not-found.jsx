import Link from 'next/link';
import myLogo from '../app/favicon.ico'
import Image from 'next/image';
export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
      
      {/* 1. Large Visual Icon */}
      <div className="text-9xl mb-6 flex items-center justify-center animate-bounce-slow">
        <Image
        src={myLogo}
        alt="Company Logo"
        className='w-1/2'
      />
      </div>

      {/* 2. Main Error Message */}
      <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
        404
      </h2>
      <h3 className="text-2xl font-bold text-slate-700 mb-2">
        Oops! You've gone off the menu.
      </h3>

      {/* 3. Helper Text */}
      <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* 4. Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="btn bg-orange-600 hover:bg-orange-700 text-white border-none rounded-full px-8 shadow-lg hover:shadow-orange-200 transition-all"
        >
          Return Home
        </Link>
        <Link 
          href="/menu" 
          className="btn bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-full px-8 shadow-sm"
        >
          View Menu
        </Link>
      </div>

    </div>
  );
}