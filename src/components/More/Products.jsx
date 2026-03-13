import React from 'react'
import { useState , useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductContent from '../product/ProductContent'
import ProductSidebar from '../product/ProductSidebar';
import { productsData } from '../product/productsData';
import ProductHeader from '../product/ProductHeader';
import AIFeatures from "../product/AIFeatures";
import { FaBars } from 'react-icons/fa';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('1');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
      {/* Header at top */}
      <ProductHeader />
      
      {/* Mobile Menu Button - Below header */}
      {isMobile && (
        <div className="sticky top-0 z-30 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaBars className="text-xl" />
              <span className="text-sm font-medium">Products Menu</span>
            </button>
          </div>
        </div>
      )}

      {/* Main content with sidebar and product display */}
      <div className="relative">
        {/* Overlay for mobile */}
        <AnimatePresence>
          {isMobile && sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSidebarOpen(false)}
           
              style={{ top: '120px' }} 
            />
          )}
        </AnimatePresence>

        {/* Sidebar - slides down from top on mobile */}
        <AnimatePresence>
          {(!isMobile || sidebarOpen) && (
            <motion.div
              initial={isMobile ? { height: 0, opacity: 0 } : false}
              animate={isMobile ? { height: 'auto', opacity: 1 } : false}
              exit={isMobile ? { height: 0, opacity: 0 } : false}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${isMobile ? 'overflow-hidden' : ''}`}
            >
              <div className={`${isMobile ? '' : 'sticky top-0 z-20 float-left'}`}>
                <ProductSidebar 
                  data={productsData}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  isMobile={isMobile}
                  setSidebarOpen={setSidebarOpen}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Content Area */}
        <div className={`transition-all duration-300 ${
          !isMobile ? 'ml-80' : 'ml-0'
        }`}>
          <ProductContent 
            product={selectedProduct}
            activeCategory={activeCategory}
          />
        </div>
      </div>



{/* Features Intro Section */}
<section className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* Big Pill */}
    <div className="relative mx-auto max-w-4xl rounded-full border border-gray-200 bg-gradient-to-r from-gray-50 to-white shadow-lg px-10 py-12 text-center">

      <p className="text-cyan-600 font-semibold uppercase tracking-widest text-sm mb-3">
  Technology Stack
</p>

<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
  Explore the Intelligent Features
  <span className="block bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
    Powering Our AI Platform
  </span>
</h2>

<p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
  Discover the advanced AI technologies and intelligent systems
  that automate logistics operations, optimize yard efficiency,
  and provide real-time visibility across the logistics ecosystem.
</p>

    </div>

  </div>
</section>


      <AIFeatures />
    </div>
  );
}

export default Products;