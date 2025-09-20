<template>
      <div class="flex flex-col gap-4">
    <h1>SQL Editor</h1>
        <div >
          <div class="items-center">
            <ClientOnly>
      <CodeMirrorEditor v-model="query"/>

      <template #fallback>
        <p>Loading Editor...</p>
      </template>
    </ClientOnly>
          </div>
  </div>
  <button @click="handleExecute" class="btn btn-primary mt-4 justify-end">Run</button>
  </div>
      
</template>

<script setup>
import axios from 'axios';
definePageMeta({
  layout: "studio",
});
const query = ref(null)
const handleExecute = async () => {
  console.log('Executing Query:', query.value);
  try {
    const response = await axios.post('/query/execute', {"query":query});
    console.log('Query Result:', response.data);
  } catch (error) {
    console.error('Error executing query:', error);
  }
}
</script>

<style>

</style>