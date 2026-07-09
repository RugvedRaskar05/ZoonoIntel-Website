import './globals.css';

export const metadata = {
  title: 'ZoonoIntel',
  description: 'AI-powered zoonotic spillover intelligence platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
