<template>
  <div>{{data}}</div>
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
  setup(props,ctx){
    console.log(ctx)
  }
}
</script>

<style>

</style>