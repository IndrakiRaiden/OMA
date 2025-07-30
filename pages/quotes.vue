<script setup>
// This file applies middleware to all /quotes/* routes
definePageMeta({
  middleware: ['quotes-auth']
})
</script>

<template>
  <!-- This is just a wrapper for /quotes/* routes -->
  <div>
    <NuxtPage />
  </div>
</template>
