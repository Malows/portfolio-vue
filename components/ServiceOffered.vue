<template lang="pug">
div
  span.fa-stack.fa-4x
    i.fa.fa-circle.fa-stack-2x
    i.fa.fa-stack-1x.fa-inverse(:class="[`fa-${icon}`]")
  p {{ text }}
</template>

<script>
  export default {
    name: 'ServiceOffered',
    props: ['icon', 'text']
  }
</script>

<style>
</style>
