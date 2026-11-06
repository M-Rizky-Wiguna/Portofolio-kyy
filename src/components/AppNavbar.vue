<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { navLinks, profile } from '../data/portfolio'
import { useActiveSection } from '../composables/useActiveSection'
import AppIcon from './ui/AppIcon.vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const { active } = useActiveSection(navLinks.map((link) => link.id))

function onScroll() {
  scrolled.value = window.scrollY > 16
}

function closeMenu() {
  menuOpen.value = false
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="navbar" :class="{ 'is-scrolled': scrolled, 'is-open': menuOpen }">
    <div class="navbar__inner container">
      <a href="#home" class="brand" aria-label="Kembali ke beranda" @click="closeMenu">
        <span class="brand__mark" aria-hidden="true">{{ profile.initials }}</span>
        <span class="brand__text">{{ profile.name }}</span>
      </a>

      <nav class="navbar__desktop" aria-label="Navigasi utama">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav-link"
          :class="{ 'is-active': active === link.id }"
          :aria-current="active === link.id ? 'true' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="navbar__actions">
        <a href="#contact" class="navbar__cta" @click="closeMenu">Hubungi Saya</a>
        <button
          class="navbar__toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Tutup menu' : 'Buka menu'"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="22" />
        </button>
      </div>
    </div>

    <Transition name="drop">
      <div v-if="menuOpen" id="mobile-menu" class="navbar__mobile">
        <nav class="navbar__mobile-nav" aria-label="Navigasi seluler">
          <a
            v-for="(link, index) in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="navbar__mobile-link"
            @click="closeMenu"
          >
            <span class="navbar__mobile-index" aria-hidden="true">
              0{{ index + 1 }}
            </span>
            {{ link.label }}
            <AppIcon name="arrow-up-right" :size="18" />
          </a>
        </nav>

        <div class="navbar__mobile-foot">
          <a class="navbar__mobile-mail" :href="`mailto:${profile.email}`">
            <AppIcon name="mail" :size="16" />
            {{ profile.email }}
          </a>
          <div class="navbar__mobile-socials">
            <a
              v-for="social in profile.socials"
              :key="social.label"
              :href="social.url"
              class="navbar__mobile-social"
              :aria-label="social.label"
              :target="social.url.startsWith('http') ? '_blank' : undefined"
              :rel="social.url.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              <AppIcon :name="social.icon" :size="17" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid transparent;
  transition:
    background var(--transition),
    border-color var(--transition),
    backdrop-filter var(--transition);
}

.navbar.is-scrolled {
  border-bottom-color: var(--border);
  background: rgba(8, 8, 12, 0.72);
  backdrop-filter: blur(16px) saturate(140%);
}

.navbar.is-open {
  border-bottom-color: var(--border);
  background: var(--bg);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  height: var(--nav-h);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.02em;
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
  font-size: 0.78rem;
  letter-spacing: 0.02em;
}

.brand__text {
  font-size: 0.96rem;
}

.navbar__desktop {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-link {
  position: relative;
  padding: 8px 14px;
  border-radius: var(--radius-full);
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition:
    color var(--transition),
    background var(--transition);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.nav-link.is-active {
  color: var(--text);
}

.nav-link.is-active::after {
  content: '';
  position: absolute;
  right: 14px;
  bottom: 2px;
  left: 14px;
  height: 2px;
  border-radius: 2px;
  background: var(--gradient);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar__cta {
  padding: 9px 18px;
  border: 1px solid rgba(34, 211, 238, 0.35);
  border-radius: var(--radius-full);
  background: rgba(34, 211, 238, 0.06);
  color: var(--neon-cyan);
  font-size: 0.86rem;
  font-weight: 600;
  transition:
    background var(--transition),
    box-shadow var(--transition),
    transform var(--transition);
}

.navbar__cta:hover {
  transform: translateY(-1px);
  background: rgba(34, 211, 238, 0.12);
  box-shadow: var(--glow-cyan);
}

.navbar__toggle {
  display: none;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
}

/* Panel menu seluler */
.navbar__mobile {
  position: fixed;
  inset: var(--nav-h) 0 0;
  z-index: 95;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-6);
  padding: clamp(20px, 5vw, 36px) max(20px, calc((100vw - var(--container)) / 2));
  background: rgba(8, 8, 12, 0.97);
  backdrop-filter: blur(20px);
  overflow-y: auto;
}

.navbar__mobile-nav {
  display: grid;
  gap: 2px;
}

.navbar__mobile-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 0;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
}

.navbar__mobile-link .icon {
  margin-left: auto;
  color: var(--text-dim);
}

.navbar__mobile-index {
  color: var(--neon-cyan);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 400;
}

.navbar__mobile-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.navbar__mobile-mail {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.86rem;
}

.navbar__mobile-mail:hover {
  color: var(--neon-cyan);
}

.navbar__mobile-socials {
  display: flex;
  gap: 8px;
}

.navbar__mobile-social {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-muted);
}

.navbar__mobile-social:hover {
  border-color: rgba(34, 211, 238, 0.5);
  color: var(--neon-cyan);
}

.drop-enter-active,
.drop-leave-active {
  transition:
    opacity var(--transition),
    transform var(--transition);
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 900px) {
  .navbar__desktop {
    display: none;
  }

  .navbar__toggle {
    display: grid;
  }
}

@media (max-width: 640px) {
  .navbar__cta {
    display: none;
  }

  .brand__text {
    font-size: 0.9rem;
  }
}
</style>
