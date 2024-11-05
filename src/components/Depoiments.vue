<template>
    <div>
        
    <section class="review" id="review">

        <div class="title-container">
            <h1 class="heading"> Depoimento de Clientes </h1>
        </div>
        <input type="submit" ref="depoiment"  maxlength="0"  />

        <div class="box-container">
            <Flicking :options="{  circular: true, moveType: 'freeScroll'}" :plugins="plugins">
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
                        Uma das experiência mais fantásticas e inesquecíveis da minha vida,
                        pra quem ainda não foi, acredito que não ira se arrepender.
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
                    <img src="@/assets/images/pic4.jpg"  alt="Comentário 2 Boituva - balonismo">
                    <h3>Tiago Augusto</h3>
                    <div class="stars">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                    </div>
                    <div class="comment">
                        Passeio excelente, desde o começo até o final, fiquei muito satisfeito com tudo, estão todos de parabéns!!
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
                data-aos-delay='300'
                >
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="@/assets/images/pic3.png" alt="Comentário 1 Boituva - Balonismo">
                    <h3>Nathalia Ayumi</h3>
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
                    <img src="@/assets/images/pic5.jpg"  alt="Comentário 2 Boituva - balonismo">
                    <h3>Maísa Silva </h3>
                    <div class="stars">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                    </div>
                    <div class="comment">
                        Não imaginava que gostaria tanto de passear de balão, é tudo muito incrível
                        a vista, a sensação de estar voando, maravilhoso!!
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
  data: () => { return {
      plugins: [new AutoPlay({ duration: 1000, stopOnHover: false })],
      plugins2: [new AutoPlay({ duration: 8000, stopOnHover: false })],
      plugins3: [new AutoPlay({ duration: 8000, stopOnHover: false })],
    }
  }
}
</script>



</script>