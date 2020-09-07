<template>
  <div @click="handleEmitEvent">child</div>
</template>

<script>
export default {
  mounted() {
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
