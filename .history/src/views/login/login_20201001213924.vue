<template>
    <div>
        <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="1"
      label="Shipping Address"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Street:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="City:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="State:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Country:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-input id="nested-country"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Ship via:"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['Air', 'Courier', 'Mail']"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
  </b-card>
    </div>
</template>

<script>

export default {
    
    name : 'login', 
    setup () {
        

        return {}
    },
    computed: {
      state() {
        return this.name.length >= 4 ? true : false
      },
      invalidFeedback() {
        if (this.name.length > 4) {
          return ''
        } else if (this.name.length > 0) {
          return 'Enter at least 4 characters'
        } else {
          return 'Please enter something'
        }
      },
      validFeedback() {
        return this.state === true ? 'Thank you' : ''
      }
    },
    data() {
      return {
        name: ''
      }
    }
}
</script>

<style lang="scss" scoped>

</style>