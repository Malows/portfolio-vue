<template lang="pug">
section
  img(:src="thumbnailUrl" :alt="title")
  .modal(:class="{ 'is-active': showModal }")
    .modal-background
    .modal-close(aria-label="close")
    .modal-card
      header.modal-card-head
        p.modal-card-title {{ title }}
      section.modal-card-body
        p Hola
      footer.modal-card-footer
        button.button.is-success Save changes
        button.button Cancel
</template>

<script>
  export default {
    name: 'ProjectModal',
    props: {
      thumbnailUrl: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      showModal: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>