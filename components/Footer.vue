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
          <div class="contact-card" @click="makePhoneCall">
            <i class="fas fa-phone"></i>
            <div>
              <span>Llámanos</span>
              <strong>{{ contactInfo.phone }}</strong>
            </div>
          </div>
          <div class="contact-card" @click="sendEmail">
            <i class="fas fa-envelope"></i>
            <div>
              <span>Escríbenos</span>
              <strong>{{ contactInfo.email }}</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <h3>Navegación</h3>
          <ul>
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li><NuxtLink to="/about">Nosotros</NuxtLink></li>
            <li><NuxtLink to="/contact">Contacto</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Servicios</h3>
          <ul>
            <li><NuxtLink to="/servicios">Servicios</NuxtLink></li>
            <li><NuxtLink to="/industrias">Industrias</NuxtLink></li>
            <li><NuxtLink to="/cotiza">Cotiza tu Proyecto</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Ayuda</h3>
          <ul>
            <li><NuxtLink to="/faqs">FAQs</NuxtLink></li>
          </ul>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link">
              <svg class="x-logo-svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" stroke="none" fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3>Ubicación</h3>
          <div class="location-info">
            <div class="location-item location-address" @click="openMap">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ contactInfo.address }}</span>
            </div>
            <div class="location-item location-hours">
              <i class="fas fa-clock"></i>
              <span>Horario: {{ contactInfo.businessHours }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ new Date().getFullYear() }} OMA Industrial. Todos los derechos reservados.</p>
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
      contactInfo: {
        phone: '+52 6651219080',
        email: 'OMASOLUTIONSRH@GMAIL.COM',
        address: 'JOSE MARIA PINO SUAREZ #4000 TECATE BAJA CALIFORNIA',
        businessHours: '6 AM A 6 PM',
        mapUrl: 'https://www.google.com.mx/maps/place/Jos%C3%A9+Mar%C3%ADa+Pino+Su%C3%A1rez+4000,+Bellavista,+21440+Tecate,+B.C./@32.5659613,-116.654308,21z/data=!4m6!3m5!1s0x80d912d89712366d:0x14caa25fcba81ed8!8m2!3d32.5659763!4d-116.6544206!16s%2Fg%2F11dxlbk6dr?entry=ttu'
      }
    }
  },
  methods: {
    makePhoneCall() {
      window.location.href = `tel:${this.contactInfo.phone.replace(/\s+/g, '')}`
    },
    sendEmail() {
      window.location.href = `mailto:${this.contactInfo.email}`
    },
    openMap() {
      window.open(this.contactInfo.mapUrl, '_blank', 'noopener,noreferrer')
    }
  },
  head() {
    return {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
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
  transition: all 0.3s ease;
  cursor: pointer;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  background: #f9f9f9;
}

.contact-card:hover i {
  transform: scale(1.2);
  color: #4B6E8C;
}

.contact-card i {
  font-size: 1.2rem;
  color: #F5A623;
  transition: all 0.3s ease;
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

.location-info {
  margin-bottom: 1.5rem;
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.location-address, .location-hours {
  cursor: pointer;
}

.location-address::before, .location-hours::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #F5A623, #4B6E8C);
  transition: width 0.3s ease;
  z-index: 1;
}

.location-address:hover::before, .location-hours:hover::before {
  width: 100%;
}

.location-address:hover, .location-hours:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  background: rgba(255,255,255,0.9);
  border-color: rgba(75, 110, 140, 0.1);
}

.location-address:hover i, .location-hours:hover i {
  transform: scale(1.2) rotate(8deg);
  color: #4B6E8C;
}

.location-address:hover span, .location-hours:hover span {
  color: #4B6E8C;
}

.location-item i {
  color: #F5A623;
  font-size: 1.1rem;
  margin-top: 0.2rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.location-item span {
  color: #718096;
  font-size: 0.9rem;
  line-height: 1.5;
  transition: color 0.3s ease;
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

.x-logo-svg {
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
  vertical-align: middle;
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
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .contact-card {
    min-width: 200px;
    flex: 1;
    justify-content: center;
    padding: 0.75rem;
  }
  
  .contact-card i {
    font-size: 1rem;
  }
  
  .contact-card div {
    min-width: 120px;
  }
  
  .contact-card span {
    font-size: 0.7rem;
  }
  
  .contact-card strong {
    font-size: 0.85rem;
    word-break: break-word;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .location-item {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-col h3 {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .quick-contact {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-card {
    width: 100%;
    max-width: 280px;
  }
}
</style>
