<template>
  <section class="main-page">
    <main-header :selected="selected" @selectOption="select"></main-header>
    <div class="main-content">
      <art-preview :class="getClass('portfolio')"></art-preview>
      <contact-details :class="getClass('info')"></contact-details>
    </div>
  </section>
</template>

<script>
import mainHeader from "./components/main-header.vue";
import artPreview from "./components/art-preview.vue";
import ContactDetails from "./components/contact-details.vue";
export default {
  components: { mainHeader, artPreview, ContactDetails },
  data() {
    return {
      selected: 'portfolio',
    };
  },
  methods: {
    select(type) {
      this.selected = type;
      console.log(this.selected)
    },
    getClass(type){
      if (type===this.selected) return 'selected'
    }
  },
};
</script>
