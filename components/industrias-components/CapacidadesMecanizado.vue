<template>
  <section class="capabilities-section py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        Nuestras <span class="text-primary">Capacidades</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Contamos con equipamiento de última generación y personal altamente calificado para garantizar resultados excepcionales.
      </p>

      <!-- Capabilities Grid -->
      <div class="grid grid-cols-1 gap-8">
        <div class="capabilities-content bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-6">Especificaciones Técnicas</h3>
          <ul class="specs-list grid md:grid-cols-2 gap-4">
            <li>
              <span class="spec-title">Precisión:</span>
              <span class="spec-value">±0.01mm</span>
            </li>
            <li>
              <span class="spec-title">Capacidad de Fresado:</span>
              <span class="spec-value">Hasta 1000mm x 500mm x 500mm</span>
            </li>
            <li>
              <span class="spec-title">Capacidad de Torneado:</span>
              <span class="spec-value">Diámetro máx. 300mm, Longitud 1000mm</span>
            </li>
            <li>
              <span class="spec-title">Materiales:</span>
              <span class="spec-value">Acero, Aluminio, Titanio, Plásticos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CapacidadesMecanizado'
}
</script>

<style scoped>
.capabilities-section {
  padding: 4rem 0;
}

.specs-list {
  display: grid;
  gap: 1rem;
}

.specs-list li {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.spec-title {
  font-weight: 600;
  color: var(--content-primary);
}
</style>
