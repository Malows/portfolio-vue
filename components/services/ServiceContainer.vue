<template lang="pug">
  section.service-container
    slot
</template>

<script>
export default {
  name: 'ServiceContainer'
}
</script>


<style lang="scss" scoped>
.service-container {
  padding: 2rem 15rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
</style>
