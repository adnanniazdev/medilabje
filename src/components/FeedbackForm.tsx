'use client';

import { FC, useEffect, useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { DateCalendar, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import CustomToast from './CustomToast';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState({
    message: "",
    open: false,
    type: "error"
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasRating = Object.values(formData.ratings).some(value => value && value.trim() !== '');
    if (!hasRating) {
      setToast({
        open: true,
        type: "error",
        message: "Please provide at least one rating before submitting.",
      });
      return; // stop submission
    }

    // Here you would typically send the data to your backend
    setIsLoading(true)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}feedback`, formData);
    if (response) {
      console.log(response)
      setToast({
        open: true,
        type: "success",
        message: response?.data?.message,
      });
      // Reset form after 3 seconds
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsLoading(false)
      setIsSubmitted(true);
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
    }

  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary-light mb-2">Thank You!</h3>
          <p className="text-secondary-light mb-6">
            Your feedback has been submitted successfully.
          </p>

          <a
            href="/"
            className="inline-block bg-primary-light hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>

    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary-light mb-2">Patient Feedback</h2>
        <p className="text-secondary-light">Help us improve our services by sharing your experience</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Patient Information Section */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-primary-light mb-6">Patient Information (Optional)</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6EC1E4] focus:border-[#6EC1E4] transition"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-semibold text-secondary mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                placeholder="Your phone number"
                className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6EC1E4] focus:border-[#6EC1E4] transition"
              />
            </div>

            {/* Appointment Date with MUI Calendar */}
            <div>
              <label
                htmlFor="appointmentDate"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Date of Appointment
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={formData.appointmentDate ? dayjs(formData.appointmentDate) : null}
                  onChange={(newValue: Dayjs | null) =>
                    handleInputChange(
                      "appointmentDate",
                      newValue ? newValue.format("YYYY-MM-DD") : ""
                    )
                  }
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      placeholder: "Select a date",
                      sx: {
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: 'red',
                          borderRadius: "0.5rem",
                          border: "1px solid #D1D5DB",
                          "& fieldset": {
                            borderColor: "#D1D5DB", // default border
                          },
                          "&:hover fieldset": {
                            borderColor: "#2895B0", // hover border
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#6EC1E4", // focus border
                            borderWidth: 2,
                          },
                          "& input": {
                            padding: "12px 16px",
                          },
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          outline: "none", // remove browser default outline
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>

            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div>
          <h3 className="text-xl font-bold text-primary-light mb-6">Please rate the following:</h3>
          <div className="space-y-6">
            {ratingCategories.map((category) => (
              <div key={category.key} className="rounded-lg p-2">
                <h4 className="text-lg font-semibold text-secondary mb-3">{category.label}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {ratingOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center space-x-1 p-3 rounded-md cursor-pointer transition-all hover:bg-gray-100 -mb-3 ${formData.ratings[category.key as keyof typeof formData.ratings] === option.value
                        ? 'border-primary-light bg-primary-light bg-opacity-10'
                        : ''
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
                      <div
                        className={`w-4 h-4 flex items-center justify-center rounded-md border-2 transition-all duration-200
                       ${formData.ratings[category.key as keyof typeof formData.ratings] === option.value
                            ? "border-primary-light bg-primary-light text-white shadow-md"
                            : "border-gray-300 bg-gray-50 hover:border-primary-light hover:bg-primary_hover/10"
                          }`}
                      >
                        {formData.ratings[category.key as keyof typeof formData.ratings] === option.value && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm font-medium ${formData.ratings[category.key as keyof typeof formData.ratings] === option.value
                        ? 'text-white'
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
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-primary-light mb-4">Consultation with Physician</h3>
          <div className="space-y-4">
            <div className="flex space-x-4">
              {/* Yes Option */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultationWithPhysician"
                  value="yes"
                  checked={formData.consultationWithPhysician === 'yes'}
                  onChange={(e) => handleInputChange('consultationWithPhysician', e.target.value)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 flex items-center justify-center rounded-md border-2 transition-all duration-200
                ${formData.consultationWithPhysician === 'yes'
                      ? "border-primary-light bg-primary-light text-white shadow-md"
                      : "border-gray-300 bg-gray-50 hover:border-primary-light hover:bg-primary_hover/10"
                    }`}
                >
                  {formData.consultationWithPhysician === 'yes' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-secondary font-medium">Yes</span>
              </label>

              {/* No Option */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultationWithPhysician"
                  value="no"
                  checked={formData.consultationWithPhysician === 'no'}
                  onChange={(e) => handleInputChange('consultationWithPhysician', e.target.value)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 flex items-center justify-center rounded-md border-2 transition-all duration-200
        ${formData.consultationWithPhysician === 'no'
                      ? "border-primary-light bg-primary-light text-white shadow-md"
                      : "border-gray-300 bg-gray-50 hover:border-primary-light hover:bg-primary_hover/10"
                    }`}
                >
                  {formData.consultationWithPhysician === 'no' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
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
                  className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6EC1E4] focus:border-[#6EC1E4] transition"
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
            className={`bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg transform flex items-center justify-center 
            ${isLoading ? 'cursor-not-allowed opacity-70' : 'hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1'}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              'Submit Feedback'
            )}
          </button>
        </div>

      </form>
      <CustomToast
        open={toast.open}
        message={toast.message}
        type={toast.type}
        setOpen={setToast}
      />
    </div>
  );
};

export default FeedbackForm;
