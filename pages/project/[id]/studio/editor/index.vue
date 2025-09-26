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
      <button @click="handleExecute" class="btn btn-primary mt-4 justify-end">
        Run
      </button>
    </div>
    <div v-if="table">
      <DataTable v-if="columns.length && query_result" :data="query_result" :columns="columns"/>
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
  console.log("Executing Query:", sqlCode.value);
  try {
    const response = await axios.post("/query/execute", {
      query: sqlCode.value,
    });

    console.log("Query Result:", response);
    if (response && response.data.length) {
      const columnNames = Object.keys(response.data[0]);
   

    columns.value = columnNames.map((name) => ({
        accessorKey: name, 
        header: name,      
        cell: ({ getValue }) => getValue() || "", 
      }));
      // query_result.value = response.data.map((d)=>Object.values(d))
      query_result.value = response.data;
      
    }
  } catch (error) {
    console.error("Error executing query:", error);
  }
};
</script>

<style></style>
