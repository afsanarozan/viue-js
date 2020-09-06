<template>
    <div id="app">
      <header><!-- Navbar -->
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar  navbar-light col-md-8  food">
                    <span style="font-size: 2em; position:absolute; left: 20px; cursor: pointer; ">
                        <i class="fas fa-bars"></i>
                    </span> 
                    <a href=""></a>
                    <a class="navbar-brand font-weight-bold font-food" href="#">Food Items</a>
                    <a href=""></a>
                    <span style="font-size: 2em;  position:absolute; right: 20px; cursor: pointer;">
                        <i class="fas fa-search"></i>
                    </span>
                </nav>
                <nav class="navbar  navbar-light  col-md-4 justify-content-center cart">
                    <a class="navbar-brand font-cart font-weight-bold" href="#">Cart <span class="lingkaran">{{cart.length}}</span></a>
                </nav>             
            </div>
        </div>
      </header>
    
       <div class="row">
          <div class="col-md-1">
            
          </div>

        <div class="place col-md-7 d-flex" v-for="item in data" :key="item.id">
            <div class="card mt-3" style="width: 15rem;">
               <img  :src=item.image class="card-img-top" :alt="item" />
            <div class="card-body">
                <h2 class="name">{{ item.name }}</h2>
                <p class="detail">
                  {{ item.description }}
                </p>
                <h3 class="price">{{ item.price }} </h3>  
            </div>
            </div>
          </div>
            
            <div class="col-md-4" style="background: #FFFFFF;border: 1px solid #CECECE;font-family: Airbnb Cereal App;">

            </div>
            </div>
          
  </div>
  
</template>

<script>
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'home',
  data() {
    return {  
        data : [],
        max : 99,
        cart : []
      }
      },

  methods: {
    addCart(data) {
      this.cart.push(data)
    }
  },
  
  async mounted() {
    const response = await axios.get(process.env.VUE_APP_URL)
      this.data = response.data
  },
}

</script>

<style>


.lingkaran{
    background: #57CAD5;
    border-radius: 100%;
    text-align: center;
    color: #FFFFFF;
    width: 30px;
    height: 30px;
    position: absolute;
    margin-left: 10px;    
}
.food{
   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
   }

.cart{
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
    z-index: 1;
}

.place{
   background: rgba(190, 195, 202, 0.3);

}
</style>
