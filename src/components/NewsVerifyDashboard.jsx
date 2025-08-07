import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import FoundersSection from './FoundersSection';
import './NewsVerifyDashboard.css';

const NewsVerifyDashboard = () => {
  const [headline, setHeadline] = useState('');
  const [verdict, setVerdict] = useState('');
  const [confidence, setConfidence] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckNews = async () => {
    setLoading(true);
    setVerdict('');
    setConfidence('');
    try {
      const response = await fetch("https://hook.eu2.make.com/et7v8kbvuw8mav189jv7jeb4sbl38skj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ headline })
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      
      // Direct access to verdict and confidence from Make.com response
      setVerdict(data.verdict);
      // Convert confidence from decimal to percentage
      setConfidence(Math.round(data.confidence * 100));
      
    } catch (error) {
      console.error("Error:", error);
      setVerdict("Error");
      setConfidence("N/A");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container" style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-content">
          <a href="#" className="nav-brand">
            <div className="nav-brand-icon">
              <Shield size={20} />
            </div>
            NewsVerify
          </a>
          <ul className="nav-links">
            <li><a href="#product">Product</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
          <a href="#get-started" className="nav-cta">Get Started Free</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Verify News.
            <br />
            Trust Truth.
          </h1>
          <p className="hero-subtitle">
            The only AI-powered toolset you need to analyze headlines, 
            detect misinformation, and promote media literacy in our digital age.
          </p>
        </div>
      </section>

      {/* Main Input Section */}
      <section className="input-section">
        <label className="input-label">Enter a news headline to verify:</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="Enter a news headline..."
          className="headline-input"
        />
        <button
          onClick={handleCheckNews}
          disabled={loading || !headline.trim()}
          className="analyze-button"
        >
          {loading ? "Checking..." : "Verify News"}
        </button>
        {verdict && (
          <div className="result-card" style={{ marginTop: 24 }}>
            <h3 style={{ color: verdict === 'Fake' ? '#ff4444' : '#4caf50' }}>
              Verdict: {verdict}
            </h3>
            <p>Confidence: {typeof confidence === 'number' ? `${confidence}%` : confidence}</p>
          </div>
        )}
      </section>

      {/* Card behind Founders Section */}
      <div className="card" style={{ margin: '40px auto', maxWidth: 1200 }}>
        <FoundersSection />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2024 NewsVerify. All rights reserved. Empowering truth through technology.
        </p>
      </footer>
    </div>
  );
};

export default NewsVerifyDashboard;
      </footer>
    </div>
  );
};

export default NewsVerifyDashboard;
