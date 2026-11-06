<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="fade">
    <button
      v-show="visible"
      class="back-to-top"
      type="button"
      aria-label="Kembali ke atas"
      @click="scrollToTop"
    >
      <AppIcon name="arrow-up" :size="18" />
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: clamp(16px, 3vw, 32px);
  bottom: clamp(16px, 3vw, 32px);
  z-index: 80;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-full);
  background: rgba(16, 16, 24, 0.85);
  backdrop-filter: blur(10px);
  color: var(--text);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition),
    border-color var(--transition),
    color var(--transition),
    box-shadow var(--transition);
}

.back-to-top:hover {
  transform: translateY(-3px);
  border-color: rgba(34, 211, 238, 0.5);
  color: var(--neon-cyan);
  box-shadow: var(--glow-cyan);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition), transform var(--transition);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
