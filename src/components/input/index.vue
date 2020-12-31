<template>
  <div>
    <a-input :value="data" v-bind="$attrs" placeholder="Basic usage" />
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name:'rInput',
  props:{
    value:{
      type: String,
      default: ''
    },
    prop:{
      type: String,
      default: ''
    },
    data:{
      type: String,
      default: ''
    }
  },
  setup(){
    const formData = inject('formData')
    console.log(formData)
    return {
      formData
    }
  }
}
</script>

<style>

</style>