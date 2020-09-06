<template>
    <div id="app">
      <header><!-- Navbar -->
      
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar  navbar-light col-md-8  food mx-auto">
                    
                    <a href=""></a>
                    <a class="navbar-brand font-weight-bold font-food" href="#">Food Items</a>
                   <ul class="nav nav-tabs">
                    <li class="nav-item dropdown">
                      <a class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Name</a>
                        <a class="dropdown-item" href="#">New</a>
                        <a class="dropdown-item" href="#">Category</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                      </div>
                    </li>
                   </ul>
                    
                </nav>
                <nav class="navbar  navbar-light  col-md-4 justify-content-center cart">
                    <a class="navbar-brand font-cart font-weight-bold" href="#">Cart <span class="lingkaran">{{ cart.length }}</span></a>
                </nav>             
            </div>
        </div>
      </header>
    
       <div class="row">
          <div class="col-md-1">
            
          </div>

        <div class="place col-md-7 d-flex">
            <div class="card mt-5" style="width: 15rem;"  v-for="item in data" :key="item.id">
               <img  :src=item.images class="card-img-top" :alt="item" />
            <div class="card-body">
                <h2 class="name">{{ item.name }}</h2>
                <p class="detail">
                  {{ item.date }}
                </p>
                <h3 class="price">{{ item.price }} </h3>  
                
            </div>
            
            <button class="btn btn-primary" @click="addCart(item)">Add</button>
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
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
