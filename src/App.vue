<script setup>
import { ref } from 'vue';
import { getState, setState } from './store/store';
import IncomesArticles from './components/IncomesArticles.vue';
import ExpenditureArticles from "./components/ExpenditureArticles.vue";

const buidseitItems = ref(getState().buidseitItems);
const expenditureItems = ref(getState().expenditureItems);
const revenueItems = ref(getState().revenueItems);
const balance = ref(getState().computed.balance());
console.log('>>>BALANCE', getState().computed.balance());
</script>

<template>
  <div class="centered">
    <div class="container">
      <div class="row">
        <div v-for="n in 3" :key="n" class="col">
          <div class="ma-2 pa-2">
            <strong>{{ buidseitItems[n - 1].name }}</strong>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ExpenditureArticles :articles="expenditureItems" />
        </div>
        <div class="col">
          <IncomesArticles :articles="revenueItems" />
        </div>
        <div class="col">
          {{ balance }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
