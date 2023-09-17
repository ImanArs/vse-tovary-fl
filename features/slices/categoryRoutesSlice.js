import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryRotes: [
    {
      id: 1,
      name: 'Инструмент',
      icons: '',
      parent_category : null,
      subcategories : [],
    },
    {
      id: 2,
      name: 'Электрика и свет',
      icons: '',
      parent_category : null,
      subcategories : [],
    },
    {
      id: 3,
      name: 'Сантехника и инженерные системы',
      icons: '',
      parent_category : null,
      subcategories : [],
    },
    {
      id: 4,
      name: 'Ручной инструмент',
      icons: '',
      parent_category : null,
      subcategories : [],
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