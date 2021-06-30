<template>
  <div @click="handleEmitEvent">
    <p>子组件{{userName}}</p>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'lee'
      }
    }
  },
  computed: {
    userName() {
      return this.$store.state.name;
    }
  },
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
