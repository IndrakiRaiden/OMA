<template>
  <div class="service-card">
    <div class="icon-wrapper">
      <i :class="['fas', service.icon]"></i>
    </div>
    <h3 class="title">{{ service.title }}</h3>
    <p class="description">{{ service.description }}</p>
    <button class="learn-more">
      Más Información
      <i class="fas fa-arrow-right"></i>
    </button>
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
               value.hasOwnProperty('icon')
      }
    }
  }
}
</script>

<style scoped>
.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--content-gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-color: var(--content-secondary);
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
  background: var(--content-secondary);
  transform: scale(1.1);
}

.icon-wrapper i {
  color: white;
  font-size: 1.25rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--content-primary);
  margin: 0;
}

.description {
  color: var(--content-dark);
  line-height: 1.6;
  margin: 0;
}

.learn-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--content-primary);
  font-weight: 600;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more i {
  transition: transform 0.3s ease;
}

.learn-more:hover {
  color: var(--content-secondary);
}

.learn-more:hover i {
  transform: translateX(5px);
}
</style>
