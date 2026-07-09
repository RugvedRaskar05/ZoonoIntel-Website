import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'ZoonoIntel',
  description: 'AI-powered zoonotic spillover intelligence platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

