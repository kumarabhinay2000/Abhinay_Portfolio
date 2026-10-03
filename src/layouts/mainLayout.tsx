import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/navigation/navbar';
import Footer from '../components/common/footer';
import CustomCursor from '../components/common/customCursor';
import BackToTop from '../components/common/backToTop';
import LoadingScreen from '../components/common/loadingScreen';
import PageTransition from '../components/common/pageTransition';

export default function MainLayout() {
  const { pathname } = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <CustomCursor />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <PageTransition keyProp={pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
