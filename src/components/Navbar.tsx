
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleNavigate = (path: string) => {
    // Close any open dropdowns/menus
    closeDropdowns();
    setIsOpen(false);
    // If navigating to home, scroll to top smoothly
    if (path === '/') {
      // Delay slightly to allow route change, then scroll
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  const navItems = [
    { name: 'Home', path: '/', dropdown: false },
    { 
      name: 'About KCL', 
      path: '/about',
      dropdown: true,
      submenu: [
        { name: 'About Us', path: '/about#about-us' },
        { name: 'Vision & Mission', path: '/about#vision-mission' },
        { name: 'Our Approach', path: '/about#approach' }
      ]
    },
    { 
      name: 'Our Services', 
      path: '/services',
      dropdown: true,
      submenu: [
        { name: 'Research & Market Intelligence', path: '/services#research' },
        { name: 'Strategy Development & Facilitation', path: '/services#strategy' },
        { name: 'Regulatory Advisory & Compliance', path: '/services#regulatory' },
        { name: 'Programme Design & Evaluation', path: '/services#programme' },
        { name: 'Program Delivery & Performance', path: '/services#delivery' },
        { name: 'Capacity Building & Institutional Strengthening', path: '/services#capacity' },
        { name: 'Stakeholder Consultations & Public Engagement', path: '/services#consultations' },
        { name: 'Digital Governance & Transformation', path: '/services#digital' }
      ]
    },
    { 
      name: 'Centers of Excellence', 
      path: '/excellence',
      dropdown: true,
      submenu: [
        { name: 'Healthcare 2.0', path: '/excellence#healthcare' },
        { name: 'Urban Rejuvenation', path: '/excellence#urban' },
        { name: 'AI + Digital Transformation', path: '/excellence#digital' }
      ]
    },
    { 
      name: 'Humans of KCL', 
      path: '/humans',
      dropdown: true,
      submenu: [
        { name: 'Who We Are', path: '/humans#who-we-are' },
        { name: 'Our Stories', path: '/humans#stories' },
        { name: 'Life @ KCL', path: '/humans#life' },
        { name: 'Join Us', path: '/humans#careers' }
      ]
    },
    { name: 'Contact', path: '/contact', dropdown: false }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavigate('/')} className="flex-shrink-0">
            <img src="/lovable-uploads/382723f8-f32c-4fa9-abdb-09ffbd64f4e8.png" alt="KCL Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative flex">
                {item.dropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className={`navbar-item flex items-center ${activeDropdown === item.name ? 'text-kcl-blue' : ''}`}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="dropdown-menu">
                        {item.submenu?.map((subItem) => (
                          <Link 
                            key={subItem.name}
                            to={subItem.path}
                            onClick={closeDropdowns}
                            className="dropdown-item"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className="navbar-item"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-kcl-blue hover:text-kcl-lightblue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex w-full justify-between items-center ${activeDropdown === item.name ? 'text-kcl-blue' : 'text-gray-700'}`}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                        {item.submenu?.map((subItem) => (
                          <Link 
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-gray-600 hover:text-kcl-blue hover:underline decoration-current underline-offset-2"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className="block text-gray-700 hover:text-kcl-blue hover:underline decoration-current underline-offset-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
