
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kcl-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Column 1 - About */}
          <div>
            <img src="/lovable-uploads/382723f8-f32c-4fa9-abdb-09ffbd64f4e8.png" alt="KCL Logo" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-gray-300 my-4">
              KCL is a leading governance consulting firm driving transformative change through evidence-based insights and strategic solutions.
            </p>
            {/* <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
            </div> */}
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/research" className="text-gray-300 hover:text-white transition-colors">Research & Market Intelligence</Link></li>
              <li><Link to="/services/strategy" className="text-gray-300 hover:text-white transition-colors">Strategy & Planning</Link></li>
              <li><Link to="/services/execution" className="text-gray-300 hover:text-white transition-colors">Execution & Implementation</Link></li>
              <li><Link to="/services/evaluation" className="text-gray-300 hover:text-white transition-colors">Evaluation & Monitoring</Link></li>
              <li><Link to="/services/community" className="text-gray-300 hover:text-white transition-colors">Community Engagement</Link></li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/excellence/healthcare" className="text-gray-300 hover:text-white transition-colors">Healthcare 2.0</Link></li>
              <li><Link to="/excellence/urban" className="text-gray-300 hover:text-white transition-colors">Urban Rejuvenation</Link></li>
              <li><Link to="/excellence/digital" className="text-gray-300 hover:text-white transition-colors">AI + Digital Transformation</Link></li>
              <li><Link to="/humans/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {/* <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Business Avenue, Suite 500, New Delhi, 110001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li> */}
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>connect@kalliope.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} KCL Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
