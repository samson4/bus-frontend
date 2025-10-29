<template>
    
  <div
            class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
          >
           <NuxtLink :to="`/projects`">
            <Home class="w-4 h-4 text-white" />
            </NuxtLink>
          </div>
          <div  v-if="userproject && userproject.project" class="flex flex-col">
            <h2 class="font-semibold text-gray-900">{{ userproject.project.project_name }}</h2>
            <p class="text-xs text-gray-500">Enterprise</p>
          </div>
         
</template>

<script setup>
import axios from 'axios';
import { Home } from 'lucide-vue-next';

const route = useRoute();
const props = defineProps({
  id: String,

}); 

//data

const userproject = ref()

//methods
const projects =  ()=> {
   
   if(props.id){
     axios.get(`/project/${props.id}`).then((response) => {
    userproject.value = response

});
}
}

//hoooks
onMounted( () => {
  projects();

});
</script>

<style>

</style>