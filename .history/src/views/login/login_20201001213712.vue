<template>
    <div>
        <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
      label-for="input-1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </b-form-group>
    </div>
</template>

<script>

export default {
    
    name : 'login', 
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>