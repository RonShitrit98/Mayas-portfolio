<template>
<div class="art-list">
    <div v-for="item in artItems.items" :key="item.title">
    <img :src="item.imgs[0]" @click="showArt(item.id)">
  </div>
</div>
</template>

<script>

export default {
  props: ["artItems"],
  methods:{
    showArt(itemId){
    }
  }
};
</script>
