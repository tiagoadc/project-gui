<template>
<div>
<section class="pricing" id="pricing">
    <div class="title-container">
        <h1 class="heading"> Nossos Passeios </h1>
    </div>
    <div class="box-container">
        <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'>
            <div class="box-img">
                <img src="@/assets/images/vooemgrupo.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">
            </div>
            <h3 class="title">Voo Coletivo</h3>
            <ul>
                <li> <i class="bx bx-check"></i> <b>Até 24 pessoas no Balão </b></li>
                <li> <i class="bx bx-time"></i> <b>CHECK-IN 5:00 às 5:30</b></li>
                <li> <i class="bx bx-time"></i> Voo de 40 min à uma hora </li>
                <li> <i class="bx bx-check"></i> Desjejum</li>
                <li> <i class="bx bx-check"></i> Brinde de espumante</li>
                <li> <i class="bx bx-check"></i> Café da manhã Completo</li>
                <li> <i class="bx bx-check"></i> Translado de vans entre pontos de encontro</li>
                <li> <i class="bx bx-check"></i> Fotos e vídeos do Passeio</li>
                <li> <i class="bx bx-check"></i> Uma linda taça personalizada</li>
            </ul>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn">Confira agora</a>
        </div>
        <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'>
            <div class="box-img">
                  <img src="@/assets/images/voopublicitario.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">">
            </div>
            <h3 class="title">Voo publicitário</h3>
            <ul>
                <li> <i class="bx bx-checks"></i> <b>O céu é o limite para sua marca. </b></li>
                <li> <i class="bx bx-check"></i> Tenha um balão personalizado com sua marca e promova eventos corporativos incluindo voos cativos (voos experimentais onde o balão sobe até +- 30m de altura). </li>
            </ul>
            <div class="">
                        <a href="https://wa.me/5515997150101?text=Ola" class="btn flex center">Confira agora</a></div>
            </div>  
        <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'
        >
            <div class="box-img">
                    <img src="@/assets/images/voocasal.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">
            </div>
            <h3 class="title">Voo Exclusivo</h3>
             <ul>
                <li> <i class="bx bx-check"></i> <b>Exclusivo para Casal ou Família</b></li>
                <li> <i class="bx bx-time"></i> <b>CHECK-IN 5:00 às 5:30</b></li>
                <li> <i class="bx bx-time"></i> Voo de 40 min à uma hora </li>
                <li> <i class="bx bx-check"></i> Desjejum</li>
                <li> <i class="bx bx-check"></i> Brinde com espumante</li>
                <li> <i class="bx bx-check"></i> Café da manhã Completo</li>
                <li> <i class="bx bx-check"></i> Translado de vans entre pontos de encontro</li>
                <li> <i class="bx bx-check"></i> Fotos e vídeos do Passeio</li>
                <li> <i class="bx bx-check"></i> Uma linda taça personalizada</li>
            </ul>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn " style="margin: 0;">Confira agora</a>
        </div>
    </div>
    </section>
  </div>
</template>
<script>
import { AutoPlay } from "@egjs/flicking-plugins";


export default {
  data: () => { return {
      plugins1: [new AutoPlay({ duration: 8000, stopOnHover: false })],
      plugins2: [new AutoPlay({ duration: 8000, stopOnHover: false })],
      plugins3: [new AutoPlay({ duration: 8000, stopOnHover: false })],
    }
  }
}
</script>


