<template>
  <div class="art-list">
    <div v-for="item in artItems" :key="item.title">
      <img :src="item.imgs[0].url" @click="showArt(item.id)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["artItems"],
  methods: {
    showArt(itemId) {
      this.$emit("showArt", itemId);
    },
  },
};
</script>
