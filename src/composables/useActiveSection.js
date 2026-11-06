import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Melacak section yang sedang aktif di viewport untuk highlight menu navbar.
 */
export function useActiveSection(ids) {
  const active = ref(ids[0] ?? '')
  let observer

  onMounted(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null)

    if (!sections.length) return

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          active.value = visible[0].target.id
        }
      },
      {
        rootMargin: '-42% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))
  })

  onUnmounted(() => observer?.disconnect())

  return { active }
}
