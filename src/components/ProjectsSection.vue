<script setup>
import { computed, ref } from 'vue'
import { projectCategories, projects } from '../data/portfolio'
import ProjectCard from './ProjectCard.vue'
import SectionHeading from './ui/SectionHeading.vue'

const activeCategory = ref('Semua')

const filteredProjects = computed(() =>
  activeCategory.value === 'Semua'
    ? projects
    : projects.filter((project) => project.category === activeCategory.value),
)
</script>

<template>
  <section id="projects" class="section section--divided projects">
    <div class="container">
      <div class="projects__head">
        <SectionHeading
          eyebrow="Proyek"
          title="Beberapa hal yang"
          accent="pernah saya bangun."
          lead="Mulai dari dashboard, landing page, sampai eksperimen CSS. Setiap proyek adalah kesempatan belajar hal baru."
        />

        <div class="filters" role="group" aria-label="Filter kategori proyek">
          <button
            v-for="category in projectCategories"
            :key="category"
            type="button"
            class="filter"
            :class="{ 'is-active': activeCategory === category }"
            :aria-pressed="activeCategory === category"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="projects__grid">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          :project="project"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: clamp(36px, 5vw, 56px);
}

.filter {
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  font-size: 0.84rem;
  font-weight: 500;
  transition:
    color var(--transition),
    background var(--transition),
    border-color var(--transition),
    transform var(--transition);
}

.filter:hover {
  transform: translateY(-1px);
  border-color: rgba(34, 211, 238, 0.35);
  color: var(--text);
}

.filter.is-active {
  border-color: transparent;
  background: var(--gradient);
  color: #04090f;
  font-weight: 600;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
