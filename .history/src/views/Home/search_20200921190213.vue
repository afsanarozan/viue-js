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
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="max"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="search(name)">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="" right>
  
                <b-dropdown-item to="/name">Berdasarkan Nama</b-dropdown-item>
                <b-dropdown-item >Terbaru</b-dropdown-item>
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
                <router-link to="/history">
                  <img src='../../assets/clipboard.png' alt="" class="mt-2 leftbar" style="position:absolute; left: 30%; top:30px; cursor: pointer;">
                  </router-link>
                  <img src='../../assets/fork.png' alt="" class="mt-2 leftbar" style="position:absolute; left: 30%; top: 131px; cursor: pointer;">
                  <span style="font-size: 3em; color: green; position:absolute; left: 30%; top: 200px; cursor: pointer;">
                    <b-icon-plus v-b-modal.modal-1></b-icon-plus>
                  </span>
                    
          </div>


      <!-- RightBar -->
        <div class="place col-md-7 d-flex" >
 
          <div class="cont" v-for="item in data" :key="item.id" >
            <div @click="addCart(item)" v-if="max == item.name">
           <Items 
           :names="item.name" 
           :price="item.price" 
           :images="item.images" />
           
      <b-button variant="success" v-b-modal.modal-edit>Edit</b-button>
      <b-button variant="info ml-2" v-b-modal.modal-delete>Delete</b-button>
           </div>
           <b-button-group>
    </b-button-group>
           </div>
          </div>
            
            <div class="col-md-4" style="background: #FFFFFF;border: 1px solid #CECECE;font-family: Airbnb Cereal App;">
              <div>
                      <div class="card mt-5 box" style="width: 15rem; background: rgba(190, 195, 202, 0); cursor : pointer; border: none;"  v-for="item in cart" :key="item.id">
                          <img  :src=item.images class="card-img-top" :alt="item"/>
                            <h2 class="name">{{ item.name }}</h2>
                            <h3 class="price">{{ item.price }} </h3> 
                      <div>
                      </div>
                      
                   </div>          
                   
              <b-button block variant="success" style="margin-top : 570px;">Block Level Button</b-button>
              <b-button block variant="primary">Block Level Button</b-button>        
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
                      label="Enter URL Image"
                    >
                    <b-form-input
                      v-model="form.images"
                      required
                    ></b-form-input>
                    </b-form-group>
                    <button class="btn btn-primary" @click="edit()">submit</button>     
                </form>
              </b-modal>
              <b-modal id="modal-1" ref="modal" hide-footer title="Submit Your Name">
                      <form>
                        <b-form-group
                            description="Let us know your name."
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
                            label="Enter URL Image"
                          >
                          <b-form-input
                            v-model="form.images"
                          ></b-form-input>
                          </b-form-group>
                          <button class="btn btn-primary" @click="addProduct()">Submit</button>
                      </form>
              </b-modal>
          
  </div>
  
  
</template>

<script>
import axios from "axios"
import Items from "../../components/Items"


export default {
  name: 'search',
  components : {
    Items,
  },
  
  data() {
    return {  
        form : {
          id:'',
          name: '',
          price:'',
          images: '',
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
      const response = await axios.get('http://localhost:2000/product/')
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
          method: "",
          url: process.env.VUE_APP_URL,
          data: {id : this.form.id}
        })
        this.data = response.data  
        this.$route.push({path : '/'})
      } catch (err) {
        console.log(err)
      }
    },
    search(name){
      try {
        // const response = axios.delete(process.env.VUE_APP_URL, this.form)
        const response = axios({
          method: "GET",
          url: 'http://localhost:2000/api/product/id/search?name={{name}}', this.form})
        this.data = response.data  
      } catch (err) {
        console.log(err)
      }
    },
    

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
}


.check::after{
    content:'';
    display: block;
    width: 100%;
    height: 61%;
    position: absolute;
    z-index: 1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0,0,0,0.4))
}
</style>
