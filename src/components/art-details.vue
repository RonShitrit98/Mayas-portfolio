<template>
  <div :class="['art-detail', group.id]">
    <div class="img-box">
      <div v-for="img in group.imgs" :key="img.url">
        <img :src="img.url" alt="" />
        <p >{{ img.description }}</p>
      </div>
    </div>
    <div class="description-box">
      <h1>{{ group.title }}</h1>
      <p>{{ group.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { group: Object },
  methods: {},
};
</script>
