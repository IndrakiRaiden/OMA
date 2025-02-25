<template>
  <div class="metrics-grid">
    <div v-for="(metric, idx) in metrics" 
         :key="idx" 
         class="metric-item">
      <span class="metric-value">{{ metric.value }}</span>
      <span class="metric-label">{{ metric.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetricsGrid',
  props: {
    metrics: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(metric => 
          typeof metric === 'object' && 
          'value' in metric && 
          'label' in metric
        )
      }
    }
  }
}
</script>

<style scoped>
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.metric-item {
  text-align: center;
}

.metric-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--content-secondary);
  display: block;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.9rem;
  color: var(--content-dark);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
