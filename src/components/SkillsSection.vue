<script setup>
import { skillGroups } from '../data/portfolio'
import AppIcon from './ui/AppIcon.vue'
import SectionHeading from './ui/SectionHeading.vue'
import TechChip from './ui/TechChip.vue'
</script>

<template>
  <section id="skills" class="section section--divided skills">
    <div class="container">
      <SectionHeading
        centered
        eyebrow="Keahlian"
        title="Dari tampilan sampai"
        accent="server dan database."
        lead="Saya nyaman mengerjakan seluruh alur aplikasi — mulai dari antarmuka, logika backend, sampai pengelolaan data."
      />

      <div class="skills__grid">
        <article
          v-for="(group, groupIndex) in skillGroups"
          :key="group.title"
          v-reveal="groupIndex * 100"
          class="skill-card panel"
        >
          <div class="skill-card__head">
            <span class="skill-card__icon" aria-hidden="true">
              <AppIcon :name="group.icon" :size="20" />
            </span>
            <div>
              <h3>{{ group.title }}</h3>
              <p>{{ group.description }}</p>
            </div>
          </div>

          <ul class="skill-list">
            <li v-for="item in group.items" :key="item">
              <TechChip :label="item" />
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.skill-card {
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: clamp(22px, 3vw, 30px);
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}

.skill-card:hover {
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: 0 0 60px -34px rgba(168, 85, 247, 0.6);
}

.skill-card__head {
  display: flex;
  align-items: flex-start;
  gap: 13px;
}

.skill-card__icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 13px;
  background: var(--gradient-soft);
  color: var(--neon-cyan);
}

.skill-card__head h3 {
  font-size: 1.12rem;
}

.skill-card__head p {
  margin-top: 3px;
  color: var(--text-muted);
  font-size: 0.82rem;
  line-height: 1.5;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}
</style>
