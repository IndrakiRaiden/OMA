<template>
  <div>
    <p>Redirigiendo...</p>
  </div>
</template>

<script>
export default {
  name: 'IndustriaAeroespacial',
  mounted() {
    window.location.href = '/industrias'
  },
  head() {
    return {
      title: 'Industria Aeroespacial | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Fabricación de alta precisión para componentes aeroespaciales con estrictos controles de calidad.' },
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
