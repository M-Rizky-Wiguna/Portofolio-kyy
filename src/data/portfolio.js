/**
 * SEMUA KONTEN PORTOFOLIO ADA DI FILE INI.
 * Ubah teks, tautan, dan data di sini tanpa menyentuh komponen.
 */

export const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

export const profile = {
  name: "Rizky Wiguna",
  initials: "RW",
  role: "Frontend Developer",
  location: "Bandung, Indonesia",
  email: "axlerrr9@gmail.com",
  availability: "Terbuka untuk proyek freelance & full-time",
  tagline:
    "Saya merancang dan membangun antarmuka web yang cepat, rapi, dan menyenangkan digunakan.",
  bio: [
    "Halo! Saya Rizky, frontend developer yang berfokus pada Vue.js dan CSS murni. Bagi saya, tampilan yang baik bukan cuma soal estetika — tapi juga kecepatan, keterbacaan, dan kemudahan pakai.",
    "Saat ini saya banyak mengerjakan aplikasi web dengan Vue 3, Vite, dan design system buatan sendiri. Saya suka detail kecil: transisi yang halus, kontras yang pas, dan layout yang tetap enak dilihat di layar sekecil apa pun.",
  ],
  socials: [
    {
      label: "GitHub",
      icon: "github",
      url: "https://github.com/M-Rizky-Wiguna",
    },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/" },
    {
      label: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/ikyy_wgn",
    },
    { label: "Email", icon: "mail", url: "mailto:axlerrr@gmail.com" },
  ],
  stats: [
    { value: "3+", label: "Tahun belajar & membangun" },
    { value: "3", label: "Proyek selesai" },
    { value: "12", label: "Teknologi yang pernah dipakai" },
  ],
  facts: [
    { label: "Lokasi", value: "Bandung, Indonesia" },
    { label: "Fokus", value: "Berfokus pada pembuatan game " },
    { label: "Status", value: "Lagi berkembang" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: "code",
    description: "Bisa apa aja di sisi tampilan.",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: "server",
    description: "Bisa apa aja di sisi server.",
    items: ["Belum ada"],
  },
  {
    title: "Database",
    icon: "database",
    description: "Bisa apa aja di sisi data.",
    items: ["MySQL"],
  },
];

export const projects = [
  {
    title: "Pangan Lele Otomatis",
    category: "IoT",
    year: "2025",
    featured: true,
    description:
      "Dengan mengembangkan sistem IoT berbasis ESP32, proyek ini memungkinkan pemberian pakan ikan lele secara otomatis. Dilengkapi dengan servo yang dapat menggerakan penahan pangan dan kontrol jarak jauh melalui aplikasi web.",
    stack: ["Arduino Ide", "C++", "esp8266",],
    gradient: "linear-gradient(135deg, #0e7490 0%, #22d3ee 48%, #a855f7 100%)",
    img: "/Lele.png",
    demo: "https://example.com",
    repo: "https://github.com/",
  },
  {
    title: "Online Shop",
    category: "E-commerce",
    year: "2025",
    description:
      "Sebuah toko online sederhana yang menampilkan katalog produk, keranjang belanja, dan proses checkout. Dibangun dengan Vue 3 dan Vite, Dipadukan dengan framework Tailwind.",
    stack: ["Vue 3", "Vite", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #78350f 0%, #f59e0b 55%, #f472b6 100%)",
    img: "O",
    demo: "https://m-rizky-wiguna-onlineshop.vercel.app/",
    repo: "https://github.com/M-Rizky-Wiguna/OnlineShop.git",
  },
  {
    title: "Portofolio v1",
    category: "Landing Page",
    year: "2023",
    description:
      "Versi pertama portofolio pribadi yang dibangun dengan HTML, CSS, dan JavaScript murni sebelum bermigrasi ke Vue.",
    stack: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #3b0764 0%, #a855f7 50%, #22d3ee 100%)",
    img: "P",
    demo: "",
    repo: "https://github.com/",
  },
];

export const projectCategories = [
  "Semua",
  ...new Set(projects.map((project) => project.category)),
];
