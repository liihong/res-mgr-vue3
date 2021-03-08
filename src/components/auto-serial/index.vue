<template>
  <div>{{value}}</div>
</template>

<script>
export default {
  props:{
    value: {
      type: String,
      default: ''
    },
    prop:{
      type: String,
      default: ''
    },
    data:{
      type:String,
      default: ''
    }
  },
}
</script>

<style>

</style>