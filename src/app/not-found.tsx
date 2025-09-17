"use client"
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{
      background: "linear-gradient(to right, rgba(30, 182, 185, 0.9), rgba(31, 151, 185, 0.9)), url('/images/hero-slide-1.avif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
        {/* 404 Number */}
        <h1 className="text-8xl font-bold text-primary mb-4">
          404
        </h1>
        
        {/* Error Message */}
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Page Not Found
        </h2>
        <p className="text-secondary-light mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
