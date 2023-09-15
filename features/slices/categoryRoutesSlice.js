import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryRotes: [
    "Инструмент",
    "Электрика и свет ",
    "Сантехника и инженерные системы ",
    "Ручной инструмент",
    "Автотовары",
    "Всё для сада",
    "Крепёж и фурнитура",
    "Отделочные и стройматериалы",
    "Офис и дом",
    "Спорт и туризм",
    "Станки и промкомпоненты",
    "Климат и отопление",
    "Склад",
    "Клининговое оборудование",
    "Строительное оборудование",
    "Расходка, спецодежда и СИЗ",
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