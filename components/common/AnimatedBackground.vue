<template>
  <div class="animated-background"></div>
</template>

<script>
export default {
  name: 'AnimatedBackground'
}
</script>

<style scoped>
.animated-background {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80vw;
  height: 120vw;
  background: linear-gradient(165deg, var(--content-secondary) 0%, var(--content-accent) 100%);
  transform: rotate(-45deg);
  opacity: 0.05;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 0;
  animation: morphBackground 15s ease-in-out infinite;
}

@keyframes morphBackground {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}
</style>
