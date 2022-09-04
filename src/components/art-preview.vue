<template>
  <section class="art-prev">
 <div class="art-list-box" v-for="artType in art" :key="artType.type">
    <h1 class="art-prev-title">{{artType.type}}</h1>
        <art-list :artItems="artType"></art-list>
 </div>
  </section>
</template>

<script>
import { artService } from "../services/art-service";
import artList from "./art-list.vue";
export default {
  data() {
    return {
        art: artService.getArt()
    };
  },
  components:{artList}
};
</script>
