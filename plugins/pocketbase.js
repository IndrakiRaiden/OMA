import PocketBase from 'pocketbase';

// Crear una instancia de PocketBase con la URL correcta
const pb = new PocketBase('https://pocketbase.fiesco.computoespacial.com');

// Función para probar la conexión
export async function testConnection() {
  try {
    // Intentar obtener la lista de colecciones (requiere autenticación de admin)
    // o una operación más simple como health check
    const health = await pb.health.check();
    console.log('Conexión a PocketBase exitosa:', health);
    return { success: true, data: health };
  } catch (error) {
    console.error('Error al conectar con PocketBase:', error);
    return { 
      success: false, 
      error: error.message,
      details: error.response ? error.response : null
    };
  }
}

// Exportar la instancia de PocketBase
export default pb;
