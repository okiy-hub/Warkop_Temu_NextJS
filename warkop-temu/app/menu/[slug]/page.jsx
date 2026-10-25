import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MenuCard from "@/components/MenuCard";
import { menuItems, getMenuBySlug, rupiah } from "@/data/menu";

// Dynamic route: URL /menu/kopi-susu-aren, /menu/indomie-telur-kornet, dan seterusnya.
export function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getMenuBySlug(slug);
  if (!item) return { title: "Menu tidak ditemukan" };
  return { title: item.name, description: item.description };
}

export default async function DetailMenuPage({ params }) {
  const { slug } = await params;
  const item = getMenuBySlug(slug);
  if (!item) notFound();

  const relatedItems = menuItems.filter((candidate) => candidate.category === item.category && candidate.slug !== item.slug).slice(0, 3);

  return (
    <>
      <section className="detail-section section-space">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/menu">Menu</Link><span>/</span><span aria-current="page">{item.name}</span></nav>
          <div className="detail-grid">
            <div className="detail-art"><Image src={item.image} alt={`Ilustrasi sajian ${item.name}`} width={640} height={520} priority sizes="(max-width: 900px) 100vw, 50vw" /><span className="detail-art-stamp">ENAK<br />BANGET!</span></div>
            <div className="detail-info"><span className="eyebrow">{item.category} / MENU WARKOP TEMU</span><h1>{item.name}</h1><span className="detail-price">{rupiah(item.price)}</span><p className="detail-description">{item.longDescription}</p><div className="detail-divider" /><h2>Bahan utama</h2><div className="ingredient-list">{item.ingredients.map((ingredient) => <span key={ingredient}>✳ {ingredient}</span>)}</div><div className="detail-note"><span aria-hidden="true">☕</span><p>{item.note}</p></div><Link href="/menu" className="button button-primary">← Kembali ke Semua Menu</Link></div>
          </div>
        </div>
      </section>
      {relatedItems.length > 0 && <section className="related-section section-space"><div className="container"><div className="related-heading"><span className="eyebrow">MASIH LAPAR?</span><h2>Coba juga yang <em>ini.</em></h2></div><div className="menu-grid">{relatedItems.map((candidate) => <MenuCard key={candidate.slug} item={candidate} />)}</div></div></section>}
    </>
  );
}
