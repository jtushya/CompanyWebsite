import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import VideoEditing from './pages/services/VideoEditing';
import WebsiteCreation from './pages/services/WebsiteCreation';
import DigitalTransformation from './pages/services/DigitalTransformation';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import DigitalMarketing from './pages/services/DigitalMarketing';
import SeoServices from './pages/services/SeoServices';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import CustomSoftware from './pages/services/CustomSoftware';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/video-editing" element={<VideoEditing />} />
          <Route path="/services/website-creation" element={<WebsiteCreation />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/social-media" element={<SocialMediaManagement />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SeoServices />} />
          <Route path="/services/mobile-apps" element={<MobileAppDevelopment />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;