<template>
  <div class="section-header">
    <h2><slot></slot></h2>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader'
}
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-secondary);
  font-size: 0.9rem;
  letter-spacing: 2px;
  opacity: 0.9;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
