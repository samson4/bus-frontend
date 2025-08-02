<template>
  <div class="w-full mx-auto">
    <div v-if="route.params.tableid" class="">
      <!-- Table Header -->
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-medium text-gray-900">
              {{ route.params.tableid }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ tableDataValue.length }} rows
            </p>
          </div>
          <div class="flex items-center space-x-2">
            <button
              class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Download class="w-4 h-4 mr-2" />
              Export
            </button>
            <button
              class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus class="w-4 h-4 mr-2" />
              Add Row
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="isDataLoading && !table"
        class="flex justify-center items-center py-12"
      >
        <RefreshCw class="w-8 h-8 text-gray-400 animate-spin" />
        <span class="ml-2 text-gray-500">Loading table data...</span>
      </div>
      <!-- Table -->
      <div
        v-else-if="!isDataLoading && table && tableDataValue.length > 0"
        class="overflow-x-auto mt-4"
      >
        <table class="min-w-full divide-y divide-gray-200">
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
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <span>Actions</span>
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
              <td
                class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
              >
                <div class="flex items-center space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">
                    <Edit class="w-4 h-4" />
                  </button>
                  <button class="text-red-600 hover:text-red-900">
                    <Trash2 class="w-4 h-4" />
                  </button>
                </div>
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
            <!-- <span class="flex items-center gap-1">
                        | Go to page:
                        <input
                          type="number"
                          :value="goToPageNumber"
                          @change="handleGoToPage"
                          class="border p-1 rounded w-16"
                        />
                      </span> -->
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
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="!isDataLoading && tableDataValue.length === 0"
        class="text-center py-12"
      >
        <Database class="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h3 class="text-sm font-medium text-gray-900 mb-2">No data found</h3>
        <p class="text-sm text-gray-500 mb-4">
          This table doesn't contain any data yet.
        </p>
      </div>

      <!-- Pagination -->
      <!-- Pagination -->
      <div
        v-if="tableDataValue && tableDataValue.length > 0"
        class="px-6 py-4 border-t border-gray-200 bg-gray-50"
      >
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ startIndex + 1 }}</span> to
            <span class="font-medium">{{
              Math.min(endIndex, tableDataValue.length)
            }}</span>
            of
            <span class="font-medium">{{ tableDataValue.length }}</span>
            results
          </div>

          <div class="flex items-center space-x-1">
            <!-- First Page -->
            <button
              @click="goToPage(1)"
              class="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Go to first page"
            >
              <ChevronsLeft class="w-4 h-4" />
            </button>

            <!-- Previous Page -->
            <button
              @click="previousPage"
              class="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Go to previous page"
            >
              <ChevronLeft class="w-4 h-4" />
            </button>

            <!-- Page Numbers -->
            <div class="hidden sm:flex items-center space-x-1">
              <template
                v-for="pageNumber in visiblePageNumbers"
                :key="pageNumber"
              >
                <button
                  v-if="pageNumber !== '...'"
                  @click="goToPage(pageNumber)"
                  :class="[
                    'px-3 py-2 rounded-md text-sm font-medium',
                    currentPage === pageNumber
                      ? 'bg-blue-600 text-white border border-blue-600'
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
                  ]"
                >
                  {{ pageNumber }}
                </button>
                <span v-else class="px-2 py-2 text-gray-500">
                  {{ pageNumber }}
                </span>
              </template>
            </div>

            <!-- Current Page Indicator (Mobile) -->
            <span
              class="sm:hidden px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md"
            >
              {{ currentPage }} / {{ totalPages }}
            </span>

            <!-- Next Page -->
            <button
              @click="nextPage"
              class="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Go to next page"
            >
              <ChevronRight class="w-4 h-4" />
            </button>

            <!-- Last Page -->
            <button
              @click="goToPage(totalPages)"
              class="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Go to last page"
            >
              <ChevronsRight class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
          >
            <Table class="w-5 h-5 text-blue-600" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Total Tables</p>
            <p class="text-2xl font-semibold text-gray-900">{{}}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
          >
            <Database class="w-5 h-5 text-green-600" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Schema</p>
            <p class="text-2xl font-semibold text-gray-900">
              {{ route.params.schema_id }}
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
          >
            <Activity class="w-5 h-5 text-purple-600" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Status</p>
            <p class="text-2xl font-semibold text-gray-900">Active</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
  getPaginationRowModel,
} from "@tanstack/vue-table";
import {
  Database,
  Download,
  Edit,
  Plus,
  RefreshCw,
  Trash2,
  Activity,
  Table,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-vue-next";
import axios from "axios";
const dataLimit = ref(100);
const dataOffset = ref(0);
const pageSizes = [100, 200, 500];
const goToPageNumber = ref(1);
const currentPage = ref(1);
const totalPages = ref(1);
const startIndex = ref(0);
const endIndex = ref(0);
const isDataLoading = ref(true);
const tableDataValue = ref([]);
const columns = ref([]);
definePageMeta({
  layout: "studio",
});
const route = useRoute();
const props = defineProps({
  selectedTable: {
    type: String,
    default: "",
  },
});

const table = computed(() => {
  if (!columns.value.length || !tableDataValue.value.length) {
    return null;
  }

  return useVueTable({
    data: tableDataValue.value,
    columns: columns.value,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
  });
});
//   watch(dbTable, (table) => {
//     fetchTableData();
//   });
const fetchTableData = async () => {
  if (route.params.tableid) return;

  const columnsResponse = await axios.get(
    `/columns/?table=${route.params.tableid}&schema=${route.params.schema_id}`
  );

  columns.value = columnsResponse.map((col) => ({
    accessorKey: col.column_name,
    header: col.column_name,
    cell: ({ getValue }) => getValue() || "",
  }));
  console.log("dataResponse");
  const dataResponse = await axios.get(
    `/data/?schema=${route.params.schema_id}&table=${route.params.tableid}&limit=${dataLimit.value}&skip=${dataOffset.value}`
  );
  console.log("dataResponse", dataResponse);
  if (dataResponse.data.length === 0) {
    tableDataValue.value = [];
    isDataLoading.value = false;
    return;
  }
  tableDataValue.value = dataResponse.data;
  isDataLoading.value = false;
};
function handlePageSizeChange(e) {
  table.setPageSize(Number(e.target.value));
}

function handleGoToPage(e) {
  const page = e.target.value ? Number(e.target.value) - 1 : 0;
  goToPageNumber.value = page + 1;
  table.setPageIndex(page);
}
onMounted(() => {
  fetchTableData();
});
</script>
