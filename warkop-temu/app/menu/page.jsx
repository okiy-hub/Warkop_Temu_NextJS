import MenuExplorer from "@/components/MenuExplorer";

export const metadata = { title: "Menu", description: "Jelajahi kopi, minuman non-kopi, dan makanan favorit di Warkop Temu." };

export default function MenuPage() {
  return (
    <>
      <section className="page-heading menu-heading">
        <div className="container menu-heading-inner"><span className="eyebrow">PILIHAN BUAT NEMENIN HARI</span><h1>Mau pesan <em>apa?</em></h1><p>Dari kopi klasik sampai makanan favorit anak warkop, semuanya siap bikin harimu lebih nikmat.</p><div className="menu-heading-icon" aria-hidden="true">✳</div></div>
      </section>
      <section className="section-space menu-content"><div className="container"><MenuExplorer /></div></section>
      <section className="menu-footnote"><div className="container"><span aria-hidden="true">✳</span> Harga adalah contoh untuk kebutuhan tugas. Belum termasuk perubahan menu atau promo.</div></section>
    </>
  );
}
