<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="logo-section">
          <div class="logo">
            <div class="logo-icon">
              <i class="fas fa-cog"></i>
            </div>
            <div class="logo-text">
              <span class="logo-title">OMA</span>
              <span class="logo-subtitle">INDUSTRIAL</span>
            </div>
          </div>
          <p class="tagline">Precisión. Innovación. Excelencia.</p>
        </div>

        <div class="quick-contact">
          <div class="contact-card">
            <i class="fas fa-phone"></i>
            <div>
              <span>Llámanos</span>
              <strong>+1 234 567 890</strong>
            </div>
          </div>
          <div class="contact-card">
            <i class="fas fa-envelope"></i>
            <div>
              <span>Escríbenos</span>
              <strong>contact@oma.com</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <h3>Empresa</h3>
          <ul>
            <li><NuxtLink to="/about">Nosotros</NuxtLink></li>
            <li><NuxtLink to="/careers">Carreras</NuxtLink></li>
            <li><NuxtLink to="/certificates">Certificaciones</NuxtLink></li>
            <li><NuxtLink to="/partners">Partners</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Servicios</h3>
          <ul>
            <li><NuxtLink to="/automation">Automatización</NuxtLink></li>
            <li><NuxtLink to="/manufacturing">Manufactura</NuxtLink></li>
            <li><NuxtLink to="/consulting">Consultoría</NuxtLink></li>
            <li><NuxtLink to="/maintenance">Mantenimiento</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Recursos</h3>
          <ul>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/case-studies">Casos de Éxito</NuxtLink></li>
            <li><NuxtLink to="/downloads">Descargas</NuxtLink></li>
            <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col newsletter-col">
          <h3>Newsletter</h3>
          <p>Únete a nuestra lista y mantente actualizado</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <div class="input-group">
              <input 
                type="email" 
                v-model="email"
                placeholder="Tu email"
                required
              >
              <button type="submit">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </form>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ new Date().getFullYear() }} OMA Industrial. Todos los derechos reservados.</p>
        </div>
        <div class="legal-links">
          <a href="/privacy">Privacidad</a>
          <a href="/terms">Términos</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { MapPin, Phone, Mail } from 'lucide-vue-next'

export default {
  name: 'Footer',
  components: {
    MapPin,
    Phone,
    Mail
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribeNewsletter() {
      // Implementar lógica de suscripción
      console.log('Subscribing:', this.email)
    }
  }
}
</script>

<style scoped>
.footer {
  background: #f8f9fa;
  color: #2d3436;
  padding: 5rem 0 0;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 2rem;
}

.logo-section {
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: #4B6E8C;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon i {
  font-size: 1.8rem;
  color: #fff;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-size: 2rem;
  font-weight: 800;
  color: #4B6E8C;
  line-height: 1;
}

.logo-subtitle {
  font-size: 0.9rem;
  color: #F5A623;
  letter-spacing: 0.2em;
}

.tagline {
  color: #718096;
  font-size: 1rem;
  margin-top: 0.5rem;
}

.quick-contact {
  display: flex;
  gap: 2rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.contact-card i {
  font-size: 1.2rem;
  color: #F5A623;
}

.contact-card div {
  display: flex;
  flex-direction: column;
}

.contact-card span {
  font-size: 0.8rem;
  color: #718096;
}

.contact-card strong {
  color: #2d3436;
  font-size: 0.9rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
}

.footer-col h3 {
  color: #4B6E8C;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 0.8rem;
}

.footer-col ul li a {
  color: #718096;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-col ul li a:hover {
  color: #F5A623;
}

.newsletter-col p {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.input-group {
  display: flex;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.input-group:focus-within {
  border-color: #4B6E8C;
  box-shadow: 0 0 0 3px rgba(75, 110, 140, 0.1);
}

.input-group input {
  flex: 1;
  padding: 0.8rem 1rem;
  border: none;
  background: transparent;
  color: #2d3436;
  font-size: 0.9rem;
}

.input-group input:focus {
  outline: none;
}

.input-group button {
  padding: 0.8rem 1.2rem;
  background: #4B6E8C;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.input-group button:hover {
  background: #F5A623;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  color: #718096;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #F5A623;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid #e2e8f0;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: #718096;
  font-size: 0.9rem;
}

.legal-links {
  display: flex;
  gap: 2rem;
}

.legal-links a {
  color: #718096;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #F5A623;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .quick-contact {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 0;
  }

  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 3rem;
  }

  .quick-contact {
    width: 100%;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-col h3 {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .legal-links {
    justify-content: center;
  }
}
</style>
