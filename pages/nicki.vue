<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Conexión a Strapi - Artículos</h1>
    
    <div v-if="loading" class="mb-4 p-4 bg-blue-100 rounded">
      <p>Cargando datos...</p>
    </div>
    
    <div v-if="error" class="mb-4 p-4 bg-red-100 rounded">
      <p class="text-red-700">{{ error }}</p>
    </div>
    
    <div class="mb-4 p-4 bg-gray-100 rounded">
      <h2 class="text-xl font-semibold mb-2">Estado de la conexión</h2>
      <p>{{ connectionStatus }}</p>
      
      <div class="mt-4">
        <button 
          @click="fetchArticles()" 
          class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar conexión
        </button>
      </div>
    </div>
    
    <div v-if="articles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="article in articles" :key="article.id" class="border rounded p-4">
        <h2 class="text-xl font-bold mb-2">{{ article.title || 'Sin título' }}</h2>
        
        <div v-if="hasImage(article)" class="mb-4">
          <img 
            :src="getImageUrl(article)" 
            :alt="article.title || 'Imagen del artículo'" 
            class="w-full h-48 object-cover rounded"
          />
        </div>
        
        <p class="text-gray-700 mb-4">{{ article.description || 'Sin descripción' }}</p>
        
        <div class="text-sm text-gray-500">
          <p>ID: {{ article.id }}</p>
          <p v-if="article.createdAt">Creado: {{ formatDate(article.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Usar las variables de entorno
const strapiUrl = ref(process.env.NUXT_PUBLIC_STRAPI_API_URL || 'https://strapi.fiesco.computoespacial.com/api');
const strapiBaseUrl = ref(process.env.NUXT_PUBLIC_STRAPI_URL || 'https://strapi.fiesco.computoespacial.com');
const strapiApiKey = ref(process.env.NUXT_PUBLIC_STRAPI_API_KEY || '5a7f68926c6783e660757108c7bdda3d58985781c563fcaa684b67367c189a784f056714ae937c7b650a176f7d36e9f79e6097bc0007573ced0c6c7b941351958615781fbdb219f72bf266a6af788f556bb2405c1755a64bbf27d5d62914b5b6be4628a47af70336c73c02885c4115f667a31ab77e296340c2c38d20e06c3468');

const articles = ref([]);
const loading = ref(false);
const error = ref(null);
const connectionStatus = ref('Esperando...');

const getAuthHeaders = () => {
  return {
    'Authorization': `Bearer ${strapiApiKey.value}`
  };
};

const fetchArticles = async () => {
  loading.value = true;
  error.value = null;
  connectionStatus.value = 'Conectando a la API de Strapi...';
  
  try {
    // Intentar obtener artículos con el API Key del .env
    const url = `${strapiUrl.value}/articles?populate=*`;
    console.log('Fetching from:', url);
    console.log('Using API Key:', strapiApiKey.value ? 'Yes (from .env)' : 'No');
    
    const response = await axios.get(url, {
      headers: getAuthHeaders()
    });
    
    console.log('Respuesta exitosa');
    
    // Depurar la estructura de datos
    if (response.data && response.data.data && response.data.data.length > 0) {
      console.log('Estructura del primer artículo:', JSON.stringify(response.data.data[0], null, 2));
    }
    
    // Procesar los datos - La estructura es diferente a la esperada
    if (response.data && response.data.data) {
      // Los datos vienen directamente, no dentro de attributes
      articles.value = response.data.data;
      connectionStatus.value = `Conexión exitosa. Se encontraron ${articles.value.length} artículos.`;
    } else {
      articles.value = [];
      connectionStatus.value = 'Conexión exitosa, pero no se encontraron artículos en el formato esperado.';
    }
  } catch (err) {
    console.error('Error al obtener artículos:', err);
    error.value = `Error: ${err.message}`;
    connectionStatus.value = `Error de conexión: ${err.response?.status || err.message}`;
  } finally {
    loading.value = false;
  }
};

// Verificar si el artículo tiene una imagen
const hasImage = (article) => {
  return article && article.cover && article.cover.url;
};

const getImageUrl = (article) => {
  // Depurar la estructura del artículo
  console.log('Obteniendo URL de imagen para:', article.id);
  
  if (article.cover && article.cover.url) {
    const imageUrl = article.cover.url;
    console.log('URL de imagen (cover.url):', imageUrl);
    
    // Asegurarnos de que la URL base no termine con / para evitar doble slash
    const baseUrl = strapiBaseUrl.value.endsWith('/') 
      ? strapiBaseUrl.value.slice(0, -1) 
      : strapiBaseUrl.value;
    
    // Construir la URL completa
    const fullUrl = imageUrl.startsWith('http') 
      ? imageUrl 
      : `${baseUrl}${imageUrl}`;
    
    console.log('URL completa de la imagen:', fullUrl);
    return fullUrl;
  }
  
  console.log('No se encontró imagen para el artículo:', article.id);
  return '';
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

onMounted(() => {
  fetchArticles();
});
</script>
