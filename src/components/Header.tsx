'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
             <Image src={'/images/header-logo.png'} alt="MediLab Logo" width={100} height={100} />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/tests"
              className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
              style={{ '--hover-color': 'var(--primary-color)' } as React.CSSProperties}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              Tests
            </Link>
            <Link
              href="/specialities"
              className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              Specialities
            </Link>
            <Link
              href="/services"
              className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              About Us
            </Link>
            <Link
              href="/patients"
              className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              Patients
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="transition-colors duration-200"
              style={{ color: 'var(--primary-color)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="transition-colors duration-200"
              style={{ color: 'var(--primary-color)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 focus:outline-none transition-colors duration-200"
              style={{ '--hover-color': 'var(--primary-color)', '--focus-color': 'var(--primary-color)' } as React.CSSProperties}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              onFocus={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onBlur={(e) => (e.currentTarget.style.color = '')}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
