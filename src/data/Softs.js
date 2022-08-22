export const softs = [
  {
    id: 1,
    name: "Coca cola",
    price: 6,
  },
  {
    id: 2,
    name: "Coca cola ZERO",
    price: 6,
  },
  {
    id: 3,
    name: "Tonik",
    price: 6,
  },
  {
    id: 4,
    name: "Sprite",
    price: 6,
  },
  {
    id: 5,
    name: "Red Bull",
    price: 10,
  },
  {
    id: 6,
    name: "Red Bull Light",
    price: 10,
  },
];

export const initialItemsState = {};
softs.forEach((vodka) => {
  initialItemsState[vodka.id] = 0;
});
