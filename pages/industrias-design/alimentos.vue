<template>
  <div>
    <p>Redirigiendo...</p>
  </div>
</template>

<script>
export default {
  name: 'IndustriaAlimentos',
  mounted() {
    window.location.href = '/industrias'
  },
  head() {
    return {
      title: 'Industria de Alimentos | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Manufactura de equipos y componentes para la industria alimentaria con materiales de grado alimenticio.' },
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
