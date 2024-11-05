<template>
  <div>
    <MenuVue />
    <router-view/>
  </div>
</template>

<script>
//import MenuVue from '@/components/menu/MenuVue.vue'
import MenuVue from '@/components/menu/menuSide.vue'
  export default {
    components: {
      'MenuVue': MenuVue,
    },
  }
 </script>


