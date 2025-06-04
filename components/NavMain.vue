<template>
  <SidebarGroup>
    <SidebarGroupLabel>Schemas</SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
        v-for="item in items"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger as-child @click="fetchTables(item.title)">
            <SidebarMenuButton :tooltip="item.title" :to="item.url">
              <component :is="item.icon" v-if="item.icon" />
              <span>{{ item.title }}</span>
              <ChevronRight
                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent class="text-sm">
            <SidebarMenuSub>
              <SidebarMenuSubItem v-for="subItem in subItems" :key="subItem.id">
                <SidebarMenuSubButton as-child>
                  <component :is="subItem.icon" v-if="subItem.icon" />
                  <span>{{ subItem.table_name }}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>
</template>

<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronRight, type LucideIcon } from "lucide-vue-next";
import axios from "axios";
import { ref } from "vue";
defineProps<{
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}>();

const subItems = ref([]);

const fetchTables = async (schema: string) => {
  const tables = await axios.get(`tables/?schema=${schema}`);
  console.log(tables);
  subItems.value = tables;
};
</script>
