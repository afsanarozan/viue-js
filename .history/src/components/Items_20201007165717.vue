<template>
<div>
    <div class="card mt-5"  style="width: 15rem; cursor : pointer; border: none;">
            <img  :src=images class="card-img-top" :alt="names" />
             
        </div>
</div>
</template>

<script>

export default {
    name: "Items",
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
  color: #2c3e50;
  margin-top: 60px;
}


</style>