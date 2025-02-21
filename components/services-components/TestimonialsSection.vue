<template>
  <section class="testimonials-section">
    <div class="container mx-auto px-4">
      <div class="section-header text-center">
        <h2 class="title">Lo que dicen nuestros clientes</h2>
        <p class="subtitle">La satisfacción de nuestros clientes es nuestro mejor testimonio</p>
      </div>

      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" 
             :key="testimonial.id" 
             class="testimonial-card"
             :class="[getCardClass(index), { 'featured': index === 1 }]"
             :style="{ animationDelay: `${index * 200}ms` }">
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
          <div class="content">{{ testimonial.content }}</div>
          <div class="author-info">
            <div class="author-avatar" :class="getAvatarClass(index)">
              <span class="initials">{{ getInitials(testimonial.name) }}</span>
              <div class="avatar-ring"></div>
            </div>
            <div class="author-details">
              <div class="author-name">{{ testimonial.name }}</div>
              <div class="author-company">{{ testimonial.company }}</div>
            </div>
          </div>
          <div class="decorative-pattern"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  },
  methods: {
    getCardClass(index) {
      return `card-${index % 3}`
    },
    getAvatarClass(index) {
      return `avatar-${index % 5}`
    },
    getInitials(name) {
      return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
  }
}
</script>

<style scoped>
.testimonials-section {
  padding: 8rem 0;
  background: linear-gradient(
    to bottom,
    var(--background-light) 0%,
    rgba(var(--content-primary-rgb), 0.05) 100%
  );
  position: relative;
  overflow: hidden;
}

.testimonials-section::before,
.testimonials-section::after {
  content: '';
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(var(--content-primary-rgb), 0.1), transparent);
  z-index: 0;
}

.testimonials-section::before {
  top: -10rem;
  left: -10rem;
}

.testimonials-section::after {
  bottom: -10rem;
  right: -10rem;
  transform: rotate(45deg);
}

.section-header {
  position: relative;
  z-index: 1;
  margin-bottom: 4rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--content-dark);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--content-primary);
}

.subtitle {
  font-size: 1.125rem;
  color: var(--content-gray);
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.testimonial-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-card.featured {
  transform: translateY(-20px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(var(--content-primary-rgb), 0.1);
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.quote-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: var(--content-primary);
  opacity: 0.2;
  transition: all 0.3s ease;
}

.testimonial-card:hover .quote-icon {
  transform: translateY(-5px) rotate(15deg);
  opacity: 0.4;
}

.content {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--content-dark);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  flex: 1;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.author-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.initials {
  font-size: 1.25rem;
  position: relative;
  z-index: 2;
}

.avatar-ring {
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 50%;
  border: 2px solid var(--content-primary);
  opacity: 0.3;
  transition: all 0.3s ease;
}

.testimonial-card:hover .avatar-ring {
  transform: scale(1.1);
  opacity: 0.5;
}

.author-details {
  flex: 1;
}

.author-name {
  font-weight: 600;
  color: var(--content-dark);
  margin-bottom: 0.25rem;
}

.author-company {
  font-size: 0.875rem;
  color: var(--content-gray);
}

.decorative-pattern {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, transparent 50%, rgba(var(--content-primary-rgb), 0.05) 50%);
  border-radius: 1.5rem 0 0 0;
  z-index: 0;
  transition: all 0.3s ease;
}

.testimonial-card:hover .decorative-pattern {
  transform: scale(1.2);
  opacity: 0.8;
}

.card-0 {
  background: linear-gradient(to bottom right, white, rgba(var(--content-primary-rgb), 0.05));
}

.card-1 {
  background: linear-gradient(to bottom right, white, rgba(var(--content-secondary-rgb), 0.05));
}

.card-2 {
  background: linear-gradient(to bottom right, white, rgba(var(--content-accent-rgb), 0.05));
}

.avatar-0 {
  background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
}

.avatar-1 {
  background: linear-gradient(135deg, #4ECDC4, #6EE7E7);
}

.avatar-2 {
  background: linear-gradient(135deg, #45B7D1, #6AD5EE);
}

.avatar-3 {
  background: linear-gradient(135deg, #96C93D, #B5E555);
}

.avatar-4 {
  background: linear-gradient(135deg, #9B59B6, #B87AD4);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .testimonial-card.featured {
    transform: none;
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 6rem 0;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0;
  }

  .testimonial-card.featured {
    grid-column: auto;
  }

  .testimonial-card {
    padding: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .content {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .testimonials-section {
    padding: 4rem 0;
  }

  .testimonial-card {
    padding: 1.5rem;
  }
}
</style>
