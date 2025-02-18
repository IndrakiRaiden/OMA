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
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
