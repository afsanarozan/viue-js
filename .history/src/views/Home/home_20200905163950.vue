<template>
    <div id="app">
      
    
       <div class="row">
          <div class="col-md-1">
            
          </div>

        <div class="place col-md-7 d-flex">
            <div class="card mt-5 box" style="width: 15rem;"  v-for="item in data" :key="item.id">
               <img  :src=item.images class="card-img-top" :alt="item" @click="addCart(item)"/>
         
                <h2 class="name">{{ item.name }}</h2>
                <h3 class="price">{{ item.price }} </h3>  
               
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
import navbar from '@'

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

.box {  
    background: rgba(190, 195, 202, 0);
    position: relative;
    cursor : pointer;
    border: none;
}
</style>
