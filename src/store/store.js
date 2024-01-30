import { createStore } from 'zustand/vanilla';
import { bArticles, expenditureDefault, incomesDefault } from '../__mocks__/db';

const useCountStore = createStore((set, get) => ({
  buidseitItems: bArticles,
  expenditureItems: expenditureDefault,
  revenueItems: incomesDefault,
  computed: {
    balance: () => {
      const allRevenues = get().revenueItems.reduce((a, i) => {
        return (
          Number(a) +
          i.articles.reduce((a, c) => Number(a) + Number(c.value), 0)
        );
      }, 0);
      const allExpenditures = get().expenditureItems.reduce((a, i) => {
        return (
          Number(a) +
          i.articles.reduce((a, c) => Number(a) + Number(c.value), 0)
        );
      }, 0);

      return allRevenues - allExpenditures;
    },
  },
}));

export const { getState, setState, subscribe } = useCountStore;

export default useCountStore;
