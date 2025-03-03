<template>
  <div>
    <p>Redirigiendo...</p>
  </div>
</template>

<script>
export default {
  name: 'IndustriaEnergia',
  mounted() {
    window.location.href = '/industrias'
  },
  head() {
    return {
      title: 'Industria de Energía | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Fabricación de componentes para sistemas de generación y distribución de energía.' },
        { 'http-equiv': 'refresh', content: '0;url=/industrias' }
      ]
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  color: #666;
}
</style>
