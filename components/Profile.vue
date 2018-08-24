<template lang="pug">
  section
    img(:src="")
    h4 {{ name }}
    p {{ role }}
    ul
      li(v-for="(contact, index) in contacts" :key="index")
        a(:href="contact.url")
          i.fa(:class="[ `fa-${contact.icon}` ]")
</template>

<script>
  export default {
    name: 'Profile',
    props: {
      name: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      contacts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>