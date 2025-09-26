<template>
  <div ref="editorRef" class="codemirror-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { sql, StandardSQL } from '@codemirror/lang-sql'

// This creates a two-way binding (v-model) for the component.
// Whatever value is passed via v-model from the parent will be here.
const model = defineModel()

const editorRef = ref(null)
let view = null

onMounted(() => {
  if (!editorRef.value) {
    return;
  }

  // Create the listener extension
  const updateListener = EditorView.updateListener.of((update) => {
    // Check if the document content has changed
    if (update.docChanged) {
      // Get the new content and update the v-model
      const newContent = update.state.doc.toString();
      model.value = newContent;
    }
  });

  view = new EditorView({
    // Use the initial v-model value as the starting document
    doc: model.value || '',
    extensions: [
      basicSetup,
      sql({ dialect: StandardSQL }),
      // Add the listener here
      updateListener
    ],
    parent: editorRef.value,
  })
})

onUnmounted(() => {
  if (view) {
    view.destroy()
  }
})
</script>

<style>
.codemirror-container .cm-editor {
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>