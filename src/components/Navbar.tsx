import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          Portfolio
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}
