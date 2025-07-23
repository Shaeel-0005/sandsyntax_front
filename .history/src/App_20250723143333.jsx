import React, { useState, useEffect } from 'react';
import styles from './style';
import {
  Navbar,
  VelocityText,
  Loader,
  HoverGallery,
  Services,
  TaskHeading,
  Hero,
  Footer,
} from './components';
import './index.css';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="transition-wrapper">
      <div className={`loader-wrapper ${!loading ? 'fade-out' : ''}`}>
        <Loader />
      </div>

      <div className={`main-content ${!loading ? 'fade-in' : ''}`}>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <div className="w-full top">
            <Hero />
            <VelocityText />
            <Services />
            <HoverGallery />
            <TaskHeading />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
