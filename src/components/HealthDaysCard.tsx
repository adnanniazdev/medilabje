import { FC } from 'react';

interface HealthEvent {
  title: string;
  date?: string;
}

interface HealthDaysCardProps {
  month: string;
  events: HealthEvent[];
  className?: string;
}

const HealthDaysCard: FC<HealthDaysCardProps> = ({ month, events, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-light hover:shadow-lg transition-shadow duration-200 ${className}`}>
      <h3 className="text-xl font-bold text-primary-light mb-4">{month}</h3>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <div className="flex-1">
              {event.date && (
                <span className="text-sm font-medium text-primary-light mr-2">{event.date}</span>
              )}
              <span className="text-secondary-light">{event.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthDaysCard;
