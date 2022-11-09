<template>
  <div :class="['art-detail', group.id]">
    <div class="img-box">
      <div v-for="img in group.imgs" :key="img.url">
        <img :src="img.url" alt="" />
        <p v-if="img.description">
          <span>{{ img.title }}</span> -
          {{ img.description }}
        </p>
      </div>
    </div>
    <div class="description-box">
      <h1>{{ group.title }}</h1>
      <p v-for="desc in getDescription(group.description)" :key="desc">
        {{ desc }}.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: { group: Object },
  methods: {
    getDescription(desc) {
      return desc.split(".");
  
    },
  },
};
</script>
