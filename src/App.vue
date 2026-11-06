<script setup>
import AboutSection from './components/AboutSection.vue'
import AppFooter from './components/AppFooter.vue'
import AppNavbar from './components/AppNavbar.vue'
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import BackToTop from './components/ui/BackToTop.vue'
</script>

<template>
  <a class="skip-link" href="#main">Lewati ke konten utama</a>

  <AppNavbar />

  <main id="main">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>

  <AppFooter />
  <BackToTop />
</template>
