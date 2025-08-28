
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  className = '' 
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[alignment]} ${className}`}>
      {
        title === 'Come Work With Us' ? <>
          <h2 className="font-semibold text-white mb-4">{title}</h2>
         {subtitle && <p className="text-xl text-white">{subtitle}</p>}
        </>:<>
          <h2 className="font-semibold text-kcl-blue mb-4">{title}</h2>
     { subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </>
      }
    </div>
  );
};

export default SectionHeading;
