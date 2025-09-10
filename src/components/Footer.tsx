'use client';

import { FC } from 'react';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className="text-white py-12 px-4" style={{backgroundColor: '#3e4144'}}>
      <div className=" max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo and Description */}
          <div className="md:col-span-1">
            <p className='font-bold'>MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond</p>
            <div className="mb-6">
              <Image
                src="/images/medilab-logo.png"
                alt="MediLab Logo"
                width={350}
                height={155}
                className="object-contain mb-4"
                onError={(e) => {
                  // Fallback to text logo if image not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="text-white text-3xl font-bold mb-4">
                        Medi<span style="color: var(--accent-color);">Lab</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--primary-color)' }}>
              WHERE YOUR HEALTH CHECK IS OUR PRIORITY
            </p>
          </div>

          {/* Middle Section - Corporate Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Corporate Information</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="/medilab-t&cs" className="hover:text-white transition-colors duration-200">
                  Medilab T&Cs
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/health-safety-statement" className="hover:text-white transition-colors duration-200">
                  Health and Safety Statement
                </a>
              </li>
              <li>
                <a href="/website-t&cs-policies" className="hover:text-white transition-colors duration-200">
                  Website T&Cs and Policies
                </a>
              </li>
            </ul>
            <div className="mt-6 text-xs text-gray-400">
              <p>Web design by Shiny Koala</p>
            </div>
          </div>

          {/* Right Section - Main Laboratory */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Main Laboratory</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p className="font-medium text-white">MEDILAB LTD</p>
              <p>Medical Suite 2</p>
              <p>Strive Health Club</p>
              <p>L'Avenue de la Reine Elizabeth II</p>
              <p>St Peter</p>
              <p>Jersey</p>
              <p>JE3 7BH</p>
              <div className="mt-4">
                <p>Email: <a href="mailto:info@medilab.je" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--primary-color)' }}>info@medilab.je</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
