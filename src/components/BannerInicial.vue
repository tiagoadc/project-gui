<template>
    <div>
        <section class="home home-mobile" id="home">
            <Flicking :options="{  circular: true}" :plugins="plugins">
                <div class="content banner-rotate">
                    <h3 data-aos="zoom-in" class="mobile-white"
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-delay="300">Voe com a  <span class="text-gradient">Meu Balão</span></h3>
                    <a href="https://wa.me/5515997150101?text=Ola" class="btn"
                    data-aos="zoom-in"
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-delay="300">Confira Agora!</a>
                </div>   
                <div class="content banner-rotate">
                    <h3 data-aos="zoom-in" class="mobile-white"
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-delay="300">Melhor Voo <span class="text-gradient">Boituva</span></h3>
                    <a href="https://wa.me/5515997150101?text=Ola" class="btn"
                    data-aos="zoom-in"
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-delay="300">Chame!</a>
                </div>  
                <div class="content banner-rotate">
                    <h3 data-aos="zoom-in" class="mobile-white"
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-delay="300">Você nas alturas com a <span class="text-gradient">Meu Balão</span></h3>
                    <a href="https://wa.me/5515997150101?text=Ola" class="btn"
                    data-aos="zoom-in"
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-delay="300">Chame!</a>
                </div>          
            </Flicking>
            <div 
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
            data-aos-delay="300" class="mobile-none"> 
                <div class="image image-balon">
                    <img src="@/assets/images/home-img.png" style="width: 100%; height: 100%; object-fit: cover;" alt="">
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { AutoPlay } from "@egjs/flicking-plugins";


export default {
  data: () => { return {
      plugins: [new AutoPlay({ duration: 6000, stopOnHover: false })],
    }
  }
}
</script>


