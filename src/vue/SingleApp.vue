<template>
  <div>
    <div v-show="show" class="app-tip-bg" @click="hide"></div>
    <transition name="tran">
      <div v-show="show" class="app-tip">
        12341
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'singleApp',
  data() {
    return {
      show: !0,
    }
  }
}
</script>
