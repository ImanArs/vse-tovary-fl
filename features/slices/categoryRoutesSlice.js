import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryRotes: [
    {
      id: 1,
      name: 'Инструмент',
      icon: '',
      parent_category : null,
      subcategories : [
        {
          id: 1,
          name: '',
          parent: 'Инструмент',
          icon: ''
        },
        {
          id: 2,
          name: '',
          parent: 'Инструмент',
          icon: ''
        },
        {
          id: 3,
          name: '',
          parent: 'Инструмент',
          icon: ''
        },
        {
          id: 4,
          name: '',
          parent: 'Инструмент',
          icon: ''
        },
        {
          id: 5,
          name: '',
          parent: 'Инструмент',
          icon: ''
        },
      ],
    },
    {
      id: 2,
      name: 'Электрика и свет',
      icon: '',
      parent_category : null,
      subcategories : [
        {
          id: 1,
          name: '',
          parent: 'Электрика и свет',
          icon: ''
        },
        {
          id: 2,
          name: '',
          parent: 'Электрика и свет',
          icon: ''
        },
        {
          id: 3,
          name: '',
          parent: 'Электрика и свет',
          icon: ''
        },
        {
          id: 4,
          name: '',
          parent: 'Электрика и свет',
          icon: ''
        },
        {
          id: 5,
          name: '',
          parent: 'Электрика и свет',
          icon: ''
        },
      ],
    },
    {
      id: 3,
      name: 'Сантехника и инженерные системы',
      icon: '',
      parent_category : null,
      subcategories : [
        {
          id: 1,
          name: '',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
        {
          id: 2,
          name: '',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
        {
          id: 3,
          name: '',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
        {
          id: 4,
          name: '',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
        {
          id: 5,
          name: '',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
      ],
    },
    {
      id: 4,
      name: 'Ручной инструмент',
      icon: '',
      parent_category : null,
      subcategories : [
        {
          id: 1,
          name: '',
          parent: 'Ручной инструмент',
          icon: ''
        },
        {
          id: 2,
          name: '',
          parent: 'Ручной инструмент',
          icon: ''
        },
        {
          id: 3,
          name: '',
          parent: 'Ручной инструмент',
          icon: ''
        },
        {
          id: 4,
          name: '',
          parent: 'Ручной инструмент',
          icon: ''
        },
        {
          id: 5,
          name: '',
          parent: 'Ручной инструмент',
          icon: ''
        },
      ],
    },
    // "Инструмент",
    // "Электрика и свет ",
    // "Сантехника и инженерные системы ",
    // "Ручной инструмент",
    // "Автотовары",
    // "Всё для сада",
    // "Крепёж и фурнитура",
    // "Отделочные и стройматериалы",
    // "Офис и дом",
    // "Спорт и туризм",
    // "Станки и промкомпоненты",
    // "Климат и отопление",
    // "Склад",
    // "Клининговое оборудование",
    // "Строительное оборудование",
    // "Расходка, спецодежда и СИЗ",
  ]
}

const categoryRoutesSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    showRoutes: (state) => {
      console.log(state);
    }
  },
});

export const { showRoutes } = categoryRoutesSlice.actions;

export default categoryRoutesSlice.reducer;