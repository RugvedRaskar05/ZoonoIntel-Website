// app/layout.js
import './globals.css';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ZoonoIntel',
  description: 'AI-powered zoonotic spillover intelligence platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="app-body">
        {/* Background gradient */}
        <div className="animated-bg"></div>

        {/* Particle field */}
        <div className="particles">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

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
