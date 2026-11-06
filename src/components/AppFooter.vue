<script setup>
import { navLinks, profile } from '../data/portfolio'
import AppIcon from './ui/AppIcon.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="#home" class="brand" aria-label="Kembali ke beranda">
            <span class="brand__mark" aria-hidden="true">{{ profile.initials }}</span>
            <span class="brand__name">{{ profile.name }}</span>
          </a>
          <p>{{ profile.role }} · {{ profile.location }}</p>
        </div>

        <nav class="footer__nav" aria-label="Navigasi footer">
          <a v-for="link in navLinks" :key="link.id" :href="`#${link.id}`">
            {{ link.label }}
          </a>
        </nav>

        <div class="footer__socials">
          <a
            v-for="social in profile.socials"
            :key="social.label"
            :href="social.url"
            class="footer__social"
            :aria-label="social.label"
            :target="social.url.startsWith('http') ? '_blank' : undefined"
            :rel="social.url.startsWith('http') ? 'noopener noreferrer' : undefined"
          >
            <AppIcon :name="social.icon" :size="17" />
          </a>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© {{ year }} {{ profile.name }}. Semua hak dilindungi.</p>
        <p class="footer__built">
          Dibuat dengan <span class="gradient-text">Vue 3</span> &amp; CSS murni
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: clamp(40px, 6vw, 64px) 0 28px;
  background: linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.04));
}

.footer__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.footer__brand p {
  margin-top: 10px;
  color: var(--text-dim);
  font-size: 0.84rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(34, 211, 238, 0.35);
  border-radius: 11px;
  background: var(--gradient-soft);
  color: var(--neon-cyan);
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
}

.brand__name {
  font-family: var(--font-display);
  font-size: 0.96rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 22px;
  padding-top: 8px;
}

.footer__nav a {
  color: var(--text-muted);
  font-size: 0.88rem;
  transition: color var(--transition);
}

.footer__nav a:hover {
  color: var(--text);
}

.footer__socials {
  display: flex;
  gap: 8px;
}

.footer__social {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-muted);
  transition:
    transform var(--transition),
    border-color var(--transition),
    color var(--transition);
}

.footer__social:hover {
  transform: translateY(-2px);
  border-color: rgba(34, 211, 238, 0.45);
  color: var(--neon-cyan);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 32px;
  padding-top: 22px;
  border-top: 1px solid var(--border);
  color: var(--text-dim);
  font-size: 0.78rem;
}

.footer__built {
  font-family: var(--font-mono);
  font-size: 0.74rem;
}

@media (max-width: 600px) {
  .footer__top {
    flex-direction: column;
    gap: 22px;
  }
}
</style>
