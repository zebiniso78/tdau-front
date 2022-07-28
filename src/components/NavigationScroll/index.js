import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ============================== NAVIGATION SCROLL TO TOP by Azamov (www.asadbekazamov.uz) ============================== //

const NavigationScroll = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return children || null;
};

export default NavigationScroll;
