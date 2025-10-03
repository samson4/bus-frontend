<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div
      :class="[
        'bg-white shadow-lg transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-16' : 'w-64',
      ]"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <div v-if="!isCollapsed" class="flex items-center space-x-3">
          
       
          <div
            class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
          >
           <NuxtLink :to="`/projects`">
            <Home class="w-4 h-4 text-white" />
            </NuxtLink>
          </div>
          <div>
            <h2 class="font-semibold text-gray-900">Acme Inc</h2>
            <p class="text-xs text-gray-500">Enterprise</p>
          </div>

        </div>
        <button
          @click="toggleSidebar"
          class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu class="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <!-- Navigation -->
      <nav class="p-4 space-y-2">
        <!-- Platform Section -->
        <div class="mb-6">
          <h3
            v-if="!isCollapsed"
            class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"
          >
            Schemas
          </h3>
          <ul class="space-y-1">
            <li v-for="item in navigationItems" :key="item.id">
              <NuxtLink :to="item.url">
                <!-- Main Item -->
                <div
                  :class="[
                    'flex items-center justify-between px-3 py-2 rounded-lg transition-colors cursor-pointer',
                    isActiveTable(item.id)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100',
                  ]"
                  :title="isCollapsed ? item.title : ''"
                >
                  <div class="flex items-center space-x-3">
                    <component
                      :is="item.icon"
                      :class="[
                        'w-5 h-5 flex-shrink-0',
                        item.active ? 'text-blue-700' : 'text-gray-700',
                      ]"
                    />
                    <span v-if="!isCollapsed" class="font-medium">{{
                      item.title
                    }}</span>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Projects Section -->
        <!-- <div v-if="!isCollapsed">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Projects
            </h3>
            <button class="p-1 rounded hover:bg-gray-100">
              <Plus class="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <ul class="space-y-1">
            <li v-for="project in projects" :key="project.name">
              <div class="flex items-center justify-between group">
                <a 
                  href="#"
                  class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex-1"
                >
                  <component :is="project.icon" class="w-5 h-5 flex-shrink-0" />
                  <span class="font-medium">{{ project.name }}</span>
                </a>
                <button class="p-1 rounded hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal class="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </li>
          </ul>
        </div> -->
      </nav>

      <!-- Footer -->
       <!-- <div class=" bg-white">
        <NuxtLink :to="`/project/${route.params.id}/studio/diagram/`">
        <div 
          :class="
            'flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
            
          "
        >
          <div class="w-8 h-8   flex items-center justify-center">
            <Workflow class="w-4 h-4 " />
          </div>
          <div v-if="!isCollapsed" class="flex-1">
            <span class="font-medium text-gray-900">ER Diagram</span>
          </div>
          
        </div>
      </NuxtLink>
      </div> -->
      <div class=" bg-white">
        <NuxtLink :to="`/project/${route.params.id}/studio/editor/`">
        <div 
          :class="
            'flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
            
          "
        >
          <div class="w-8 h-8   flex items-center justify-center">
            <AppWindow class="w-4 h-4 " />
          </div>
          <div v-if="!isCollapsed" class="flex-1">
            <span class="font-medium text-gray-900">SQL Editor</span>
          </div>
          
        </div>
      </NuxtLink>
      </div>
    <!-- </div> -->

      <!-- Main Content -->
      <!-- <div class="flex-1 flex flex-col"> -->
      <!-- Header -->
      <!-- <header class="bg-white shadow-sm border-b px-6 py-4">
        <div class="flex items-center space-x-4">
          <nav class="flex items-center space-x-2 text-sm text-gray-500">
            <a href="#" class="hover:text-gray-700">Building Your Application</a>
            <span>/</span>
            <span class="text-gray-900 font-medium">Data Fetching</span>
          </nav>
        </div>
      </header> -->

      <!-- Content -->
      <!-- <main class="flex-1 p-6 bg-gray-50 align-end" >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="aspect-video bg-white rounded-xl shadow-sm">L</div>
          <div class="aspect-video bg-white rounded-xl shadow-sm">M</div>
          <div class="aspect-video bg-white rounded-xl shadow-sm">O</div>
        </div>
        <div class="bg-white rounded-xl shadow-sm h-96"></div>
      </main> -->
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User,
  Plus,
  Menu,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Folder,
  Target,
  FileText,
  Users,
  BarChart3,
  Clock,
  Database,
  Table2,
  AppWindow,
  Workflow
} from "lucide-vue-next";
const route = useRoute();
const isCollapsed = ref(false);
const expandedItems = ref(new Set(["duplicate"])); // Track which items are expanded

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleExpanded = (itemName) => {
  if (expandedItems.value.has(itemName)) {
    expandedItems.value.delete(itemName);
  } else {
    expandedItems.value.add(itemName);
  }
};
const isActiveTable = (tableName) => {
  if (route.params.schema_id) {
    return route.params.schema_id === tableName;
  }
};
const navigationItems = ref([]);

const projects = [
  { name: "Design Engineering", icon: Folder },
  { name: "Sales & Marketing", icon: Target },
  { name: "Travel", icon: Calendar },
];

onMounted(async () => {
  console.log("Fetching schemas for project:", route.params.id);
  await axios.get(`/schemas/`).then((response) => {
    console.log(response.data);
    navigationItems.value = response.data.map((schema) => ({
      id: schema.id,
      title: schema.schema_name,
      url: `/project/${route.params.id}/studio/schema/${schema.id}`,
      icon: Database,
    }));
  });
});
</script>
