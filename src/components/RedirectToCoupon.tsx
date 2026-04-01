import { useEffect } from 'react';

const RedirectToCoupon = () => {
  useEffect(() => {
    window.location.href = 'https://t.iteasupply.co/BvaP2adQCiZ';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">Redirecting to offer...</p>
      </div>
    </div>
  );
};

export default RedirectToCoupon;
