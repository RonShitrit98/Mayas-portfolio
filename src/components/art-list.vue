<template>
  <div class="art-list">
    <div v-for="item in artItems" :key="item.id">
      <img
        class="art-img"
        v-for="img in getImgsToDisplay(item)"
        :key="img.url"
        :src="img.url"
        @click="showArt(item.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: { artItems: Object },
  methods: {
    showArt(itemId) {
      this.$emit("showArt", itemId);
    },
    getImgsToDisplay(item) {
      const imgs = item.imgs.slice(0, item.imgsToDisplay);
      return imgs;
    },
  },
};
</script>
