<template>
  <nav class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div
          class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600"
        >
          BUS
        </div>
        <div class="ml-2 text-xs uppercase tracking-widest text-orange-700">
          Backend Utility Service
        </div>
      </div>

      <div class="hidden md:flex items-center space-x-8">
        <a
          href="#features"
          class="text-gray-700 hover:text-orange-700 transition-colors"
          >Features</a
        >
        <a
          href="#pricing"
          class="text-gray-700 hover:text-orange-700 transition-colors"
          >Pricing</a
        >
        <a
          href="#docs"
          class="text-gray-700 hover:text-orange-700 transition-colors"
          >Documentation</a
        >
        <NuxtLink
          to="/login"
          class="text-gray-700 hover:text-orange-700 transition-colors"
          >Sign In</NuxtLink
        >
        <NuxtLink
          to="/signup"
          class="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white transition-all"
          >Sign Up</NuxtLink
        >
      </div>

      <div class="md:hidden">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="text-gray-700 hover:text-orange-700"
        >
          <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-4">
      <a
        href="#features"
        class="block text-gray-700 hover:text-orange-700 transition-colors"
        >Features</a
      >
      <a
        href="#pricing"
        class="block text-gray-700 hover:text-orange-700 transition-colors"
        >Pricing</a
      >
      <a
        href="#docs"
        class="block text-gray-700 hover:text-orange-700 transition-colors"
        >Documentation</a
      >
      <a
        href="#"
        @click.prevent="currentPage = 'login'"
        class="block text-gray-700 hover:text-orange-700 transition-colors"
        >Sign In</a
      >
      <a
        href="#"
        @click.prevent="currentPage = 'signup'"
        class="block px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white transition-all w-full text-center"
        >Sign Up</a
      >
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);
</script>
