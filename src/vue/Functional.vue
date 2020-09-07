<template>
  <div class="book">
    {{props.book.name}} {{props.book.price}}
  </div>
</template>

<script>
Vue.component('book', {
  functional: true,
  props: {
    book: {
      type: () => ({}),
      required: true,
    }
  },
  render: function(createElement, content) {
    return createElement(
      'div',
      {
        attrs: {
          class: 'book',
        }
      },
      [context.props.book]
    )
  }
})
</script>
