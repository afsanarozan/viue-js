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
                <b-dropdown-item v-b-modal.modal-edit>Edit</b-dropdown-item>
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
      <b-modal id="modal-edit" ref="modal" hide-footer title="Submit Your Name">
                <form ref="form">
                  <b-form-group  
                      id="fieldset-1"
                      label="Enter Id"
                      label-for=""
                      :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
                    >
                    <b-form-input type="number"
                      id=""
                      v-model="form.id"
                      required
                    ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="fieldset-1"
                      label="Enter Product Name"
                      label-for="input-1"
                      :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
                    >
                    <b-form-input
                      id=""
                      value=1
                      v-model="form.name"
                      required
                    ></b-form-input>
                    </b-form-group>

                  <b-form-group
                      description=""
                      label="Enter Price"
                      label-for="input-1"
                      :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
                    >
                    <b-form-input
                      v-model="form.price"
                      name="price"
                      required
                    ></b-form-input>
                    </b-form-group>

                  <b-form-group
                      id="fieldset-1"
                      description=""
                      label="Enter URL Image"
                      label-for="input-1"
                      :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
                    >
                    <b-form-input
                      id=""
                      v-model="form.images"
                      required
                    ></b-form-input>
                    </b-form-group>
                
                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                    <b-button class="mt-2" variant="outline-warning" block @click="edit()">Submit</b-button>
                    
                </form>
               
              </b-modal>
      
      </div>
    
  <!-- Leftbar -->
       <div class="row">
          <div class="col-md-1 bg-white" style="background: #FFFFFF; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); position: relative;">

                  <img src='../../assets/clipboard.png' alt="" class="mt-2 leftbar" style="position:absolute; left: 30%; top:30px; cursor: pointer;">
                  <img src='../../assets/fork.png' alt="" class="mt-2 leftbar" style="position:absolute; left: 30%; top: 131px; cursor: pointer;">
                  
                  <span style="font-size: 3em; color: green; position:absolute; left: 30%; top: 200px; cursor: pointer;">
                    <b-icon-plus v-b-modal.modal-1></b-icon-plus>
                  </span>
                    <b-modal id="modal-1" ref="modal" hide-footer title="Submit Your Name">
                <form ref="form">
                  <b-form-group
                      id="fieldset-1"
                      description="Let us know your name."
                      label="Enter Product Name"
                      label-for="input-1"
                      :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
                    >
                    <b-form-input
                      id="name-input"
                      v-model="form.name"
                      required
                    ></b-form-input>
                    </b-form-group>
                  <b-form-group
                      description=""
                      label="Enter Price"
                      label-for="input-1"
                      :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
                    >
                    <b-form-input
                      v-model="form.price"
                      name="price"
                      required
                    ></b-form-input>
                    </b-form-group>

                  <b-form-group
                      id="fieldset-1"
                      description=""
                      label="Enter URL Image"
                      label-for="input-1"
                      :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
                    >
                    <b-form-input
                      id=""
                      v-model="form.images"
                      required
                    ></b-form-input>
                    </b-form-group>
                
                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                    <b-button class="mt-2" variant="outline-warning" block @click="addProduct()">Submit</b-button>
                    
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
        form : {
          id:'',
          name: '',
          price:'',
          images: '',
        },
        data : [],
        max : 99,
        cart : [],
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

    edit (){
      try {
        const response = axios.put(process.env.VUE_APP_URL, this.form)
        this.data = response.data
      } catch (err) {
        console.log(err)
      }
    },

    delete(){
      try {
        const response = axios.delete(process.env.VUE_APP_URL, this.form)
        this.data = response.data
      } catch (err) {
        console.log()
      }
    }
  
    
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
