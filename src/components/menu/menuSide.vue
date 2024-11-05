<template>
    <div class="hidden">
      <div class="barshow">
        <vs-navbar shadow square center-collapsed
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay='400'>
          <template #left>
              <div class="card-logo">
                <div class="image">
                  <img src="@/assets/images/logo-trans.png" class="logoimg" alt="meubalao">
                </div>
              </div>
          </template>
          <template #right>
            <div class="barshow">
              <vs-navbar-item :active="active == 'guide'" item:id="guide" @click="setFocus()">Home</vs-navbar-item>
              <vs-navbar-item :active="active == 'docs'" id="docs" @click="setFocusAbout()">Sobre</vs-navbar-item>
              <vs-navbar-item :active="active == 'Services'" id="Services" @click="setFocusServices()">Serviços</vs-navbar-item>
              <vs-navbar-item :active="active == 'license'" id="license" @click="setFocusContact()">Adaptados</vs-navbar-item>
              <vs-navbar-item :active="active == 'Depoiment'" id="Depoiment" @click="setFocusDepoiment()">Depoimentos</vs-navbar-item>
              <vs-navbar-item :active="active == 'galery'" id="galery" @click="setFocusGallery()">Galeria</vs-navbar-item>
              <vs-navbar-item href="https://www.instagram.com/meubalaoboituva/"><i  href="https://www.instagram.com/meubalaoboituva/" class='bx bxl-instagram'></i></vs-navbar-item>
              <vs-navbar-item href="https://www.facebook.com/meubalaoboituva" flat icon><i class='bx bxl-facebook'></i></vs-navbar-item>
              <vs-navbar-item href="https://wa.me/5515997150101?text=Ola" ><i class='bx bxl-whatsapp'></i></vs-navbar-item>
            </div>
          </template>
        </vs-navbar>
      </div>
     
    </div>
  </template>
<script>
import {EventBus} from "@/eventbus"
  export default {
    data:() => ({
      active: 'home',
      activeSidebar: false
    }),
    methods: {
      setFocus(){
        EventBus.$emit('focus')
      },
      setFocusAbout(){
        EventBus.$emit('focusabout')
      },
      setFocusServices(){
        EventBus.$emit('focusservices')
      },
      setFocusDepoiment(){
        EventBus.$emit('focusdepoiment')
      },
      setFocusGallery(){
        console.log("entrou aqui galeria")
        EventBus.$emit('focusgallery')
      },
      setFocusContact(){
        EventBus.$emit('focuscontact')
      },
    }
  }
  </script>

        
 <style>
 .salvo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 22vh;
    background: white;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
 }
 .balon-img{
    width: 100px;
    height: 18vh;
    display: flex;
    justify-content: center;
    align-items: center;
 }
.card-logo-app{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 32%; top: 0px; bottom: -10px;
  background: white;
  color: white;
  border-bottom-right-radius: 110%;
  border-bottom-left-radius: 110%;
}
.logoimgapp{
  position: relative;
  width: 140px !important;
  height: 140px !important; 
}
@media (max-width: 599px)
{
   .mobile-none{
      display: none;
    }
   .home-mobile{
      background:url(@/assets/images/ceu.jpg) no-repeat;
      min-height: 550px;
      background-attachment: fixed;
      background-position: 50%;
      background-repeat: no-repeat;
      width: 100%;
      background-size: cover;
    }
    .mobile-white{
      color: white !important;
    }

  .barshow{
    display: none;
    margin: 0 !important;
   }
  .vs-navbar-content{
    position: relative !important;
  }
}
@media (min-width: 600px)
{
  .topbarshowphone{
    display: none;
   }
    

.home{background:url(@/assets/images/ceu.jpg) no-repeat;}
   .vs-navbar-content{
      position: fixed !important;
    }
}

</style>
