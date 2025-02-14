<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>About Us</h3>
        <p>OMA Industrial Solutions provides cutting-edge industrial solutions with a focus on precision and innovation.</p>
      </div>
      
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><NuxtLink to="/" class="footer-link">Home</NuxtLink></li>
          <li><NuxtLink to="/best-solutions" class="footer-link">Best Solutions</NuxtLink></li>
          <li><NuxtLink to="/project-solutions" class="footer-link">Project Solutions</NuxtLink></li>
          <li><NuxtLink to="/solutions" class="footer-link">Solutions</NuxtLink></li>
        </ul>
      </div>
      
      <div class="footer-section">
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
  background-image: linear-gradient(
    45deg,
    #1a1a1a,
    #222222 25%,
    #1a1a1a 50%,
    #222222 75%,
    #1a1a1a
  );
  background-size: 400% 400%;
  animation: gradientMove 10s ease infinite;
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
  animation: shimmer 2s infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
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
  background: var(--color-light);
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

.footer-link {
  color: var(--color-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--color-accent);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-item span {
  color: var(--color-gray);
}

.icon {
  color: var(--color-accent);
  width: 18px;
  height: 18px;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid var(--color-light);
  background: transparent;
  color: var(--color-light);
  border-radius: 4px;
}

.newsletter-form input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.newsletter-form button {
  padding: 0.8rem 1.5rem;
  background: var(--color-accent);
  border: none;
  color: var(--color-light);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
  background: var(--color-light);
  color: var(--color-primary);
}

.footer-bottom {
  margin-top: 4rem;
  padding: 1.5rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  color: var(--color-gray);
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
