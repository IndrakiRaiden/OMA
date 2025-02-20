<template>
  <div class="faqs-background">
    <div class="animated-shapes">
      <div v-for="n in 5" :key="n" class="shape" :class="`shape-${n}`">
        <i :class="getRandomIcon()" class="text-content-secondary opacity-10"></i>
      </div>
    </div>
    <div class="gradient-overlay"></div>
    <slot></slot>
  </div>
</template>

<script setup>
const icons = [
  'fas fa-question-circle',
  'fas fa-lightbulb',
  'fas fa-cogs',
  'fas fa-tools',
  'fas fa-cube',
  'fas fa-microchip',
  'fas fa-robot',
  'fas fa-industry'
]

function getRandomIcon() {
  return icons[Math.floor(Math.random() * icons.length)]
}
</script>

<style scoped>
.faqs-background {
  position: relative;
  background: linear-gradient(to right, var(--content-primary), var(--content-secondary));
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background: linear-gradient(to bottom right, transparent 49.5%, var(--color-light) 50%);
  z-index: 2;
}

.animated-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.shape {
  position: absolute;
  font-size: 4rem;
  animation: float 15s infinite;
  opacity: 0.1;
}

.shape-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  top: 20%;
  right: 20%;
  animation-delay: -3s;
}

.shape-3 {
  bottom: 30%;
  left: 30%;
  animation-delay: -6s;
}

.shape-4 {
  bottom: 15%;
  right: 15%;
  animation-delay: -9s;
}

.shape-5 {
  top: 50%;
  left: 50%;
  animation-delay: -12s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, 20px) rotate(5deg);
  }
  50% {
    transform: translate(0, 40px) rotate(-5deg);
  }
  75% {
    transform: translate(-20px, 20px) rotate(5deg);
  }
}
</style>
