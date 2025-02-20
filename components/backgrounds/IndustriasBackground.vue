<template>
  <div class="industrias-background">
    <div class="background-overlay"></div>
    <div class="geometric-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndustriasBackground'
}
</script>

<style scoped>
.industrias-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  background: var(--color-primary);
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  opacity: 0.9;
}

.geometric-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.shape-1 {
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
  animation: float 20s infinite;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  animation: float 15s infinite reverse;
}

.shape-3 {
  width: 400px;
  height: 400px;
  top: 40%;
  left: 30%;
  animation: float 25s infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(30px, -30px) rotate(5deg);
  }
  50% {
    transform: translate(0, -50px) rotate(-5deg);
  }
  75% {
    transform: translate(-30px, -20px) rotate(3deg);
  }
}
</style>
