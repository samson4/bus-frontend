<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div
                class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
              >
                <FolderOpen class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <h1 class="text-xl font-semibold text-gray-900">My Projects</h1>
              <p class="text-sm text-gray-500">
                Manage and access your database projects
              </p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="refreshProjects"
              class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              :disabled="isLoading"
            >
              <RefreshCw
                :class="['w-4 h-4 mr-2', isLoading && 'animate-spin']"
              />
              Refresh
            </button>
            <button
              @click="open"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus class="w-4 h-4 mr-2" />
              New Project
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Search and Filter -->
      <div class="mb-6">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div class="relative flex-1 max-w-md">
            <Search
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search projects..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <div class="flex items-center space-x-2">
            <select
              v-model="sortBy"
              class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="created">Sort by Created Date</option>
              <option value="updated">Sort by Updated Date</option>
            </select>
            <button
              @click="toggleSortOrder"
              class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
            >
              <ArrowUpDown class="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div
        v-if="isLoading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div v-for="i in 6" :key="i" class="animate-pulse">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
              <div class="h-6 w-6 bg-gray-200 rounded"></div>
            </div>
            <div class="space-y-3">
              <div class="h-3 bg-gray-200 rounded w-3/4"></div>
              <div class="h-3 bg-gray-200 rounded w-1/2"></div>
              <div class="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div
        v-else-if="filteredProjects.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer group"
         
        >
          <div class="p-6">
            <!-- Project Header -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center"
                >
                  <Database class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3
                    class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                  >
                    {{ project.project.project_name }}
                  </h3>
                  <p class="text-xs text-gray-500">
                    ID: {{ project.project.id.substring(0, 8) }}...
                  </p>
                </div>
              </div>
              <div class="relative">
                <button
                  @click.stop="toggleProjectMenu(project.id)"
                  class="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <MoreVertical class="w-4 h-4 text-gray-400" />
                </button>
                <!-- Dropdown Menu -->
                <div
                  v-if="activeMenu === project.id"
                  class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10"
                >
                  <div class="py-1">
                    <button
                      class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Edit class="w-4 h-4 inline mr-2" />
                      Edit Project
                    </button>
                    <button
                      class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Copy class="w-4 h-4 inline mr-2" />
                      Duplicate
                    </button>
                    <button
                      class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 class="w-4 h-4 inline mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Details -->
            <div class="space-y-3">
              <!-- Database Connection -->
              <div class="flex items-center space-x-2">
                <Server class="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div class="min-w-0 flex-1">
                  <p class="text-xs text-gray-500 mb-1">Database Connection</p>
                  <p
                    class="text-sm text-gray-900 font-mono bg-gray-50 px-2 py-1 rounded truncate"
                  >
                    {{ project.project.db_connection_string }}
                  </p>
                </div>
              </div>

              <!-- Created Date -->
              <div class="flex items-center space-x-2">
                <Calendar class="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div>
                  <p class="text-xs text-gray-500 mb-1">Created</p>
                  <p class="text-sm text-gray-900">
                    {{ formatDate(project.created_at) }}
                  </p>
                </div>
              </div>

              <!-- Last Updated -->
              <div class="flex items-center space-x-2">
                <Clock class="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div>
                  <p class="text-xs text-gray-500 mb-1">Last Updated</p>
                  <p class="text-sm text-gray-900">
                    {{ formatDate(project.updated_at) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Project Actions -->
            <div class="mt-6 pt-4 border-t border-gray-100">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    <div
                      class="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"
                    ></div>
                    Active
                  </span>
                </div>
                <button
                  @click="openProject(project)"
                  class="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Open Project
                  <ExternalLink class="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <div
          class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <FolderOpen class="w-12 h-12 text-gray-400" />
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          {{ searchQuery ? "No projects found" : "No projects yet" }}
        </h3>
        <p class="text-gray-500 mb-6 max-w-md mx-auto">
          {{
            searchQuery
              ? "Try adjusting your search terms or filters."
              : "Get started by creating your first database project."
          }}
        </p>
        <button
        @click="open"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus class="w-4 h-4 mr-2" />
          Create New Project
        </button>
      </div>
    </div>
  </div>
  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ModalsContainer class="z-modal" />
      <!-- Other content -->
    </div>
  
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import NewProject from "@/pages/projects/new/index.vue";
import { ModalsContainer, useModal } from "vue-final-modal";
import axios from "axios";
import {
  FolderOpen,
  Database,
  Clock,
  Activity,
  Plus,
  RefreshCw,
  Search,
  ArrowUpDown,
  MoreVertical,
  Edit,
  Copy,
  Trash2,
  Server,
  Calendar,
  ExternalLink,
} from "lucide-vue-next";

// Reactive data
const projects = ref([]);
const isLoading = ref(true);
const searchQuery = ref("");
const sortBy = ref("name");
const sortOrder = ref("asc");
const activeMenu = ref(null);
const router = useRouter()
// Computed properties
const filteredProjects = computed(() => {
  let filtered = projects.value;

  // Apply search filter
  if (searchQuery.value) {
    filtered = filtered.filter(
      (project) =>
        project.project.project_name
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) ||
        project.project.db_connection_string
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    );
  }

  // Apply sorting
  filtered.sort((a, b) => {
    let aValue, bValue;

    switch (sortBy.value) {
      case "name":
        aValue = a.project.project_name.toLowerCase();
        bValue = b.project.project_name.toLowerCase();
        break;
      case "created":
        aValue = new Date(a.created_at);
        bValue = new Date(b.created_at);
        break;
      case "updated":
        aValue = new Date(a.updated_at);
        bValue = new Date(b.updated_at);
        break;
      default:
        return 0;
    }

    if (sortOrder.value === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return filtered;
});

// Methods
const fetchProjects = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get("/projects");
    projects.value = response;
  } catch (error) {
    console.error("Error fetching projects:", error);
    // You might want to show an error toast here
  } finally {
    isLoading.value = false;
  }
};

const refreshProjects = () => {
  fetchProjects();
};


const { open, close } = useModal({
  component: NewProject,
  attrs: {
    title: "Create Project",
    onConfirm() {
      console.log("Modal confirmed");
      close();
      fetchProjects(); // Refresh projects after creation
    },
    onClose() {
      close();
    }
    }
  },
); 

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
};

const toggleProjectMenu = (projectId) => {
  activeMenu.value = activeMenu.value === projectId ? null : projectId;
};

const openProject = async (project) => {
  // Navigate to project detail page
  // You can use your router here
  console.log("Opening project:", project.project.project_name);
  const response_token = await axios.get('/project/select/'+ project.project.id);
 if(response_token.project_token){
   localStorage.setItem('project_token', response_token.project_token);
    router.push(`/project/${project.project.id}/studio`);
  }
  else{
   console.error("Error selecting project:", response_token);
 }
  
  
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest(".relative")) {
    activeMenu.value = null;
  }
};

onMounted(() => {
  fetchProjects();
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
