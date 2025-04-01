<template>
  <section class="team-section">
    <div class="container mx-auto px-4">
      <div class="section-header text-center">
        <h2 class="title">Nuestro Equipo</h2>
        <p class="subtitle">Expertos apasionados por la excelencia en manufactura</p>
      </div>

      <div class="team-grid">
        <div v-for="(member, index) in team" 
             :key="index" 
             class="team-card"
             :style="{ animationDelay: `${index * 200}ms` }">
          <div class="member-avatar" :class="getAvatarClass(index)">
            <img v-if="member.image" :src="member.image" alt="" class="member-image">
            <span v-else class="initials">{{ getInitials(member.name) }}</span>
            <div class="avatar-ring"></div>
          </div>
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <a v-if="isPhoneNumber(member.description)" 
               :href="`tel:${formatPhoneForCall(member.description)}`"
               class="phone-number"
               @mouseover="startPhoneAnimation" 
               @mouseout="stopPhoneAnimation">
              <i class="fas fa-phone phone-icon" :class="{'phone-ringing': isPhoneRinging}"></i>
              {{ member.description }}
            </a>
            <p v-else class="member-description">{{ member.description }}</p>
          </div>
          <div class="member-social">
            <a v-for="social in member.social" 
               :key="social.platform" 
               :href="social.url" 
               class="social-link"
               target="_blank"
               rel="noopener noreferrer">
              <i :class="['fab', `fa-${social.platform}`]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',
  data() {
    return {
      team: [
        {
          name: 'Eduardo Topete',
          role: 'Departamento de Ingenieria',
          description: '+52 66 5106 6940',
          social: [],
          image: '/images/people/eduardo.png'
        },
        {
          name: 'Miguel Calvario',
          role: 'Departamento de Ventas',
          description: '+52 66 5121 9080',
          social: [],
          image: '/images/people/miguel.png'
        }
      ],
      isPhoneRinging: false
    }
  },
  methods: {
    getAvatarClass(index) {
      return `avatar-${index % 5}`
    },
    getInitials(name) {
      return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    },
    isPhoneNumber(text) {
      return text && text.includes('+52')
    },
    formatPhoneForCall(phone) {
      // Remove spaces and keep the format needed for tel: protocol
      return phone.replace(/\s+/g, '')
    },
    startPhoneAnimation() {
      this.isPhoneRinging = true
    },
    stopPhoneAnimation() {
      this.isPhoneRinging = false
    }
  }
}
</script>

<style scoped>
.team-section {
  padding: 6rem 0;
  background: white;
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--content-dark);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--content-primary);
}

.subtitle {
  font-size: 1.125rem;
  color: var(--content-gray);
  max-width: 600px;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
  position: relative;
  overflow: hidden;
}

.team-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--content-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.team-card:hover::before {
  transform: scaleX(1);
}

.member-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  position: relative;
  overflow: hidden;
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 2px solid currentColor;
  opacity: 0.3;
  transition: all 0.3s ease;
}

.team-card:hover .avatar-ring {
  transform: scale(1.1);
  opacity: 0.5;
}

.member-info {
  margin-bottom: 1.5rem;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--content-dark);
  margin-bottom: 0.5rem;
}

.member-role {
  font-size: 1rem;
  color: var(--content-primary);
  margin-bottom: 1rem;
}

.member-description {
  font-size: 0.875rem;
  color: var(--content-gray);
  line-height: 1.6;
}

.phone-number {
  display: inline-flex;
  align-items: center;
  color: var(--content-primary);
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
}

.phone-number:hover {
  background-color: rgba(var(--content-primary-rgb), 0.1);
  transform: scale(1.05);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.phone-icon {
  margin-right: 8px;
  transition: all 0.3s ease;
}

.phone-ringing {
  animation: phoneRing 0.8s infinite;
  color: var(--content-primary);
}

@keyframes phoneRing {
  0% {
    transform: rotate(-15deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-15deg);
  }
}

.member-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(var(--content-primary-rgb), 0.1);
  color: var(--content-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--content-primary);
  color: white;
  transform: translateY(-3px);
}

.avatar-0 {
  background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
}

.avatar-1 {
  background: linear-gradient(135deg, #4ECDC4, #6EE7E7);
}

.avatar-2 {
  background: linear-gradient(135deg, #45B7D1, #6AD5EE);
}

.avatar-3 {
  background: linear-gradient(135deg, #96C93D, #B5E555);
}

.avatar-4 {
  background: linear-gradient(135deg, #9B59B6, #B87AD4);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .team-card {
    padding: 1.5rem;
  }

  .member-avatar {
    width: 100px;
    height: 100px;
    font-size: 2rem;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
