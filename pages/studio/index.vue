<script setup lang="ts">
definePageMeta({
  layout: "studio",
});
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
  getPaginationRowModel,
} from "@tanstack/vue-table";
import { ref } from "vue";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "visits",
    header: "Visits",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
];

const data = ref(defaultData);

const rerender = () => {
  data.value = defaultData;
};

const table = useVueTable({
  get data() {
    return data.value;
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
});
</script>

<template>
  <div class="p-2">
    <table>
      <thead>
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colSpan="header.colSpan"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <div class="flex items-center gap-2">
        <button
          class="border rounded p-1"
          @click="() => table.setPageIndex(0)"
          :disabled="!table.getCanPreviousPage()"
        >
          «
        </button>
        <button
          class="border rounded p-1"
          @click="() => table.previousPage()"
          :disabled="!table.getCanPreviousPage()"
        >
          ‹
        </button>
        <button
          class="border rounded p-1"
          @click="() => table.nextPage()"
          :disabled="!table.getCanNextPage()"
        >
          ›
        </button>
        <button
          class="border rounded p-1"
          @click="() => table.setPageIndex(table.getPageCount() - 1)"
          :disabled="!table.getCanNextPage()"
        >
          »
        </button>
        <span class="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {{ table.getState().pagination.pageIndex + 1 }} of
            {{ table.getPageCount() }}
          </strong>
        </span>
        <span class="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            :value="goToPageNumber"
            @change="handleGoToPage"
            class="border p-1 rounded w-16"
          />
        </span>
        <select
          :value="table.getState().pagination.pageSize"
          @change="handlePageSizeChange"
        >
          <option
            :key="pageSize"
            :value="pageSize"
            v-for="pageSize in pageSizes"
          >
            Show {{ pageSize }}
          </option>
        </select>
      </div>
      <div>{{ table.getRowModel().rows.length }} Rows</div>
      <pre>{{ JSON.stringify(table.getState().pagination, null, 2) }}</pre>
    </div>
    <div class="h-4" />
    <button @click="rerender" class="border p-2">Rerender</button>
  </div>
</template>

<style></style>
