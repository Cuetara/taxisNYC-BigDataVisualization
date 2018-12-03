<template>
  <div class="number">
    {{number}}
  </div>
</template>

<script>
export default {
  name: 'NumeroCreciente',
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    displayNumber: 0
  })
}
</script>

<style lang="scss" scoped>
  .number {
    font-size: 45px;
    font-weight: 500;
    width:80px;
    display: block;
  }
</style>


</style>
