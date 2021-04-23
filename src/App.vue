<template>
  <div class="head">
    <p>vue组件</p>
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