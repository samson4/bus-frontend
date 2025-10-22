<template>
  <div>
    <div class="flex flex-col gap-4">
      <h1>SQL Editor</h1>
      <div>
        <div class="items-center">
          <ClientOnly>
            <CodeMirrorEditor ref="editorRef" v-model="sqlCode" />

            <template #fallback>
              <p>Loading Editor...</p>
            </template>
          </ClientOnly>
        </div>
      </div>
      <div class=" flex justify-center mt-4">
        <button v-if="Loading" disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Running...
</button>
        <button
          v-else
          @click="handleExecute"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          aria-busy="isExecuting"
        >
        
          Run
        </button>
      </div>
    </div>
    <div v-if="table">
      <DataTable v-if="columns.length && query_result" :data="query_result" :columns="columns"/>
    </div>
    <div v-if="message" class="alert alert-info mt-4">
      {{ message }}
    </div>  
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
  getPaginationRowModel,
} from "@tanstack/vue-table";
import axios from "axios";
definePageMeta({
  layout: "studio",
});
const editorRef = ref(null);
const sqlCode = ref("");
const columns = ref([]);
const query_columns = ref(null);
const query_result = ref(null);
const Loading = ref(false);
const message = ref(null)

const table = computed(() => {
  if (!columns.value || !query_result.value) {
    return null;
  }

  return useVueTable({
    data: query_result.value,
    columns: columns.value,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
  });
});


const handleExecute = async () => {
  Loading.value = true;
  console.log("Executing Query:", sqlCode.value);
  try {
    const response = await axios.post("/query/execute", {
      query: sqlCode.value,
    });

    console.log("Query Result:", response);
    message.value = null
    table.value = null
    if (response && response.data && response.data.length) {
      const columnNames = Object.keys(response.data[0]);
   

    columns.value = columnNames.map((name) => ({
        accessorKey: name, 
        header: name,      
        cell: ({ getValue }) => getValue() || "", 
      }));
      // query_result.value = response.data.map((d)=>Object.values(d))
      query_result.value = response.data;
      
    }else if (response && response.message){
      message.value = response.message
    }
    Loading.value = false;
  } catch (error) {
    console.error("Error executing query:", error);
    Loading.value = false;
  }
};
</script>

<style></style>
