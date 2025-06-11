import picture from './images/picture.png'
import book from './images/book.png'
import cactus from './images/cactus.png'
import caviar from './images/caviar.png'
import guitar from './images/guitar.png'
import iphone from './images/iphone.png'
import machine_oil from './images/machine_oil.png'
import oil from './images/oil.png'

import type { ProductCard } from "../interfaces/ProductCard";

export const products: ProductCard[] = [
  // RUB (Россия)
  {
    title: "Кактус",
    origin: "Египет",
    price: 45000, // 450 ₽
    currency: "RUB",
    imageUrl: cactus
  },
  {
    title: "Гитара",
    origin: "Россия",
    price: 1200000, // 12 000 ₽
    currency: "RUB",
    imageUrl: guitar
  },

  // USD (США)
  {
    title: "iPhone 15 Pro",
    origin: "США",
    price: 99900, // $999.00
    currency: "USD",
    imageUrl: iphone
  },
  {
    title: "Levi's 501 Jeans",
    origin: "США",
    price: 5999, // $59.99
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&auto=format"
  },

  // EUR (Европа)
  {
    title: "Швейцарские часы Tissot",
    origin: "Швейцария",
    price: 59900, // €599.00
    currency: "EUR",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format"
  },
  {
    title: "Оливковое масло Extra Virgin",
    origin: "Италия",
    price: 2499, // €24.99
    currency: "EUR",
    imageUrl: oil
  },

  // RUB (Еда)
  {
    title: "Черная икра (50г)",
    origin: "Россия",
    price: 1500000, // 15 000 ₽
    currency: "RUB",
    imageUrl: caviar
  },

  // USD (Техника)
  {
    title: "MacBook Pro 14\" M3",
    origin: "США",
    price: 199900, // $1,999.00
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format"
  },

  // EUR (Авто)
  {
    title: "Масло моторное Shell 5W-40",
    origin: "Германия",
    price: 8999, // €89.99
    currency: "EUR",
    imageUrl: machine_oil
  },

  // RUB (Книги)
  {
    title: "Война и мир (подарочное издание)",
    origin: "Россия",
    price: 120000, // 1 200 ₽
    currency: "RUB",
    imageUrl: book
  },

  // USD (Спорт)
  {
    title: "Basketball NBA Official",
    origin: "США",
    price: 12999, // $129.99
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format"
  },

  // EUR (Вино)
  {
    title: "Fluffy Mona Lisa Tavla",
    origin: "Франция",
    price: 49900, // €499.00
    currency: "EUR",
    imageUrl: picture
  },
];