<template>
  <footer class="container mx-auto px-6 py-8 mt-24">
    <div
      class="flex flex-col md:flex-row justify-between items-center border-t border-orange-200 pt-8"
    >
      <div class="text-gray-600">
        © {{ new Date().getFullYear() }} BUS. All rights reserved.
      </div>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a
          href="#"
          class="text-gray-600 hover:text-orange-700 transition-colors"
        >
          <Twitter class="h-5 w-5" />
        </a>
        <a
          href="#"
          class="text-gray-600 hover:text-orange-700 transition-colors"
        >
          <Github class="h-5 w-5" />
        </a>
        <a
          href="#"
          class="text-gray-600 hover:text-orange-700 transition-colors"
        >
          <Linkedin class="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
</script>

<style></style>
