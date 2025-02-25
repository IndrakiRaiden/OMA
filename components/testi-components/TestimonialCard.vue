<template>
  <div 
    class="testimonial-card"
    :class="{
      'active': isActive,
      'prev': isPrev,
      'next': isNext
    }"
  >
    <div class="card-content">
      <div class="quote-mark">"</div>
      <div class="testimonial-body">
        <p class="testimonial-text">{{ testimonial.quote }}</p>
      </div>
      
      <div class="testimonial-footer">
        <div class="testimonial-header">
          <img :src="testimonial.image" :alt="testimonial.name" class="avatar">
          <div class="author-info">
            <h3 class="author-name">{{ testimonial.name }}</h3>
            <p class="author-title">{{ testimonial.position }}</p>
            <p class="company-name">{{ testimonial.company }}</p>
          </div>
        </div>
        <div class="company-logo" v-if="testimonial.companyLogo">
          <img :src="testimonial.companyLogo" :alt="testimonial.company">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetricsGrid from './MetricsGrid.vue'

export default {
  name: 'TestimonialCard',
  components: {
    MetricsGrid
  },
  props: {
    testimonial: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isPrev: {
      type: Boolean,
      default: false
    },
    isNext: {
      type: Boolean,
      default: false
    },
    position: {
      type: Number,
      required: true
    }
  },
  computed: {
    cardStyle() {
      return {
        transform: `translateX(${this.position * 70}%)`,
        zIndex: 10 - Math.abs(this.position),
        opacity: 1 - Math.abs(this.position) * 0.4
      }
    }
  }
}
</script>

<style scoped>
.testimonial-card {
  position: absolute;
  width: 100%;
  max-width: 450px;
  background: linear-gradient(145deg, #ffffff, #f5f7ff);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    0 10px 30px rgba(0, 0, 0, 0.03);
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: linear-gradient(145deg, #ffffff, #f5f7ff);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    0 10px 30px rgba(0, 0, 0, 0.03);
}

.testimonial-card.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0);
  z-index: 2;
}

.testimonial-card.prev {
  opacity: 0.5;
  transform: translateX(-100%) scale(0.9);
  z-index: 1;
}

.testimonial-card.next {
  opacity: 0.5;
  transform: translateX(100%) scale(0.9);
  z-index: 1;
}

.card-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.quote-mark {
  position: absolute;
  top: -1rem;
  left: -0.5rem;
  font-size: 4rem;
  font-family: "Georgia", serif;
  color: var(--content-primary);
  opacity: 0.1;
  line-height: 1;
}

.testimonial-body {
  position: relative;
  z-index: 1;
}

.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--content-dark);
  margin: 0;
  font-style: italic;
  position: relative;
  padding-left: 0.5rem;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--content-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--content-primary), var(--content-secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.author-title {
  font-size: 0.85rem;
  color: var(--content-secondary);
  margin: 0;
  font-weight: 500;
}

.company-name {
  font-size: 0.75rem;
  color: var(--content-dark);
  opacity: 0.7;
  margin: 0;
}

.company-logo {
  padding-left: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}

.company-logo img {
  height: 20px;
  width: auto;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.company-logo img:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 1.25rem;
    max-width: 85%;
    background: linear-gradient(145deg, #ffffff, #f8f9ff);
  }

  .quote-mark {
    font-size: 3rem;
    top: -0.75rem;
    left: -0.25rem;
  }

  .avatar {
    width: 40px;
    height: 40px;
  }

  .author-name {
    font-size: 1rem;
  }

  .testimonial-text {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .company-logo {
    padding-left: 0.75rem;
  }
}
</style>
