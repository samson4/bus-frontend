<template>
  <div class="flex flex-col justify-between h-screen w-full">
    <div class="h-24 border w-full">
    <AppNavbar />
  </div>
    <div class="flex w-full">
      <SideBar :items="sidebarNavigation" />
      <main class="overflow-y-auto w-full h-full"><slot />
        <ModalsContainer />
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import AppSidebar from "@/components/AppSidebar.vue";
import SideBar from "@/components/SideBar.vue";
import AppNavbar from "@/components/skeleton/NavBar.vue"; // Import your Navbar component
import { SidebarProvider } from "@/components/ui/sidebar"; // SidebarTrigger might be used within AppNavbar or AppSidebar
import { useColorMode } from "@vueuse/core";
import { ModalsContainer } from "vue-final-modal";
// ... (rest of your script setup remains the same)

const colorMode = useColorMode();

// Function to apply the theme to the HTML element
const applyTheme = (theme) => {
  // Your existing theme application logic
};
const sidebarNavigation = ref([
  { label: "Dashboard", icon: "mdi:home-outline", to: "/" },
  {
    label: "Features",
    icon: "mdi:star-outline",
    subitems: [
      {
        label: "Feature A",
        icon: "mdi:alpha-a-box-outline",
        to: "/features/a",
      },
      {
        label: "Feature B",
        icon: "mdi:alpha-b-box-outline",
        to: "/features/b",
      },
    ],
  },
  {
    label: "Settings",
    icon: "mdi:cog-outline",
    to: "/settings", // Can be a direct link
  },
  {
    label: "Management",
    icon: "mdi:account-group-outline",
    // No 'to' property, will only expand/collapse
    subitems: [
      { label: "Users", to: "/management/users" },
      { label: "Roles", to: "/management/roles" },
      {
        label: "Permissions",
        // No 'to' for this one, could be a header for more sub-items if needed
        // or you could nest further (though this example doesn't handle deep nesting animation well out-of-the-box)
      },
    ],
  },
  { label: "Analytics", icon: "mdi:chart-bar", to: "/analytics" },
  { label: "Help", icon: "mdi:help-circle-outline", to: "/help" },
]);
// Toggle function
const toggleColorMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};

// Watch for changes to colorMode and apply theme
watch(
  colorMode,
  (newTheme) => {
    applyTheme(newTheme);
  },
  { immediate: true },
);

// Apply theme on mount to ensure it's set correctly
onMounted(() => {
  applyTheme(colorMode.value);
});
</script>

<style>
/* Your existing styles remain the same */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... other variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... other dark theme variables */
}
</style>
