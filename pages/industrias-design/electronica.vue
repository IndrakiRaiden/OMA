<template>
  <div>
    <p>Redirigiendo...</p>
  </div>
</template>

<script>
export default {
  name: 'IndustriaElectronica',
  mounted() {
    window.location.href = '/industrias'
  },
  head() {
    return {
      title: 'Industria Electrónica | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Servicios especializados para componentes y carcasas de dispositivos electrónicos.' },
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
