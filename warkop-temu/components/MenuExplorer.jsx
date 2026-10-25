"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { categories, menuItems } from "@/data/menu";

export default function MenuExplorer() {
  const [selected, setSelected] = useState("Semua");
  const filtered = selected === "Semua" ? menuItems : menuItems.filter((item) => item.category === selected);

  return (
    <>
      <div className="menu-filter" role="group" aria-label="Filter kategori menu">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`filter-chip ${selected === category ? "selected" : ""}`}
            aria-pressed={selected === category}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="menu-count" aria-live="polite">Menampilkan {filtered.length} pilihan menu</p>
      <div className="menu-grid">
        {filtered.map((item) => <MenuCard key={item.slug} item={item} />)}
      </div>
    </>
  );
}
