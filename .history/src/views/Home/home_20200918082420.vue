<template>
    <div id="app">
      <div class="container-fluid">
      <div class="row">
        <b-navbar toggleable="lg col-md-8 food" type="light" variant="white">
          <b-icon icon="menu-button-wide" class="h3 mt-2" style="color:black"></b-icon>
            <navbar-brand href="#" style="font-family: Airbnb Cereal App;" class="text-center">Food Items</navbar-brand>      
          <b-navbar-nav>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          </b-navbar-nav>

          <b-collapse id="nav-collapse" is-nav>
            

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            
                <router-link to="/search">
                <b-icon icon="search" class="h3 mt-2" style="color:black"></b-icon>
                </router-link>

              <b-nav-item-dropdown text="" right>
  
                <b-dropdown-item to="/name">Berdasarkan Nama</b-dropdown-item>
                <b-dropdown-item>Terbaru</b-dropdown-item>
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
                <div style="font-size : 4em">
                  <router-link to="/history">
                    <b-icon icon="clipboard-check" class="h1 ml-4" style="color:black"></b-icon>
                  </router-link>
                    <b-icon icon="cart-plus" class="h1 ml-4" style="color:black;"></b-icon>
                    <b-icon icon="plus" class="h1 ml-4" style="color:green; outline:none; cursor:pointer;" v-b-modal.modal-1></b-icon>
                </div>  
          </div>


      <!-- RightBar -->
        <div class="place col-md-7 d-flex">
          <div class="cont" v-for="item in data" :key="item.id" >
            <div @click="addCart(item)">
           <Items 
           :names="item.name" 
           :price="item.price" 
           :images="item.images" />
           </div>
                <b-button variant="success" v-b-modal.modal-edit>Edit</b-button>
                <b-button variant="info ml-2" v-b-modal.modal-delete>Delete</b-button>   
           </div>
          </div>
            
            <div class="col-md-4" style="background: #FFFFFF;border: 1px solid #CECECE;font-family: Airbnb Cereal App;">
              <div v-if="cart.length === 0">

                <img 
                class="empty-img"
                src="@/assets/food-and-restaurant.png"
                alt="food-and-restaurant"
                />

                <p class="text-center">Your cart is empty</p>
                <p class="text-center">Please add some items from the menu</p>
              </div>
             
                    <div v-for="item in cart" :key="item.id">  
                    <b-img left :src="item.images" alt="Left image" style="width:7em; margin-left: 10px;"></b-img>
                        <h5 class="name" style="margin-left:130px">{{ item.name }}</h5>
                        <p class="price" style="margin-left:130px">{{ item.price }} </p><br> 
                   </div>
                   
              <div>
              </div>
                    
                   <div v-if="cart.length > 0">
                      <b-button block variant="success" >CheckOut</b-button>
                      <b-button block variant="danger" >Cancel</b-button>        
                   </div>

            </div>
            </div>
             <b-modal id="modal-delete" hide-footer title="Delete">
                <form>
                  <b-form-group  
                      label="Enter Id"
                    >
                    <b-form-input type="number"
                      id="name-input"
                      v-model="form.id"
                    ></b-form-input>
                    </b-form-group>
                    <button class="btn btn-primary" @click="delet(id)">Submit</button>
                    
                </form>
              </b-modal>
              <b-modal id="modal-edit" ref="modal" hide-footer title="Edit">
                <form ref="form">
                  <b-form-group  
                      label="Enter Id"
                    >
                    <b-form-input type="number"
                      v-model="form.id"
                      required
                    ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Enter Product Name"
                    >
                    <b-form-input
                      v-model="form.name"
                    ></b-form-input>
                    </b-form-group>

                  <b-form-group
                      label="Enter Price"
                    >
                    <b-form-input
                      v-model="form.price"
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                            label-for="image-input"
                          >
                            <b-form-file
                            v-model="form.image"
                              required
                            ></b-form-file>
                            
                          </b-form-group>
                    <button class="btn btn-primary" @click="edit()">submit</button>     
                </form>
              </b-modal>
              <b-modal id="modal-1" ref="modal" hide-footer title="Submit Your Name" @ok="addProduct">
                      <form>
                        <b-form-group
                            description="Let us know your name."
                            label="Enter Product Name"
                          >
                          <b-form-input
                            v-model="name"
                          ></b-form-input>
                          </b-form-group>
                        <b-form-group
                            label="Enter Price"
                          >
                          <b-form-input
                            v-model="form.price"
                          ></b-form-input>
                          </b-form-group>

                      
                          <b-form-group
                            :state="form.image"
                            label="Image"
                            label-for="image-input"
                            label-cols="3"
                            invalid-feedback="Image is required"
                            style="font-weight: bold"
                          >
                            <b-form-file
                              v-if="!image"
                              @change="onFileChange"
                              id="image-input"
                              :state="imageState"
                              placeholder="Choose a image or drop it here..."
                              drop-placeholder="Drop file here..."
                              required
                            ></b-form-file>
                            <img v-if="image" :src="image" />
                            <button v-if="image" class="btn btn-danger" @click="removeImage">
                              Remove image
                            </button>
                          </b-form-group>
                          <button class="btn btn-primary" @click="addProduct()">Submit</button>
                      </form>
              </b-modal>
          
  </div>
  
  
</template>

<script>
import axios from "axios";
import ModalAdd from "@/components/ModalAdd";
import Items from "../../components/Items";


export default {
  name: 'home',
  components : {
    Items,
  },
  
  data() {
    return {  
        form : {
          id:'',
          name: '',
          price:'',
          image: '',
          date:''

        },
        data : [],
        cart : [],
        max : '',
      }
      },

   async mounted() {
    this.load()
  },
      

  methods: {
    addCart(data) {
      this.cart.push(data)
    },
      async load(){
      const response = await axios.get(process.env.VUE_APP_URL)
      this.data = response.data
    },
    
   
   
    addProduct(){
      try {
        const response = axios.post(process.env.VUE_APP_URL, this.form )
        this.data = response.data 
      } catch (err) {
         console.log(err)
      }
      
    },

    edit(){
      try {
        const response = axios.put(process.env.VUE_APP_URL, this.form)
        this.data = response.data
      } catch (err) {
        console.log(err)
      }
    },

    delet(){
      try {
        // const response = axios.delete(process.env.VUE_APP_URL, this.form)
        const response = axios({
          method: "DELETE",
          url: process.env.VUE_APP_URL,
          data: {id : this.form.id}
        })
        this.data = response.data  
      } catch (err) {
        console.log(err)
      }
    },
    search(){
      try {
        // const response = axios.delete(process.env.VUE_APP_URL, this.form)
        const response = axios({
          method: "GET",
          url: 'http://localhost:2000/product/search?name={{name}}' ,
          data: {name : this.form.name}
        })
        this.data = response.data  
      } catch (err) {
        console.log(err)
      }
    },

    },

    components : {
      Modal
    }
  
    
    
  
 
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
}
.image_grid input {
    display: none;
  }

  
.image_grid input:checked + .caption {
    background: rgba(0, 0, 0, 0.5);
  }

  .image_grid input:checked + .caption::after {
    content:'';
    display: block;
    width: 100%;
    height: 61%;
    position: absolute;
    z-index: 1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0,0,0,0.4))
}
.empty-img{
  margin-left: 140px;
  
}
</style>
