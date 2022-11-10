<template>
  <section class="main-page">
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
  computed: {},
};
</script>
