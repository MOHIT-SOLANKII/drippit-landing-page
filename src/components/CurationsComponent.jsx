
import { useState, useEffect } from 'react';

const CurationsComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to check if viewport is mobile width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Partners Section - Conditional display based on device type */}
      <div className="w-full">
        {isMobile ? (
          // Mobile Partners Image
          <img 
            src="/trusted-mobile.svg" 
            alt="Mobile Trusted Partners" 
            className="w-full object-cover"
          />
        ) : (
          // Desktop Partners Image
          <img 
            src="/trusted.svg" 
            alt="Desktop Trusted Partners" 
            className="w-full object-cover"
          />
        )}
      </div>
      
      {/* Curations Section - Conditional display based on device type */}
      <div className="w-full">
        {isMobile ? (
          // Mobile Curations Image
          <img 
            src="/banner-mobile.svg" 
            alt="Mobile Drippit Curations" 
            className="w-full object-cover"
          />
        ) : (
          // Desktop Curations Image
          <img 
            src="/banner.svg" 
            alt="Desktop Drippit Curations" 
            className="w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default CurationsComponent;