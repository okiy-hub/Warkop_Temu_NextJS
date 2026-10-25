import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Kontak", description: "Jam buka, informasi, dan formulir contoh Warkop Temu." };

export default function KontakPage() {
  return (
    <>
      <section className="page-heading contact-heading"><div className="container"><span className="eyebrow eyebrow-light">YUK, KETEMU LAGI</span><h1>Pintu kami selalu <em>terbuka.</em></h1><p>Mau mampir, cari teman ngobrol, atau sekadar tanya-tanya? Senang bisa ketemu kamu.</p></div></section>
      <section className="contact-section section-space"><div className="container contact-grid"><div className="contact-details"><span className="eyebrow">INFO WARKOP TEMU</span><h2>Temukan waktu untuk <em>bertemu.</em></h2><div className="contact-detail-row"><span className="contact-detail-icon" aria-hidden="true">⌖</span><div><h3>Lokasi</h3><p>Jakarta Selatan, Indonesia</p></div></div><div className="contact-detail-row"><span className="contact-detail-icon" aria-hidden="true">◷</span><div><h3>Jam Operasional</h3><p>Senin – Jumat: 10.00 – 23.00<br />Sabtu – Minggu: 09.00 – 00.00</p></div></div><div className="contact-detail-row"><span className="contact-detail-icon" aria-hidden="true">♡</span><div><h3>Tempat buat semua</h3><p>Datang sendiri atau ramai-ramai, selalu ada alasan buat duduk sejenak.</p></div></div></div><ContactForm /></div></section>
    </>
  );
}
