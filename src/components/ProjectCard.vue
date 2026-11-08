<script setup>
import AppIcon from './ui/AppIcon.vue'
import TechChip from './ui/TechChip.vue'

defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <article v-reveal="Math.min(index * 70, 280)" class="project-card">
    <div
      class="project-card__thumb"
      :class="{ 'has-image': project.img || project.image }"
      :style="!(project.img || project.image) ? { backgroundImage: project.gradient } : undefined"
    >
      <img
        v-if="project.img || project.image"
        class="project-card__image"
        :src="project.img || project.image"
        :alt="`Tangkapan layar ${project.title}`"
        loading="lazy"
      />
      <span
        v-else-if="project.monogram"
        class="project-card__monogram"
        aria-hidden="true"
      >
        {{ project.monogram }}
      </span>
      <span class="project-card__grain" aria-hidden="true"></span>

      <span v-if="project.featured" class="project-card__badge">
        <AppIcon name="star" :size="12" />
        Unggulan
      </span>
      <span class="project-card__year">{{ project.year }}</span>
    </div>

    <div class="project-card__body">
      <span class="project-card__category">{{ project.category }}</span>
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__desc">{{ project.description }}</p>

      <div class="project-card__stack">
        <TechChip v-for="tech in project.stack" :key="tech" :label="tech" />
      </div>

      <div class="project-card__links">
        <a
          :href="project.demo"
          class="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
          <AppIcon name="external-link" :size="15" />
        </a>
        <a
          :href="project.repo"
          class="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kode
          <AppIcon name="github" :size="15" />
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.008));
  overflow: hidden;
  transition:
    transform var(--transition),
    border-color var(--transition),
    box-shadow var(--transition);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(34, 211, 238, 0.32);
  box-shadow:
    var(--shadow-md),
    0 0 70px -40px rgba(34, 211, 238, 0.7);
}

.project-card__thumb {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  isolation: isolate;
  background-color: rgba(255, 255, 255, 0.03);
}

.project-card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s var(--ease-out);
}

.project-card:hover .project-card__image {
  transform: scale(1.05);
}

.project-card__monogram {
  color: rgba(255, 255, 255, 0.92);
  font-family: var(--font-display);
  font-size: 4.6rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  transition: transform 0.55s var(--ease-out);
}

.project-card:hover .project-card__monogram {
  transform: scale(1.08) rotate(-3deg);
}

.project-card__grain {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.2;
  background-image: radial-gradient(rgba(255, 255, 255, 0.55) 1px, transparent 1px);
  background-size: 14px 14px;
  mix-blend-mode: overlay;
}

.project-card__badge,
.project-card__year {
  position: absolute;
  top: 14px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: var(--radius-full);
  background: rgba(8, 8, 12, 0.45);
  backdrop-filter: blur(8px);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-card__badge {
  left: 14px;
}

.project-card__badge .icon {
  color: #fbbf24;
}

.project-card__year {
  right: 14px;
}

.project-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 9px;
  padding: 22px;
}

.project-card__category {
  color: var(--neon-cyan);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.project-card__title {
  font-size: 1.22rem;
}

.project-card__desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 8px;
}

.project-card__links {
  display: flex;
  gap: 18px;
  margin-top: 6px;
  padding-top: 15px;
  border-top: 1px solid var(--border);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  transition: color var(--transition);
}

.project-card__link:hover {
  color: var(--neon-cyan);
}
</style>
