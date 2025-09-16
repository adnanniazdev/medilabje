'use client';

import { FC, useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface FeedbackFormData {
  name: string;
  contactNumber: string;
  appointmentDate: string;
  ratings: {
    easeOfBooking: string;
    punctuality: string;
    professionalism: string;
    cleanliness: string;
    comfort: string;
    resultsOnTime: string;
    overallSatisfaction: string;
  };
  consultationWithPhysician: string;
  consultationDetails: string;
}

const FeedbackForm: FC = () => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    contactNumber: '',
    appointmentDate: '',
    ratings: {
      easeOfBooking: '',
      punctuality: '',
      professionalism: '',
      cleanliness: '',
      comfort: '',
      resultsOnTime: '',
      overallSatisfaction: '',
    },
    consultationWithPhysician: '',
    consultationDetails: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const ratingOptions = [
    { value: 'excellent', label: 'Excellent', color: 'text-green-600' },
    { value: 'good', label: 'Good', color: 'text-blue-600' },
    { value: 'fair', label: 'Fair', color: 'text-yellow-600' },
    { value: 'poor', label: 'Poor', color: 'text-red-600' },
  ];

  const ratingCategories = [
    { key: 'easeOfBooking', label: 'Ease of booking' },
    { key: 'punctuality', label: 'Punctuality of phlebotomist' },
    { key: 'professionalism', label: 'Professionalism & courtesy' },
    { key: 'cleanliness', label: 'Cleanliness & safety' },
    { key: 'comfort', label: 'Comfort during blood taking' },
    { key: 'resultsOnTime', label: 'Results reported on time' },
    { key: 'overallSatisfaction', label: 'Overall satisfaction' },
  ];

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith('ratings.')) {
      const ratingKey = field.split('.')[1];
      setFormData(prev => ({
        ...prev,
        ratings: {
          ...prev.ratings,
          [ratingKey]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Feedback submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        contactNumber: '',
        appointmentDate: '',
        ratings: {
          easeOfBooking: '',
          punctuality: '',
          professionalism: '',
          cleanliness: '',
          comfort: '',
          resultsOnTime: '',
          overallSatisfaction: '',
        },
        consultationWithPhysician: '',
        consultationDetails: '',
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary-light mb-2">Thank You!</h3>
        <p className="text-secondary-light">Your feedback has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary-light mb-2">Patient Feedback</h2>
        <p className="text-secondary-light">Help us improve our services by sharing your experience</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Patient Information Section */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary-light mb-4">Patient Information (Optional)</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-secondary mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent transition-colors"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label htmlFor="appointmentDate" className="block text-sm font-medium text-secondary mb-2">
                Date of Appointment
              </label>
              <input
                type="date"
                id="appointmentDate"
                value={formData.appointmentDate}
                onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div>
          <h3 className="text-xl font-bold text-primary-light mb-6">Please rate the following:</h3>
          <div className="space-y-6">
            {ratingCategories.map((category) => (
              <div key={category.key} className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-secondary mb-3">{category.label}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {ratingOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center space-x-2 p-3 rounded-md border-2 cursor-pointer transition-all hover:bg-gray-100 ${
                        formData.ratings[category.key as keyof typeof formData.ratings] === option.value
                          ? 'border-primary-light bg-primary-light bg-opacity-10'
                          : 'border-gray-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name={category.key}
                        value={option.value}
                        checked={formData.ratings[category.key as keyof typeof formData.ratings] === option.value}
                        onChange={(e) => handleInputChange(`ratings.${category.key}`, e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        formData.ratings[category.key as keyof typeof formData.ratings] === option.value
                          ? 'border-primary-light bg-primary-light'
                          : 'border-gray-300'
                      }`}>
                        {formData.ratings[category.key as keyof typeof formData.ratings] === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className={`text-sm font-medium ${
                        formData.ratings[category.key as keyof typeof formData.ratings] === option.value
                          ? 'text-primary-light'
                          : 'text-gray-700'
                      }`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Section */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary-light mb-4">Consultation with Physician</h3>
          <div className="space-y-4">
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultationWithPhysician"
                  value="yes"
                  checked={formData.consultationWithPhysician === 'yes'}
                  onChange={(e) => handleInputChange('consultationWithPhysician', e.target.value)}
                  className="w-4 h-4 text-primary-light focus:ring-primary-light"
                />
                <span className="text-secondary font-medium">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultationWithPhysician"
                  value="no"
                  checked={formData.consultationWithPhysician === 'no'}
                  onChange={(e) => handleInputChange('consultationWithPhysician', e.target.value)}
                  className="w-4 h-4 text-primary-light focus:ring-primary-light"
                />
                <span className="text-secondary font-medium">No</span>
              </label>
            </div>
            
            {formData.consultationWithPhysician === 'yes' && (
              <div>
                <label htmlFor="consultationDetails" className="block text-sm font-medium text-secondary mb-2">
                  Please provide additional details about your consultation:
                </label>
                <textarea
                  id="consultationDetails"
                  value={formData.consultationDetails}
                  onChange={(e) => handleInputChange('consultationDetails', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent transition-colors resize-none"
                  placeholder="Share your experience with the physician consultation..."
                />
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary-light hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
