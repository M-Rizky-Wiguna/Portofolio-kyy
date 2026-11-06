<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <span class="chip">{{ label }}</span>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.32rem 0.72rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
</style>
