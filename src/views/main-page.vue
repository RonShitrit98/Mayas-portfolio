<template>
  <section class="main-page">
    <main-header></main-header>
    <div class="main-content">
      <art-preview></art-preview>
      <contact-details></contact-details>
    </div>
    <section v-if="artId">
    <art-details></art-details>
    </section>
  </section>
</template>

<script>
import mainHeader from "../components/main-header.vue";
import artPreview from "../components/art-preview.vue";
import ContactDetails from "../components/contact-details.vue";
import ArtDetails from "../components/art-details.vue";
export default {
  components: { mainHeader, artPreview, ContactDetails, ArtDetails },
  computed:{
    artId(){
      return this.$route.params.id
    }
  }
};
</script>
