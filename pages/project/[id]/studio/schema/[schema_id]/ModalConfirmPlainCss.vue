<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

defineProps<{
  title?: string;
}>();

const emit = defineEmits<{
  (e: "confirm"): void;
}>();
const table = ref("users");
const engine = ref("InnoDB");
const charset = ref("utf8mb4");
const types = [
  "INT",
  "VARCHAR",
  "TEXT",
  "DATETIME",
  "BOOLEAN",
  "DECIMAL",
  "BIGINT",
  "FLOAT",
];
const cols = ref([
  { name: "id", type: "INT", len: "", def: "", null: false, ai: true },
]);

const addCol = () =>
  cols.value.push({
    name: "",
    type: "VARCHAR",
    len: "",
    def: "",
    null: true,
    ai: false,
  });
const removeCol = (i) => cols.value.splice(i, 1);

const createTable = () => {
  const tableData = {
    name: table.value,
    engine: engine.value,
    charset: charset.value,
    columns: cols.value.map((c) => ({
      name: c.name,
      type: c.type,
      length: c.len ? parseInt(c.len) : null,
      default: c.def || null,
      nullable: c.null,
      autoIncrement: c.ai,
    })),
  };

  // Call your API to create the table here
  console.log("Creating table with data:", tableData);
  emit("confirm");
};
</script>

<template>
  <VueFinalModal
    class="flex items-center justify-center p-4"
    content-class="relative mx-4 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-gray-800"
    overlay-class="bg-black/75"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="border-b border-gray-200 p-6 dark:border-gray-700">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        {{ title || "Create Database Table" }}
      </h1>
    </div>

    <div class="flex-1 overflow-y-auto p-6 space-y-6">
      <!-- Table Meta Section -->
      <div class="bg-gray-50 rounded-lg p-4 shadow-sm dark:bg-gray-700">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Table Details
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Table Name
              <input
                v-model="table"
                type="text"
                placeholder="Enter table name"
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Engine
              <select
                v-model="engine"
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              >
                <option>InnoDB</option>
                <option>MyISAM</option>
              </select>
            </label>
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Charset
              <select
                v-model="charset"
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              >
                <option>utf8mb4</option>
                <option>utf8</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <!-- Columns Section -->
      <div class="bg-gray-50 rounded-lg p-4 shadow-sm dark:bg-gray-700">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Column Definitions
        </h2>
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b">
              <th class="text-left py-2 text-xs font-semibold">Name</th>
              <th class="text-left py-2 text-xs font-semibold">Type</th>
              <th class="text-left py-2 text-xs font-semibold">Len</th>
              <th class="text-left py-2 text-xs font-semibold">Default</th>
              <th class="text-left py-2 text-xs font-semibold">Null</th>
              <th class="text-left py-2 text-xs font-semibold">
                Auto Increment
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(c, i) in cols" :key="i" class="border-b">
              <td>
                <input
                  v-model="c.name"
                  class="w-full border rounded px-2 py-1 text-xs"
                />
              </td>
              <td>
                <select
                  v-model="c.type"
                  class="w-full border rounded px-2 py-1 text-xs"
                >
                  <option v-for="t in types" :key="t">{{ t }}</option>
                </select>
              </td>
              <td>
                <input
                  v-model="c.len"
                  class="w-full border rounded px-2 py-1 text-xs"
                />
              </td>
              <td>
                <input
                  v-model="c.def"
                  class="w-full border rounded px-2 py-1 text-xs"
                />
              </td>
              <td>
                <input type="checkbox" v-model="c.null" class="mx-1" />
              </td>
              <td v-if="c.type == 'INT' || c.type == 'BIGINT'">
                <input type="checkbox" v-model="c.ai" class="mx-1" />
              </td>
              <td>
                <button
                  @click="removeCol(i)"
                  class="text-red-500 text-lg leading-none"
                >
                  ×
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          @click="addCol"
          class="mt-4 text-xs bg-blue-600 text-white px-3 py-1 rounded"
        >
          + Add Column
        </button>
      </div>
    </div>

    <!-- Footer Section -->
    <div
      class="flex justify-end space-x-3 border-t border-gray-200 p-6 dark:border-gray-700"
    >
      <button
        type="button"
        class="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        @click="$emit('close')"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click="createTable"
      >
        Create Table
      </button>
    </div>
  </VueFinalModal>
</template>

<style>
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
