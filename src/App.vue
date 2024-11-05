<template>
  <div id="app">
  <ComponentePrincipal /> 
 <!--  <ComponenteWrapper /> -->  
   
   </div>
</template>

<script>
import ComponentePrincipal from '@/ComponentePrincipal.vue'
//import ComponenteWrapper from '@/ComponenteWrapper.vue'

  export default {
    name: 'App',
    components: {
      'ComponentePrincipal': ComponentePrincipal
  //  'ComponenteWrapper': ComponenteWrapper,
     },
  }
  
 </script>