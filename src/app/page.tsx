import Link from "next/link";

export default function Home() {
  return (
    <div className="container section">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '6rem 0' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Hi, I&apos;m Alexis. <br />
          <span style={{ color: 'var(--primary)' }}>I create stuff.</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '3rem', lineHeight: 1.6 }}>
          Welcome to my portfolio. I&apos;m a 14-year-old student passionate about coding, design, and art.
          Here you can explore my latest projects and artwork.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/projects" className="btn">
            View Projects
          </Link>
          <Link href="/gallery" className="btn btn-secondary">
            See Artwork
          </Link>
        </div>
      </div>
    </div>
  );
}
