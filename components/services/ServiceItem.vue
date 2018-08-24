<template lang="pug">
  .service
    span.fa-stack.fa-4x
      i.fas.fa-circle.fa-stack-2x.text-primary
      i.fas.fa-stack-1x.fa-inverse(:class="[ propperStyle ]")
    h4.service__heading {{ title }}
    p.service__description.text-muted {{ description }}
</template>

<script>
export default {
  name: 'ServiceItem',
  props: ['icon', 'description', 'title'],
  computed: {
    propperStyle () {
      if (!this.icon) return ''
      return `fa-${this.icon}`
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  text-align: center;
  &__heading {
    margin: 1rem 0;
  }
  &__description {
    color: var(--color-muted);
  }
}
</style>
