<template>
<div>
    <div class="card mt-5 img_grid"  style="width: 15rem; background: white; cursor : pointer; border: none;">
            <img  :src=images class="card-img-top" :alt="names" />
            <h2 class="name">{{ names }}</h2>
            <h3 class="price">{{ price }} </h3> 
            <div>
            </div>
            
        </div>
</div>
</template>

<script>

export default {
    name: "items",
    props: {
        id : {
            type:Number,
            required: false,
        },
        names : {
            type:String,
            required: true,
        },
        price : {
            type:String,
            required: true,
        },
        images: {
            type:String,
            required: true,
        }
    },
  }

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}


</style>