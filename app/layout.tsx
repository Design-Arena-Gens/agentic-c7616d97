import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Agentic Dashboard",
  description: "Minimal Next.js dashboard starter",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <Link href="/" className="logo" aria-label="Agentic Dashboard">
              <span className="logo-badge" />
              <span>Agentic Dashboard</span>
            </Link>
            <nav className="nav" aria-label="Primary">
              <Link href="/" aria-current="page">Home</Link>
              <Link href="/about">About</Link>
              <a className="button" href="/api/health">API Health</a>
            </nav>
          </header>
          {children}
          <p className="footer">? {new Date().getFullYear()} Agentic</p>
        </div>
      </body>
    </html>
  );
}
