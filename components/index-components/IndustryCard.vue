<template>
  <div class="ios-card">
    <!-- iOS-style icon container -->
    <div class="ios-icon-container">
      <component :is="icon" 
                :size="30" 
                :stroke-width="2.5"
                class="ios-icon" />
    </div>
    
    <!-- Card content -->
    <h3 class="ios-title">{{ title }}</h3>
    <p class="ios-description">{{ description }}</p>
    
    <!-- iOS-style button -->
    <router-link to="/industrias" class="ios-button">
      <span>Discover more</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ios-arrow">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </router-link>
  </div>
</template>

<style scoped>
/* Main iOS-style card */
.ios-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 24px;
  /* Pure white background - standard iOS card */
  background-color: var(--color-light);
  /* iOS precise rounded corners */
  border-radius: 18px;
  /* iOS card shadow - subtle layered approach */
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08),
             0 1px 3px rgba(0, 0, 0, 0.03),
             0 0 0 0.5px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
  /* Ensure smooth edges */
  -webkit-font-smoothing: antialiased;
  /* Add subtle border for definition */
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  opacity: 0;
  transform: translateY(20px);
  animation: ios-card-appear 0.5s ease-out forwards;
  animation-delay: calc(var(--order, 0) * 0.1s);
}

/* iOS Card hover effect */
.ios-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12),
             0 2px 6px rgba(0, 0, 0, 0.06),
             0 0 0 0.5px rgba(0, 0, 0, 0.03);
}

/* iOS-style icon container */
.ios-icon-container {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  /* iOS app icon style - precise corner radius (22.5% of size) */
  border-radius: 18px;
  /* iOS icon background gradient with website colors */
  background: linear-gradient(135deg, var(--color-light), var(--color-primary));
  /* iOS-style icon shadow */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08),
             inset 0 -2px 0 rgba(0, 0, 0, 0.05),
             inset 0 2px 0 rgba(255, 255, 255, 0.4);
  /* Subtle border */
  border: 1px solid rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Give icon container a 3D effect */
  transform-style: preserve-3d;
}

/* iOS icon container hover effect */
.ios-card:hover .ios-icon-container {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1),
             inset 0 -2px 0 rgba(0, 0, 0, 0.08),
             inset 0 2px 0 rgba(255, 255, 255, 0.5);
  background: linear-gradient(135deg, var(--color-primary), rgba(var(--primary-rgb), 0.7));
}

/* iOS-style icon */
.ios-icon {
  color: var(--content-primary); /* Using the website's content-primary blue */
  opacity: 0.9;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15));
  transition: all 0.3s ease;
  /* For better visibility */
  stroke-width: 2.5;
}

.ios-card:hover .ios-icon {
  color: var(--content-secondary); /* Using the website's content-secondary gold */
  transform: scale(1.08);
  opacity: 1;
}

/* iOS-style title */
.ios-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--content-dark);
  margin: 0 0 12px;
  text-align: center;
  letter-spacing: -0.02em;
  transition: all 0.3s ease;
}

.ios-card:hover .ios-title {
  color: var(--color-dark);
}

/* iOS-style description text */
.ios-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-gray);
  text-align: center;
  margin: 0 0 24px;
  font-weight: 400;
  flex-grow: 1;
  transition: all 0.3s ease;
}

/* iOS-style button */
.ios-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  /* iOS button style - using website's primary color with reduced opacity */
  background: rgba(var(--primary-rgb), 0.1);
  color: var(--content-primary); /* Using the website's content-primary blue */
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  /* Subtle button shadow */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  width: 100%;
  margin-top: auto;
}

.ios-button:hover {
  background: rgba(var(--secondary-rgb), 0.15);
  color: var(--content-secondary);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.ios-button span {
  transition: transform 0.2s ease;
}

.ios-button:hover span {
  transform: translateX(-2px);
}

.ios-arrow {
  transition: transform 0.2s ease;
}

.ios-button:hover .ios-arrow {
  transform: translateX(2px);
}

/* Animation for card appearance */
@keyframes ios-card-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ios-card {
    padding: 20px;
  }
  
  .ios-icon-container {
    width: 70px;
    height: 70px;
    border-radius: 16px;
    margin-bottom: 16px;
  }
  
  .ios-title {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  
  .ios-description {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  
  .ios-button {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}
</style>

<script>
export default {
  name: 'IndustryCard',
  props: {
    icon: {
      type: [String, Object],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      observer: null
    }
  },
  mounted() {
    // Initialize intersection observer for reveal animation
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.$el.classList.add('reveal-card');
            this.observer.unobserve(this.$el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
    
    this.observer.observe(this.$el);

    // Add mouse movement tracking
    this.$el.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.$el.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleMouseMove(e) {
      const rect = this.$el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      this.$el.style.setProperty('--mouse-x', `${x}%`);
      this.$el.style.setProperty('--mouse-y', `${y}%`);
    }
  }
}
</script>
