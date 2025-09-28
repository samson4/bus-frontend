<template>
  <div class="flex border w-full h-screen" >
    <div class="border w-1/4 overflow-auto">
      <!-- Sidebar -->
      <div class="bg-white border-r border-gray-200 flex flex-col overflow-auto">
        <!-- Header -->
        <div class="p-6 border-b border-gray-200 sticky">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
            >
              <Database class="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 class="text-lg font-semibold text-gray-900">
                Database Schema
              </h1>
              <p class="text-sm text-gray-500">{{ route.params.schema_id }}</p>
            </div>
          </div>

          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center space-x-3">
              <button
                @click="open"
                class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus class="w-4 h-4 mr-2" />
                New Table
              </button>
              <button
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Settings class="w-4 h-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
        </div>

        <!-- Search -->
        <div class="p-4 sticky">
          <div class="relative">
            <Search
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search tables..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        <!-- Tables List -->
        <div class="flex-1 overflow-auto">
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <h3
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Tables ({{ tables.length }})
              </h3>
              <button
                @click="refreshTables"
                class="p-1 rounded hover:bg-gray-100 transition-colors"
                :disabled="isLoading"
              >
                <RefreshCw
                  :class="[
                    'w-4 h-4 text-gray-400',
                    isLoading && 'animate-spin',
                  ]"
                />
              </button>
            </div>

            <!-- Loading State -->
            <div v-if="isLoading" class="space-y-2">
              <div v-for="i in 5" :key="i" class="animate-pulse">
                <div class="flex items-center space-x-3 p-3">
                  <div class="w-5 h-5 bg-gray-200 rounded"></div>
                  <div class="h-4 bg-gray-200 rounded flex-1"></div>
                </div>
              </div>
            </div>

            <!-- Tables -->
            <ul v-else class="space-y-1">
              <li v-for="table in tables" :key="table.id">
                <!-- <NuxtLink  class="group block"> -->
                <div
                  @click="selectTable(table)"
                  :key="table.id"
                  :class="[
                    'flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer',
                    isActiveTable(table.id)
                      ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                  ]"
                >
                  <div class="flex items-center space-x-3 min-w-0 flex-1">
                    <div
                      :class="[
                        'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                        isActiveTable(table.id)
                          ? 'bg-blue-100'
                          : 'bg-gray-100 group-hover:bg-gray-200',
                      ]"
                    >
                      <Table
                        :class="[
                          'w-4 h-4',
                          isActiveTable(table.id)
                            ? 'text-blue-600'
                            : 'text-gray-600',
                        ]"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p
                        :class="[
                          'font-medium truncate',
                          isActiveTable(table.id)
                            ? 'text-blue-900'
                            : 'text-gray-900',
                        ]"
                      >
                        {{ table.table_name }}
                      </p>
                      <p class="text-xs text-gray-500 truncate">
                        {{ getTableType(table.table_name) }}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    :class="[
                      'w-4 h-4 transition-transform group-hover:translate-x-1',
                      isActiveTable(table.id)
                        ? 'text-blue-600'
                        : 'text-gray-400',
                    ]"
                  />
                </div>
                <!-- </NuxtLink> -->
              </li>
            </ul>

            <!-- Empty State -->
            <div
              v-if="!isLoading && tables.length === 0"
              class="text-center py-12"
            >
              <Database class="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 class="text-sm font-medium text-gray-900 mb-2">
                No tables found
              </h3>
              <p class="text-sm text-gray-500">
                {{
                  searchQuery
                    ? "Try adjusting your search terms."
                    : "This schema appears to be empty."
                }}
              </p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-gray-200 bg-gray-50">
          <div class="flex items-center justify-between text-xs text-gray-500">
            <span>Schema: {{ route.params.schema_id }}</span>
            <span>{{ totalTables }} tables</span>
          </div>
          <div class="mt-2">
            <span class="text-gray-500">
              Page {{ tablesPage }} of
              {{ Math.ceil(totalTables / tablesLimit) }}</span
            >
          </div>
          <div class="mt-2">
            <!-- pagination buttons -->
            <button
              @click="tablesPage--"
              :disabled="tablesPage <= 1"
              class="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              @click="tablesPage++"
              :disabled="tablesPage >= Math.ceil(totalTables / tablesLimit)"
              class="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="border w-3/4 flex flex-col overflow-auto">
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col">
        <!-- Header -->

        <!-- Content -->
        <main class="flex-1 p-6">
          <div class="w-full mx-auto">
            <!-- Welcome Card -->
            <!-- <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database class="w-8 h-8 text-blue-600" />
            </div>
            <h2 class="text-xl font-semibold text-gray-900 mb-2">
              Welcome to Schema Explorer
            </h2>
            <p class="text-gray-600 mb-6 max-w-md mx-auto">
              Select a table from the sidebar to view its structure, data, and manage its properties.
            </p>
            <div class="flex items-center justify-center space-x-4">
              <button class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <FileText class="w-4 h-4 mr-2" />
                Documentation
              </button>
              <button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                <Zap class="w-4 h-4 mr-2" />
                Quick Start
              </button>
            </div>
          </div> -->

            <div v-if="selectedTable" class="">
              <!-- Table Header -->
              <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-lg font-medium text-gray-900">
                      {{ selectedTable.name }}
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
                v-if="isDataLoading"
                class="flex justify-center items-center py-12"
              >
                <RefreshCw class="w-8 h-8 text-gray-400 animate-spin" />
                <span class="ml-2 text-gray-500">Loading table data...</span>
              </div>
              <!-- Table -->
              <div
                v-else-if="!isDataLoading && table && tableDataValue.length > 0"
                class=" mt-4"
              >
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
                          <button
                            @click="click"
                            class="text-blue-600 hover:text-blue-900"
                          >
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
                <!-- <div> -->
                  <!-- <div class="flex items-center gap-2">
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
                      @click="
                        () => table.setPageIndex(table.getPageCount() - 1)
                      "
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
                      :value="pageSizes[0]"
                      v-model="pagesize"
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
                  </div> -->
                  <!-- Pagination -->
                  <!-- Pagination -->
                  <div class="px-6 py-4 border-t border-gray-200 bg-gray-50 mt-4 position-fixed w-auto bottom-0">
                    <div
                      class="flex flex-col sm:flex-row items-center justify-between gap-4"
                    >
                      <div class="text-sm text-gray-700">
                        Page
                        <span class="font-medium">{{ dataPage }}</span>
                        of
                        <span class="font-medium">{{
                          Math.ceil(totalData / dataLimit)
                        }}</span>
                      </div>

                      <div class="flex items-center space-x-1">
                        <!-- First Page -->
                        <button
                          @click="dataPage = 1"
                          :disabled="dataPage === 1"
                          class="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Go to first page"
                        >
                          <ChevronsLeft class="w-4 h-4" />
                        </button>

                        <!-- Previous Page -->
                        <button
                          @click="dataPage--"
                          :disabled="dataPage === 1"
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
                          @click="dataPage++"
                          :disabled="
                            dataPage === Math.ceil(totalData / dataLimit)
                          "
                          class="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Go to next page"
                        >
                          <ChevronRight class="w-4 h-4" />
                        </button>

                        <!-- Last Page -->
                        <button
                          @click="dataPage = Math.ceil(totalData / dataLimit)"
                          :disabled="
                            dataPage === Math.ceil(totalData / dataLimit)
                          "
                          class="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Go to last page"
                        >
                          <ChevronsRight class="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                <!-- </div> -->
              </div>

              <!-- Empty State -->
              <div
                v-if="!isDataLoading && tableDataValue.length === 0"
                class="text-center py-12"
              >
                <Database class="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 class="text-sm font-medium text-gray-900 mb-2">
                  No data found
                </h3>
                <p class="text-sm text-gray-500 mb-4">
                  This table doesn't contain any data yet.
                </p>
              </div>
            </div>

            <!-- Stats Cards -->
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div
                class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div class="flex items-center">
                  <div
                    class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                  >
                    <Table class="w-5 h-5 text-blue-600" />
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">
                      Total Tables
                    </p>
                    <p class="text-2xl font-semibold text-gray-900">{{}}</p>
                  </div>
                </div>
              </div>
              <div
                class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
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

              <div
                class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
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
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import {
  Database,
  Search,
  RefreshCw,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  Plus,
  Settings,
  FileText,
  Zap,
  Activity,
  Table,
  Edit,
  Trash2,
  Download,
} from "lucide-vue-next";

import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
  getPaginationRowModel,
} from "@tanstack/vue-table";
import { definePageMeta, useRoute } from "#imports";
import { ModalsContainer, useModal } from "vue-final-modal";
import ModalConfirmPlainCss from "./ModalConfirmPlainCss.vue";

definePageMeta({
  layout: "studio",
  middleware: ["auth"],
});
const INITIAL_PAGE_INDEX = 0;
const tables = ref([]);
const tableDataValue = ref([]);
const tableDataHeaders = ref([]);
const isLoading = ref(true);
const isDataLoading = ref(false);
const searchQuery = ref("");
const selectedTable = ref(null);
const route = useRoute();
const router = useRouter();
const columns = ref([]);
const pagesize = ref(100);
const pageSizes = [100, 200, 500];
const totalData = ref(0);
const dataPage = ref(1);
const totalTables = ref(0);
const tablesPage = ref(1);
const dataItemsPerPage = ref(100);
const tablesLimit = ref(100);
const dataLimit = ref(100);
const dataOffset = ref(0);
const offset = ref(0);
const goToPageNumber = ref(INITIAL_PAGE_INDEX + 1);

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

// add a watcher for tablesPage value change and fetch tables again
watch(tablesPage, (newPage) => {
  if (newPage > 0) {
    offset.value = (newPage - 1) * tablesLimit.value;
    console.log(
      "Fetching tables with offset:",
      newPage,
      tablesLimit.value,
      offset.value
    );
    fetchTables(offset.value);
  }
});

watch(pagesize, (newPageSize) => {
  if (newPageSize > 0) {
    tablesLimit.value = newPageSize;
    offset.value = (tablesPage.value - 1) * tablesLimit.value;
    console.log(
      "Fetching tables with new page size:",
      newPageSize,
      offset.value
    );
    fetchTableData(offset.value);
  }
});
watch(dataPage, (newPage) => {
  console.log("Page size changed:", newPage);
  if (newPage > 0) {
    dataOffset.value = (newPage - 1) * dataLimit.value;
    console.log(
      "Fetching table data with offset:",
      newPage,
      dataLimit.value,
      dataOffset.value
    );
    fetchTableData(selectedTable.value);
  }
});
watch(searchQuery, (newQuery) => {
  fetchTables();
});

const { open, close } = useModal({
  component: ModalConfirmPlainCss,
  attrs: {
    title: "Create Table",
    onConfirm() {
      close();
    },
    onClose() {
      close();
    },
  },
});

const isActiveTable = (table) => {
  return selectedTable.value && selectedTable.value.id === table;
};

const getTableType = (tableName) => {
  if (tableName.includes("_log") || tableName.includes("_audit"))
    return "Log Table";
  if (tableName.includes("_view")) return "View";
  if (tableName.includes("_temp")) return "Temporary";
  return "Data Table";
};

const fetchTables = async () => {
  try {
    isLoading.value = true;
    const schema_id = route.params.schema_id;
    const tablesResult = await axios.get(
      `tables/?schema_id=${schema_id}&search_query=${searchQuery.value}&limit=${tablesLimit.value}&skip=${offset.value}`
    );

    tables.value = tablesResult.data.map((table) => ({
      id: table.id,
      url: `/studio/schema/${schema_id}/table/${table.id}`,
      table_name: table.table_name,
      icon: Table,
    }));
    totalTables.value = tablesResult.total;
    tablesPage.value = tablesResult.page;
    tablesLimit.value = tablesResult.limit;
  } catch (error) {
    console.error("Error fetching tables:", error);
  } finally {
    isLoading.value = false;
  }
};

const selectTable = async (table) => {
  isDataLoading.value = true;
  try {
    selectedTable.value = table;
    const columnsResponse = await axios.get(
      `/columns/?table_id=${table.id}&schema=${route.params.schema_id}`
    );

    columns.value = columnsResponse.map((col) => ({
      accessorKey: col.column_name,
      header: col.column_name,
      cell: ({ getValue }) => getValue() || "",
    }));
    fetchTableData(table);
  } catch (error) {
    console.error("Error selecting table:", error);
    isDataLoading.value = false;
  }
};

const fetchTableData = async (table) => {
  isDataLoading.value = true;
  const dataResponse = await axios.get(
    `/data/?schema=${route.params.schema_id}&table=${table.table_name}&limit=${dataLimit.value}&skip=${dataOffset.value}`
  );

  if (dataResponse.data.length === 0) {
    tableDataValue.value = [];
    isDataLoading.value = false;
    return;
  }
  totalData.value = dataResponse.total;
  dataPage.value = dataResponse.page;
  dataLimit.value = dataResponse.limit;
  tableDataValue.value = dataResponse.data;
  isDataLoading.value = false;
};
// Refresh tables
const refreshTables = () => {
  fetchTables();
};

onMounted(() => {
  fetchTables();
});
</script>
