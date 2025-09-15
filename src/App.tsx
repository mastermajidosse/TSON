import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { BookPage } from './pages/Book';
import { GroupsPage } from './pages/Groups';
import { MarchPage } from './pages/March';

function AppContent() {
  const location = useLocation();
  const isBookPage = location.pathname === '/book';

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!isBookPage && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/march" element={<MarchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;