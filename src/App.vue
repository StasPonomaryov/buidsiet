<script setup>
import IncomesArticles from './components/IncomesArticles.vue';
import ExpenditureArticles from "./components/ExpenditureArticles.vue";
import { bArticles, expenditureDefault, incomesDefault } from "./__mocks__/db";

</script>

<template>
  <div class="centered">
    <div class="container">
      <div class="row">
        <div v-for="n in 3" :key="n" class="col">
          <div class="ma-2 pa-2">
            <strong>{{ bArticles[n - 1].name }}</strong>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ExpenditureArticles :articles="expenditureDefault" />
        </div>
        <div class="col">
          <IncomesArticles :articles="incomesDefault" />
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
