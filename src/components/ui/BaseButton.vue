<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, default: '' },
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' },
  block: { type: Boolean, default: false },
})

const tag = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :href="href || undefined"
    :type="href ? undefined : type"
    class="btn"
    :class="[`btn--${variant}`, { 'btn--block': block }]"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.82rem 1.45rem;
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    background var(--transition),
    border-color var(--transition),
    color var(--transition);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(0);
}

.btn--block {
  width: 100%;
}

.btn--primary {
  background: var(--gradient);
  color: #04090f;
  box-shadow: 0 12px 32px -14px rgba(34, 211, 238, 0.65);
}

.btn--primary:hover {
  box-shadow: 0 18px 44px -14px rgba(34, 211, 238, 0.8);
}

.btn--outline {
  border-color: var(--border-strong);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.btn--outline:hover {
  border-color: rgba(34, 211, 238, 0.55);
  background: rgba(34, 211, 238, 0.07);
  color: #fff;
}

.btn--ghost {
  color: var(--text-muted);
}

.btn--ghost:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
}

.btn :deep(.icon) {
  transition: transform var(--transition);
}

.btn:hover :deep(.icon) {
  transform: translateX(2px);
}
</style>
