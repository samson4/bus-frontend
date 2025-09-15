<template>
    <div ref="editorRef" class="codemirror-container"></div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import { EditorView, basicSetup } from 'codemirror'
  import { sql, StandardSQL } from '@codemirror/lang-sql'
  
  // A ref to bind to the DOM element
  const editorRef = ref(null)
  
  // This will hold the EditorView instance
  let view = null
  
  onMounted(() => {
    // This code runs ONLY in the browser
    // after the component has been mounted.
  
    if (!editorRef.value) {

      return;
    }
  
    view = new EditorView({
      doc: "use default;\n",
      extensions: [
        basicSetup,
        sql({ dialect: StandardSQL })
      ],
      parent: editorRef.value, // Attach to our component's element
    })
  })
  
  onUnmounted(() => {
    // Clean up the editor instance when the component is destroyed
    if (view) {
      view.destroy()
    }
  })
  </script>
  
  <style>
  /* Give the editor a defined size */
  .codemirror-container .cm-editor {
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>