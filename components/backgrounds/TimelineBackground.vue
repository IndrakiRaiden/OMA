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
  position: relative;
  overflow: hidden;
  width: 100%;
  display: block;
}

.timeline-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/index/4.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  pointer-events: none;
  z-index: 0;
}

.timeline-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    #4B6E8C 0%, 
    #4B6E8C 25%,
    #F5A623 45%,
    #F5A623 55%,
    #4B6E8C 75%,
    #4B6E8C 100%);
  background-size: 200% 200%;
  animation: gradientMove 15s ease infinite;
  opacity: 0.8;
  pointer-events: none;
  z-index: 1;
}

.background-content {
  position: relative;
  z-index: 2;
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
