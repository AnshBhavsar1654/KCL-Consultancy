
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  alignment?: 'left' | 'center' | 'right';
  height?: 'small' | 'medium' | 'large';
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Learn More",
  ctaLink = "/about",
  backgroundImage = "",
  alignment = "center",
  height = "medium",
}: HeroSectionProps) => {
  const heightStyles = {
    small: "min-h-[300px] md:min-h-[400px]",
    medium: "min-h-[400px] md:min-h-[500px]",
    large: "min-h-[500px] md:min-h-[700px]",
  };

  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `linear-gradient(rgba(0, 47, 95, 0.7), rgba(0, 47, 95, 0.7)), url(${backgroundImage})` }
    : { backgroundColor: "#002F5F" };

  return (
    <div 
      className={`${heightStyles[height]} w-full flex items-center bg-cover bg-center relative`}
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
      <div className="container relative z-10">
        <div className={`flex flex-col ${alignmentStyles[alignment]} gap-6 max-w-3xl mx-auto px-4`}>
          <h1 className="text-white font-bold animate-fade-in">{title}</h1>
          <p className="text-white/90 text-xl md:text-2xl animate-slide-up">{subtitle}</p>
          {ctaText && (
            <div className="mt-4">
              <Link 
                to={ctaLink} 
                className="inline-flex items-center bg-white text-kcl-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                {ctaText}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
