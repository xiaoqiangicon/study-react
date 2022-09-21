<template>
  <div @click="handleEmitEvent">
    <p class="child">子组件{{userName}}</p>
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
  created() {
    var obj = new Proxy({}, {
      get: function(target, key, recevicer) {
        console.log(`getting ${key}`);
        return Reflect.get(target, key, receiver);
      },
      set: function(target, key, value, receiver) {
        console.log(`setting ${JSON.stringify(target)} ${key}`);
        return Reflect.set(target, key, value, receiver);
      }
    });
    // 注意要让proxy起作用，必须针对proxy实例进行操作。而不是针对目标对象操作；如果handler没有设置任何拦截，那就等于直通原对象；
    obj.name = 5;
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
.child {
  color: red;
  transform: rotate(-10deg)
}
</style>
