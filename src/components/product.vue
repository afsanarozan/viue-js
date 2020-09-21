:<template>
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
           :price="item.id" 
           :images="showImage(item.images)" />
           </div>
                <b-button variant="success" v-b-modal.modal-edit @click="itemId = item.id">Edit</b-button>
                <b-button variant="info ml-2" v-b-modal.modal-delete>Delete</b-button>   
           </div>
          </div>
</template>

<script>
export default {
    name: "Product",
    props: {
      items: {
        type: Object,
        required: true,
      },
      getProduct: {
        type: Function,
        required: false,
      },
    },
}
</script>

<style>

</style>