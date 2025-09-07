'use client';

import { FC, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

interface DropdownItem {
  label: string;
  href: string;
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
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const navItems: NavItem[] = [
    {
      label: 'Tests',
      dropdown: [
        { label: 'Tests A-Z', href: '/tests#tests-a-z' },
        { label: 'Test Profiles', href: '/tests#test-profiles' },
        { label: 'Specimens', href: '/tests#specimens' },
        { label: 'Sample Requirements', href: '/tests#sample-requirements' },
        { label: 'Request Forms', href: '/tests#request-forms' },
        { label: 'Helpful Information', href: '/tests#helpful-information' },
        { label: 'Male Health', href: '/male-health' },
        { label: 'Female Health', href: '/female-health' },
        { label: 'General Health', href: '/general-health' },
        { label: 'Athlete Health', href: '/athlete-health' },
      ]
    },
    {
      label: 'Specialities',
      href: '/specialities'
    },
    {
      label: 'Services',
      dropdown: [
        { label: 'Requesting & Reporting Options', href: '/services#requesting-reporting' },
        { label: 'Postal Services', href: '/services#postal-services' },
        { label: 'Sample Collection', href: '/services#sample-collection' },
        { label: 'Testing', href: '/services#testing' },
      ]
    },
    {
      label: 'About Us',
      dropdown: [
        { label: 'About MediLab', href: '/about#about-medilab' },
        { label: 'Our Team', href: '/about#our-team' },
        { label: 'Quality Assurance', href: '/about#quality-assurance' },
        { label: 'Accreditation', href: '/about#accreditation' },
        { label: 'News', href: '/news' },
        { label: 'Strive Health Club', href: 'https://strivehealthclub.com', external: true },
        { label: 'Corporate Information', href: '/corporate-info' },
      ]
    },
    {
      label: 'Patients',
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

  // Close dropdown when clicking outside
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
             <Image src={'/images/header-logo.png'} alt="MediLab Logo" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={el => { dropdownRefs.current[item.label] = el; }}
              >
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = activeDropdown === item.label ? 'var(--primary-color)' : '')}
                    style={{ color: activeDropdown === item.label ? 'var(--primary-color)' : '' }}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        target={dropdownItem.external ? '_blank' : undefined}
                        rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 focus:outline-none transition-colors duration-200"
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
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full text-left text-gray-700 px-3 py-2 text-base font-medium transition-colors duration-200"
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = activeDropdown === item.label ? 'var(--primary-color)' : '')}
                        style={{ color: activeDropdown === item.label ? 'var(--primary-color)' : '' }}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              target={dropdownItem.external ? '_blank' : undefined}
                              rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                              className="block text-gray-600 px-3 py-2 text-sm transition-colors duration-200"
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
                      )}
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
        )}
      </div>
    </header>
  );
};

export default Header;
