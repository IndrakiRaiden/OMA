<template>
  <main class="catalog-page">
    <BannerV2 
      title="Product Catalog" 
      subtitle="Explore our selection of high-precision products and solutions"
      :buttons="[
        { text: 'View Catalog', href: '#catalogo', class: 'primary-btn' },
        { text: 'Request Quote', href: '/cotiza', class: 'secondary-btn' }
      ]"
    />
    
    <!-- Catalog Section -->
    <section id="catalogo" class="catalog-section py-16 overflow-x-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">OUR CATALOG</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of CNC manufacturing products and solutions, designed to meet the needs of various industries.
          </p>
          <div class="mt-6 flex justify-center">
            <NuxtLink to="/checkout" class="checkout-btn">Request Quote for Selected Items</NuxtLink>
          </div>
        </div>
        
        <!-- Expandable Category Cards -->
        <CatalogCards />
      </div>
    </section>

    <FeaturesSection :features="features" />
    <CTASection />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CatalogCards from '~/components/CatalogCards.vue';

definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})

const features = ref([
  {
    title: "High Precision",
    description: "All our products are manufactured to the highest precision standards.",
    icon: "precision"
  },
  {
    title: "Quality Materials",
    description: "We use only the best materials to ensure durability and performance.",
    icon: "quality"
  },
  {
    title: "Custom Solutions",
    description: "Need something specific? We can create custom solutions for your needs.",
    icon: "custom"
  }
]);

onMounted(() => {
  // Handle hash navigation
  if (window.location.hash === '#catalogo') {
    setTimeout(() => {
      const catalogSection = document.getElementById('catalogo');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  }
});
</script>

<style scoped>
.catalog-page {
  /* Using site's color variables */
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}

/* Banner styling is handled by the BannerV2 component */

/* Catalog Section */
.catalog-section {
  background-color: #f9f9f9;
}

/* Category filter buttons */
.category-btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: #333;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  white-space: nowrap;
}

.category-btn:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

.category-btn.active {
  background-color: var(--content-primary, #0056b3);
  color: white;
  border-color: var(--content-primary, #0056b3);
}

/* Checkout button */
.checkout-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--content-primary, #0056b3);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none;
  margin-top: 1rem;
}

.checkout-btn:hover {
  background-color: var(--content-secondary, #004494);
  transform: translateY(-2px);
}
</style>