import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="jp">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}