<template>
   <div class="center">
          <vs-dialog blur v-model="active">
            <template #header>
              <h4 class="not-margin"><b>{{project.title}}</b></h4>
            </template>
            <img v-bind:src="project.image" class="img-fluid" alt="Responsive image" style="width: 100%; height: 400px; background-size: cover; object-fit: cover;">
            <template #footer>
              <div class="footer-dialog">
                  <h2 class="Product_Info-Title"><b>{{project.title}}</b></h2>
                  <h2 class="Product_Info-Description">Informações sobre a imagem</h2>
              </div>
            </template>
          </vs-dialog>
        </div>
</template> 
<script>
export default {
    data:() => ({
        active: false,
    })}
</script>