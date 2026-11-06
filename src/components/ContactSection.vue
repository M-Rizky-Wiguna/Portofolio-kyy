<script setup>
import { onUnmounted, reactive, ref } from 'vue'
import { profile } from '../data/portfolio'
import AppIcon from './ui/AppIcon.vue'
import BaseButton from './ui/BaseButton.vue'
import SectionHeading from './ui/SectionHeading.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const copied = ref(false)
let copyTimer

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  errors.name = form.name.trim() ? '' : 'Nama wajib diisi.'

  if (!form.email.trim()) {
    errors.email = 'Email wajib diisi.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Format email belum benar.'
  } else {
    errors.email = ''
  }

  errors.message =
    form.message.trim().length >= 10 ? '' : 'Tulis pesan minimal 10 karakter.'

  return !errors.name && !errors.email && !errors.message
}

function onSubmit() {
  if (!validate()) {
    submitted.value = false
    return
  }

  const subject = form.subject.trim() || `Pesan dari ${form.name.trim()}`
  const body = [
    `Halo ${profile.name},`,
    '',
    form.message.trim(),
    '',
    '—',
    `Nama: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
  ].join('\n')

  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

  submitted.value = true
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
  } catch {
    const area = document.createElement('textarea')
    area.value = profile.email
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    document.execCommand('copy')
    area.remove()
  }

  copied.value = true
  clearTimeout(copyTimer)
  copyTimer = setTimeout(() => {
    copied.value = false
  }, 2200)
}

onUnmounted(() => clearTimeout(copyTimer))
</script>

<template>
  <section id="contact" class="section section--divided contact">
    <div class="container">
      <SectionHeading
        eyebrow="Kontak"
        title="Punya ide? Mari"
        accent="ngobrol."
        lead="Terbuka untuk peluang kerja, proyek freelance, atau sekadar bertukar pikiran soal frontend dan desain antarmuka."
      />

      <div class="contact__grid">
        <div class="contact__info">
          <div v-reveal class="contact__card panel">
            <div class="contact__row">
              <span class="contact__icon" aria-hidden="true">
                <AppIcon name="mail" :size="18" />
              </span>
              <div class="contact__row-body">
                <span class="contact__label">Email</span>
                <a :href="`mailto:${profile.email}`" class="contact__value">
                  {{ profile.email }}
                </a>
              </div>
              <button
                type="button"
                class="contact__copy"
                :aria-label="copied ? 'Email berhasil disalin' : 'Salin alamat email'"
                @click="copyEmail"
              >
                <AppIcon :name="copied ? 'check' : 'copy'" :size="16" />
              </button>
            </div>

            <div class="contact__row">
              <span class="contact__icon" aria-hidden="true">
                <AppIcon name="map-pin" :size="18" />
              </span>
              <div class="contact__row-body">
                <span class="contact__label">Lokasi</span>
                <span class="contact__value">{{ profile.location }}</span>
              </div>
            </div>

            <div class="contact__row">
              <span class="contact__icon" aria-hidden="true">
                <AppIcon name="sparkles" :size="18" />
              </span>
              <div class="contact__row-body">
                <span class="contact__label">Status</span>
                <span class="contact__value">{{ profile.availability }}</span>
              </div>
            </div>
          </div>

          <div v-reveal="80" class="contact__socials">
            <a
              v-for="social in profile.socials"
              :key="social.label"
              :href="social.url"
              class="contact__social"
              :target="social.url.startsWith('http') ? '_blank' : undefined"
              :rel="social.url.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              <AppIcon :name="social.icon" :size="17" />
              <span>{{ social.label }}</span>
            </a>
          </div>
        </div>

        <form v-reveal="120" class="contact__form panel" novalidate @submit.prevent="onSubmit">
          <div class="form-grid">
            <div class="field">
              <label for="name">Nama</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="Nama kamu"
                :aria-invalid="Boolean(errors.name)"
                :aria-describedby="errors.name ? 'name-error' : undefined"
              />
              <p v-if="errors.name" id="name-error" class="field__error">
                {{ errors.name }}
              </p>
            </div>

            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="nama@email.com"
                :aria-invalid="Boolean(errors.email)"
                :aria-describedby="errors.email ? 'email-error' : undefined"
              />
              <p v-if="errors.email" id="email-error" class="field__error">
                {{ errors.email }}
              </p>
            </div>
          </div>

          <div class="field">
            <label for="subject">Subjek <span>(opsional)</span></label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              name="subject"
              placeholder="Misalnya: Kolaborasi proyek"
            />
          </div>

          <div class="field">
            <label for="message">Pesan</label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="5"
              placeholder="Ceritakan sedikit tentang ide atau kebutuhan kamu…"
              :aria-invalid="Boolean(errors.message)"
              :aria-describedby="errors.message ? 'message-error' : undefined"
            ></textarea>
            <p v-if="errors.message" id="message-error" class="field__error">
              {{ errors.message }}
            </p>
          </div>

          <BaseButton type="submit" block>
            Kirim Pesan
            <AppIcon name="send" :size="17" />
          </BaseButton>

          <p class="contact__note">
            Form ini akan membuka aplikasi email kamu. Tidak ada data yang dikirim ke
            server.
          </p>

          <p v-if="submitted" class="contact__success" role="status">
            <AppIcon name="check" :size="16" />
            <span>
              Aplikasi email sedang dibuka. Kalau tidak terbuka, kirim manual ke
              <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>.
            </span>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 20px;
  align-items: start;
}

.contact__info {
  display: grid;
  gap: 16px;
}

.contact__card {
  padding: 10px 26px;
}

.contact__row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 0;
}

.contact__row + .contact__row {
  border-top: 1px solid var(--border);
}

.contact__icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 13px;
  background: var(--gradient-soft);
  color: var(--neon-cyan);
}

.contact__row-body {
  min-width: 0;
}

.contact__label {
  display: block;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.contact__value {
  display: block;
  color: var(--text);
  font-size: 0.94rem;
  overflow-wrap: anywhere;
}

a.contact__value {
  transition: color var(--transition);
}

a.contact__value:hover {
  color: var(--neon-cyan);
}

.contact__copy {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-left: auto;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-muted);
  transition:
    color var(--transition),
    border-color var(--transition),
    background var(--transition);
}

.contact__copy:hover {
  border-color: rgba(34, 211, 238, 0.45);
  background: rgba(34, 211, 238, 0.08);
  color: var(--neon-cyan);
}

.contact__socials {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.contact__social {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 15px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  font-size: 0.88rem;
  transition:
    transform var(--transition),
    border-color var(--transition),
    color var(--transition),
    background var(--transition);
}

.contact__social .icon {
  color: var(--neon-cyan);
}

.contact__social:hover {
  transform: translateY(-2px);
  border-color: rgba(34, 211, 238, 0.35);
  background: rgba(34, 211, 238, 0.05);
  color: var(--text);
}

/* Form */
.contact__form {
  display: grid;
  gap: 18px;
  padding: clamp(22px, 3.5vw, 34px);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.field {
  display: grid;
  gap: 7px;
}

.field label {
  color: var(--text);
  font-size: 0.85rem;
  font-weight: 500;
}

.field label span {
  color: var(--text-dim);
  font-size: 0.78rem;
  font-weight: 400;
}

.field input,
.field textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(0, 0, 0, 0.26);
  color: var(--text);
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

.field textarea {
  min-height: 120px;
  resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--text-dim);
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: rgba(34, 211, 238, 0.6);
  background: rgba(0, 0, 0, 0.34);
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.12);
}

.field input[aria-invalid='true'],
.field textarea[aria-invalid='true'] {
  border-color: rgba(244, 114, 182, 0.65);
}

.field__error {
  color: #fda4af;
  font-size: 0.78rem;
  line-height: 1.4;
}

.contact__note {
  color: var(--text-dim);
  font-size: 0.76rem;
  line-height: 1.6;
  text-align: center;
}

.contact__success {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin: 0;
  padding: 12px 14px;
  border: 1px solid rgba(34, 211, 238, 0.35);
  border-radius: var(--radius-sm);
  background: rgba(34, 211, 238, 0.07);
  color: #a5f3fc;
  font-size: 0.82rem;
  line-height: 1.55;
}

.contact__success .icon {
  margin-top: 2px;
  color: var(--neon-cyan);
}

.contact__success a {
  color: var(--neon-cyan);
  text-decoration: underline;
  text-underline-offset: 2px;
}

@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .contact__socials {
    grid-template-columns: 1fr;
  }
}
</style>
