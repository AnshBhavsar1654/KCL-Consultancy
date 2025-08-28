
import React from 'react';

interface CaseStudyProps {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string;
  imageSrc?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  client,
  challenge,
  solution,
  results,
  imageSrc
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ">
      {imageSrc && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={imageSrc}
            alt={title}
            className="w-full h-56 md:h-64 object-cover"
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-kcl-blue mb-3">{title}</h3>
      
      <div className="mb-3">
        <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded text-gray-700">
          {client}
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        <div>
          <h4 className="font-medium text-gray-800">Challenge:</h4>
          <p className="text-gray-600 text-justify">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800">Solution:</h4>
          <p className="text-gray-600 text-justify">{solution}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800">Results:</h4>
          <p className="text-gray-600 text-justify">{results}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
