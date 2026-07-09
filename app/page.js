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
        <div className="background-video-container">
          <video
            className="background-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/background.webm" type="video/webm" />
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="background-overlay" />
        </div>

        <div className="app-content">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

