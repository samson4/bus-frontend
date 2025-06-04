<template>
  <div>
    <Header />
  </div>
  <div class="container mx-auto px-6 py-16 md:py-24">
    <div class="max-w-md mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold mb-2">Create an Account</h2>
        <p class="text-gray-700">Join BUS and start building</p>
      </div>

      <div class="bg-white border border-orange-200 rounded-lg p-8 shadow-sm">
        <form @submit.prevent="handleSignup" class="space-y-6">
          <!-- <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium mb-2"
                >First Name</label
              >
              <input
                type="text"
                id="firstName"
                v-model="firstName"
                class="w-full px-4 py-2 bg-orange-50 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium mb-2"
                >Last Name</label
              >
              <input
                type="text"
                id="lastName"
                v-model="lastName"
                class="w-full px-4 py-2 bg-orange-50 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Doe"
                required
              />
            </div>
          </div> -->

          <div>
            <label for="email" class="block text-sm font-medium mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full px-4 py-2 bg-orange-50 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium mb-2"
              >Password</label
            >
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-4 py-2 bg-orange-50 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
            <p class="mt-1 text-xs text-gray-600">
              Must be at least 8 characters
            </p>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium mb-2"
              >Confirm Password</label
            >
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="w-full px-4 py-2 bg-orange-50 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          <div class="flex items-start">
            <input
              type="checkbox"
              id="terms"
              v-model="terms"
              class="h-4 w-4 mt-1 text-orange-500 focus:ring-orange-500 border-orange-300 rounded"
              required
            />
            <label for="terms" class="ml-2 block text-sm text-gray-700">
              I agree to the
              <a href="#" class="text-orange-600 hover:text-orange-700"
                >Terms of Service</a
              >
              and
              <a href="#" class="text-orange-600 hover:text-orange-700"
                >Privacy Policy</a
              >
            </label>
          </div>

          <button
            type="submit"
            class="w-full px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white transition-all font-medium"
            :disabled="isLoading"
          >
            <span v-if="isLoading">Creating account...</span>
            <span v-else>Create Account</span>
          </button>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-orange-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-600">Or sign up with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <button
              class="flex justify-center items-center px-4 py-2 border border-orange-200 rounded-md shadow-sm bg-white hover:bg-orange-50 transition-all"
            >
              <Github class="h-5 w-5" />
            </button>
            <button
              class="flex justify-center items-center px-4 py-2 border border-orange-200 rounded-md shadow-sm bg-white hover:bg-orange-50 transition-all"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </button>
            <button
              class="flex justify-center items-center px-4 py-2 border border-orange-200 rounded-md shadow-sm bg-white hover:bg-orange-50 transition-all"
            >
              <svg
                class="h-5 w-5 text-[#1DA1F2]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <p class="text-gray-700">
          Already have an account?
          <NuxtLink
            to="/login"
            class="text-orange-600 hover:text-orange-700 ml-1"
            >Sign in</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "~/components/skeleton/Header.vue";
import Footer from "~/components/skeleton/Footer.vue";
import { Github } from "lucide-vue-next";

import axios from "axios";
// const firstName = ref("");
// const lastName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const terms = ref(false);
const isLoading = ref(false);

const router = useRouter();
const handleSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords don't match!");
    return;
  }

  isLoading.value = true;
  const formData = {
    email: email.value,
    password: password.value,
  };
  axios
    .post("/register", formData)
    .then((response) => {
      console.log("res", response);
      isLoading.value = false;

      console.log("Account created successfully!", response);

      console.log("router", router);
      router.push("login");
    })
    .catch((error) => {
      // console.error("Error creating account:", error);
      isLoading.value = false;
      // alert("Error creating account. Please try again.");
    });
};
</script>
