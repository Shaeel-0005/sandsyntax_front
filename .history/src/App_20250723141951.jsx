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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Show content after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}

      {showContent && (
        <div className="main-content fade-in">
          <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>

            <div className="w-full">
              <Hero />
              <VelocityText />
              <Services />
              <HoverGallery />
              <TaskHeading />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
