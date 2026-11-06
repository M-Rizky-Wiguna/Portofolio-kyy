<script setup>
import { computed } from 'vue'
import { profile } from '../data/portfolio'
import AppIcon from './ui/AppIcon.vue'
import BaseButton from './ui/BaseButton.vue'

const firstName = computed(() => profile.name.split(' ')[0])
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <p class="hero__status">
          <span class="hero__status-dot" aria-hidden="true"></span>
          {{ profile.availability }}
        </p>

        <h1 class="hero__title">
          Halo, saya <span class="gradient-text">{{ firstName }}</span>.
          <span class="hero__title-sub">Frontend developer yang peduli detail.</span>
        </h1>

        <p class="hero__tagline">{{ profile.tagline }}</p>

        <div class="hero__actions">
          <BaseButton href="#projects">
            Lihat Proyek
            <AppIcon name="arrow-right" :size="17" />
          </BaseButton>
          <BaseButton href="#contact" variant="outline">
            <AppIcon name="mail" :size="17" />
            Hubungi Saya
          </BaseButton>
        </div>

        <div class="hero__socials">
          <span class="hero__socials-label">Temukan saya</span>
          <a
            v-for="social in profile.socials"
            :key="social.label"
            :href="social.url"
            class="social-btn"
            :aria-label="social.label"
            :title="social.label"
            :target="social.url.startsWith('http') ? '_blank' : undefined"
            :rel="social.url.startsWith('http') ? 'noopener noreferrer' : undefined"
          >
            <AppIcon :name="social.icon" :size="17" />
          </a>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__glow" aria-hidden="true"></div>

        <div class="hero-card">
          <div class="hero-card__bar">
            <span class="hero-card__dot hero-card__dot--red" aria-hidden="true"></span>
            <span class="hero-card__dot hero-card__dot--yellow" aria-hidden="true"></span>
            <span class="hero-card__dot hero-card__dot--green" aria-hidden="true"></span>
            <span class="hero-card__file">profil.js</span>
          </div>

          <div class="hero-card__profile">
            <div class="hero-card__avatar" aria-hidden="true">{{ profile.initials }}</div>
            <div class="hero-card__identity">
              <strong>{{ profile.name }}</strong>
              <span>{{ profile.role }}</span>
            </div>
            <span class="hero-card__status">
              <span aria-hidden="true"></span>
              open
            </span>
          </div>

          <pre class="hero-card__code"><code><span class="tok-key">const</span> <span class="tok-var">developer</span> = {
  <span class="tok-prop">nama</span>: <span class="tok-str">'{{ profile.name }}'</span>,
  <span class="tok-prop">fokus</span>: [<span class="tok-str">'Vue.js'</span>, <span class="tok-str">'CSS'</span>],
  <span class="tok-prop">lokasi</span>: <span class="tok-str">'{{ profile.location }}'</span>,
  <span class="tok-prop">tersedia</span>: <span class="tok-bool">true</span>,
}</code></pre>

          <div class="hero-card__foot">
            <span>// dibangun dengan Vue 3 + CSS murni</span>
          </div>
        </div>

        <div class="float-chip float-chip--vue" aria-hidden="true">Vue 3</div>
        <div class="float-chip float-chip--css" aria-hidden="true">Vanilla CSS</div>
        <div class="float-chip float-chip--vite" aria-hidden="true">Vite</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: clamp(36px, 6vw, 76px);
  padding-bottom: clamp(56px, 9vw, 104px);
  overflow: clip;
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  align-items: center;
  gap: clamp(36px, 6vw, 72px);
  min-height: min(720px, calc(100svh - var(--nav-h) - 32px));
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-muted);
  font-size: 0.8rem;
}

.hero__status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--neon-cyan);
  animation: pulse-dot 2.4s infinite;
}

.hero__title {
  margin-top: var(--space-5);
}

.hero__title-sub {
  display: block;
  margin-top: 10px;
  color: var(--text-muted);
  font-size: clamp(1.05rem, 2.2vw, 1.45rem);
  font-weight: 600;
  letter-spacing: -0.012em;
  line-height: 1.3;
}

.hero__tagline {
  max-width: 52ch;
  margin-top: var(--space-5);
  color: var(--text-muted);
  font-size: clamp(1rem, 1.4vw, 1.08rem);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: var(--space-6);
}

.hero__socials {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: var(--space-6);
}

.hero__socials-label {
  margin-right: 4px;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.social-btn {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  transition:
    transform var(--transition),
    border-color var(--transition),
    background var(--transition),
    color var(--transition);
}

.social-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(34, 211, 238, 0.5);
  background: rgba(34, 211, 238, 0.08);
  color: var(--neon-cyan);
}

/* Kartu visual */
.hero__visual {
  position: relative;
  display: grid;
  place-items: center;
}

.hero__glow {
  position: absolute;
  inset: 8% 2%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 42%,
    rgba(34, 211, 238, 0.22),
    rgba(168, 85, 247, 0.18) 46%,
    transparent 72%
  );
  filter: blur(34px);
  animation: drift 9s ease-in-out infinite;
}

.hero-card {
  position: relative;
  width: min(100%, 460px);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, rgba(21, 21, 31, 0.94), rgba(11, 11, 18, 0.97));
  box-shadow:
    var(--shadow-md),
    0 0 100px -46px rgba(34, 211, 238, 0.6);
  overflow: hidden;
}

.hero-card__bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 13px 18px;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

.hero-card__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.hero-card__dot--red {
  background: #f87171;
}
.hero-card__dot--yellow {
  background: #fbbf24;
}
.hero-card__dot--green {
  background: #34d399;
}

.hero-card__file {
  margin-left: auto;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.7rem;
}

.hero-card__profile {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 22px;
}

.hero-card__avatar {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: var(--gradient);
  color: #04090f;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
}

.hero-card__identity strong {
  display: block;
  font-family: var(--font-display);
  font-size: 0.98rem;
}

.hero-card__identity span {
  display: block;
  color: var(--text-muted);
  font-size: 0.78rem;
}

.hero-card__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  color: var(--neon-cyan);
  font-family: var(--font-mono);
  font-size: 0.68rem;
}

.hero-card__status span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--neon-cyan);
  box-shadow: 0 0 8px var(--neon-cyan);
}

.hero-card__code {
  margin: 0;
  padding: 18px 22px 22px;
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.25);
  color: #c9c9dc;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  line-height: 1.85;
  overflow-x: auto;
}

.tok-key {
  color: var(--neon-violet);
}
.tok-var {
  color: #e2e8f0;
}
.tok-prop {
  color: #7dd3fc;
}
.tok-str {
  color: #86efac;
}
.tok-bool {
  color: var(--neon-pink);
}

.hero-card__foot {
  padding: 11px 22px;
  border-top: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.015);
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.68rem;
}

.float-chip {
  position: absolute;
  padding: 8px 14px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-full);
  background: rgba(16, 16, 24, 0.92);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  animation: float 6s ease-in-out infinite;
}

.float-chip--vue {
  top: 7%;
  right: -3%;
  color: var(--neon-cyan);
  --tilt: 5deg;
}

.float-chip--css {
  bottom: 22%;
  left: -6%;
  color: var(--neon-violet);
  --tilt: -6deg;
  animation-delay: -2s;
}

.float-chip--vite {
  right: 6%;
  bottom: 3%;
  --tilt: 3deg;
  animation-delay: -4s;
}

@media (max-width: 980px) {
  .hero__inner {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .hero__content {
    max-width: 640px;
  }

  .hero__visual {
    margin-top: var(--space-4);
  }
}

@media (max-width: 560px) {
  .float-chip {
    display: none;
  }

  .hero__actions > * {
    flex: 1 1 100%;
  }
}
</style>
