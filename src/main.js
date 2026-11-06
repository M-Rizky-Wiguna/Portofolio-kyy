import { createApp } from 'vue'
import App from './App.vue'
import reveal from './directives/reveal'

import './assets/styles/tokens.css'
import './assets/styles/base.css'
import './assets/styles/animations.css'

createApp(App).directive('reveal', reveal).mount('#app')
