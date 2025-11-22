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
              <!-- <option value="sqlite">SQLite</option> -->
              <option value="mariadb">MariaDB</option>
              <!-- <option value="MS SQL Server">MS SQL Server</option>
              <option value="Oracle">Oracle</option> -->
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
              id="connectionUrl"
              v-model="connectionUrl"
              type="text"
              :placeholder="dbConnectionUrl"
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
                  v-if="Loading"
                  disabled
                  type="button"
                  class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Creating...
                </button>
        <button
          v-else
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
const connectionUrl = ref("");
const router = useRouter();
const Loading = ref(false);

const createProject = async () => {
  try {
    Loading.value = true;
    console.log("Creating project:", projectName.value, connectionUrl.value);
    const response: ProjectResponse = await axios.post("/project/new", {
      project_name: projectName.value,
      db_connection_string: connectionUrl.value,
      database_dialect: dbType.value,
    });
    console.log("Project created successfully:", response);
    if (response && response.id) {
      // Emit an event to close the modal
      Loading.value = false;
      emit("confirm");
    }
    // router.push(`/projects/${response.data.project_id}`);
  } catch (error) {
    console.error("Error creating project:", error);
    Loading.value = false;
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
    case "mariadb":
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
