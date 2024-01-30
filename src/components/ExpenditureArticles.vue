<script setup>
import SvgIcon from '@jamescoyle/vue-icon';

const props = defineProps({
  articles: Array
});

</script>

<template>
  <div class="container table">
    <div v-for="n in articles" :key="n.id" :class="n.class">
      <div class="row m-0">
        <div class="col minimal">
          <div class="p-4">
            <svg-icon type="mdi" :path="n.icon"></svg-icon>
          </div>
        </div>
        <div class="col">
          <div class="row" v-for="i in n.articles" :key="i.id">
            <div class="col p-4">{{ i.description }}</div>
            <div class="col minimal p-4">{{ i.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>