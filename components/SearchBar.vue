<template>
  <div class="search-container">
    <div class="max-w-2xl mx-auto relative">
      <input 
        :value="modelValue"
        @input="handleInput"
        type="text" 
        :placeholder="placeholder"
        class="search-input"
      >
      <i class="fas fa-search search-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Buscar...'
    }
  },
  emits: ['update:modelValue', 'search'],
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.$emit('update:modelValue', value)
      this.$emit('search', value)
    }
  }
}
</script>

<style scoped>
.search-container {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 1rem 3rem;
  border: 2px solid var(--content-gray);
  border-radius: 2rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: white;
}

.search-input:focus {
  border-color: var(--content-primary);
  box-shadow: 0 0 0 3px rgba(var(--content-primary-rgb), 0.1);
  outline: none;
}

.search-icon {
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--content-gray);
}
</style>
