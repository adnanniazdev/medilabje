'use client';

import { FC, useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-110"
          style={{
            backgroundColor: 'var(--primary-color)',
            color: 'white'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
