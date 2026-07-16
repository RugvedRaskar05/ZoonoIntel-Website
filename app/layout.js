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

        {/* Background */}
        <div className="animated-bg"></div>
    
  .animated-bg {
  position: fixed;
  inset: 0;
  background: linear-gradient(120deg, #00111f, #002b45, #003b5c, #001f33);
  background-size: 400% 400%;
  animation: nebulaShift 18s ease infinite;
  z-index: -3;
}

@keyframes nebulaShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.app-body {
  background: transparent;
}


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


