<template>
  <section class="benefits">
    <div class="section-header">
      <span class="subtitle">BENEFITS</span>
      <h2>Why choose OMA?</h2>
    </div>
    <div class="cards-grid">
      <div class="solution-card" style="--card-index: 1">
        <div class="icon-wrapper">
          <i class="fas fa-clock"></i>
        </div>
        <div class="card-content">
          <h3>Time Saving</h3>
          <p>We take care of the entire process.</p>
        </div>
      </div>
      <div class="solution-card" style="--card-index: 2">
        <div class="icon-wrapper">
          <i class="fas fa-certificate"></i>
        </div>
        <div class="card-content">
          <h3>Guaranteed Quality</h3>
          <p>Products inspected with industrial standards.</p>
        </div>
      </div>
      <div class="solution-card" style="--card-index: 3">
        <div class="icon-wrapper">
          <i class="fas fa-tools"></i>
        </div>
        <div class="card-content">
          <h3>Flexibility</h3>
          <p>We work with different materials and processes.</p>
        </div>
      </div>
      <div class="solution-card" style="--card-index: 4">
        <div class="icon-wrapper">
          <i class="fas fa-industry"></i>
        </div>
        <div class="card-content">
          <h3>Experience</h3>
          <p>We have extensive experience in the industry.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits'
}
</script>

<style scoped>
.benefits {
  padding: 7rem 2rem;
  background: var(--content-light);
  position: relative;
  overflow: hidden;
}

.benefits .section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.benefits .subtitle {
  color: var(--content-secondary);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
  animation: fadeInDown 1s ease;
}

.benefits h2 {
  color: var(--content-primary);
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 1s ease 0.2s both;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1300px;
  margin: 0 auto;
  align-items: stretch;
}

.solution-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #f0f0f0;
  animation: fadeIn 0.5s ease both;
  animation-delay: calc(var(--card-index) * 0.15s);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.solution-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.icon-wrapper {
  /* iOS app icon style with subtle gradient background */
  background: linear-gradient(145deg, #f2f6fc, #e6edf7);
  width: 90px;
  height: 90px;
  /* iOS app icon corner radius - precisely 22.5% of the icon size */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  /* iOS-style subtle shadow */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08), 
              inset 0 -2px 0 rgba(0, 0, 0, 0.05),
              inset 0 2px 0 rgba(255, 255, 255, 0.15);
  /* Add subtle inner border */
  border: 1px solid rgba(255, 255, 255, 0.7);
  /* iOS-style frosted glass effect */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* Ensure smooth edges */
  -webkit-font-smoothing: antialiased;
}

.icon-wrapper i {
  font-size: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  /* iOS-style app icon gradient */
  background: linear-gradient(135deg, var(--content-primary), var(--content-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Add subtle 3D effect with text shadow */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  /* iOS icon style */
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15));
}

.card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.solution-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--content-primary);
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 1rem;
}

.solution-card p {
  color: var(--content-dark);
  line-height: 1.6;
  font-size: 1rem;
  opacity: 0.85;
  margin: 0;
  transition: all 0.3s ease;
  flex-grow: 1;
}

.solution-card:hover {
  border-color: transparent;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.solution-card:hover::before {
  opacity: 1;
}

.solution-card:hover .icon-wrapper {
  /* iOS-style hover effect - subtle change in gradient */
  background: linear-gradient(145deg, #e6edf7, #d9e3f1);
  /* iOS-style enhanced shadow on hover */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12), 
              inset 0 -2px 0 rgba(0, 0, 0, 0.08),
              inset 0 2px 0 rgba(255, 255, 255, 0.2);
  /* Subtle lift effect like iOS when pressing an app */
  transform: translateY(-5px) scale(1.02);
}

.solution-card:hover .icon-wrapper i {
  transform: scale(1.1);
  background: linear-gradient(135deg, var(--content-secondary), var(--content-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.solution-card:hover h3 {
  color: white;
}

.solution-card:hover h3::after {
  width: 60px;
  opacity: 0.3;
}

.solution-card:hover p {
  color: white;
  opacity: 0.9;
}

@media (max-width: 1200px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .benefits {
    padding: 5rem 1.5rem;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .benefits h2 {
    font-size: 2.2rem;
  }
  
  .solution-card {
    padding: 2rem;
  }
  
  .icon-wrapper {
    width: 76px;
    height: 76px;
    /* iOS app icon corner radius - precisely 22.5% of the icon size */
    border-radius: 17px;
  }
  
  .icon-wrapper i {
    font-size: 2.2rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
