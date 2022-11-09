<template>
  <section class="main-page" >
    <main-header></main-header>
    <div class="main-content">
      <art-preview></art-preview>
      <contact-details></contact-details>
    </div>
  </section>
</template>

<script>
import mainHeader from "./components/main-header.vue";
import artPreview from "./components/art-preview.vue";
import ContactDetails from "./components/contact-details.vue";
export default {
  components: { mainHeader, artPreview, ContactDetails },
  computed: {
    artId() {
      return this.$route.params.id;
    },
  },
  // created() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
  // methods: {
  //   handleScroll(event) {
  //     console.log('ev')
  //     // Any code to be executed when the window is scrolled
  //   },
  // },
};
</script>

