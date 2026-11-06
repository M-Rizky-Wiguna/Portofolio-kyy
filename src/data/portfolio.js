/**
 * SEMUA KONTEN PORTOFOLIO ADA DI FILE INI.
 * Ubah teks, tautan, dan data di sini tanpa menyentuh komponen.
 */

export const navLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'projects', label: 'Proyek' },
  { id: 'contact', label: 'Kontak' },
]

export const profile = {
  name: 'Rizky Wiguna',
  initials: 'RW',
  role: 'Frontend Developer',
  location: 'Bandung, Indonesia',
  email: 'axlerrr9@gmail.com',
  availability: 'Terbuka untuk proyek freelance & full-time',
  tagline:
    'Saya merancang dan membangun antarmuka web yang cepat, rapi, dan menyenangkan digunakan.',
  bio: [
    'Halo! Saya Rizky, frontend developer yang berfokus pada Vue.js dan CSS murni. Bagi saya, tampilan yang baik bukan cuma soal estetika — tapi juga kecepatan, keterbacaan, dan kemudahan pakai.',
    'Saat ini saya banyak mengerjakan aplikasi web dengan Vue 3, Vite, dan design system buatan sendiri. Saya suka detail kecil: transisi yang halus, kontras yang pas, dan layout yang tetap enak dilihat di layar sekecil apa pun.',
  ],
  socials: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/M-Rizky-Wiguna' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/' },
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/ikyy_wgn' },
    { label: 'Email', icon: 'mail', url: 'mailto:axlerrr@gmail.com' },
  ],
  stats: [
    { value: '3+', label: 'Tahun belajar & membangun' },
    { value: '18', label: 'Proyek selesai' },
    { value: '12', label: 'Teknologi dipakai' },
  ],
  facts: [
    { label: 'Lokasi', value: 'Bandung, Indonesia' },
    { label: 'Fokus', value: 'Vue.js · CSS · UI Engineering' },
    { label: 'Status', value: 'Tersedia untuk kolaborasi' },
  ],
}

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'code',
    description: 'Membangun antarmuka dan logika aplikasi.',
    items: [
      { name: 'Vue.js 3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 74 },
      { name: 'HTML5', level: 95 },
    ],
  },
  {
    title: 'Styling & UI',
    icon: 'layout',
    description: 'Merapikan tampilan dari desain sampai responsif.',
    items: [
      { name: 'CSS3 / Vanilla CSS', level: 94 },
      { name: 'Responsive Design', level: 92 },
      { name: 'CSS Animation', level: 85 },
      { name: 'Figma', level: 78 },
    ],
  },
  {
    title: 'Tools & Lainnya',
    icon: 'wrench',
    description: 'Alat pendukung kerja sehari-hari.',
    items: [
      { name: 'Git & GitHub', level: 86 },
      { name: 'Vite', level: 84 },
      { name: 'REST API', level: 80 },
      { name: 'Pinia', level: 76 },
    ],
  },
]

export const projects = [
  {
    title: 'Nebula Dashboard',
    category: 'Web App',
    year: '2025',
    featured: true,
    description:
      'Dashboard analitik dengan grafik interaktif, mode gelap, dan layout grid yang adaptif. Fokus pada keterbacaan data dan performa render.',
    stack: ['Vue 3', 'Chart.js', 'CSS Grid'],
    gradient: 'linear-gradient(135deg, #0e7490 0%, #22d3ee 48%, #a855f7 100%)',
    monogram: 'N',
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Kopi Senja',
    category: 'Landing Page',
    year: '2025',
    description:
      'Landing page kedai kopi dengan animasi scroll halus, katalog menu, dan galeri foto. Dibangun tanpa framework CSS agar bundle tetap ringan.',
    stack: ['Vue 3', 'Vite', 'CSS Animation'],
    gradient: 'linear-gradient(135deg, #78350f 0%, #f59e0b 55%, #f472b6 100%)',
    monogram: 'K',
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'TaskFlow',
    category: 'Web App',
    year: '2024',
    featured: true,
    description:
      'Aplikasi kanban sederhana dengan drag-and-drop, pencarian, dan penyimpanan lokal. State dikelola rapi memakai Pinia.',
    stack: ['Vue 3', 'Pinia', 'LocalStorage'],
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #6366f1 50%, #22d3ee 100%)',
    monogram: 'T',
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Cuaca Kita',
    category: 'Web App',
    year: '2024',
    description:
      'Aplikasi prakiraan cuaca yang memanfaatkan geolokasi dan REST API. Menampilkan kondisi per jam dengan ilustrasi cuaca berbasis CSS.',
    stack: ['Vue 3', 'REST API', 'Geolocation'],
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #38bdf8 52%, #818cf8 100%)',
    monogram: 'C',
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Portofolio v1',
    category: 'Landing Page',
    year: '2023',
    description:
      'Versi pertama portofolio pribadi yang dibangun dengan HTML, CSS, dan JavaScript murni sebelum bermigrasi ke Vue.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #3b0764 0%, #a855f7 50%, #22d3ee 100%)',
    monogram: 'P',
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Motion UI Lab',
    category: 'Eksperimen',
    year: '2023',
    description:
      'Kumpulan eksperimen transisi dan mikrointeraksi CSS: hover, scroll reveal, dan komponen bertema neon.',
    stack: ['CSS', 'Animation', 'Design'],
    gradient: 'linear-gradient(135deg, #134e4a 0%, #2dd4bf 45%, #a855f7 100%)',
    monogram: 'M',
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
]

export const projectCategories = [
  'Semua',
  ...new Set(projects.map((project) => project.category)),
]
