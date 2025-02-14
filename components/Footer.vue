<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about-section">
        <NuxtLink to="/about" class="section-title">
          <h3>About Us</h3>
        </NuxtLink>
        <p>OMA Industrial Solutions provides cutting-edge industrial solutions with a focus on precision and innovation.</p>
      </div>
      
      <div class="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><NuxtLink to="/" class="footer-link">Home</NuxtLink></li>
          <li><NuxtLink to="/best-solutions" class="footer-link">Best Solutions</NuxtLink></li>
          <li><NuxtLink to="/project-solutions" class="footer-link">Project Solutions</NuxtLink></li>
          <li><NuxtLink to="/solutions" class="footer-link">Solutions</NuxtLink></li>
        </ul>
      </div>
      
      <div class="footer-section contact-info">
        <h3>Contact Info</h3>
        <ul>
          <li class="contact-item">
            <MapPin class="icon" />
            <span>123 Industrial Ave, Tech City</span>
          </li>
          <li class="contact-item">
            <Phone class="icon" />
            <span>+1 234 567 890</span>
          </li>
          <li class="contact-item">
            <Mail class="icon" />
            <span>contact@oma-solutions.com</span>
          </li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Newsletter</h3>
        <div class="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email"
            v-model="email"
          >
          <button @click.prevent="subscribeNewsletter">Subscribe</button>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} OMA Industrial Solutions. All rights reserved.</p>
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
  background-color: #1a1a1a;
  color: var(--color-light);
  padding: 4rem 0 0;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-content::before {
  display: none;
}

.footer-section {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.footer-section:nth-child(1) { animation-delay: 0.1s; }
.footer-section:nth-child(2) { animation-delay: 0.3s; }
.footer-section:nth-child(3) { animation-delay: 0.5s; }
.footer-section:nth-child(4) { animation-delay: 0.7s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-section p {
  color: var(--color-gray);
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section h3 {
  color: var(--color-accent);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 40px;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.footer-section:hover h3::after {
  width: 100%;
}

.footer-section.quick-links h3,
.footer-section.contact-info h3 {
  color: #4B6E8C;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-section.quick-links h3::after,
.footer-section.contact-info h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 30px;
  height: 2px;
  background: #4B6E8C;
}

.section-title {
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.section-title h3 {
  color: var(--color-accent);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.section-title:hover h3 {
  color: var(--color-accent);
  transform: translateX(10px);
}

.section-title::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -10px;
  width: 20px;
  height: 20px;
  border-top: 2px solid #4B6E8C;
  border-left: 2px solid #4B6E8C;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.section-title:hover::before {
  opacity: 0.6;
}

.section-title h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 40px;
  height: 2px;
  background: var(--color-accent);
  transition: all 0.3s ease;
}

.section-title:hover h3::after {
  width: 100%;
  background: linear-gradient(90deg, var(--color-accent), #4B6E8C);
}

.footer-link {
  color: var(--color-light);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.footer-link:hover {
  color: var(--color-accent);
  padding-left: 10px;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.footer-link:hover::before {
  width: 100%;
}

.icon {
  color: var(--color-accent);
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-item:hover .icon {
  transform: scale(1.2);
}

.newsletter-form input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1rem;
  border-radius: 4px;
  color: var(--color-light);
  width: 100%;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.newsletter-form input:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: #4B6E8C;
  outline: none;
  box-shadow: 0 0 10px rgba(75, 110, 140, 0.2);
}

.newsletter-form button {
  background: var(--color-accent);
  color: var(--color-light);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(75, 110, 140, 0.3);
}

.footer-bottom {
  margin-top: 4rem;
  padding: 1.5rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
}

.footer-bottom::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4B6E8C, transparent);
  opacity: 0.3;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form button {
    width: 100%;
  }
}
</style>
