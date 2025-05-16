import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Destinations from './destinations';
import Reviews from './Review';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div id="explore"><Destinations /></div>
      <div id="contact"><Reviews/></div>
    </div>
  );
}
export default HomePage;
