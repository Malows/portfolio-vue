<template lang="pug">
  section.portfolio-container
    slot
</template>

<script>
export default {
  name: 'PortfolioContainer'
}
</script>

<style lang="scss" scoped>
.portfolio-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
</style>
