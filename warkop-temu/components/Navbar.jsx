"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/menu", label: "Menu" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Warkop Temu, kembali ke beranda" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span className="brand-name">warkop<span>temu.</span></span>
        </Link>

        <button
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <span /><span /><span />
        </button>

        <nav id="main-navigation" className={`nav-links ${isOpen ? "nav-open" : ""}`} aria-label="Navigasi utama">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/menu" className="nav-order button button-small" onClick={() => setIsOpen(false)}>
            Pilih Menu <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
