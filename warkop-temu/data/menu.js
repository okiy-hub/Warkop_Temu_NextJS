/** Data terpusat: semua halaman dan kartu produk membaca dari file ini. */
export const menuItems = [
  {
    slug: "kopi-susu-aren",
    name: "Kopi Susu Aren",
    category: "Kopi",
    price: 18000,
    image: "/images/kopi-susu.svg",
    description: "Espresso, susu creamy, dan manis gula aren yang pas. Teman ngobrol paling dicari.",
    longDescription:
      "Perpaduan espresso yang kuat, susu segar yang lembut, dan gula aren dengan rasa karamel alami. Dibuat untuk kamu yang suka kopi seimbang: tidak terlalu pahit, tidak terlalu manis.",
    ingredients: ["Espresso", "Susu segar", "Gula aren", "Es batu"],
    tag: "Favorit Temu",
    note: "Paling enak diminum dingin",
    featured: true,
  },
  {
    slug: "kopi-tubruk",
    name: "Kopi Tubruk",
    category: "Kopi",
    price: 12000,
    image: "/images/kopi-tubruk.svg",
    description: "Kopi hitam klasik, sederhana, pekat, dan penuh karakter.",
    longDescription:
      "Kopi tubruk adalah rasa warkop yang tidak lekang waktu. Bubuk kopi diseduh langsung dengan air panas, menghadirkan aroma hangat dan rasa yang mantap.",
    ingredients: ["Bubuk kopi pilihan", "Air panas", "Gula (opsional)"],
    tag: "Klasik",
    note: "Disajikan hangat",
    featured: false,
  },
  {
    slug: "es-kopi-pandan",
    name: "Es Kopi Pandan",
    category: "Kopi",
    price: 20000,
    image: "/images/kopi-pandan.svg",
    description: "Kopi susu dengan sentuhan aroma pandan yang unik dan menyegarkan.",
    longDescription:
      "Es kopi pandan memberi sentuhan lokal pada racikan kopi susu. Aroma pandan yang wangi berpadu dengan espresso dan susu untuk rasa yang ringan dan berbeda.",
    ingredients: ["Espresso", "Susu", "Sirup pandan", "Es batu"],
    tag: "Signature",
    note: "Disajikan dingin",
    featured: true,
  },
  {
    slug: "teh-tarik",
    name: "Teh Tarik",
    category: "Non-Kopi",
    price: 14000,
    image: "/images/teh-tarik.svg",
    description: "Teh susu wangi dengan busa lembut untuk sore yang santai.",
    longDescription:
      "Teh hitam dan susu berpadu jadi minuman hangat yang creamy, berbusa lembut, dan cocok untuk kamu yang ingin istirahat dari kopi.",
    ingredients: ["Teh hitam", "Susu kental manis", "Air panas"],
    tag: "Tanpa Kopi",
    note: "Bisa dinikmati hangat atau dingin",
    featured: false,
  },
  {
    slug: "indomie-telur-kornet",
    name: "Indomie Telur Kornet",
    category: "Makanan",
    price: 22000,
    image: "/images/indomie.svg",
    description: "Mi hangat dengan telur dan kornet. Andalan setiap sesi nongkrong.",
    longDescription:
      "Menu warkop yang selalu jadi penyelamat lapar. Mi yang gurih disajikan dengan telur dan kornet, cocok untuk menemani obrolan panjang.",
    ingredients: ["Mi instan", "Telur", "Kornet", "Daun bawang"],
    tag: "Paling Laris",
    note: "Disajikan hangat",
    featured: true,
  },
  {
    slug: "roti-bakar-cokelat-keju",
    name: "Roti Bakar Cokelat Keju",
    category: "Makanan",
    price: 18000,
    image: "/images/roti-bakar.svg",
    description: "Roti renyah, cokelat manis, dan keju melimpah. Sulit ditolak.",
    longDescription:
      "Roti dibakar hingga keemasan, lalu diisi cokelat dan keju. Renyah di luar, lembut di dalam, dan pas untuk dibagi bersama teman.",
    ingredients: ["Roti tawar", "Cokelat", "Keju", "Margarin"],
    tag: "Cemilan",
    note: "Paling nikmat saat hangat",
    featured: false,
  },
  {
    slug: "pisang-goreng",
    name: "Pisang Goreng",
    category: "Makanan",
    price: 17000,
    image: "/images/pisang.svg",
    description: "Pisang goreng keemasan, gurih-renyah untuk teman kopi.",
    longDescription:
      "Pisang matang dibalut adonan tipis lalu digoreng hingga renyah. Camilan sederhana dengan rasa yang selalu bikin kangen.",
    ingredients: ["Pisang", "Tepung", "Gula", "Minyak goreng"],
    tag: "Cemilan",
    note: "Disajikan hangat",
    featured: false,
  },
  {
    slug: "kentang-goreng",
    name: "Kentang Goreng",
    category: "Makanan",
    price: 16000,
    image: "/images/kentang.svg",
    description: "Kentang renyah dengan bumbu gurih, enak dimakan ramai-ramai.",
    longDescription:
      "Potongan kentang digoreng hingga keemasan, ditabur bumbu ringan, dan disajikan dengan saus pendamping. Cocok untuk menemani berbagai cerita.",
    ingredients: ["Kentang", "Garam", "Bumbu tabur", "Saus"],
    tag: "Cemilan",
    note: "Disajikan hangat",
    featured: false,
  },
];

export const categories = ["Semua", "Kopi", "Non-Kopi", "Makanan"];
export const featuredItems = menuItems.filter((item) => item.featured);
export const getMenuBySlug = (slug) => menuItems.find((item) => item.slug === slug);
export const rupiah = (amount) => `Rp${amount.toLocaleString("id-ID")}`;
