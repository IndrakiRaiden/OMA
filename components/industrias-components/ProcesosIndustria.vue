<template>
  <section id="procesos" class="procesos-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        <span class="text-gray-800">{{ titlePrefix }}</span>&nbsp;
        <span class="text-primary">{{ titleHighlight }}</span>
      </h2>
      
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        {{ description }}
      </p>
      
      <div class="process-timeline mb-20">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="process-step"
          :class="{'right-aligned': index % 2 !== 0}"
        >
          <div class="step-content">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-details">
              <h3 class="text-xl font-semibold mb-3">{{ step.title }}</h3>
              <p class="text-gray-600 mb-4">{{ step.description }}</p>
              
              <ul v-if="step.points && step.points.length" class="step-points">
                <li v-for="(point, pointIndex) in step.points" :key="pointIndex">
                  <i class="fas fa-circle text-xs mr-2 text-primary"></i>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
            
            <div class="step-image">
              <img 
                :src="step.imageUrl || 'https://source.unsplash.com/featured/600x400?process'" 
                :alt="step.title"
                class="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="commitments && commitments.length" class="commitment-section">
        <h3 class="text-2xl font-semibold text-center mb-10">{{ commitmentTitle }}</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(commitment, index) in commitments" 
            :key="index"
            class="commitment-card p-6"
          >
            <div class="commitment-icon mb-4">
              <i :class="['fas', commitment.icon || 'fa-check-circle']"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">{{ commitment.title }}</h4>
            <p class="text-gray-600">{{ commitment.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  titlePrefix: {
    type: String,
    default: 'Nuestro'
  },
  titleHighlight: {
    type: String,
    default: 'Proceso'
  },
  description: {
    type: String,
    default: 'Seguimos un proceso riguroso para garantizar la máxima calidad en cada proyecto.'
  },
  steps: {
    type: Array,
    default: () => []
  },
  commitmentTitle: {
    type: String,
    default: 'Nuestro Compromiso con la Calidad'
  },
  commitments: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.procesos-section {
  background-color: var(--content-light);
  position: relative;
}

.text-primary {
  color: var(--content-primary);
}

.text-accent {
  color: var(--content-accent);
}

.text-secondary {
  color: var(--content-secondary);
}

.process-timeline {
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, var(--content-primary), var(--content-secondary));
  transform: translateX(-50%);
  z-index: 1;
}

.process-step {
  position: relative;
  margin-bottom: 4rem;
}

.process-step:last-child {
  margin-bottom: 0;
}

.step-content {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.step-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0 auto 2rem;
  box-shadow: 0 4px 10px rgba(var(--secondary-rgb), 0.3);
  position: relative;
  z-index: 3;
}

.step-details {
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2rem;
}

.step-points {
  text-align: left;
  padding-left: 1rem;
}

.step-points li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.step-image {
  max-width: 70%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.step-image:hover {
  transform: translateY(-5px);
}

.commitment-section {
  padding-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.commitment-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.commitment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.commitment-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(var(--secondary-rgb), 0.2);
}

@media (min-width: 768px) {
  .process-step .step-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: center;
  }
  
  .right-aligned .step-content {
    direction: rtl;
  }
  
  .right-aligned .step-details,
  .right-aligned .step-points {
    direction: ltr;
  }
  
  .step-number {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
  
  .step-details {
    max-width: 100%;
    margin: 0;
    text-align: right;
    padding-right: 4rem;
  }
  
  .right-aligned .step-details {
    text-align: left;
    padding-right: 0;
    padding-left: 4rem;
  }
  
  .step-image {
    max-width: 100%;
    margin: 0;
  }
}

@media (max-width: 767px) {
  .process-timeline::before {
    left: 25px;
  }
  
  .step-number {
    margin: 0 0 2rem 0;
  }
  
  .step-details {
    text-align: left;
    max-width: 100%;
    padding-left: 60px;
  }
}
</style>
