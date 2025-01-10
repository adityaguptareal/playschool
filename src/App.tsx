import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import HomePage from './pages/HomePage';
    import AboutPage from './pages/AboutPage';
    import ProgramsPage from './pages/ProgramsPage';
    import AdmissionsPage from './pages/AdmissionsPage';
    import GalleryPage from './pages/GalleryPage';
    import BlogPage from './pages/BlogPage';
    import ContactPage from './pages/ContactPage';
    import Footer from './components/Footer';

    function App() {
      return (
        <Router>
          <div className="min-h-screen bg-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      );
    }

    export default App;
