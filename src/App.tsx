import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import International from './components/International';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
        case 'international':
      return <International />;
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[80vh] flex items-center justify-center overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
              
              <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                    Established 1920
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Welcome To The{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    AICC
                  </span>
                </h1>
                
                <p className="text-xl md:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                  Facilitating Business Growth Across The Globe with{' '}
                  <span className="text-orange-400 font-semibold">Excellence</span> and{' '}
                  <span className="text-red-400 font-semibold">Innovation</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="group bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1">
                    <span className="flex items-center space-x-2">
                      <span>Become a Member</span>
                      <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
                    </span>
                  </button>
                  
                  <button className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
                    <span className="flex items-center space-x-2">
                      <span>Explore Services</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="group">
                    <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                    <div className="text-gray-300 font-medium">Years of Excellence</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
                    <div className="text-gray-300 font-medium">Global Members</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
                    <div className="text-gray-300 font-medium">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Our <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Core Services</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Empowering businesses worldwide with comprehensive solutions and unparalleled expertise
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-500 rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Global Network</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Connect with businesses and opportunities across international markets through our extensive global network spanning over 150 countries.
                    </p>
                    <button className="text-orange-600 font-semibold hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2">
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-500 rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Business Support</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Get comprehensive support for your business growth with our expert guidance, industry expertise, and personalized consultation services.
                    </p>
                    <button className="text-orange-600 font-semibold hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2">
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-500 rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Trade Facilitation</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Streamline your trade operations with our comprehensive facilitation services, industry connections, and regulatory expertise.
                    </p>
                    <button className="text-orange-600 font-semibold hover:text-red-500 transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2">
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Export-Import Course Section */}
            <div className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Video Section */}
                    <div className="p-8 lg:p-12">
                      <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group">
                        <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                          {/* Video Placeholder */}
                          <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
                            <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                              title="Online Export Import Course"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-orange-50 to-red-50">
                      <div className="mb-6">
                        <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                          Featured Course
                        </span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        Online Export-Import <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Management Course</span>
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Master the fundamentals of international trade with our comprehensive online course. Learn export-import procedures, documentation, regulations, and best practices from industry experts.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white p-4 rounded-xl shadow-md border border-orange-100">
                          <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
                          <div className="text-sm text-gray-600">Hours of Content</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-md border border-red-100">
                          <div className="text-2xl font-bold text-red-600 mb-1">5K+</div>
                          <div className="text-sm text-gray-600">Students Enrolled</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2">
                          <span>Know More</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                        
                        <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                          Watch Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Excellence Award Section */}
            <div className="relative py-20 px-4 overflow-hidden">
              {/* Background Image Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100"></div>
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-yellow-900/70 to-orange-900/80"></div>
              
              <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content Section */}
                  <div className="text-white">
                    <div className="mb-8">
                      <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6">
                        <span className="text-yellow-200 font-bold text-lg">Excellence Award</span>
                      </div>
                      
                      <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Fill Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Nomination Form!</span>
                      </h2>
                      
                      <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                        Recognize outstanding achievements in business excellence. Submit your nomination for the prestigious AICC Excellence Award and celebrate success stories that inspire the business community.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="text-3xl font-bold text-yellow-300 mb-2">25+</div>
                          <div className="text-gray-200">Award Categories</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="text-3xl font-bold text-orange-300 mb-2">500+</div>
                          <div className="text-gray-200">Past Winners</div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                      <span className="flex items-center space-x-3">
                        <span>Click Here</span>
                        <div className="w-3 h-3 bg-white rounded-full group-hover:animate-ping"></div>
                      </span>
                    </button>
                  </div>

                  {/* Trophy Visual Section */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                      {/* Trophy Icons */}
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="text-center group">
                          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M5 16L3 6h5.5l1.5 10zm6.5 0L10 6h4l1.5 10zM19 16L17.5 6H23l-2 10z"/>
                            </svg>
                          </div>
                          <div className="text-yellow-300 font-bold">Gold</div>
                        </div>
                        
                        <div className="text-center group">
                          <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                            </svg>
                          </div>
                          <div className="text-yellow-200 font-bold">Excellence</div>
                        </div>
                        
                        <div className="text-center group">
                          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                            </svg>
                          </div>
                          <div className="text-orange-300 font-bold">Achievement</div>
                        </div>
                      </div>
                      
                      {/* Certificate Visual */}
                      <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 border border-white/30">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                            </svg>
                          </div>
                          <div className="text-white font-bold text-lg mb-2">Certificate of Excellence</div>
                          <div className="text-gray-300 text-sm">Awarded by AICC</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
{/* Call to Action Section */}
<div className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Text Content */}
    <div>
      <h2 className="text-sm md:text-base font-medium mb-4 text-left leading-relaxed">
        As India continues to attract the attention of the world, AICC endeavours to strengthen India’s international engagement globally and also work towards making AICC the first port of call for overseas delegations that wish to engage with India and for Indian industry that wishes to access traditional and emerging markets overseas.

        <br /><br />

        The primary goal of the AICC is to undertake activities to connect Indian business with global business. AICC also works towards developing market access for Indian exporters; identifying and addressing the needs of the small sector to make it more competitive; promoting cooperation with counterpart organizations; adopting a proactive and partnership approach with foreign governments on various international issues concerning the Indian economy, among others.

        <br /><br />

        We, on a regular basis, organize International Events, Exhibitions, Seminars, Net-working Sessions with counterpart organizations, multilateral and academic institutions and other policy making bodies to build a strong Trade and Investment relationship between India and the rest of the world.

        <br /><br />
        Regards,<br />
        <strong>Rajendra Kumar Goel</strong><br />
        Chairman, All India Chamber of Commerce
      </h2>

      <p className="text-sm md:text-base mb-6 text-left">
        Join the All India Chamber of Commerce and unlock a world of opportunities.
      </p>
      
      <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-orange-500/25 transform hover:scale-105">
        Become a Member
      </button>
    </div>

    {/* Image Content */}
    <div className="flex justify-center">
      <img
        src="/your-image-path.jpg"
        alt="AICC Vision"
        className="rounded-xl shadow-lg max-w-full h-auto"
      />
    </div>
  </div>
</div>


            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-center md:text-left mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Join the AICC Community</h3>
                    <p className="text-gray-400">Connect with us for the latest updates and opportunities.</p>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
                  </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-500">
                  Copyright © 2022 All India Chamber of Commerce, All rights reserved.
                </div>
              </div>
              </footer>

           
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
