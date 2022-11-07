<template>
  <section class="art-prev">
    <div class="art-list-box">
      <h1 class="art-prev-title">ILLUSTRATONS</h1>
      <art-list @showArt="showArt" :artItems="illustrations" />
    </div>
    <div class="art-list-box">
      <h1 class="art-prev-title">GRAPHIC DESIGN</h1>
      <art-list @showArt="showArt" :artItems="garphicDesigns" />
    </div>
    <art-details
      v-if="selectedGroup"
      :group="selectedGroup"
      @click="selectedGroup = null"
    />
  </section>
</template>

<script>
import { artService } from "../services/art-service";
import artList from "./art-list.vue";
import artDetails from "./art-details.vue";
export default {
  data() {
    return {
      art: artService.getArt(),
      illustrations: artService.getArtByType("illustration"),
      garphicDesigns: artService.getArtByType("graphicDesign"),
      selectedGroup: null,
    };
  },
  components: { artList, artDetails },
  methods: {
    showArt(id) {
      const group = artService.getGroup(id);
      this.selectedGroup = group;
    },
  },
};
</script>
