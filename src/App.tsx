/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import ExploreSessions from './pages/ExploreSessions';
import Register from './pages/Register';
import { ThemeProvider } from './components/ThemeProvider';
import WhatsAppButton from './components/WhatsAppButton';


function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore-sessions" element={<ExploreSessions />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="tech-driven-theme">
      <Router>
        <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
          <Navbar />
          <div className="flex-1 relative">
            <AppRoutes />
            <WhatsAppButton />
          </div>
          <Footer />
        </div>
        <Analytics />
      </Router>
    </ThemeProvider>
  );
}
