<template>
    <div class="card mt-3" style="width: 15rem;">
        <img  :src=images class="card-img-top" :alt="item" />
      <div class="card-body">
        <h2 class="name">{{ names }}</h2>
      
      </div>
       <img  :src=images class="card-img-top" :alt="item" />
      <div class="card-body">
        <h2 class="name">{{ names }}</h2>
      
      </div>
    </div>
</template>

<script>

export default {
    name: "Items",
    props: {
        names : {
            type:String,
            required: true
        },
        description : {
            type:String,
            required: true
        },
        price: {
            type:String,
            required: true
        },
        images: {
            type:String,
            required: true
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