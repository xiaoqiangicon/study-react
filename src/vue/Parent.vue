<template>
  <div>
    <Child @test="handleEvent"/>
  </div>
</template>

<script>
import AlertComponent from './Alert.js';
import Child from './Child.vue';

export default {
  components: {
    Child
  },
  mounted() {
    const component = new AlertComponent().$mount();

    document.body.appendChild(component.$el);
  },
  methods: {
    handleEvent(text) {
      console.log(text);
    }
  }
}
</script>
