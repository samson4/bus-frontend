<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ['auth'],
  // or middleware: 'auth'
})
</script>
