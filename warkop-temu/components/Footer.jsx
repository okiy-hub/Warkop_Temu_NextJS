import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-col">
          <Link href="/" className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true">✳</span>
            <span className="brand-name">warkop<span>temu.</span></span>
          </Link>
          <p>Tempat ngopi, berbagi cerita, dan merasa pulang. Karena hal sederhana terasa lebih hangat saat bersama.</p>
        </div>
        <div className="footer-group">
          <h3>Jelajahi</h3>
          <Link href="/">Beranda</Link>
          <Link href="/tentang">Tentang Kami</Link>
          <Link href="/menu">Daftar Menu</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
        <div className="footer-group">
          <h3>Jam Nongkrong</h3>
          <p>Senin – Jumat<br />10.00 – 23.00</p>
          <p>Sabtu – Minggu<br />09.00 – 00.00</p>
        </div>
        <div className="footer-group">
          <h3>Lokasi</h3>
          <p>Jakarta Selatan, Indonesia</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Warkop Temu. All Rights Reserved.</span>
        <span>Ngopi dulu, urusan nanti.</span>
      </div>
    </footer>
  );
}
