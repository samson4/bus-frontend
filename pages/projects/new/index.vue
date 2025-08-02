<template>
  <VueFinalModal
    class="flex items-center justify-center p-4"
    content-class="relative mx-4 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-gray-800"
    overlay-class="bg-black/75"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="flex flex-col h-full">
      <!-- Modal Header -->
      <div class="border-b border-gray-200 p-4 dark:border-gray-700">
        <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
          Create New Project
        </h1>
      </div>

      <!-- Modal Content -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        <form @submit.prevent="createProject" class="space-y-4">
          <!-- Project Name -->
          <div>
            <label
              for="projectName"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Project Name
            </label>
            <input
              required
              id="projectName"
              v-model="projectName"
              type="text"
              placeholder="Enter project name"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label
              for="Database Type"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Database Type
            </label>
            <select
              id="dbType"
              v-model="dbType"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <!--Only Relational Database is supported-->
              <option value="postgresql">PostgreSQL</option>
              <option value="mysql">MySQL</option>
              <option value="sqlite">SQLite</option>
              <option value="MariaDB">MariaDB</option>
              <option value="MS SQL Server">MS SQL Server</option>
              <option value="Oracle">Oracle</option>
            </select>
          </div>

          <!-- Database Connection URL -->
          <div>
            <label
              for="dbConnectionUrl"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Database Connection URL
            </label>
            <input
              required
              id="dbConnectionUrl"
              v-model="dbConnectionUrl"
              type="text"
              placeholder="Enter database connection URL"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </form>
      </div>

      <!-- Modal Footer -->
      <div
        class="flex justify-end space-x-3 border-t border-gray-200 p-4 dark:border-gray-700"
      >
        <button
          type="button"
          class="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button
          :disabled="!projectName || !dbConnectionUrl"
          type="submit"
          class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="createProject"
        >
          Create Project
        </button>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import { ref, defineEmits } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const emit = defineEmits(["confirm", "close"]);
interface ProjectResponse {
  id: string;
  project_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  project: {
    id: string;
    project_name: string;
    db_connection_string: string;
    created_by: string;
  };
}
const projectName = ref(null);
// const dbConnectionUrl = ref(null);
const dbType = ref("postgresql"); // Default to MySQL
const router = useRouter();

const createProject = async () => {
  try {
    console.log("Creating project:", projectName.value, dbConnectionUrl.value);
    const response: ProjectResponse = await axios.post("/project/new", {
      project_name: projectName.value,
      db_connection_string: dbConnectionUrl.value,
    });
    console.log("Project created successfully:", response);
    if (response && response.id) {
      // Emit an event to close the modal
      emit("confirm");
    }
    // router.push(`/projects/${response.data.project_id}`);
  } catch (error) {
    console.error("Error creating project:", error);
    emit("close");
  }
};
const dbConnectionUrl = computed(() => {
  switch (dbType.value) {
    case "postgresql":
      return "postgres://user:password@localhost:5432/dbname";
    case "mysql":
      return "mysql://user:password@localhost:3306/dbname";
    case "sqlite":
      return "sqlite:///path/to/database.db";
    case "MariaDB":
      return "mariadb://user:password@localhost:3306/dbname";
    case "MS SQL Server":
      return "mssql://user:password@localhost:1433;database=dbname";
    case "Oracle":
      return "oracle://user:password@localhost:1521/dbname";
    default:
      return "";
  }
});
</script>

<style>
/* Ensure modal is centered and styled properly */
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; /* Ensure modal is above all content */
}

.confirm-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
}

.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.confirm-modal-content > * + * {
  margin: 0.5rem 0;
}

.confirm-modal-content h1 {
  font-size: 1.375rem;
}

.confirm-modal-content button {
  margin: 0.25rem 0 0 auto;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 0.5rem;
}

.dark .confirm-modal-content {
  background: #000;
  color: #fff;
}
</style>
