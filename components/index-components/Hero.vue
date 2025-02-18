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
  background: linear-gradient(45deg, var(--color-primary), var(--color-light));
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(75, 110, 140, 0.05), rgba(245, 166, 35, 0.05));
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
  font-size: 4rem;
  font-weight: bold;
  color: var(--color-secondary);
  text-shadow: 0 0 10px rgba(75, 110, 140, 0.3),
               0 0 20px rgba(75, 110, 140, 0.2),
               0 0 30px rgba(75, 110, 140, 0.1);
  animation: glow 2s ease-in-out infinite alternate;
}

.fade-in {
  font-size: 1.5rem;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  margin: 2rem 0;
  color: var(--color-gray);
}

.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.shape {
  position: absolute;
  border: 2px solid rgba(75, 110, 140, 0.2);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

.shape:nth-child(1) {
  width: 300px;
  height: 300px;
  top: 20%;
  left: 10%;
}

.shape:nth-child(2) {
  width: 200px;
  height: 200px;
  bottom: 30%;
  right: 15%;
  animation-direction: reverse;
}

.shape:nth-child(3) {
  width: 150px;
  height: 150px;
  bottom: 10%;
  left: 30%;
  animation-duration: 15s;
}

.primary-btn {
  background: linear-gradient(45deg, var(--color-secondary), var(--color-accent));
  color: var(--color-light);
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.primary-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
}

.primary-btn:hover::after {
  transform: translateX(50%);
  transition: transform 0.6s ease;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(75, 110, 140, 0.3),
                 0 0 20px rgba(75, 110, 140, 0.2),
                 0 0 30px rgba(75, 110, 140, 0.1);
  }
  to {
    text-shadow: 0 0 20px rgba(75, 110, 140, 0.4),
                 0 0 30px rgba(75, 110, 140, 0.3),
                 0 0 40px rgba(75, 110, 140, 0.2);
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
  .glowing-text {
    font-size: 2.5rem;
  }
  
  .fade-in {
    font-size: 1.2rem;
  }
}
</style>
