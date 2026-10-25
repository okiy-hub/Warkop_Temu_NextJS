import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div className="container"><span className="not-found-code">404</span><h1>Wah, ceritanya nyasar.</h1><p>Halaman yang kamu cari belum ada. Balik dulu, yuk, ke tempat yang familiar.</p><Link href="/" className="button button-primary">← Kembali ke Beranda</Link></div></section>;
}
