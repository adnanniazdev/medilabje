import { FC } from 'react';

const BookingWidget: FC = () => {
  return (
    <div className="bg-white  p-6 border border-gray-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary-light mb-2">Book Your Appointment Today</h3>
        <div className="text-gray-600 mb-4">
          <p className="font-semibold">Information MediLab</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center">
              <span className="text-white text-xs">⏰</span>
            </div>
            <span className="text-sm">30 Minute Meeting</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Select a Day</h4>
          <div className="flex items-center justify-between mb-3">
            <button className="p-2 hover:bg-gray-100 rounded">
              <span className="text-gray-600">‹</span>
            </button>
            <span className="font-semibold text-gray-800">September 2025</span>
            <button className="p-2 hover:bg-gray-100 rounded">
              <span className="text-gray-600">›</span>
            </button>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            <div className="p-2 text-gray-500 font-semibold">MON</div>
            <div className="p-2 text-gray-500 font-semibold">TUE</div>
            <div className="p-2 text-gray-500 font-semibold">WED</div>
            <div className="p-2 text-gray-500 font-semibold">THU</div>
            <div className="p-2 text-gray-500 font-semibold">FRI</div>
            <div className="p-2 text-gray-500 font-semibold">SAT</div>
            <div className="p-2 text-gray-500 font-semibold">SUN</div>
            
            {/* Calendar Days */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((day) => (
              <button
                key={day}
                className={`p-2 rounded hover:bg-gray-100 ${
                  [21, 24, 27, 28].includes(day)
                    ? 'bg-primary-light text-white hover:bg-primary-dark'
                    : 'text-gray-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time zone</label>
          <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option>Pakistan, Maldives, Iran (F2 Man)</option>
            <option>GMT (London)</option>
            <option>EST (New York)</option>
          </select>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Powered by Calendly</span>
            <div className="w-16 h-1 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
