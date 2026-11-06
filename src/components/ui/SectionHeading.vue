<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  accent: { type: String, default: '' },
  lead: { type: String, default: '' },
  centered: { type: Boolean, default: false },
})
</script>

<template>
  <header v-reveal class="section-heading" :class="{ 'section-heading--centered': centered }">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="section-heading__title">
      {{ title }}
      <span v-if="accent" class="gradient-text">{{ accent }}</span>
    </h2>
    <p v-if="lead" class="section-heading__lead">{{ lead }}</p>
  </header>
</template>

<style scoped>
.section-heading {
  max-width: 680px;
  margin-bottom: clamp(36px, 5vw, 56px);
}

.section-heading--centered {
  margin-inline: auto;
  text-align: center;
}

.section-heading--centered .eyebrow {
  justify-content: center;
}

.section-heading__title {
  margin-top: var(--space-3);
}

.section-heading__lead {
  margin-top: var(--space-4);
  color: var(--text-muted);
  font-size: clamp(1rem, 1.5vw, 1.08rem);
  max-width: 58ch;
}

.section-heading--centered .section-heading__lead {
  margin-inline: auto;
}
</style>
