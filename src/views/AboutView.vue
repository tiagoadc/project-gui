<template>
  <div id="app">
    <div class="topbarshowphone">
        <div class="salvo" >
          <div>
             <div @click="setFocusGallery()">
              galery teste
            </div>
             <vs-button @click="activeSidebar = !activeSidebar" >
              <i class='bx bx-menu-alt-left'></i>
            </vs-button> 
          </div>
          <div >
             <div class="balon-img">
                <img src="@/assets/images/logo-trans.png" class="logoimgapp" alt="meubalao">
              </div>
          </div>
          <div style="display: flex; align-items: center; justify-content: center;">
             <vs-button  href="https://www.instagram.com/meubalaoboituva/"  flat icon>
              <i class='bx bxl-instagram'  style="font-size: 18px !important;"></i>
            </vs-button>
            <vs-button  href="https://www.facebook.com/meubalaoboituva" flat icon>
              <i class='bx bxl-facebook' style="font-size: 18px !important;"></i>
            </vs-button>
          </div>
        </div>
      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo><!-- ...img logo --></template>
        <div @click="setFocus()" >
          <vs-sidebar-item id="home">
            <template #icon> <i class='bx bx-home'></i></template>Home
          </vs-sidebar-item>
        </div>
        <div id="market" @click="setFocusAbout()" >
           <vs-sidebar-item>
            <template #icon  ><i class='bx bx-grid-alt' ></i></template>Sobre
          </vs-sidebar-item>
        </div>
          <div id="servicois" @click="setFocusServices()">
            <vs-sidebar-item id="servicos"  @click="setFocusServices()" >
                <template #icon ><i class='bx bxs-spreadsheet'></i></template>Serviços
            </vs-sidebar-item>
        </div>
          <vs-sidebar-item id="contact"  >
            <template #icon ><i class='bx bx-handicap'></i></template>Adaptados
          </vs-sidebar-item>
          <vs-sidebar-item id="depoiment">
            <template #icon   @click="setFocusDepoiment()" ><i class='bx bxs-message-dots'></i></template>Depoimentos
          </vs-sidebar-item>
          <vs-sidebar-item  id="galery" >
            <div @click="test_click()">
              galery teste
            </div>
            <template  #icon><i class='bx bxs-image'></i></template>Galeria
          </vs-sidebar-item>
          </vs-sidebar>
      </div>
    <div>
      <button @click="test_click" style="margin-top: 50px">click teste</button>
    </div>
     
    <button @click="scrollToElement" style="margin-top: 50px">scroll to last</button>
    <p v-for="n of 200" :key="n" :ref="n === 100 ? 'last' : undefined">
      {{ n }}
    </p>
     <p ref="teste">testeee</p>
        <button @click="scrollToElement">scroll to last</button>

     <p v-for="n of 200" :key="n" :ref="n === 300 ? 'last' : undefined">
      {{ n }}
    </p>
   
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      n: 200,
      activeSidebar: false
    }
  },
  methods: {
    scrollToElement() {
      console.log( this.$refs)
      const [el] = this.$refs.last;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },

    test_click(){
      const el = this.$refs.teste
       if (el) {
       
        el.scrollIntoView({ behavior: "smooth" });
      }
      

    },

  },

  
  
};
</script>

<style>
#app {
	font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  line-height: 2rem;
  color: #2c3e50;
  width: 800px;
  margin: 0 auto;
}
.verde{
    width: 100vw;
    height: 100vh;
    background: green;
}
.amarelo{
    width: 100vw;
    height: 100vh;
    background: yellow;
}
.vermelho{
    width: 100vw;
    height: 100vh;
    background: red;
}

.scroll-to-top {
  padding: 30px 0;
  position: absolute;
  right: 0;
}

.scroll-to-top button {
  border: none;
  background: transparent;
  cursor: pointer;
}

</style>
