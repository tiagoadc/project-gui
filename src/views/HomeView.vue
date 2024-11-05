<template>
    <div>
      
        <input type="submit" ref="home"  maxlength="0"  />
        <BannerInicial />
        <button  @click="test_click">scroll to last</button>

        <input type="submit" ref="about"  maxlength="0"  />
        <About />
        <input type="submit" ref="services"  maxlength="0"  />
        <NossosPasseios />
        <input type="submit" ref="Contact"  maxlength="0"  />
        <PVCSection />
     <!--    <Services />  -->
        <input type="submit" ref="teste"  maxlength="0"  />
        <Depoiments />
        <p v-for="n of 1" :key="n" :ref="n === 1 ? 'last' : undefined" style="color: transparent; margin: 0;">{{ n }}</p>
        <input type="submit" ref="gallery"  maxlength="0"  />
        <GalleryFilter />
        <FooterSection  />
    </div>
</template>

<script>
import GalleryFilter from '@/views/GalleryFilter.vue'
import NossosPasseios from '@/components/NossosPasseios.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Depoiments from '@/components/Depoiments.vue'
import BannerInicial from '@/components/BannerInicial.vue'
import FooterSection from '@/components/Footer.vue'
import PVCSection from '@/components/PVCSection.vue'
import {EventBus} from "@/eventbus"
import { AutoPlay } from "@egjs/flicking-plugins";


  export default {
    data:() => ({
        options: [],
        plugins: [new AutoPlay()],
        active: false
    }),
    components: {
      'GalleryFilter': GalleryFilter,
      'NossosPasseios': NossosPasseios,
      'About': About,
      'Services': Services,
      'Depoiments': Depoiments,
      'BannerInicial': BannerInicial,
      'FooterSection': FooterSection,
      'PVCSection': PVCSection,
     },
    methods: {
      test_click(){
      const el = this.$refs.teste
       if (el) {       
        el.scrollIntoView({ behavior: "smooth" });
      }      
    },

      setFocus: function(){
        this.$refs.home.focus();
      },
      scrollToElement() {
        const [el] = this.$refs.last;
        console.log("aqui amigo > ", this.$refs.last)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          console.log("aqui amigo > ", this.$refs)
        }
      },
      setFocusAbout(){
      //  this.$refs.about.focus();
      },
      setFocusServices: function(){
        this.$refs.services.focus();
        console.log('tu entro aq rapa');
      },
      setFocusDepoiment: function(){
        this.$refs.Depoiments.focus();
      },
      setFocusGallery: function(){
        //this.$refs.gallery.focus();
       this.test_click()
      
      },
      setFocusContact: function(){
        this.$refs.Contact.focus();
      },
    },
    created(){
      EventBus.$on('focus', () => {this.setFocus()}),
      EventBus.$on('focusabout', () => {this.setFocusAbout()}),
      EventBus.$on('focusservices', () => {this.setFocusServices()}),
      EventBus.$on('focusdepoiment', () => {this.setFocusDepoiment()}),
      EventBus.$on('focusgallery', () => {this.setFocusGallery()}),
      EventBus.$on('focuscontact', () => {this.setFocusContact()})
    },
  }
 </script>
