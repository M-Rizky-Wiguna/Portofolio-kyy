<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { skillGroups } from '../data/portfolio'
import AppIcon from './ui/AppIcon.vue'
import SectionHeading from './ui/SectionHeading.vue'

const root = ref(null)
const visible = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      visible.value = true
      observer.disconnect()
    },
    { threshold: 0.2 },
  )

  if (root.value) observer.observe(root.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="skills" ref="root" class="section section--divided skills">
    <div class="container">
      <SectionHeading
        centered
        eyebrow="Keahlian"
        title="Perangkat yang saya"
        accent="pakai sehari-hari."
        lead="Kombinasi fondasi frontend yang kuat dan kebiasaan merapikan detail visual — dari struktur komponen sampai mikrointeraksi."
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
            <li v-for="(item, index) in group.items" :key="item.name" class="skill">
              <div class="skill__meta">
                <span>{{ item.name }}</span>
                <span class="skill__value">{{ item.level }}%</span>
              </div>
              <div class="skill__track" aria-hidden="true">
                <span
                  class="skill__fill"
                  :style="{
                    width: visible ? `${item.level}%` : '0%',
                    transitionDelay: `${index * 90 + groupIndex * 120}ms`,
                  }"
                ></span>
              </div>
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
  display: grid;
  gap: 16px;
}

.skill__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 0.87rem;
}

.skill__value {
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.7rem;
}

.skill__track {
  height: 6px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.skill__fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--gradient);
  box-shadow: 0 0 16px -4px rgba(34, 211, 238, 0.8);
  transition: width 1.1s var(--ease-out);
}
</style>
