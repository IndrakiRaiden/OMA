<template>
  <div class="animated-background">
    <div class="gradient-overlay"></div>
    <div class="pattern-grid"></div>
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
    <div class="light-effects">
      <div class="light light-1"></div>
      <div class="light light-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBackground'
}
</script>

<style scoped>
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    var(--content-primary) 0%,
    var(--content-secondary) 100%);
  opacity: 0.95;
}

.pattern-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: patternMove 15s linear infinite;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 150px;
  height: 150px;
  top: 20%;
  left: 10%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: float1 20s infinite;
}

.shape-2 {
  width: 100px;
  height: 100px;
  top: 60%;
  right: 10%;
  border-radius: 50%;
  animation: float2 15s infinite;
}

.shape-3 {
  width: 75px;
  height: 75px;
  bottom: 20%;
  left: 20%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: float3 18s infinite;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 40%;
  right: 25%;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  animation: float4 25s infinite;
}

.light-effects {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.light {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.light-1 {
  width: 300px;
  height: 300px;
  background: var(--content-secondary);
  opacity: 0.15;
  top: -10%;
  right: -5%;
  animation: lightPulse1 10s ease-in-out infinite;
}

.light-2 {
  width: 400px;
  height: 400px;
  background: var(--content-primary);
  opacity: 0.1;
  bottom: -20%;
  left: -10%;
  animation: lightPulse2 15s ease-in-out infinite;
}

@keyframes patternMove {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(50px) translateY(50px);
  }
}

@keyframes float1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -15px) rotate(90deg);
  }
  50% {
    transform: translate(-5px, 20px) rotate(180deg);
  }
  75% {
    transform: translate(-15px, -10px) rotate(270deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-20px, 20px) scale(1.1);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(15px, -15px) rotate(120deg);
  }
  66% {
    transform: translate(-15px, 10px) rotate(240deg);
  }
}

@keyframes float4 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  33% {
    transform: translate(-20px, 10px) rotate(120deg) scale(1.1);
  }
  66% {
    transform: translate(15px, -15px) rotate(240deg) scale(0.9);
  }
}

@keyframes lightPulse1 {
  0%, 100% {
    opacity: 0.15;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.2);
  }
}

@keyframes lightPulse2 {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.3);
  }
}
</style>
