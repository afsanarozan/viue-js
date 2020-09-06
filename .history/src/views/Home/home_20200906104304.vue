<template>
    <div id="app">
      <div class="container-fluid">
      <div class="row">
        <b-navbar toggleable="lg col-md-8 food" type="light" variant="white">
            <b-navbar-brand href="#" style="font-family: Airbnb Cereal App;">Food Items</b-navbar-brand>      
          <b-navbar-nav class="ml-auto">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          </b-navbar-nav>

          <b-collapse id="nav-collapse" is-nav>
            

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <b-navbar toggleable="lg col-md-4 cart justify-content-center"  variant="faded" type="light">
          <b-navbar-brand href="#">Cart<span class="lingkaran">{{ cart.length }}</span></b-navbar-brand>
        </b-navbar>
      </div>
      
      </div>
    
  <!-- Leftbar -->
       <div class="row">
          <div class="col-md-1 bg-white" style="background: #FFFFFF; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); position: relative;">

                  <img src='../../assets/clipboard.png' alt="" class="mt-2 leftbar" style="position:absolute; left: 30%; top:30px; cursor: pointer;">
                  <img src='../../assets/fork.png' alt="" class="mt-2 leftbar" style="position:absolute; left: 30%; top: 131px; cursor: pointer;">
                  
                  <span style="font-size: 3em; color: green; position:absolute; left: 30%; top: 200px; cursor: pointer;">
                    <b-icon-plus v-b-modal.modal-1></b-icon-plus>
                  </span>
                    <b-modal
                id="modal-1"
                ref="modal"
                title="Submit Your Name"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
              >
                <form ref="form" @submit.prevent="AddProduct">
                  <b-form-group
                    :state="nameState"
                    label="Name"
                    label-for="name-input"
                    invalid-feedback="Name is required"
                  >
                    <b-form-input
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                    ></b-form-input>
                  </b-form-group>
                </form>
              </b-modal>
          </div>


      <!-- RightBar -->
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

    addproduct(){
      const response = axios.post(process.env.VUE_APP_URL + '/product')
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
