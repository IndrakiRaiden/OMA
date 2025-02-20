<template>
  <div class="timeline-background">
    <div class="background-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineBackground'
}
</script>

<style scoped>
.timeline-background {
  background: linear-gradient(135deg, 
    var(--content-primary) 0%, 
    var(--content-primary) 25%,
    var(--content-secondary) 45%,
    var(--content-secondary) 55%,
    var(--content-primary) 75%,
    var(--content-primary) 100%);
  background-size: 200% 200%;
  animation: gradientMove 15s ease infinite;
  position: relative;
  overflow: hidden;
  width: 100%;
  display: block;
  opacity: 0.95;
}

.timeline-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--content-primary);
  opacity: 0.1;
  pointer-events: none;
}

.background-content {
  position: relative;
  z-index: 1;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
