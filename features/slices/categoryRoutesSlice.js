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
          name: 'name Инструмент1',
          parent: 'Инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 2,
          name: 'name Инструмент2',
          parent: 'Инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 3,
          name: 'name Инструмент3',
          parent: 'Инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 4,
          name: 'name Инструмент4',
          parent: 'Инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 5,
          name: 'name Инструмент5',
          parent: 'Инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
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
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 2,
          name: 'name Электрика и свет',
          parent: 'Электрика и свет',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 3,
          name: 'name Электрика и свет',
          parent: 'Электрика и свет',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 4,
          name: 'name Электрика и свет',
          parent: 'Электрика и свет',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 5,
          name: 'name Электрика и свет',
          parent: 'Электрика и свет',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
      ],
      products: [
        {
          id: 1,
          image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
          name: "Lorem ipsum dolor sit amet.",
          price: 123,
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 2,
          image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
          name: "Lorem ipsum dolor sit amet.",
          price: 123,
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 3,
          image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
          name: "Lorem ipsum dolor sit amet.",
          price: 123,
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 4,
          image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
          name: "Lorem ipsum dolor sit amet.",
          price: 123,
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
      ]
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
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 2,
          name: 'name Сантехника',
          parent: 'Сантехника и инженерные системы',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 3,
          name: 'name Сантехника',
          parent: 'Сантехника и инженерные системы',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 4,
          name: 'name Сантехника',
          parent: 'Сантехника и инженерные системы',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 5,
          name: 'name Сантехника',
          parent: 'Сантехника и инженерные системы',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
      ]
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
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 2,
          name: 'name Ручной',
          parent: 'Ручной инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 3,
          name: 'name Ручной',
          parent: 'Ручной инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 4,
          name: 'name Ручной',
          parent: 'Ручной инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
        {
          id: 5,
          name: 'name Ручной',
          parent: 'Ручной инструмент',
          icon: '',
          products: [
            {
              id: 1,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 2,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 3,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
            {
              id: 4,
              image: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/5195/204x184/51302023.jpg",
              name: "Lorem ipsum dolor sit amet.",
              price: 123
            },
          ]
        },
      ]
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