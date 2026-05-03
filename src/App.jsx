import React, { useState } from 'react';
import { 
  Leaf, 
  Camera, 
  Droplets, 
  Users, 
  Search, 
  ChevronRight, 
  Upload, 
  MessageCircle, 
  Heart,
  Calendar,
  Sun,
  Thermometer
} from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from './assets/hero.png';
import monsteraImage from './assets/monstera.png';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="/" className="logo">
          <Leaf size={32} fill="currentColor" />
          <span>Flora</span>
        </a>
        <ul className="nav-links">
          <li><button className="link-btn" onClick={() => scrollToSection('identify')}>Identify</button></li>
          <li><button className="link-btn" onClick={() => scrollToSection('features')}>Care Advice</button></li>
          <li><button className="link-btn" onClick={() => scrollToSection('community')}>Community</button></li>
          <li><button className="link-btn" onClick={() => scrollToSection('community')}>Swaps</button></li>
        </ul>
        <button className="btn btn-primary" onClick={() => scrollToSection('community')}>Join Community</button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="container hero">
      <motion.div 
        className="hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Nurture Your Home Forest</h1>
        <p>Identify any plant with a snap, get expert care guides, and join a global community of plant lovers.</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary" onClick={() => scrollToSection('identify')}>
            Start Identifying <Camera size={20} />
          </button>
          <button className="btn btn-outline" onClick={() => scrollToSection('features')}>
            Explore Guides
          </button>
        </div>
      </motion.div>
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={heroImage} alt="Modern room with plants" />
        <div className="glass hero-badge">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)' }}>
            <Users size={20} />
            <strong>50k+ Active Members</strong>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Trading tips & cuttings daily</span>
        </div>
      </motion.div>
    </header>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    className="feature-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="feature-icon">
      <Icon size={32} />
    </div>
    <h3>{title}</h3>
    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>{description}</p>
  </motion.div>
);

const IdentifierTool = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const plantDatabase = [
    {
      name: 'Monstera Deliciosa',
      confidence: '98%',
      light: 'Bright Indirect',
      water: 'Every 1-2 Weeks',
      temp: '18-30°C',
      description: 'The Swiss Cheese Plant is famous for its natural leaf holes.'
    },
    {
      name: 'Sansevieria (Snake Plant)',
      confidence: '94%',
      light: 'Low to Bright',
      water: 'Every 3-4 Weeks',
      temp: '15-27°C',
      description: 'An incredibly hardy plant that also purifies indoor air.'
    },
    {
      name: 'Epipremnum aureum (Pothos)',
      confidence: '96%',
      light: 'Moderate to Low',
      water: 'Every 1 Week',
      temp: '18-24°C',
      description: 'A versatile trailing vine perfect for beginners.'
    }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setAnalyzing(true);
      setResult(null);

      // Simulate analysis delay
      setTimeout(() => {
        setAnalyzing(false);
        const randomPlant = plantDatabase[Math.floor(Math.random() * plantDatabase.length)];
        setResult(randomPlant);
      }, 2500);
    }
  };

  return (
    <section id="identify" className="container">
      <div className="id-tool">
        <div className="container id-tool-content">
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Instant Plant Recognition
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Upload a photo of your plant's leaves or stem. Our neural network will identify the species and provide immediate care instructions.
            </p>
            
            {result ? (
              <motion.div 
                className="glass" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '2rem', borderRadius: 'var(--radius-md)', color: 'var(--text-main)' }}
              >
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <img src={previewUrl} alt="Your plant" style={{ width: '120px', height: '120px', borderRadius: '12px', objectFit: 'cover', border: '4px solid var(--white)' }} />
                  <div>
                    <h3 style={{ margin: 0 }}>{result.name}</h3>
                    <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Confidence: {result.confidence}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{result.description}</p>
                  </div>
                </div>
                <hr style={{ margin: '1.5rem 0', opacity: 0.1 }} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  <div style={{ textAlign: 'center', background: 'var(--accent-color)', padding: '1rem', borderRadius: '12px' }}>
                    <Sun size={20} color="var(--primary-color)" />
                    <p style={{ fontSize: '0.75rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{result.light}</p>
                  </div>
                  <div style={{ textAlign: 'center', background: 'var(--accent-color)', padding: '1rem', borderRadius: '12px' }}>
                    <Droplets size={20} color="var(--primary-color)" />
                    <p style={{ fontSize: '0.75rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{result.water}</p>
                  </div>
                  <div style={{ textAlign: 'center', background: 'var(--accent-color)', padding: '1rem', borderRadius: '12px' }}>
                    <Thermometer size={20} color="var(--primary-color)" />
                    <p style={{ fontSize: '0.75rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{result.temp}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                  <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => alert(`${result.name} has been added to your garden! ✨`)}>
                    Save to Garden
                  </button>
                  <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => {setResult(null); setPreviewUrl(null);}}>
                    New Scan
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="upload-area" style={{ position: 'relative' }}>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileUpload}
                  style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', zIndex: 10 }}
                />
                {analyzing ? (
                  <div className="fade-in">
                    <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 1.5rem' }}>
                       <img src={previewUrl} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', opacity: 0.5 }} alt="Analyzing" />
                       <div className="spin" style={{ position: 'absolute', inset: 0, border: '4px solid var(--accent-color)', borderTopColor: 'transparent', borderRadius: '50%' }} />
                    </div>
                    <h3>Scanning Botanical Features...</h3>
                    <p style={{ opacity: 0.6 }}>Comparing with 10k+ species database</p>
                  </div>
                ) : (
                  <>
                    <Upload size={48} style={{ marginBottom: '1rem', color: 'var(--accent-color)' }} />
                    <h3>Upload Plant Photo</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>Click or drag a photo to begin identification</p>
                  </>
                )}
              </div>
            )}
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
             <img 
               src={previewUrl || monsteraImage} 
               alt="Plant Preview" 
               style={{ 
                 maxWidth: '100%', 
                 height: '450px',
                 width: '100%',
                 objectFit: 'cover',
                 borderRadius: '24px', 
                 boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                 transition: 'all 0.5s ease'
               }} 
             />
          </div>
        </div>
      </div>
    </section>
  );
};

const CommunitySection = () => (
  <section id="community" className="container" style={{ padding: '4rem 0' }}>
    <div className="section-title">
      <h2>Join the Flora Circle</h2>
      <p>Connect with local gardeners, trade cuttings, and share your growth journey.</p>
    </div>
    <div className="plant-grid">
      {[
        { user: "Sarah J.", location: "Brooklyn, NY", action: "Offering Pothos Cuttings", likes: 24, comments: 5 },
        { user: "Mike R.", location: "Austin, TX", action: "Help! Yellow leaves on Fiddle Leaf", likes: 12, comments: 18 },
        { user: "Elena W.", location: "London, UK", action: "Rare Monstera Albo Swap", likes: 156, comments: 42 }
      ].map((post, i) => (
        <div key={i} className="plant-card">
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'var(--primary-dark)', fontWeight: 'bold' }}>
              {post.user[0]}
            </div>
            <div>
              <h4 style={{ margin: 0 }}>{post.user}</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.location}</p>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <p style={{ fontWeight: '600', marginBottom: '1rem' }}>{post.action}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Heart size={16} /> {post.likes}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MessageCircle size={16} /> {post.comments}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={16} /> 2h ago</span>
            </div>
          </div>
          <button style={{ width: '100%', padding: '1rem', border: 'none', background: 'var(--secondary-color)', cursor: 'pointer', fontWeight: '600', color: 'var(--primary-color)' }}>
            Connect to Swap
          </button>
        </div>
      ))}
    </div>
  </section>
);

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      
      <section id="features" className="container">
        <div className="features-grid">
          <FeatureCard 
            icon={Camera} 
            title="Instant ID" 
            description="Snap a photo and identify over 10,000 species with deep-learning precision."
            delay={0.1}
          />
          <FeatureCard 
            icon={Droplets} 
            title="Custom Care" 
            description="Personalized watering, light, and soil schedules based on your plant's unique needs."
            delay={0.2}
          />
          <FeatureCard 
            icon={Users} 
            title="Plant Swaps" 
            description="Find fellow enthusiasts in your area to trade cuttings and expand your collection."
            delay={0.3}
          />
        </div>
      </section>

      <IdentifierTool />
      
      <CommunitySection />

      <footer style={{ background: 'var(--primary-dark)', color: 'white', padding: '4rem 0', marginTop: '4rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" className="logo" style={{ color: 'white' }}>
            <Leaf size={24} fill="currentColor" />
            <span>Flora</span>
          </a>
          <p style={{ opacity: 0.6 }}>&copy; 2026 Flora Botanics. Grow together.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Instagram size={20} />
            <Twitter size={20} />
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 2s linear infinite;
        }
      ` }} />
    </div>
  );
}

// Mock social icons for the footer
const Instagram = ({ size }) => <div style={{ width: size, height: size, border: '2px solid white', borderRadius: '6px' }} />;
const Twitter = ({ size }) => <div style={{ width: size, height: size, border: '2px solid white', borderRadius: '50%' }} />;

export default App;
