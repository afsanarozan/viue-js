<template>
    <div id="app">
      <header><!-- Navbar -->
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar  navbar-light col-md-8  food">
                    
                    
                    <a class="navbar-brand font-weight-bold font-food" href="#">Food Items</a>
                   
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>
                    
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

        <div class="place col-md-7 d-flex">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          
            <div class="card mt-5" style="width: 15rem;"  v-for="item in data" :key="item.id">
               <img  :src=item.image class="card-img-top" :alt="item" />
            <div class="card-body">
                <h2 class="name">{{ item.name }}</h2>
                <p class="detail">
                  {{ item.description }}
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
