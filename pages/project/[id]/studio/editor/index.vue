<template>
      <div class="items-center">
    <h1>SQL Editor</h1>
        <div >
    <ClientOnly>
      <CodeMirrorEditor />

      <template #fallback>
        <p>Loading Editor...</p>
      </template>
    </ClientOnly>
  </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "studio",
});
</script>

<style>

</style>