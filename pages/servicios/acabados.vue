<template>
  <div class="acabados-page">
    <!-- Banner Section using BannerV3 -->
    <BannerV3
      title="Acabados Industriales"
      subtitle="Soluciones de alta calidad para el acabado perfecto de sus piezas"
      :buttons="[
        { 
          href: '#contacto', 
          text: 'Solicitar Cotización', 
          class: 'primary-btn' 
        },
        { 
          href: '#detalles', 
          text: 'Ver Detalles', 
          class: 'secondary-btn' 
        }
      ]"
    />

    <!-- Detalles Section -->
    <section id="detalles" class="details-section">
      <div class="container">
        <div class="section-header">
          <h2>Nuestros <span class="highlight">Acabados</span></h2>
          <p>Ofrecemos una amplia gama de acabados industriales para satisfacer sus necesidades específicas</p>
        </div>
        
        <div class="details-content">
          <div class="details-text">
            <p>En OMA nos especializamos en proporcionar acabados de la más alta calidad para todo tipo de piezas industriales. Nuestro equipo de expertos trabaja con precisión y atención al detalle para garantizar resultados excepcionales en cada proyecto.</p>
            
            <h3>Características principales</h3>
            <ul class="features-list">
              <li>
                <span class="icon">✓</span>
                <span>Acabados uniformes y duraderos</span>
              </li>
              <li>
                <span class="icon">✓</span>
                <span>Control de calidad riguroso</span>
              </li>
              <li>
                <span class="icon">✓</span>
                <span>Tiempos de entrega optimizados</span>
              </li>
              <li>
                <span class="icon">✓</span>
                <span>Personalización según requerimientos</span>
              </li>
            </ul>
          </div>
          
          <div class="details-image">
            <div class="placeholder-image">
              <div class="placeholder-text">Imagen de Acabados</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Section -->
    <section class="materials-section">
      <div class="container">
        <div class="section-header">
          <h2>Materiales y <span class="highlight">Procesos</span></h2>
          <p>Trabajamos con una amplia variedad de materiales y procesos para lograr los mejores resultados</p>
        </div>
        
        <div class="materials-grid">
          <div class="material-card">
            <div class="material-icon placeholder-icon">
              <span>M</span>
            </div>
            <h3>Metales</h3>
            <ul>
              <li>Aluminio</li>
              <li>Acero inoxidable</li>
              <li>Acero al carbono</li>
              <li>Latón</li>
            </ul>
          </div>
          
          <div class="material-card">
            <div class="material-icon placeholder-icon">
              <span>P</span>
            </div>
            <h3>Plásticos</h3>
            <ul>
              <li>ABS</li>
              <li>Polipropileno</li>
              <li>Nylon</li>
              <li>Acrílico</li>
            </ul>
          </div>
          
          <div class="material-card">
            <div class="material-icon placeholder-icon">
              <span>A</span>
            </div>
            <h3>Acabados</h3>
            <ul>
              <li>Anodizado</li>
              <li>Pulido</li>
              <li>Cromado</li>
              <li>Pintura electrostática</li>
            </ul>
          </div>
          
          <div class="material-card">
            <div class="material-icon placeholder-icon">
              <span>T</span>
            </div>
            <h3>Tratamientos</h3>
            <ul>
              <li>Térmicos</li>
              <li>Superficiales</li>
              <li>Anticorrosión</li>
              <li>Endurecimiento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section">
      <div class="container">
        <div class="section-header">
          <h2>Galería de <span class="highlight">Proyectos</span></h2>
          <p>Algunos ejemplos de nuestros trabajos recientes</p>
        </div>
        
        <div class="gallery-filter">
          <button class="filter-btn active" data-filter="all">Todos</button>
          <button class="filter-btn" data-filter="metal">Metales</button>
          <button class="filter-btn" data-filter="plastic">Plásticos</button>
          <button class="filter-btn" data-filter="special">Especiales</button>
        </div>
        
        <div class="gallery-grid">
          <div class="gallery-item" data-category="metal">
            <div class="placeholder-gallery-image">
              <span>Acabado Metálico 1</span>
            </div>
            <div class="gallery-overlay">
              <h4>Pulido de Aluminio</h4>
              <p>Sector Automotriz</p>
            </div>
          </div>
          
          <div class="gallery-item" data-category="metal">
            <div class="placeholder-gallery-image">
              <span>Acabado Metálico 2</span>
            </div>
            <div class="gallery-overlay">
              <h4>Cromado Industrial</h4>
              <p>Sector Aeroespacial</p>
            </div>
          </div>
          
          <div class="gallery-item" data-category="plastic">
            <div class="placeholder-gallery-image">
              <span>Acabado Plástico 1</span>
            </div>
            <div class="gallery-overlay">
              <h4>Texturizado ABS</h4>
              <p>Sector Electrónico</p>
            </div>
          </div>
          
          <div class="gallery-item" data-category="plastic">
            <div class="placeholder-gallery-image">
              <span>Acabado Plástico 2</span>
            </div>
            <div class="gallery-overlay">
              <h4>Pulido de Acrílico</h4>
              <p>Sector Médico</p>
            </div>
          </div>
          
          <div class="gallery-item" data-category="special">
            <div class="placeholder-gallery-image">
              <span>Acabado Especial 1</span>
            </div>
            <div class="gallery-overlay">
              <h4>Tratamiento Anticorrosión</h4>
              <p>Sector Marino</p>
            </div>
          </div>
          
          <div class="gallery-item" data-category="special">
            <div class="placeholder-gallery-image">
              <span>Acabado Especial 2</span>
            </div>
            <div class="gallery-overlay">
              <h4>Anodizado Especial</h4>
              <p>Sector Industrial</p>
            </div>
          </div>
        </div>
        
        <div class="gallery-more">
          <button class="btn btn-outline">Ver Más Proyectos</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contacto" class="cta-section">
      <div class="container">
        <h2>¿Listo para mejorar sus <span class="highlight">acabados industriales</span>?</h2>
        <p>Contáctenos hoy mismo para una consulta personalizada</p>
        <a href="/contacto" class="btn btn-primary">Solicitar Información</a>
      </div>
    </section>
  </div>
</template>

<script>
import BannerV3 from '../../components/BannerV3.vue'

export default {
  name: 'AcabadosPage',
  components: {
    BannerV3
  },
  head() {
    return {
      title: 'Acabados Industriales | OMA - Servicios de Manufactura',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Servicios de acabados industriales de alta calidad para piezas y componentes. Especialistas en acabados metálicos, plásticos y tratamientos especiales.'
        }
      ]
    }
  },
  mounted() {
    // Gallery filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter gallery items
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
}
</script>

<style scoped>
/* Base Styles */
.acabados-page {
  color: var(--content-dark);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 80px 0;
}

.highlight {
  color: var(--content-primary);
  font-weight: 700;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--content-dark);
  max-width: 700px;
  margin: 0 auto;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background-color: var(--content-primary);
  color: var(--content-light);
  border: 2px solid var(--content-primary);
}

.btn-primary:hover {
  background-color: rgba(var(--primary-rgb), 0.9);
  border-color: rgba(var(--primary-rgb), 0.9);
}

.btn-outline {
  background-color: transparent;
  color: var(--content-primary);
  border: 2px solid var(--content-primary);
}

.btn-outline:hover {
  background-color: var(--content-primary);
  color: var(--content-light);
}

/* Placeholder Styles */
.placeholder-image {
  width: 100%;
  height: 400px;
  background-color: rgba(var(--light-rgb), 0.9);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--content-gray);
  font-weight: 500;
  font-size: 1.2rem;
  border: 1px dashed var(--content-gray);
}

.placeholder-icon {
  background-color: rgba(var(--light-rgb), 0.9);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--content-primary);
  font-weight: 700;
  font-size: 1.5rem;
  border: 1px dashed var(--content-gray);
}

.placeholder-gallery-image {
  width: 100%;
  height: 100%;
  background-color: rgba(var(--light-rgb), 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--content-gray);
  font-weight: 500;
  font-size: 1rem;
  border: 1px dashed var(--content-gray);
  transition: transform 0.5s ease;
}

.gallery-item:hover .placeholder-gallery-image {
  transform: scale(1.05);
}

/* Details Section */
.details-section {
  background-color: var(--color-light);
}

.details-content {
  display: flex;
  gap: 60px;
  align-items: center;
}

.details-text {
  flex: 1;
}

.details-text p {
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.details-text h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--content-primary);
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.features-list .icon {
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--content-primary);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-weight: bold;
}

.details-image {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(var(--dark-rgb), 0.1);
}

/* Materials Section */
.materials-section {
  background-color: var(--color-primary);
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.material-card {
  background-color: var(--color-light);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(var(--dark-rgb), 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.material-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(var(--dark-rgb), 0.1);
}

.material-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}

.material-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--content-primary);
}

.material-card ul {
  padding-left: 20px;
  margin: 0;
}

.material-card li {
  margin-bottom: 8px;
  color: var(--content-dark);
}

/* Gallery Section */
.gallery-section {
  background-color: var(--color-primary);
}

.gallery-filter {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn {
  background: none;
  border: none;
  padding: 8px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  color: var(--content-dark);
}

.filter-btn:hover, .filter-btn.active {
  background-color: var(--content-primary);
  color: var(--content-light);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.gallery-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  cursor: pointer;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(var(--dark-rgb), 0.8), transparent);
  padding: 20px;
  color: var(--content-light);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h4 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}

.gallery-overlay p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.gallery-more {
  text-align: center;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--content-primary) 0%, rgba(var(--primary-rgb), 0.8) 100%);
  color: var(--content-light);
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .highlight {
  color: var(--content-secondary);
  border-bottom: 2px solid var(--content-light);
  padding-bottom: 3px;
}

.cta-section .btn-primary {
  background-color: var(--content-light);
  color: var(--content-primary);
  border-color: var(--content-light);
}

.cta-section .btn-primary:hover {
  background-color: transparent;
  color: var(--content-light);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .details-content {
    flex-direction: column;
  }
  
  .details-image {
    margin-top: 40px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .placeholder-image {
    height: 300px;
  }
}

@media (max-width: 576px) {
  .btn {
    width: 100%;
    text-align: center;
  }
  
  .gallery-filter {
    flex-direction: column;
    align-items: center;
  }
  
  .filter-btn {
    width: 100%;
    max-width: 200px;
  }
  
  .placeholder-image {
    height: 250px;
  }
}
</style>
