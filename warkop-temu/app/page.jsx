import Image from "next/image";
import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import SectionHeading from "@/components/SectionHeading";
import { featuredItems } from "@/data/menu";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><span className="live-dot" /> HALO, SELAMAT DATANG DI WARKOP TEMU</span>
            <h1>Secangkir kopi.<br /><em>Sejuta cerita.</em></h1>
            <p className="hero-description">Bukan sekadar tempat ngopi. Di sini, obrolan kecil bisa jadi kenangan besar. Datang sendiri, pulang bawa cerita.</p>
            <div className="hero-actions">
              <Link href="/menu" className="button button-primary">Jelajahi Menu <span aria-hidden="true">↗</span></Link>
              <Link href="/tentang" className="button button-outline">Kenalan Dulu <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-info">
              <div className="hero-info-item"><strong>08+</strong><span>Pilihan menu favorit</span></div>
              <div className="hero-info-divider" />
              <div className="hero-info-item"><strong>100%</strong><span>Tempat buat santai</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/images/hero-warkop.svg" alt="Ilustrasi kopi susu, camilan, dan suasana nongkrong Warkop Temu" width={780} height={825} priority sizes="(max-width: 960px) 95vw, 50vw" />
            <div className="hero-round-label" aria-label="Hangat, akrab, sederhana"><span>HANGAT • AKRAB •</span><strong>temu!</strong></div>
          </div>
        </div>
        <div className="hero-bottom-line" aria-hidden="true"><span>♥</span> DIBUAT UNTUK OBROLAN YANG NGGAK ADA HABISNYA <span>♥</span></div>
      </section>

      <section className="featured-section section-space">
        <div className="container">
          <div className="section-heading-with-action">
            <SectionHeading eyebrow="Menu andalan kita" title={<>Yang selalu bikin <em>kangen.</em></>} description="Ada menu yang rasanya selalu pas, apalagi kalau dinikmati bareng teman." />
            <Link href="/menu" className="button button-outline button-see-all">Semua Menu <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="menu-grid featured-grid">
            {featuredItems.map((item) => <MenuCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>

      <section className="story-section section-space">
        <div className="container story-layout">
          <div className="story-art">
            <Image src="/images/warkop-scene.svg" alt="Ilustrasi tempat Warkop Temu dengan suasana nyaman dan dua kursi untuk mengobrol" width={750} height={680} sizes="(max-width: 900px) 100vw, 46vw" />
            <span className="story-sticker">duduk dulu<br /><strong>yuk!</strong></span>
          </div>
          <div className="story-copy">
            <SectionHeading eyebrow="Sedikit cerita tentang kami" title={<>Tempat sederhana, <em>rasa yang istimewa.</em></>} />
            <p>Warkop Temu lahir dari satu ide kecil: semua orang butuh tempat untuk berhenti sejenak, menyeruput kopi, dan bercerita tanpa buru-buru.</p>
            <p>Di sini, kamu bisa ketemu teman lama, mengerjakan tugas, atau sekadar menikmati waktu sendiri. Semua cerita punya tempat.</p>
            <Link href="/tentang" className="button button-primary">Cerita Tentang Temu <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="values-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Kenapa mampir ke sini?" title={<>Sederhana, tapi <em>berkesan.</em></>} center />
          <div className="values-grid">
            <div className="value-item"><div className="value-icon" aria-hidden="true">☕</div><h3>Kopi yang Pas</h3><p>Dari kopi tubruk klasik sampai racikan kekinian, semua dibuat buat nemenin harimu.</p></div>
            <div className="value-item"><div className="value-icon" aria-hidden="true">✳</div><h3>Suasana Akrab</h3><p>Tempat nyaman buat ngobrol, produktif, atau santai sambil dengerin cerita.</p></div>
            <div className="value-item"><div className="value-icon" aria-hidden="true">♡</div><h3>Harga Bersahabat</h3><p>Ngopi dan ngemil nggak harus mahal. Yang penting momennya terasa spesial.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-layout">
          <div><span className="eyebrow eyebrow-light">ADA MEJA KOSONG BUAT KAMU</span><h2>Sudah waktunya <em>ketemu.</em></h2><p>Ngopi boleh sendiri, tapi cerita lebih asik kalau dibagi.</p></div>
          <Link href="/kontak" className="button button-cream">Mampir ke Temu <span aria-hidden="true">↗</span></Link>
          <span className="cta-doodle" aria-hidden="true">✳</span>
        </div>
      </section>
    </>
  );
}
