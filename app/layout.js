// app/layout.js
import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'ZoonoIntel',
  description: 'AI-powered zoonotic spillover intelligence platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-body">

        {/* Full-screen video background */}
        <div className="background-video-container">
          <video
            className="background-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Neon overlay (must be OUTSIDE the video container) */}
        <div className="background-overlay"></div>

        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-left">ZoonoIntel</div>
          <div className="nav-right">
            <a href="/" className="nav-link">Home</a>
            <a href="/app" className="nav-link">App</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/figures" className="nav-link">Figures</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="app-content">
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}

<div className="animated-bg"></div>
