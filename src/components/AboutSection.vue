<script setup>
import { profile } from '../data/portfolio'
import SectionHeading from './ui/SectionHeading.vue'
</script>

<template>
  <section id="about" class="section section--divided about">
    <div class="container">
      <SectionHeading
        eyebrow="Tentang"
        title="Developer yang peduli"
        accent="pada detail kecil."
        lead="Bukan cuma soal tampilan — saya menikmati proses menerjemahkan desain menjadi antarmuka yang cepat, aksesibel, dan nyaman dipakai."
      />

      <div class="about__grid">
        <div v-reveal class="about__bio panel">
          <p v-for="(paragraph, index) in profile.bio" :key="index">
            {{ paragraph }}
          </p>

          <ul class="about__facts">
            <li v-for="fact in profile.facts" :key="fact.label">
              <span>{{ fact.label }}</span>
              <strong>{{ fact.value }}</strong>
            </li>
          </ul>
        </div>

        <div class="about__stats">
          <article
            v-for="(stat, index) in profile.stats"
            :key="stat.label"
            v-reveal="index * 90"
            class="stat-card panel"
          >
            <strong class="stat-card__value gradient-text">{{ stat.value }}</strong>
            <span class="stat-card__label">{{ stat.label }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.65fr);
  gap: 20px;
  align-items: stretch;
}

.about__bio {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: clamp(24px, 3.5vw, 40px);
}

.about__bio p {
  color: var(--text-muted);
  font-size: clamp(0.96rem, 1.3vw, 1.02rem);
}

.about__facts {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.about__facts li {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 0;
}

.about__facts li + li {
  border-top: 1px solid rgba(255, 255, 255, 0.045);
}

.about__facts span {
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.about__facts strong {
  color: var(--text);
  font-weight: 500;
  text-align: right;
}

.about__stats {
  display: grid;
  gap: 16px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 22px 26px;
  transition:
    transform var(--transition),
    border-color var(--transition),
    box-shadow var(--transition);
}

.stat-card:hover {
  transform: translateY(-3px);
  border-color: rgba(34, 211, 238, 0.3);
  box-shadow: var(--shadow-sm);
}

.stat-card__value {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
}

.stat-card__label {
  max-width: 16ch;
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.45;
}

@media (max-width: 860px) {
  .about__grid {
    grid-template-columns: 1fr;
  }

  .about__stats {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }

  .stat-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
