<template>
  <section class="main-header">
    <h1 class="main-logo">MAYA ABRAMOVICH</h1>
    <div class="main-nav">
      <p :class="getClass('portfolio')" @click="select('portfolio')" href="#">
        PORTFOLIO
      </p>
      <p :class="getClass('info')" @click="select('info')" href="#">INFO</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    selected: String,
  },
  methods: {
    getClass(type) {
      if (type === this.selected) return "selected";
    },
    select(type){
      this.$emit('selectOption', type)
    }
  },
};
</script>
