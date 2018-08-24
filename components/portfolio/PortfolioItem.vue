<template lang="pug">
  .col-md-4.col-sm-6.portfolio-item
    .portfolio-item__link
      .portfolio-item__hover-container.bg-primary--light
        .portfolio-item__hover-content
          i.fas.fa-plus.fa-3x
      img.img-responsive(:src='imgUrl', :alt='imgAlt')
    .portfolio-item__caption
      h4 {{ title }}
      p.text-muted {{ activity }}
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    imgUrl: { type: String, default: '#' },
    imgAlt: { type: String, default: '' },
    title: { type: String, default: '' },
    activity: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  max-width: 400px;
  
  &__link {
    display: grid;
    grid-template-columns: 100%;
    width: 100%;

    img {
      grid-area: main;
      grid-row: 1;
      grid-column: 1;
      width: 100%;
      min-height: 0;
      z-index: 1;
    }
  }
  &__hover-container {
    grid-row: 1;
    grid-column: 1;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all .5s ease;
    &:hover {
      opacity: .9;
    }
  }
  &__hover-content {
    font-size: 2rem;
    color: white;
  }
  &__caption {
    margin: 0 auto;
    text-align: center;
    padding: 1.5rem;
  }
}
</style>

