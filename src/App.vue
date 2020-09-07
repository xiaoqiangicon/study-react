<template>
  <div class="head">
    {{msg | Upper}}
    <Parent />
  </div>
</template>

<script>
import Parent from './vue/Parent.vue';
export default {
  data() {
    return {
      msg: 'ab32dD'
    }
  },
  created() {
    console.log('fsdkf'.slice(0))
  },
  components: {
    Parent
  },
  filters: {
    Upper(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style lang="scss">
.head {
  color: blue;
}
</style>