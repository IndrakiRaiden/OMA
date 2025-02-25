<template>
  <div class="service-card group">
    <div class="card-image" :style="{ backgroundImage: `url(${service.image})` }">
      <div class="image-overlay"></div>
      <div class="icon-wrapper">
        <i :class="['fas', service.icon]"></i>
      </div>
    </div>
    <div class="card-content">
      <h3 class="title">{{ service.title }}</h3>
      <p class="description">{{ service.description }}</p>
      
      <div class="features-list">
        <div v-for="(feature, index) in service.features" :key="index" 
             class="feature-item"
             :style="{ animationDelay: `${index * 100}ms` }">
          <div class="feature-icon">
            <i class="fas fa-check"></i>
          </div>
          <span>{{ feature }}</span>
        </div>
      </div>

      <nuxt-link :to="service.link || '#'" class="learn-more group">
        <span class="btn-text">Más Información</span>
        <span class="btn-icon">
          <i class="fas fa-arrow-right"></i>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.hasOwnProperty('title') &&
               value.hasOwnProperty('description') &&
               value.hasOwnProperty('icon') &&
               value.hasOwnProperty('image') &&
               value.hasOwnProperty('features') &&
               (value.hasOwnProperty('link') || true)
      }
    }
  }
}
</script>

<style scoped>
.service-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  isolation: isolate;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.card-image {
  height: 240px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4)
  );
  transition: all 0.3s ease;
}

.service-card:hover .image-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.5)
  );
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 4px solid rgba(255, 255, 255, 0.1);
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: var(--content-secondary);
  border-color: rgba(255, 255, 255, 0.2);
}

.icon-wrapper i {
  color: white;
  font-size: 2rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .icon-wrapper i {
  transform: rotate(-5deg);
}

.card-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--content-dark);
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--content-primary);
  transition: width 0.3s ease;
}

.service-card:hover .title::after {
  width: 80px;
}

.description {
  color: var(--content-gray);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.features-list {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--content-dark);
  opacity: 0;
  transform: translateX(-10px);
  animation: slideIn 0.5s ease forwards;
}

.feature-icon {
  width: 24px;
  height: 24px;
  background: rgba(var(--content-primary-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon i {
  color: var(--content-primary);
  font-size: 0.75rem;
}

.learn-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--content-primary);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  background: rgba(var(--content-primary-rgb), 0.1);
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  overflow: hidden;
  position: relative;
}

.btn-text {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.btn-icon {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.learn-more::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--content-primary);
  transition: all 0.3s ease;
}

.learn-more:hover {
  transform: translateY(-2px);
}

.learn-more:hover::before {
  width: 100%;
}

.learn-more:hover .btn-text,
.learn-more:hover .btn-icon {
  color: white;
}

.learn-more:hover .btn-icon {
  transform: translateX(5px);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 640px) {
  .card-image {
    height: 200px;
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
  }

  .icon-wrapper i {
    font-size: 1.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.25rem;
  }
}
</style>
