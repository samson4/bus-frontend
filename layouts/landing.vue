<template>
  <div
    class="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 text-gray-800 font-poppins"
  >
    <!-- Navigation -->
    <Header />

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Menu, X, Twitter, Github, Linkedin } from "lucide-vue-next";
import LandingPage from "~/components/LandingPage.vue";
import Header from "~/components/skeleton/Header.vue";
import Footer from "~/components/skeleton/Footer.vue";
import LoginPage from "~/components/LoginPage.vue";
import SignupPage from "~/components/SignupPage.vue";

const mobileMenuOpen = ref(false);
const currentPage = ref("landing");

const currentComponent = LandingPage;

const handleNavigation = (page) => {
  currentPage.value = page;
  mobileMenuOpen.value = false;
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.015em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  letter-spacing: -0.025em;
}
</style>
