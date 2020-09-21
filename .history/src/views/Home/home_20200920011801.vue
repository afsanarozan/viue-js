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
                
                <b-dropdown-item to="/">id</b-dropdown-item>
                <b-dropdown-item to="/name">Berdasarkan Nama</b-dropdown-item>
                <b-dropdown-item to="/update">Terbaru</b-dropdown-item>
                <b-dropdown-item to="/price">price</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
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
                    <b-icon icon="plus" class="h1 ml-4" style="color:green; outline:none; cursor:pointer;" v-b-modal.modal-add></b-icon>
                </div>
                <modalAdd :getProduct="getProduct" />  
          </div>


      <!-- RightBar -->
        <div class="place col-md-7 d-flex">
          
          <div class="cont" v-for="item in data" :key="item.id" >
            <div @click="addCart(item)">
           <Items 
           :names="item.name" 
           :price="item.price" 
           :images="showImage(item.images)" />
           </div>
                <b-button variant="success" v-b-modal.modal-edit @click="itemId = item.id">Edit</b-button>
                <b-button variant="info ml-2"  @click="deleteProduct(item.id)" >Delete</b-button>   
           </div>
          </div>
            <div class="col-md-4" style="background: #FFFFFF;border: 1px solid #CECECE;font-family: Airbnb Cereal App;">
        </b-navbar>

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
                    <b-img left :src="showImage(item.images)" alt="Left image" style="width:7em; margin-left: 10px;"></b-img>
                        <h5 class="name" style="margin-left:130px; margin-top:20px;">{{ item.name }}</h5>
                        <h6 style="margin-left:130px;">{{ item.price }}</h6>
                        <div class="mt-4" style="margin-top:0px;">
                         <b-button-group size="sm" style="margin-top:-30px; margin-left:8px;">
                          <b-button @click="minus(item)" class="btn minus">-</b-button>
                          <b-input-group size="sm">
                            <b-form-input :value="amount(item)" style="text-align:center"></b-form-input>
                          </b-input-group>
                          <b-button @click="plus(item)" class="btn plus">+</b-button>
                        </b-button-group> 
                        </div>
                   </div>
                   
              <div>
              </div>
                    
                   <div v-if="cart.length > 0">
                      <b-button block variant="info" style="margin-top:20px;" >CheckOut</b-button>
                      <b-button block variant="danger" @click="clear">Cancel</b-button>      
                        
                   </div>

            </div>
            </div>
                <modalEdit :id="itemId" :getProduct="getProduct" />
  </div>
  
  
</template>

<script>
import axios from "axios";
import modalEdit from "@/components/modalEdit"
import modalAdd from "@/components/modalAdd";
import Items from "../../components/Items";


export default {
  name: 'home',
  components : {
    Items,
    modalAdd,
    modalEdit
  },
  
  data() {
    return { 
        btnPlus: true,
        form : {
          id:'',
          name: '',
          price:'',
          image: '',
          date:'',

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
      const response = await axios.get(`${process.env.VUE_APP_URL}/api/product`)
      this.data = response.data
    },
    plus(value) {
        value.amount += 1;
    },
    minus(value) {
        value.amount -= 1;
        if (value.amount === 0) {
          let findIndex = this.items.data.findIndex(
            (index) => index.id === value.id
          );
          this.items.data.splice(findIndex, 1);
        }
    },
      clear() {
        this.cart = [];
      },
    
   
   
    // addProduct(){
    //   try {
    //     const response = axios.post(process.env.VUE_APP_URL, this.form )
    //     this.data = response.data 
    //   } catch (err) {
    //      console.log(err)
    //   }
      
    // },

    edit(){
      try {
        const response = axios.put(`${process.env.VUE_APP_URL}/api/product`, this.form)
        this.data = response.data
      } catch (err) {
        console.log(err)
      }
    },
    deleteProduct: async function(id) {
        try {
          await axios.delete(
            `${process.env.VUE_APP_URL}/api/product/${id}`,
            this.config
          );
          alert("Data Dihapus");
          this.getProduct();
        } catch (error) {
          console.error(error);
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

    showImage(images) {
        return `${process.env.VUE_APP_URL}/${images}`;
      },

    },
    computed: {
      amount : () => {
        return (item) => item.amount;
      }
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
  

  @media only screen and (max-width: 767px) {
    .head-cart {
    background-color: #57CAD5;
    display: none;
    }
  }
  

</style>
