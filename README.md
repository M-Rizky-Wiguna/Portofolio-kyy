# Portofolio — Vue 3 + Vanilla CSS

Portofolio satu halaman dengan tema dark modern dan aksen neon. Dibangun memakai
**Vue 3 (Composition API)** dan **CSS murni** tanpa framework UI, di-bundle dengan **Vite**.

## Menjalankan project

```bash
npm install
npm run dev      # server pengembangan (hot reload)
npm run build    # build production ke folder dist/
npm run preview  # cek hasil build secara lokal
```

## Struktur

```
├─ index.html                  Meta SEO, Open Graph, dan font
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ App.vue                  Menyusun seluruh section
   ├─ data/portfolio.js        ★ SEMUA KONTEN ADA DI SINI
   ├─ assets/styles/
   │  ├─ tokens.css            CSS variables: warna, spacing, radius, dsb.
   │  ├─ base.css              Reset, tipografi, layout helper
   │  └─ animations.css        Keyframes & scroll reveal
   ├─ composables/
   │  └─ useActiveSection.js   Highlight menu sesuai section aktif
   ├─ directives/
   │  └─ reveal.js             Directive v-reveal (animasi masuk viewport)
   └─ components/
      ├─ AppNavbar.vue
      ├─ HeroSection.vue
      ├─ AboutSection.vue
      ├─ SkillsSection.vue
      ├─ ProjectsSection.vue
      ├─ ProjectCard.vue
      ├─ ContactSection.vue
      ├─ AppFooter.vue
      └─ ui/                   AppIcon, BaseButton, SectionHeading, TechChip, BackToTop
```

## Cara mengubah konten

Semua teks dan tautan terpusat di **`src/data/portfolio.js`**:

- `profile` — nama, role, lokasi, email, bio, sosial media, statistik, fakta.
- `skillGroups` — kategori keahlian beserta nilai (0–100).
- `projects` — daftar proyek: judul, kategori, deskripsi, stack, tautan demo/repo.
- `navLinks` — menu navigasi.

Karena form kontak memakai `mailto:`, ganti `profile.email` dengan alamat email asli.
Tautan demo/repo di data proyek masih memakai `https://example.com` dan `https://github.com/`
sebagai placeholder.

### Menambah proyek

Tambahkan objek baru ke array `projects`:

```js
{
  title: 'Nama Proyek',
  category: 'Web App',        // otomatis muncul di filter
  year: '2026',
  featured: false,            // true → badge "Unggulan"
  description: 'Deskripsi singkat proyek.',
  stack: ['Vue 3', 'CSS'],
  gradient: 'linear-gradient(135deg, #0e7490, #22d3ee, #a855f7)',
  monogram: 'N',              // huruf besar pada thumbnail
  demo: 'https://...',
  repo: 'https://...',
}
```

### Mengganti warna aksen

Ubah nilai di `src/assets/styles/tokens.css`, terutama:

```css
--neon-cyan: #22d3ee;
--neon-violet: #a855f7;
--gradient: linear-gradient(120deg, var(--neon-cyan), var(--neon-violet));
```

## Catatan aksesibilitas & performa

- Semantic HTML, skip link, `aria-*` pada menu, form, dan tombol ikon.
- Animasi otomatis dinonaktifkan saat `prefers-reduced-motion: reduce`.
- Tidak ada dependency runtime tambahan selain Vue.

## Deploy

Build menghasilkan folder statis `dist/`, jadi bisa di-upload ke layanan apa pun:

- **Netlify / Vercel** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — jalankan `npm run build`, lalu deploy isi `dist/`.
  Jika di-host di sub-path (`username.github.io/repo`), set `base: '/repo/'` di `vite.config.js`.
