
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, link, className = '' }: ServiceCardProps) => {
  return (
    <div className={`card group hover:border-kcl-blue ${className}`}>
      <div className="flex flex-col h-full">
        <div className="text-kcl-blue mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-kcl-blue font-medium group-hover:underline mt-auto"
        >
          Learn more
          <ChevronRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
