import { FC } from 'react';
import BookingWidget from './BookingWidget';

const BookingSection: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-light mb-4">Ready to Book Your Health Check?</h2>
              <p className="text-xl text-secondary-light max-w-3xl mx-auto">
                Schedule your appointment with our experienced medical professionals and take control of your health today.
              </p>
            </div>
            
            {/* Service Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-primary-light mb-3">Quality Assurance</h3>
                <p className="text-secondary-light">
                  We have strict Quality Assurance at MediLab ensuring your results are reliable and accurate.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-primary-light mb-3">Superior Service</h3>
                <p className="text-secondary-light">
                  We offer on-site appointments with results within 2 working days.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-bold text-primary-light mb-3">Test Profiles</h3>
                <p className="text-secondary-light">
                  We offer a wide range of test profiles to suit your needs.
                </p>
              </div>
            </div>
          </div>
          
          {/* Booking Widget Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
