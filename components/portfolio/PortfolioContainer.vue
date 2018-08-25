<template lang="pug">
  section
    .portfolio-container
      slot
</template>

<script>
export default {
  name: 'PortfolioContainer'
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
.portfolio-container {
  display: grid;
  grid-gap: 2rem;
  // jusitfy-items: space-between;
  grid-template-columns: repeat(3, 400px);
  @media (max-width: 1266px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
}
</style>
