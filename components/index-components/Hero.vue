<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="glowing-text">OMA INDUSTRIAL SOLUTIONS</h1>
      <p class="fade-in">Transformando la industria con tecnología de vanguardia</p>
      <button class="primary-btn hover-effect">CONTACT US</button>
    </div>
    <div class="geometric-shapes">
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-primary);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}

.glowing-text {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: bold;
  color: var(--color-light);
  text-shadow: 0 0 10px rgba(247, 247, 247, 0.3),
               0 0 20px rgba(247, 247, 247, 0.2),
               0 0 30px rgba(247, 247, 247, 0.1);
  animation: glow 2s ease-in-out infinite alternate;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.fade-in {
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  opacity: 0;
  animation: fadeIn 1s ease-out 0.5s forwards;
  margin: 2rem 0;
  color: var(--color-light);
  line-height: 1.6;
}

.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.shape {
  position: absolute;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
  opacity: 0.2;
}

.shape:nth-child(1) {
  width: 300px;
  height: 300px;
  top: 20%;
  left: 10%;
  border-color: var(--color-secondary);
}

.shape:nth-child(2) {
  width: 200px;
  height: 200px;
  bottom: 30%;
  right: 15%;
  animation-direction: reverse;
  border-color: var(--color-light);
}

.shape:nth-child(3) {
  width: 150px;
  height: 150px;
  bottom: 10%;
  left: 30%;
  animation-duration: 15s;
  border-color: var(--color-secondary);
}

.primary-btn {
  background: var(--color-secondary);
  color: var(--color-light);
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  animation: fadeIn 1s ease-out 1s forwards;
  opacity: 0;
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: 0.5s;
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  background: var(--color-primary);
}

.primary-btn:hover::before {
  left: 100%;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(247, 247, 247, 0.3),
                 0 0 20px rgba(247, 247, 247, 0.2),
                 0 0 30px rgba(247, 247, 247, 0.1);
  }
  to {
    text-shadow: 0 0 20px rgba(247, 247, 247, 0.4),
                 0 0 30px rgba(247, 247, 247, 0.3),
                 0 0 40px rgba(247, 247, 247, 0.2);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 90vh;
  }
  
  .hero-content {
    padding: 0 1.5rem;
  }
  
  .primary-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .shape {
    opacity: 0.15;
  }
}
</style>
