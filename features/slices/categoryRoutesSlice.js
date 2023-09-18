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
          name: 'name Инструмент',
          parent: 'Инструмент',
          icon: ''
        },
        {
          id: 2,
          name: 'name Инструмент',
          parent: 'Инструмент',
          icon: ''
        },
        {
          id: 3,
          name: 'name Инструмент',
          parent: 'Инструмент',
          icon: ''
        },
        {
          id: 4,
          name: 'name Инструмент',
          parent: 'Инструмент',
          icon: ''
        },
        {
          id: 5,
          name: 'name Инструмент',
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
          name: 'name Электрика и свет',
          parent: 'Электрика и свет',
          icon: ''
        },
        {
          id: 2,
          name: 'name Электрика и свет',
          parent: 'Электрика и свет',
          icon: ''
        },
        {
          id: 3,
          name: 'name Электрика и свет',
          parent: 'Электрика и свет',
          icon: ''
        },
        {
          id: 4,
          name: 'name Электрика и свет',
          parent: 'Электрика и свет',
          icon: ''
        },
        {
          id: 5,
          name: 'name Электрика и свет',
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
          name: 'name Сантехника',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
        {
          id: 2,
          name: 'name Сантехника',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
        {
          id: 3,
          name: 'name Сантехника',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
        {
          id: 4,
          name: 'name Сантехника',
          parent: 'Сантехника и инженерные системы',
          icon: ''
        },
        {
          id: 5,
          name: 'name Сантехника',
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
          name: 'name Ручной',
          parent: 'Ручной инструмент',
          icon: ''
        },
        {
          id: 2,
          name: 'name Ручной',
          parent: 'Ручной инструмент',
          icon: ''
        },
        {
          id: 3,
          name: 'name Ручной',
          parent: 'Ручной инструмент',
          icon: ''
        },
        {
          id: 4,
          name: 'name Ручной',
          parent: 'Ручной инструмент',
          icon: ''
        },
        {
          id: 5,
          name: 'name Ручной',
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