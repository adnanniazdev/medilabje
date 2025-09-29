'use client';

import { FC } from 'react';
import { Facebook, Linkedin, Instagram, Twitter, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="text-white py-12 px-4" style={{backgroundColor: '#3e4144'}}>
      <div className=" max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - Logo and Description */}
          <div className="md:col-span-1">
            <p className='font-normal'>MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond</p>
            <div className="">
              <Image
                src="/images/medilab-logo.png"
                alt="MediLab Logo"
                width={350}
                height={155}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-bold" >
              WHERE YOUR HEALTH CHECK IS OUR PRIORITY
            </p>
          </div>

          {/* Middle Section - Corporate Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Corporate Information</h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link 
                  href="/corporate-information" 
                  className="text-white hover:underline transition-colors duration-200"
                  style={{ '--hover-color': 'var(--primary-color)' } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  Medilab T&Cs
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-white hover:underline transition-colors duration-200"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/corporate-information" 
                  className="text-white hover:underline transition-colors duration-200"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  Health and Safety Statement
                </Link>
              </li>
              <li>
                <Link 
                  href="/corporate-information" 
                  className="text-white hover:underline transition-colors duration-200"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  Website T&Cs and Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Main Laboratory */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Main Laboratory</h3>
            <div className="  space-y-1">
              <p className="font-medium text-white">MEDILAB LTD</p>
              <p>Medical Suite 2</p>
              <p>Strive Health Club</p>
              <p>L&apos;Avenue de la Reine Elizabeth II</p>
              <p>St Peter</p>
              <p>Jersey</p>
              <p>JE3 7BH</p>
              <div className="mt-4">
                <p>Email: <a href="mailto:info@medilab.je" className="hover:text-white transition-colors duration-200">info@medilab.je</a></p>
                <p>Mobile: <a href="tel:+447797818021" className="hover:text-white transition-colors duration-200">07797 818021</a></p>
              </div>
            </div>
          </div>

          {/* Opening Times + Social - Follow Us */}
          <div className="md:col-span-1">
            <div>
              <h3 className="text-lg font-semibold mb-6">Opening Times</h3>
              <div className="text-sm mb-8">
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><Clock className="text-white/90" size={16} /><span>Mon-Fri 9am-9pm</span></li>
                  <li className="flex items-center gap-2"><Clock className="text-white/90" size={16} /><span>Sat-Sun 9am-6pm</span></li>
                  <li className="flex items-center gap-2"><Clock className="text-white/90" size={16} /><span>Bank Holidays 9am-4pm</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center space-x-4">
                <Link href="https://www.facebook.com/medilabjersey" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[#3b5998] transition-colors">
                  <Facebook />
                </Link>
                <Link href="https://www.linkedin.com/company/medilabjersey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-[#0a66c2] transition-colors">
                  <Linkedin />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#E1306C] transition-colors">
                  <Instagram />
                </Link>
                <Link href="https://x.com/medilabjersey" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-white hover:text-[#1DA1F2] transition-colors">
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
