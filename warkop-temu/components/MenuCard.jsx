import Image from "next/image";
import Link from "next/link";
import { rupiah } from "@/data/menu";

export default function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <Link href={`/menu/${item.slug}`} className="menu-card-image-link" aria-label={`Lihat detail ${item.name}`}>
        <div className="menu-card-image">
          <Image src={item.image} alt={`Ilustrasi ${item.name}`} width={640} height={520} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" />
          {item.tag && <span className="menu-card-tag">{item.tag}</span>}
        </div>
      </Link>
      <div className="menu-card-body">
        <span className="menu-card-category">{item.category}</span>
        <div className="menu-card-title-row">
          <h3><Link href={`/menu/${item.slug}`}>{item.name}</Link></h3>
          <span className="menu-card-price">{rupiah(item.price)}</span>
        </div>
        <p>{item.description}</p>
        <Link href={`/menu/${item.slug}`} className="text-link">Lihat detail <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
