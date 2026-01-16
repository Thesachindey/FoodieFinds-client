import React from 'react';
import LoginFrom from './LoginFrom';
export const metadata = {
  title: "Admin Login",
  description: "Secure login for FoodieFinds administrators.",
  // Crucial: Tell Google NOT to index your login page
  robots: {
    index: false,
    follow: false,
  },
};
const LoginPage = () => {
  return (
     <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
    <LoginFrom/>
    </div>
  );
};

export default LoginPage;