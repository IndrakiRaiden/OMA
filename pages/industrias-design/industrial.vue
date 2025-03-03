<template>
  <div>
    <p>Redirigiendo...</p>
  </div>
</template>

<script>
export default {
  name: 'IndustriaIndustrial',
  mounted() {
    window.location.href = '/industrias'
  },
  head() {
    return {
      title: 'Maquinaria y Equipos Industriales | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Diseño y fabricación de componentes para maquinaria industrial y equipos especializados.' },
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
