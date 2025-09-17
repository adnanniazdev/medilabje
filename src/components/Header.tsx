'use client';

import { FC, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, ChevronDown, Menu, X, Linkedin, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

interface DropdownItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[]
  external?: boolean;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  let closeTimeout: NodeJS.Timeout;

  const navItems: NavItem[] = [
    {
      label: 'Tests',
      href: '/tests',
      dropdown: [
        { label: 'Tests A-Z', href: '/tests#tests-a-z' },
        {
          label: 'Test Profiles', href: '/tests#test-profiles', dropdown: [
            { label: 'Male Health', href: '/male-health' },
            { label: 'Female Health', href: '/female-health' },
            { label: 'General Health', href: '/general-health' },
            { label: 'Athlete Health', href: '/athlete-health' },
          ]
        },
        { label: 'Specimens', href: '/tests#specimens' },
        { label: 'Sample Requirements', href: '/tests#sample-requirements' },
        { label: 'Request Forms', href: '/tests#request-forms' },
        { label: 'Helpful Information', href: '/tests#helpful-information' },
      ]
    },
    {
      label: 'Specialities',
      href: '/specialities',
      dropdown: [
        { label: 'Haematology', href: '/specialities#haematology' },
        { label: 'Chemistry', href: '/specialities#chemistry' },
        { label: 'Virology', href: '/specialities#virology' },
      ]
    },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'Requesting & Reporting Options', href: '/services#requesting-reporting' },
        { label: 'Postal Services', href: '/services#postal-services' },
        { label: 'Sample Collection', href: '/services#sample-collection' },
        { label: 'Testing', href: '/services#testing' },
      ]
    },
    {
      label: 'About Us',
      href: '/about-us',
      dropdown: [
        { label: 'About MediLab', href: '/abou-ust#about-medilab' },
        { label: 'Our Team', href: '/about-us#our-team' },
        { label: 'Quality Assurance', href: '/about-us#quality-assurance' },
        { label: 'Accreditation', href: '/about-us#accreditation' },
        { label: 'News', href: '/news' },
        { label: 'Strive Health Club', href: 'https://strive.je/', external: true },
        { label: 'Corporate Information', href: '/corporate-information' },
      ]
    },
    {
      label: 'Patients',
      href: '/patients',
      dropdown: [
        { label: 'Covid Policy', href: '/patients#covid-policy' },
        { label: 'Patient Reception', href: '/patients#patient-reception' },
        { label: 'Phlebotomy Services', href: '/patients#phlebotomy-services' },
      ]
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  // Close dropdown when clicking outside (keep for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      let clickedOutside = true;

      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref && ref.contains(target)) {
          clickedOutside = false;
        }
      });

      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src={'/images/header-logo.png'} alt="MediLab Logo" width={120} height={120} />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[item.label] = el;
                }}
                onMouseEnter={() => {
                  clearTimeout(closeTimeout);
                  handleMouseEnter(item.label);
                }}
                onMouseLeave={() => {
                  closeTimeout = setTimeout(() => {
                    setActiveDropdown(null);
                  }, 100); // 100ms delay
                }}
              >
                {/* Parent Link */}
                <Link
                  href={item.href!}
                  className="flex items-center text-secondary px-3 py-2 text-md font-bold transition-colors duration-200"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  style={{
                    color:
                      activeDropdown === item.label
                        ? "var(--primary-color)"
                        : "var(--secondary-color)",
                  }}
                >
                  {item.label}
                </Link>
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2.5 w-64 bg-secondary shadow-lg border border-gray-600 py-2 z-50"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <div key={dropdownItem.label}
                        className="relative group">
                        <Link
                          href={dropdownItem.href}
                          target={dropdownItem.external ? "_blank" : undefined}
                          rel={dropdownItem.external ? "noopener noreferrer" : undefined}
                          style={{ color: '#7e7e7e' }}
                          className="flex justify-between px-4 py-2 text-sm transition-colors duration-200"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#7e7e7e';
                          }}
                        >
                          {dropdownItem.label}
                          {dropdownItem?.dropdown && <ChevronLeft
                            size={16}
                            className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                              }`}
                          />}

                        </Link>

                        {/* Nested dropdown if exists */}
                        {dropdownItem?.dropdown && (
                          <div className="absolute top-0 left-full w-64 bg-secondary shadow-lg border border-gray-600 py-2 hidden group-hover:block">
                            {dropdownItem.dropdown.map((nestedItem) => (
                              <Link
                                key={nestedItem.label}
                                href={nestedItem.href}
                                style={{ color: '#7e7e7e'}}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = '#7e7e7e';
                                }}
                                className="block px-4 py-2 text-sm hover:bg-primary transition-colors duration-200"
                              >
                                {nestedItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </nav>

          {/* Social Media Icons */}
          < div className="flex items-center space-x-4" >
            <Link
              href="https://www.facebook.com/medilabjersey"
              className="transition-colors duration-200"
              style={{ color: 'var(--primary-color)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/medilabjersey"
              className="transition-colors duration-200"
              style={{ color: 'var(--primary-color)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 focus:outline-none cursor-pointer transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              onFocus={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onBlur={(e) => (e.currentTarget.style.color = '')}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navItems.map((item, index) => (
              <div 
                key={item.label}
                className={`transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform -translate-y-2'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.dropdown ? (
                  <div>
                    <div className="flex items-center">
                      <Link
                        href={item.href!}
                        className="flex-1 text-gray-700 px-3 py-2 text-base font-medium transition-colors duration-200"
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="px-3 cursor-pointer py-2 text-gray-700 transition-colors duration-200"
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                        aria-label={`Toggle ${item.label} dropdown`}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ease-in-out ${activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeDropdown === item.label 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            target={dropdownItem.external ? '_blank' : undefined}
                            rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                            className={`block text-gray-600 px-3 py-2 text-sm transition-all duration-300 ease-in-out ${
                              activeDropdown === item.label 
                                ? 'opacity-100 transform translate-x-0' 
                                : 'opacity-0 transform -translate-x-2'
                            }`}
                            style={{
                              transitionDelay: activeDropdown === item.label ? `${dropdownIndex * 30}ms` : '0ms'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="block text-gray-700 px-3 py-2 text-base font-medium transition-colors duration-200"
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header >
  );
};

export default Header;
