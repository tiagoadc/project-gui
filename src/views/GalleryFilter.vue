<template>
<div >
  <section>
	<div class="title-container">
		<div>
			<h1 class="heading">Balonismo</h1>
		</div>
		<div class="filters">
      <div class="container">
        <div class="row">
          <span class="filters_button" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">TODAS</span>
          <span class="filters_button" v-bind:class="{ active: currentFilter === 'BAL' }" v-on:click="setFilter('BAL')">Balonismo</span>
          <span class="filters_button" v-bind:class="{ active: currentFilter === 'CLI' }" v-on:click="setFilter('CLI')">Casais</span>
          <span class="filters_button" v-bind:class="{ active: currentFilter === 'PUB' }" v-on:click="setFilter('PUB')">Publicitário</span>
        </div>
      </div>
		</div>
	</div>
	<transition-group class="projects" name="projects"
          data-aos="slide-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300' >
		<div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="(project, index) in projects" :key="index">
			<vs-card type="2">
        <template #title>
          <h3>{{project.title}}</h3>
        </template>
        <template shadow #img >
          <div @click="showimg(index)">
            <img v-bind:src="project.image">
          </div>
        </template>
          <template #text>
            <p>{{project.desc}}</p>
        </template>
        <template #interactions>
          <vs-button primary shadow icon @click="showimg(index)">
            <i class='bx bx-low-vision'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary @click="showimg(index)">
            <i class='bx bx-info-circle' ></i>
          </vs-button>
        </template>
      </vs-card>
         <div class="center">
          <vs-dialog blur v-model="project.show">
            <template #header>
              <h4 class="not-margin"><b>{{project.title}}</b></h4>
            </template>
            <img v-bind:src="project.image" class="img-fluid" alt="Responsive image" style="width: 100%; height: 400px; background-size: cover; object-fit: cover;">
            <template #footer>
              <div class="footer-dialog">
                  <h2 class="Product_Info-Title"><b>{{project.title}}</b></h2>
              </div>
            </template>
          </vs-dialog>
        </div>
		</div> 

	</transition-group>
  </section>
</div>

</template>

<script>

  import imagema from "@/assets/images/imagem1.jpg"
  import imagemb from "@/assets/images/imagem2.jpg"
  import imagemc from "@/assets/images/imagem3.jpg"
  import imagemd from "@/assets/images/imagem4.jpg"
  import imageme from "@/assets/images/imagem5.jpg"
  import imagemf from "@/assets/images/imagem6.jpg"
  import imagemg from "@/assets/images/imagem7.jpg"
  import imagemh from "@/assets/images/imagem8.jpg"
  import imagemi from "@/assets/images/imagem9.jpg"
  //casais
  import casais1 from "@/assets/images/casais1.jpg"
  import casais2 from "@/assets/images/casais2.jpg"
  import casais3 from "@/assets/images/casais3.jpg"
  import casais4 from "@/assets/images/casais4.jpg"
  import casais5 from "@/assets/images/casais5.jpg"
  import casais6 from "@/assets/images/casais6.jpg"
  import casais7 from "@/assets/images/casais7.jpg"
  import casais8 from "@/assets/images/casais8.jpg"
  import casais9 from "@/assets/images/casais9.jpg"
  import casais10 from "@/assets/images/casais10.jpg"
  import casais11 from "@/assets/images/casais11.jpg"
  import casais12 from "@/assets/images/casais12.jpg"
  import pub1 from "@/assets/images/pub1.jpg"
  import pub2 from "@/assets/images/pub2.jpg"
  import pub3 from "@/assets/images/pub3.jpg"
  import pub4 from "@/assets/images/pub4.jpg"
  import pub5 from "@/assets/images/pub5.jpg"
  import pub6 from "@/assets/images/pub6.jpg"
  import pub7 from "@/assets/images/pub7.jpg"

 /* import imagemj from "@/assets/images/imagem10.jpg"
  import imagemk from "@/assets/images/imagem11.jpg"
  import imagemm from "@/assets/images/imagem12.jpg"
  import imagemn from "@/assets/images/imagem13.jpg"
  import imagemo from "@/assets/images/imagem14.jpg"
  import imagemp from "@/assets/images/imagem15.jpg"
  import imagemq from "@/assets/images/imagem16.jpg"
  import imagemr from "@/assets/images/imagem17.jpg"
  import imagems from "@/assets/images/imagem18.jpg" */
  export default {
    data:() => ({
      currentFilter: 'BAL',
      active: false,
      projects: [
        {title: "", image: imagema, category: 'BAL', show: false},
        {title: "", image: imagemb, category: 'BAL' , show: false},
        {title: "", image: imagemc, category: 'BAL' , show: false},
        {title: "", image: imagemd, category: 'BAL' , show: false},
        {title: "", image: imageme, category: 'BAL' , show: false},
        {title: "", image: imagemf, category: 'BAL' , show: false},
        {title: "", image: imagemh, category: 'BAL' , show: false},
        {title: "", image: imagemg, category: 'CLI' , show: false},
        {title: "", image: imagemi, category: 'CLI' , show: false},
        {title: "", image: casais1, category: 'CLI' , show: false},
        {title: "", image: casais2, category: 'CLI' , show: false},
        {title: "", image: casais3, category: 'CLI' , show: false},
        {title: "", image: casais4, category: 'CLI' , show: false},
        {title: "", image: casais5, category: 'CLI' , show: false},
        {title: "", image: casais6, category: 'CLI' , show: false},
        {title: "", image: casais7, category: 'CLI' , show: false},
        {title: "", image: casais8, category: 'CLI' , show: false},
        {title: "", image: casais9, category: 'CLI' , show: false},
        {title: "", image: casais10, category: 'CLI' , show: false},
        {title: "", image: casais11, category: 'CLI' , show: false},
        {title: "", image: casais12, category: 'CLI' , show: false},
        {title: "", image: pub1, category: 'PUB' , show: false},
        {title: "", image: pub2, category: 'PUB' , show: false},
        {title: "", image: pub3, category: 'PUB' , show: false},
        {title: "", image: pub4, category: 'PUB' , show: false},
        {title: "", image: pub5, category: 'PUB' , show: false},
        {title: "", image: pub6, category: 'PUB' , show: false},
        {title: "", image: pub7, category: 'PUB' , show: false},

      ]
    }),
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		},
    showimg(index){
      this.projects[index].show = !this.projects[index].show;
    }
	},
  mounted() {
  	this.previews = _.shuffle(this.previews);
  },
  }
  </script>


<style lang="scss" scoped>

html,body {
	margin:0;
	font-family: 'Dawning of a New Day', cursive;
}

.title-container {
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

.Product_Info-Title{
    color: rgb(0, 0, 0);
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    margin: 15px 10px;
    word-break: break-word;
}
.Product_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Product{
    &_Button{
            display: flex;
            align-items: center;
            background: var(--bg-color);
            justify-content: center;
            color: white;
        }
    &_Info{
        &-Price{
            color:rgb(48, 51, 60);
            margin-top: 10px;
            font-size: 16px;
            font-weight: bold;
            line-height: 120%;
        }
        &-Title{
            word-break: break-word;
        }
        &-Description{
            font-size: 16px;
            margin-top: 10px;
            font-size: 14px;
            font-weight: 500;
            line-height: 150%;
            color: rgb(127, 143, 159);
        }
    }
    &_Image{
      background: #000;
      color: white;
      border-radius: 4px;
      margin-bottom: 20px;
      transition: all .35s ease-in-out;
      width: 100%; 
      background-size: cover; 
      object-fit: cover;
      & img{
        width: 200px;
        height: 200px;
        cursor: pointer;
        &:hover{ 
          width: 120%;
          transition: all .35s ease-in-out;
        }
      }
      &:hover{ 
        width: 120%;
        transition: all .35s ease-in-out;
      }
  }
}

.title {
	font-family: 'Dawning of a New Day', cursive;
	font-size:30pt;
	font-weight:normal;
}

.project-title {
font-size:16pt	
}

.projects {
	margin-bottom:50px;
	margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.projects-enter {
	transform: scale(0.5) translatey(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}

.circle {
	text-align:center;
	position:absolute;
	bottom:-38px;
	left:40px;
	width:100px;
	height:100px;
	border-radius:50px;
/* 	border:1px solid black; */
	display:flex;
	box-shadow: 0px -4px 3px 0px #494d3257;
	justify-content:center;
	align-items:center;
	background-color:#fff;
/* 	box-shadow:0px -3px 3px #484848a6; */
}

.project {
	transition: all .35s ease-in-out;
	margin: 10px;
	border-radius:3px;
	display:flex;
	flex-direction:column;
	align-items:center;
}

.project-image-wrapper {
	position:relative;
}

.gradient-overlay {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:150px;
	opacity:0.09;
	background: 
	linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
	linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
	border-bottom-left-radius:10px;
	border-bottom-right-radius:10px;
	border-top-left-radius:3px;
	border-top-right-radius:3px;
}


</style>