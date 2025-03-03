<template>
  <div>
    <p>Redirigiendo...</p>
  </div>
</template>

<script>
export default {
  name: 'IndustriaMinera',
  mounted() {
    window.location.href = '/industrias'
  },
  head() {
    return {
      title: 'Industria Minera | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Soluciones robustas para equipos y componentes utilizados en la exigente industria minera.' },
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
