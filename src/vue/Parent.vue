<template>
  <div>
    <Child @test="handleEvent"/>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child
  },
  methods: {
    handleEvent(text) {
      console.log(text);
    }
  }
}
</script>
