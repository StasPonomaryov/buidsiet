import { v4 as uuidv4 } from "uuid";
import { mdiFoodDrumstick, mdiMedicalBag, mdiFlaskEmpty, mdiCashPlus } from '@mdi/js';

export const bArticles = [
  {
    id: 1,
    name: 'Видатки'
  },
  {
    id: 2,
    name: 'Доходи'
  },
  {
    id: 3,
    name: 'Баланс'
  }
];

export const expenditureDefault = [
  {
    class: 'bg-lime-200',
    id: 1,
    name: 'Їжа',
    icon: mdiFoodDrumstick,
    articles: [
      {
        id: uuidv4(),
        description: 'Поточні витрати на їжу',
        value: 0
      },
    ]
  },
  {
    class: 'bg-green-200',
    id: 2,
    name: 'Здоров`я',
    icon: mdiMedicalBag,
    articles: [{
      id: uuidv4(),
      description: 'Ліки',
      value: 0
    },
    {
      id: uuidv4(),
      description: 'Обстеження',
      value: 0
    }]
  },
  {
    class: 'bg-cyan-200',
    id: 3,
    name: 'Побут',
    icon: mdiFlaskEmpty,
    articles: [{
      id: uuidv4(),
      description: 'Побутова хімія',
      value: 0
    }]
  }
];

export const incomesDefault = [
  {
    class: 'bg-fuchsia-200',
    id: 21,
    name: 'Заробіток',
    icon: mdiCashPlus,
    articles: [
      {
        id: uuidv4(),
        description: 'Зарплата',
        value: 0
      },
      {
        id: uuidv4(),
        description: 'Фріланс',
        value: 0
      }
    ]
  }
]