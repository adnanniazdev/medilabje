import { FC } from 'react';

const NewsPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Stay informed about the latest developments at MediLab
          </p>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Article 1 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                  New Advanced Testing Equipment Installed
                </h3>
                <p className="text-gray-600 mb-4">
                  MediLab has invested in state-of-the-art laboratory equipment to enhance our testing 
                  capabilities and reduce turnaround times for our patients.
                </p>
                <a 
                  href="#" 
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--primary-color)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                >
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 2 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 8, 2024</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                  Extended Operating Hours Announced
                </h3>
                <p className="text-gray-600 mb-4">
                  To better serve our community, MediLab is extending our operating hours on weekdays 
                  and introducing weekend services for urgent testing needs.
                </p>
                <a 
                  href="#" 
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--primary-color)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                >
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 3 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 28, 2024</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                  ISO 15189 Accreditation Renewed
                </h3>
                <p className="text-gray-600 mb-4">
                  MediLab has successfully renewed its ISO 15189 accreditation, demonstrating our 
                  continued commitment to quality and excellence in laboratory services.
                </p>
                <a 
                  href="#" 
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--primary-color)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                >
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 4 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 20, 2024</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                  New Home Collection Service Launched
                </h3>
                <p className="text-gray-600 mb-4">
                  We are pleased to announce the launch of our new home collection service, bringing 
                  convenient laboratory testing directly to your doorstep.
                </p>
                <a 
                  href="#" 
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--primary-color)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                >
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 5 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 12, 2024</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                  Partnership with Local Healthcare Providers
                </h3>
                <p className="text-gray-600 mb-4">
                  MediLab has established new partnerships with local healthcare providers to enhance 
                  patient care and streamline laboratory services across Jersey.
                </p>
                <a 
                  href="#" 
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--primary-color)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                >
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 6 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 30, 2024</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                  Staff Training Program Completed
                </h3>
                <p className="text-gray-600 mb-4">
                  Our team has completed an intensive training program on the latest laboratory 
                  techniques and quality assurance protocols to ensure the highest standards of service.
                </p>
                <a 
                  href="#" 
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--primary-color)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                >
                  Read More →
                </a>
              </div>
            </article>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2">
              <button 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                disabled
              >
                Previous
              </button>
              <button 
                className="px-3 py-2 rounded-md text-sm font-medium text-white"
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                1
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                3
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest news and updates from MediLab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              className="px-6 py-3 rounded-lg text-white font-medium transition-colors duration-200"
              style={{ backgroundColor: 'var(--primary-color)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
