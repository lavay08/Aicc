import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Download, 
  Twitter, 
  Facebook, 
  Search, 
  Menu, 
  X,
  ChevronDown,
  MapPin,
  Globe
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 text-white text-xs py-2 px-4 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0 relative z-10">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">

            <div className="flex items-center space-x-2 hover:text-orange-100 transition-all duration-300 group cursor-pointer">
              <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                <Phone size={14} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-medium">+91-99907 33308</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-100 transition-all duration-300 group cursor-pointer">
              <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                <Mail size={14} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-medium">info@aicc.ind.in</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-100 transition-all duration-300 group cursor-pointer">
              <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                <MapPin size={14} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-medium">New Delhi, India</span>
            </div>
            <button className="bg-white text-orange-600 px-6 py-2 rounded-full hover:bg-orange-50 hover:shadow-lg transition-all duration-300 flex items-center space-x-2 font-semibold group transform hover:scale-105">
              <Download size={16} className="group-hover:animate-bounce" />
              <span>DOWNLOAD BROCHURE</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-orange-100">
              <div className="p-1.5 bg-white/10 rounded-full">
                <Clock size={14} />
              </div>
              <span className="font-medium">Mon – Fri: 8:00am – 7:00pm</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all duration-300 group">
                <Twitter 
                  size={16} 
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all duration-300 group">
                <Facebook 
                  size={16} 
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all duration-300 group">
                <Globe 
                  size={16} 
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-xl sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl bg-white/95 backdrop-blur-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => handleNavigation('home')}>
              <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <div className="w-12 h-12 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-500 rounded-lg">
                  <span className="text-white font-bold text-xs">AICC</span>

                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                  ALL INDIA CHAMBER<br />
                  <span className="text-base">OF COMMERCE</span>
                </h1>
                <p className="text-sm text-orange-600 font-semibold mt-1 flex items-center space-x-1">
                  <Globe size={10} />
                  <span>WE FACILITATE BUSINESS ACROSS THE GLOBE</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <button 
                onClick={() => handleNavigation('home')}
                className={`relative px-4 py-2 font-bold transition-all duration-300 group ${
                  currentPage === 'home' 
                    ? 'text-orange-600' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                <span className="relative z-10">HOME</span>
                {currentPage === 'home' && (
                  <>
                    <div className="absolute inset-0 bg-orange-100 rounded-lg transform scale-105"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-full"></div>
                  </>
                )}
              </button>
              
              <div className="relative group">
                <button 
                  onClick={() => handleDropdown('about')}
                  className={`flex items-center space-x-1 px-4 py-2 font-semibold transition-all duration-300 hover:bg-orange-50 rounded-lg group ${
                    currentPage === 'about' 
                      ? 'text-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  <span>ABOUT US</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200">
                    <button 
                      onClick={() => handleNavigation('about')}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium"
                    >
                      About AICC
                    </button>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium">Leadership Team</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium">Mission & Vision</a>
                  </div>
                )}
              </div>

              <a 
                href="#" 
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 hover:bg-orange-50 rounded-lg relative group"
              >
                <span>MEMBERS</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-full group-hover:w-full transition-all duration-300"></div>
              </a>
              
              <div className="relative group">
                <button 
                  onClick={() => handleDropdown('activities')}
                  className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 hover:bg-orange-50 rounded-lg"
                >
                  <span>ACTIVITIES</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'activities' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'activities' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200">
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium">Trade Missions</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium">Business Events</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium">Networking</a>
                  </div>
                )}
              </div>

              <button 
  onClick={() => handleNavigation('international')}
  className={`relative px-4 py-2 font-semibold transition-all duration-300 hover:bg-orange-50 rounded-lg group ${
    currentPage === 'international' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
  }`}
>
  <span className="relative z-10">INTERNATIONAL</span>
  {currentPage === 'international' && (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-full"></div>
  )}
</button>
              
              <a 
                href="#" 
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 hover:bg-orange-50 rounded-lg relative group"
              >
                <span>COURSES</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-full group-hover:w-full transition-all duration-300"></div>
              </a>
              
              <div className="relative group">
                <button 
                  onClick={() => handleDropdown('more')}
                  className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 hover:bg-orange-50 rounded-lg"
                >
                  <span>MORE</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'more' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'more' && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200">
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium">News & Updates</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium">Publications</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium">Contact Us</a>
                  </div>
                )}
              </div>
            </div>

            {/* Search and CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 group">
                <Search size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-5 py-2.5 text-sm rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-orange-700 hover:to-red-600">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-orange-50 transition-all duration-300 border-2 border-transparent hover:border-orange-200"
              >
                {isMenuOpen ? <X size={24} className="text-orange-600" /> : <Menu size={24} className="text-gray-700" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
              <div className="pt-4 space-y-2">
                <button 
                  onClick={() => handleNavigation('home')}
                  className={`block w-full text-left font-bold py-2 px-5 rounded-xl transition-all duration-300 ${
                    currentPage === 'home' 
                      ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  HOME
                </button>
                <button 
                  onClick={() => handleNavigation('about')}
                  className={`block w-full text-left font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
                    currentPage === 'about' 
                      ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  ABOUT US
                </button>
                <a 
                  href="#" 
                  className="block text-gray-700 hover:text-orange-600 font-semibold py-3 px-6 rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  MEMBERS
                </a>
                <a 
                  href="#" 
                  className="block text-gray-700 hover:text-orange-600 font-semibold py-3 px-6 rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  ACTIVITIES
                </a>
              <button 
  onClick={() => handleNavigation('international')}
  className={`block w-full text-left font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
    currentPage === 'international' 
      ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600' 
      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
  }`}
>
  INTERNATIONAL
</button>
                <a 
                  href="#" 
                  className="block text-gray-700 hover:text-orange-600 font-semibold py-3 px-6 rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  COURSES
                </a>
                <a 
                  href="#" 
                  className="block text-gray-700 hover:text-orange-600 font-semibold py-3 px-6 rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  MORE
                </a>
                <div className="pt-4 space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300">
                    <Search size={18} />
                    <span className="font-semibold">Search</span>
                  </button>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
