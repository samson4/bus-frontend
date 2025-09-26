<template>
    <div>
  <table class="min-w-full divide-y divide-gray-200 overflow-x-auto mt-4">
                  <thead class="bg-gray-50">
                    <tr
                      v-for="headerGroup in table.getHeaderGroups()"
                      :key="headerGroup.id"
                    >
                      <th
                        v-for="header in headerGroup.headers"
                        :key="header.id"
                        :colSpan="header.colSpan"
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <!-- <div class="flex items-center space-x-1">
                          <span class="font-bold">{{ header }}</span>
                          <button class="text-gray-400 hover:text-gray-600">
                            <ArrowUpDown class="w-3 h-3" />
                          </button>
                        </div> -->
                        <FlexRender
                          v-if="!header.isPlaceholder"
                          :render="header.column.columnDef.header"
                          :props="header.getContext()"
                        />
                      </th>
                      
                    </tr>
                  </thead>

                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr
                      v-for="row in table.getRowModel().rows"
                      :key="row.id"
                      class="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td
                        v-for="cell in row.getVisibleCells()"
                        :key="cell.id"
                        class="px-6 py-4 whitespace-nowrap text-gray-900 border-t border-gray-200 overflow-y-auto max-w-96 max-h-48"
                      >
                        <!-- <div class="text-sm">
                          {{ cell }}
                        </div> -->
                        <FlexRender
                          :render="cell.column.columnDef.cell"
                          :props="cell.getContext()"
                        />
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
      </div>
    
</template>

<script setup>
import { defineProps, computed } from 'vue';
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
  getPaginationRowModel,
} from "@tanstack/vue-table";
import { data } from 'autoprefixer';
const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    columns: {
        type: Array,
        required: true
    }
});

const table = computed(() => {
  if (!props.columns || !props.data) {
    return null;
  }

  return useVueTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
  });
});
</script>

<style>

</style>