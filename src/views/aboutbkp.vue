<template>
<div>
<section class="home" id="home">
        <input type="submit" ref="home"  maxlength="0"  />
        <Flicking :options="{ circular: true, horizontal: true }" :plugins="plugins">
        <div class="content banner-rotate">
              <h3 data-aos="slide-right"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Voe com a  <span class="text-gradient">Meu Balão</span></h3>
              <a href="https://wa.me/5515997150101?text=Ola" class="btn"
              data-aos="slide-right"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Confira Agora!</a>
        </div>   
        <div class="content banner-rotate">
              <h3 data-aos="slide-right"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Melhor Voo <span class="text-gradient">Boituva</span></h3>
              <a href="https://wa.me/5515997150101?text=Ola" class="btn"
              data-aos="slide-right"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Chame!</a>
        </div>  
        <div class="content banner-rotate">
              <h3 data-aos="slide-right"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">O melhor voo <span class="text-gradient">Boituva</span></h3>
              <a href="https://wa.me/5515997150101?text=Ola" class="btn"
              data-aos="slide-right"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Chame!</a>
        </div>          
        </Flicking>
    <Flicking :options="{ circular: true, horizontal: false }" :plugins="plugins">
      <div class="image"         data-aos="slide-left"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          data-aos-delay="300">
          <img src="@/assets/images/home-img.png" alt="">
      </div>
       <div class="image"         data-aos="slide-left"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          data-aos-delay="300">
          <img src="@/assets/images/home-img.png" alt="">
      </div>
    </Flicking>


</section>
 <!--
  <div class="">
  
    <div class="teste12" id="home">
      <Flicking :options="{ circular: true }" :plugins="plugins">
      <div class="content home">
          <h3>Melhor Passeio de <span class="text-gradient">Boituva</span></h3>
          <a href="https://wa.me/5515997150101?text=Ola" class="btn">Confira Agora!</a>
          <input type="submit" ref="home"  maxlength="0"  />
      </div>
      <div class="image">
          <img src="@/assets/images/home-img.png" alt="">
      </div>
      </Flicking>
 
          <div class="image">
        <Flicking :options="{ circular: true, horizontal: false }" :plugins="plugins">
          <div class="weather-panel">
            <img src="@/assets/images/home-img.png" alt="">
            </div>
          <div class="weather-panel">
            <img src="@/assets/images/home-img.png" alt="">
          </div>
          <div class="weather-panel">
            <img src="@/assets/images/home-img.png" alt="">
          </div>
        </Flicking>
      </div>
 
    </div>
  </div> -->
         
<section class="review" id="review">

    <div class="title-container">
	    <h1 class="heading"> Depoimento de Clientes </h1>
	</div>
    <input type="submit" ref="depoiment"  maxlength="0"  />

    <div class="box-container">
        <Flicking :options="{  horizontal: true }">
          <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic1.png" alt="Comentário 1 Boituva - Balonismo">
                <h3>Suyane Francyne</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Empresa responsável, com equipamentos novos e excelentes, equipe qualificada com um diferencial em acessibilidade e respeito aos clientes.
                </div>
            </div>
        </div>
        <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'
            >
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic1.png" alt="Comentário 1 Boituva - Balonismo">
                <h3>Suyane Francyne</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Empresa responsável, com equipamentos novos e excelentes, equipe qualificada com um diferencial em acessibilidade e respeito aos clientes.
                </div>
            </div>
        </div>
        <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic2.png"  alt="Comentário 2 Boituva - balonismo">
                <h3>Arthur souza</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Experiência sem igual. Sensacional o passeio e a receptividade de todos. Recomendo. A vista é íncrivel!
                </div>
            </div>
        </div> 
        <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic2.png"  alt="Comentário 2 Boituva - balonismo">
                <h3>Arthur souza</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Experiência sem igual. Sensacional o passeio e a receptividade de todos. Recomendo. A vista é íncrivel!
                </div>
            </div>
        </div>    
           <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic2.png"  alt="Comentário 2 Boituva - balonismo">
                <h3>Arthur souza</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Experiência sem igual. Sensacional o passeio e a receptividade de todos. Recomendo. A vista é íncrivel!
                </div>
            </div>
        </div>      
      </Flicking>

       
    </div>

</section>

  </div>
</template>
<script>
import { AutoPlay } from "@egjs/flicking-plugins";
export default {
  data() {
    return {
      plugins: [new AutoPlay()]
    }
  }
}
</script>

<style lang="scss" scoped>
    .title-container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
.teste12{
  display: flex;
  align-items: center;
  justify-content: center;
}

.home{
    background:url(@/assets/images/ceu.jpg) no-repeat;
//    background-image: url(https://img.freepik.com/fotos-gratis/natureza-anoitecer-nuvem-paisagem-colorida_1203-5705.jpg?w=740&t=st=1659215220~exp=1659215820~hmac=571604d…);
    min-height: 400px;
    background-attachment: fixed;
    background-position: 50%;
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
}

input{
  -webkit-appearance: none;
  opacity: 0;
}

.icont-rest{
    position: relative;
    bottom: -1.4px;
}

</style>