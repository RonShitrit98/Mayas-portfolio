<template>
  <div class="art-list">
    <div
      :class="['img-list', artItems[0].type]"
      v-for="img in getImgsToDisplay"
      :key="img.url"
      @click="showArt(img.itemId)"
    >
      <img :src="img.url" />
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
  },
  computed: {
    getImgsToDisplay() {
      const imgs = [];
      this.artItems.forEach((item) => {
        item.imgs.slice(0, item.imgsToDisplay).forEach((img) => {
          img.itemId = item.id;
          imgs.push(img);
        });
      });
      return imgs;
    },
  },
  created() {},
};
</script>
