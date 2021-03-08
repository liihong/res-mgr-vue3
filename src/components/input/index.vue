<template>
  <div>
    <a-input v-model:value="info" v-bind="$attrs" placeholder="Basic usage" />
  </div>
</template>

<script>
export default {
  name:'rInput',

  inheritAttrs: false,

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
  data(){
    return {
      info: ''
    }
  },
  mounted() {
    console.log(this.$attrs.id)
    this.info = this.$props.value
  },
}
</script>

<style>

</style>