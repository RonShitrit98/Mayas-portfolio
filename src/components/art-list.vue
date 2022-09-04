<template>
<div class="art-list">
    <div v-for="item in artItems.items" :key="item.title">
    <img :src="item.imgs[0]">
  </div>
</div>
</template>

<script>
export default {
  props: ["artItems"],
};
</script>
