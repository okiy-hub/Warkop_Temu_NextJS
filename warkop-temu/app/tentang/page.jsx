import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "Tentang Kami", description: "Kenali cerita, suasana, dan nilai di balik Warkop Temu." };

export default function TentangPage() {
  return (
    <>
      <section className="page-heading about-heading">
        <div className="container page-heading-grid">
          <div><span className="eyebrow eyebrow-light">KENALAN DULU, YUK</span><h1>Kita selalu punya <em>cerita.</em></h1><p>Warkop sederhana yang percaya bahwa pertemuan kecil bisa jadi bagian paling berkesan dari hari kamu.</p></div>
          <div className="page-heading-flower" aria-hidden="true">✳</div>
        </div>
      </section>
      <section className="section-space">
        <div className="container about-story-grid">
          <div className="about-story-image"><Image src="/images/warkop-scene.svg" alt="Ilustrasi suasana hangat area duduk Warkop Temu" width={750} height={680} sizes="(max-width: 900px) 100vw, 50vw" /></div>
          <div className="about-story-copy">
            <SectionHeading eyebrow="Awal perjalanan" title={<>Dari secangkir kopi, <em>lahirlah Temu.</em></>} />
            <p>Warkop Temu adalah konsep warung kopi yang menggabungkan cita rasa familiar dengan tempat nongkrong yang hangat dan menyenangkan.</p>
            <p>Nama <strong>“Temu”</strong> datang dari hal yang paling kita suka: bertemu orang, bertukar cerita, dan menemukan inspirasi dari obrolan sehari-hari.</p>
            <p>Kami ingin setiap orang merasa diterima. Mau ngobrol ramai-ramai, belajar, bekerja, atau sekadar menyendiri sambil menikmati kopi, semuanya boleh.</p>
            <div className="about-quote">“Di sini, kopi cuma alasan. Ceritanya yang bikin betah.”</div>
          </div>
        </div>
      </section>
      <section className="mission-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Hal yang kami percaya" title={<>Lebih dari <em>sekadar warkop.</em></>} center />
          <div className="mission-grid">
            <div className="mission-card"><span>01 /</span><h3>Hangat</h3><p>Menyambut siapa saja dengan suasana santai yang terasa dekat dan familiar.</p></div>
            <div className="mission-card"><span>02 /</span><h3>Bersahabat</h3><p>Menu yang enak, harga masuk akal, dan tempat ngobrol tanpa batasan.</p></div>
            <div className="mission-card"><span>03 /</span><h3>Berarti</h3><p>Merayakan momen-momen kecil yang menjadikan sebuah pertemuan berkesan.</p></div>
          </div>
        </div>
      </section>
      <section className="about-last section-space">
        <div className="container about-last-inner"><div><span className="eyebrow">SATU MEJA, BANYAK CERITA</span><h2>Yuk, buat cerita baru <em>bareng kita.</em></h2></div><Link href="/menu" className="button button-primary">Intip Menu Kami <span aria-hidden="true">↗</span></Link></div>
      </section>
    </>
  );
}
