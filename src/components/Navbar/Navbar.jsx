import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const toggleMobileMore = () => {
    setIsMobileMoreOpen(!isMobileMoreOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Vayanta AI Labs
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-500"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-500"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-500"
            >
              Services
            </Link>
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMore}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-500 flex items-center"
              >
                More
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isMoreOpen ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {isMoreOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 rounded-md shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 ring-1 ring-purple-500 ring-opacity-30 z-50 overflow-hidden">
                  <div className="py-2">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="col-span-1">
                        <Link 
                          to="/more/vision-mission" 
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-500"
                        >
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            Vision and Mission
                          </div>
                        </Link>
                        <Link 
                          to="/more/products" 
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-500"
                        >
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                            </svg>
                            Our Products
                          </div>
                        </Link>
                        <Link 
                          to="/more/principles" 
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-500"
                        >
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Our Principles
                          </div>
                        </Link>
                      </div>
                      <div className="col-span-1">
                        <Link 
                          to="/more/technology" 
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-purple-500"
                        >
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Our Technology
                          </div>
                        </Link>
                        <Link 
                          to="/more/ai-features" 
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-purple-500"
                        >
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            AI FEATURES
                          </div>
                        </Link>
                        <Link 
                          to="/more/key-clientele" 
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-purple-500"
                        >
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            Key Clientele
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border-l-2 border-transparent hover:border-blue-500"
            >
              Contact
            </Link>
            <button className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Services
            </Link>
            
            {/* Mobile More Menu  */}
            <div className="px-3">
              <button
                onClick={toggleMobileMore}
                className="w-full flex items-center justify-between py-2 text-base font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-lg px-3"
              >
                <span>More</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${isMobileMoreOpen ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {isMobileMoreOpen && (
                <div className="mt-2 space-y-1 pl-4 bg-gray-700 rounded-lg">
                  <Link 
                    to="/more/vision-mission" 
                    className="block py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 rounded-md px-2"
                  >
                    Vision and Mission
                  </Link>
                  <Link 
                    to="/more/products" 
                    className="block py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 rounded-md px-2"
                  >
                    Our Products
                  </Link>
                  <Link 
                    to="/more/principles" 
                    className="block py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 rounded-md px-2"
                  >
                    Our Principles
                  </Link>
                  <Link 
                    to="/more/technology" 
                    className="block py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 rounded-md px-2"
                  >
                    Our Technology
                  </Link>
                  <Link 
                    to="/more/ai-features" 
                    className="block py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 rounded-md px-2"
                  >
                    AI FEATURES
                  </Link>
                  <Link 
                    to="/more/key-clientele" 
                    className="block py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 rounded-md px-2"
                  >
                    Key Clientele
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Contact
            </Link>
            <button className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-base font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;