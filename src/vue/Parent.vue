<template>
  <div>
    <p>父组件</p>
    <Child @test="handleEvent">
      <template v-slot:default="slotProps">
        <h1>{{slotProps.user.name}}</h1>
      </template>
      <p slot="footer">具名插槽</p>
    </Child>
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
