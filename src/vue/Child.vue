<template>
  <div @click="handleEmitEvent">child12323544</div>
</template>

<script>
export default {
  mounted() {
    // 自己监听自己
    this.$on('test', (text) => {
      window.alert(text);
    })
  },
  methods: {
    handleEmitEvent() {
      this.$emit('test', 'hello')
    }
  }
}
</script>

<style>

</style>
