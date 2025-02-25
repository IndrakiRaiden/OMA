<template>
  <div class="navigation-controls">
    <button class="nav-btn prev" 
            @click="$emit('prev')" 
            :disabled="isFirstSlide"
            :class="{ 'hidden': isFirstSlide }">
      <i class="fas fa-chevron-left"></i>
    </button>

    <div class="progress-bar">
      <div class="progress-indicator" 
           :style="{ width: `${(currentIndex + 1) * (100 / totalSlides)}%` }">
      </div>
    </div>

    <button class="nav-btn next" 
            @click="$emit('next')" 
            :disabled="isLastSlide"
            :class="{ 'hidden': isLastSlide }">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavigationControls',
  props: {
    currentIndex: {
      type: Number,
      required: true
    },
    totalSlides: {
      type: Number,
      required: true
    }
  },
  computed: {
    isFirstSlide() {
      return this.currentIndex === 0
    },
    isLastSlide() {
      return this.currentIndex === this.totalSlides - 1
    }
  }
}
</script>

<style scoped>
.navigation-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
}

.nav-btn {
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.nav-btn:hover:not(:disabled) {
  transform: scale(1.1);
  background: var(--content-secondary);
  color: white;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-btn.hidden {
  opacity: 0;
  pointer-events: none;
}

.progress-bar {
  flex: 1;
  max-width: 300px;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.progress-indicator {
  height: 100%;
  background: var(--content-secondary);
  transition: width 0.3s ease;
}

@media (max-width: 768px) {
  .nav-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
