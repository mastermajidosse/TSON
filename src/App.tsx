import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, ShoppingCart, Users, AlertTriangle, Eye, Globe, MessageCircle, Megaphone, ExternalLink } from 'lucide-react';

// Navigation Component
function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Globe },
    { path: '/groups', label: 'Groups', icon: MessageCircle },
    { path: '/march', label: 'March', icon: Megaphone },
  ];

  return (
    <header className="bg-black/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-amber-600/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <AlertTriangle className="text-amber-500 w-8 h-8" />
            <div>
              <h1 className="text-xl font-black text-white">THE SCUM OF NATIONS</h1>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 font-semibold transition-colors ${
                  location.pathname === path
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

// Home Page Component
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-red-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  THE <span className="text-amber-400">SCUM</span> OF <span className="text-red-700">NATIONS</span>
                </h2>
                <p className="text-3xl font-bold text-amber-500 mb-2">قرن الشيطان</p>
                <p className="text-xl font-semibold text-red-400">Exposing the Devils of Our Time</p>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                A devastating expose in Arabic revealing the puppet masters who orchestrate global conflicts from the shadows. 
                Discover the truth they don't want you to know about war, power, and the forces shaping our world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#buy" 
                  className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  GET THE TRUTH NOW
                </a>
                <a 
                  href="#about" 
                  className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  LEARN MORE
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-amber-600 via-red-800 to-black rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="/cover(1)(1).png" 
                    alt="The Scum of Nations Book Cover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-red-800 text-amber-200 px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                  BANNED BY MAINSTREAM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-center mb-12 text-white">
              WHAT THEY DON'T WANT YOU TO <span className="text-amber-400">KNOW</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                <Users className="w-12 h-12 text-amber-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Shadow Networks</h4>
                <p className="text-gray-400">Uncover the hidden networks of power that orchestrate global conflicts for profit and control.</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-red-800/30 hover:border-red-700/50 transition-all">
                <Globe className="w-12 h-12 text-red-600 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">War Machine</h4>
                <p className="text-gray-400">How manufactured conflicts serve the interests of a select few while devastating entire populations.</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                <AlertTriangle className="w-12 h-12 text-amber-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Hidden Agenda</h4>
                <p className="text-gray-400">The shocking truth about who really benefits from chaos, division, and perpetual warfare.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/20 via-amber-900/10 to-black/50 p-8 rounded-lg border border-amber-600/30">
              <blockquote className="text-xl italic text-gray-300 text-center leading-relaxed">
                "This book will shatter your worldview and reveal the terrifying reality of how power truly operates in our world. 
                The evidence is overwhelming, the conclusions unavoidable."
              </blockquote>
              <p className="text-amber-400 text-center mt-4 font-bold">- Early Reader Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="py-20 bg-gradient-to-br from-red-900/20 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-black mb-8 text-white">
              GET YOUR COPY <span className="text-amber-400">TODAY</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12">
              Don't let the truth remain hidden. Arm yourself with knowledge that could change everything.
            </p>
            
            <div className="bg-black/60 p-8 rounded-lg border-2 border-amber-600/50 max-w-md mx-auto">
              <div className="mb-6">
                <div className="text-3xl font-black text-white mb-2">$19.99</div>
                <div className="text-gray-400">Digital Edition Available Now</div>
                <div className="text-sm text-amber-400 mt-1">Physical copies shipping soon</div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-red-800 hover:bg-red-900 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  Pay with PayPal
                </button>
                
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all border-2 border-gray-600 hover:border-amber-500">
                  Direct Purchase
                </button>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Instant Download</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>30-Day Money Back Guarantee</span>
                </div>
              </div>
            </div>
            
            <p className="text-amber-400 font-bold mt-8 text-lg">
              ⚠️ WARNING: This book contains information that challenges mainstream narratives
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-black mb-8 text-white">
              CONTACT THE <span className="text-amber-400">AUTHOR</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12">
              Have questions about the book? Want to share your thoughts? Reach out directly.
            </p>
            
            <div className="bg-gray-800/50 p-8 rounded-lg border border-amber-600/30">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Mail className="w-8 h-8 text-amber-500" />
                <span className="text-2xl font-bold text-white">Get In Touch</span>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:author@scumofnations.com" 
                  className="block bg-red-800 hover:bg-red-900 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
                >
                  author@scumofnations.com
                </a>
                
                <p className="text-gray-400 text-sm">
                  I read every email personally and try to respond within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Groups Page Component
function GroupsPage() {
  const telegramGroups = [
    {
      name: "Truth Seekers United",
      description: "Main discussion group for readers and truth seekers",
      members: "12.5K",
      link: "https://t.me/truthseekersunited"
    },
    {
      name: "Scum of Nations Readers",
      description: "Exclusive group for book readers to discuss revelations",
      members: "8.2K",
      link: "https://t.me/scumofnationsreaders"
    },
    {
      name: "Global Awakening",
      description: "International community exposing global conspiracies",
      members: "25.1K",
      link: "https://t.me/globalawakening"
    },
    {
      name: "War Crimes Exposed",
      description: "Documenting and exposing war crimes worldwide",
      members: "15.7K",
      link: "https://t.me/warcrimes_exposed"
    },
    {
      name: "Shadow Networks Intel",
      description: "Intelligence sharing about hidden power structures",
      members: "9.8K",
      link: "https://t.me/shadownetworks"
    },
    {
      name: "Resistance Network",
      description: "Organizing peaceful resistance against oppression",
      members: "18.3K",
      link: "https://t.me/resistancenetwork"
    }
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-red-900/10 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              JOIN THE <span className="text-amber-400">RESISTANCE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Connect with like-minded truth seekers in our Telegram communities
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <MessageCircle className="w-6 h-6" />
              <span className="font-bold">Secure • Anonymous • Uncensored</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {telegramGroups.map((group, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-700 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {group.name}
                      </h3>
                      <p className="text-amber-400 text-sm font-semibold">{group.members} members</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {group.description}
                </p>
                
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-800 hover:bg-red-900 text-white py-3 px-4 rounded-lg font-bold text-center transition-all transform hover:scale-105"
                >
                  Join Group
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-900/20 via-amber-900/10 to-black/50 p-8 rounded-lg border border-amber-600/30">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Security Notice</h3>
              <p className="text-gray-300 leading-relaxed">
                These groups are monitored spaces for legitimate discussion. Always use secure communication practices. 
                We do not condone violence or illegal activities. Our mission is to spread awareness through peaceful means.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// March Page Component
function MarchPage() {
  const upcomingMarches = [
    {
      title: "Global Day of Truth",
      date: "March 15, 2025",
      location: "Major Cities Worldwide",
      description: "Peaceful demonstrations demanding transparency from world leaders",
      status: "Organizing"
    },
    {
      title: "Stop War Profiteering",
      date: "April 22, 2025",
      location: "Washington D.C., London, Paris",
      description: "March against corporations that profit from endless conflicts",
      status: "Planning"
    },
    {
      title: "Media Accountability March",
      date: "May 10, 2025",
      location: "Media Headquarters Worldwide",
      description: "Demanding honest reporting and end to propaganda",
      status: "Confirmed"
    }
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-red-900/10 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              MARCH FOR <span className="text-amber-400">TRUTH</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Organize and join peaceful protests to demand accountability and transparency
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <Megaphone className="w-6 h-6" />
              <span className="font-bold">Peaceful • Legal • Impactful</span>
            </div>
          </div>

          {/* Upcoming Marches */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Marches</h2>
            <div className="space-y-6">
              {upcomingMarches.map((march, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{march.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {march.location}
                        </span>
                        <span>{march.date}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        march.status === 'Confirmed' ? 'bg-green-800 text-green-200' :
                        march.status === 'Organizing' ? 'bg-amber-800 text-amber-200' :
                        'bg-red-800 text-red-200'
                      }`}>
                        {march.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {march.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                      Join March
                    </button>
                    <button className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-6 py-3 rounded-lg font-bold transition-all">
                      Get Updates
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organize Your Own March */}
          <div className="bg-gradient-to-r from-red-900/20 via-amber-900/10 to-black/50 p-8 rounded-lg border border-amber-600/30 mb-12">
            <div className="text-center mb-6">
              <Megaphone className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Organize Your Own March</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Can't find a march in your area? Start your own peaceful demonstration. We'll help you organize it properly and legally.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-amber-400 mb-3">Planning Resources</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Legal requirements and permits</li>
                  <li>• Safety guidelines and protocols</li>
                  <li>• Media outreach templates</li>
                  <li>• Volunteer coordination tools</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-amber-400 mb-3">Support Network</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Connect with local organizers</li>
                  <li>• Access to promotional materials</li>
                  <li>• Legal support and advice</li>
                  <li>• Post-event impact measurement</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
                Start Organizing
              </button>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-gray-800/30 p-8 rounded-lg border border-red-800/30">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">March Guidelines</h3>
              <div className="text-left max-w-2xl mx-auto text-gray-300 space-y-3">
                <p>• All marches must be peaceful and non-violent</p>
                <p>• Obtain proper permits and follow local laws</p>
                <p>• Respect private property and public spaces</p>
                <p>• Maintain dignity and focus on the message</p>
                <p>• Document everything for transparency</p>
                <p>• Coordinate with local authorities for safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-amber-600/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <AlertTriangle className="text-amber-500 w-6 h-6" />
            <div>
              <span className="font-bold text-white">THE SCUM OF NATIONS</span>
              <p className="text-amber-400 text-sm">قرن الشيطان</p>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© 2025 The Scum of Nations. All rights reserved.</p>
            <p className="mt-1">The truth cannot be suppressed forever.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/march" element={<MarchPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;