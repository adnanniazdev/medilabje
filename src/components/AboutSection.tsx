'use client';

import { FC } from 'react';
import Image from 'next/image';

const AboutSection: FC = () => {
  return (
    <section className="relative">

      {/* Overlapping Content */}
      <div className="relative z-10">

        
        {/* MediLab Description Section */}
        <div className="py-16 px-4" style={{ background: 'var(--section-gradient-primary)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  MEDILAB is a Medical Laboratory with a reputation for excellence in providing quality service to Jersey and beyond
                </h2>
              </div>
              
              {/* Logo */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  <Image
                    src="/images/medilab-logo.png"
                    alt="MediLab Logo"
                    width={200}
                    height={100}
                    className="object-contain"
                    onError={(e) => {
                      // Fallback to text logo if image not found
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="text-white text-4xl font-bold">
                            Medi<span style="color: var(--accent-color);">Lab</span>
                          </div>
                        `;
                      }
                    }}
                  />
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Understanding Your Health */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/lab1.avif"
                    alt="Understanding Your Health"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Understanding Your Health
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Here at MediLab we love to help you understand your health, 
                    allowing you to make informed decisions and take control. 
                    We offer a wide range of test profiles to cover every aspect of 
                    your health needs.
                  </p>
                </div>
              </div>

              {/* Our Laboratory */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/lab4.avif"
                    alt="Our Laboratory"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Our Laboratory
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our new laboratory is fitted with all the latest equipment, with 
                    regular quality control checks, ensuring your testing is 
                    accurate and precise.
                  </p>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-lg shadow-md p-6 text-white" style={{ backgroundColor: 'var(--primary-color)' }}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Book your appointment today for free
                  </h3>
                </div>
                
                {/* Dummy Booking Interface */}
                <div className="bg-white rounded-lg p-4 text-gray-800">
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      30 min
                    </div>
                    <h4 className="font-medium">Select a Day</h4>
                  </div>
                  
                  {/* Calendar Mock */}
                  <div className="border rounded p-3">
                    <div className="flex justify-between items-center mb-3 text-sm">
                      <button className="text-gray-400">‹</button>
                      <span className="font-medium">September 2025</span>
                      <button className="text-gray-400">›</button>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 text-xs text-center">
                      <div className="text-gray-500 p-1">MON</div>
                      <div className="text-gray-500 p-1">TUE</div>
                      <div className="text-gray-500 p-1">WED</div>
                      <div className="text-gray-500 p-1">THU</div>
                      <div className="text-gray-500 p-1">FRI</div>
                      <div className="text-gray-500 p-1">SAT</div>
                      <div className="text-gray-500 p-1">SUN</div>
                      
                      {/* Sample dates */}
                      <div className="p-1">1</div>
                      <div className="p-1">2</div>
                      <div className="p-1">3</div>
                      <div className="p-1">4</div>
                      <div className="p-1">5</div>
                      <div className="p-1">6</div>
                      <div className="p-1">7</div>
                      <div className="p-1">8</div>
                      <div className="p-1">9</div>
                      <div className="p-1">10</div>
                      <div className="p-1">11</div>
                      <div className="p-1">12</div>
                      <div className="p-1">13</div>
                      <div className="text-white rounded p-1" style={{ backgroundColor: 'var(--primary-color)' }}>14</div>
                      <div className="p-1">15</div>
                      <div className="p-1">16</div>
                      <div className="p-1">17</div>
                      <div className="p-1">18</div>
                      <div className="p-1">19</div>
                      <div className="p-1">20</div>
                      <div className="text-white rounded p-1" style={{ backgroundColor: 'var(--primary-color)' }}>21</div>
                      <div className="p-1">22</div>
                      <div className="p-1">23</div>
                      <div className="p-1">24</div>
                      <div className="p-1">25</div>
                      <div className="p-1">26</div>
                      <div className="p-1">27</div>
                      <div className="text-white rounded p-1" style={{ backgroundColor: 'var(--primary-color)' }}>28</div>
                    </div>  
                  </div>
                  
                  <div className="mt-4 text-center">
                    <button
                      className="text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
