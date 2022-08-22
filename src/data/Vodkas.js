export const vodkas = [
  {
    id: 1,
    name: "Spirytus (40ml)",
    volume: 500,
    priceFortyM: 20,
    fullBottleWeight: 885,
    emptyBottleWeight: 385,
    alcoWeight: 500,
  },

  {
    id: 2,
    name: "Wyborowa (40ml)",
    volume: 500,
    priceFortyM: 10,
    fullBottleWeight: 865,
    emptyBottleWeight: 400,
    alcoWeight: 465,
  },

  {
    id: 3,
    name: "Soplica Wiśniowa (40ml)",
    volume: 500,
    priceFortyM: 10,
    fullBottleWeight: 865,
    emptyBottleWeight: 387,
    alcoWeight: 465,
  },
  {
    id: 4,
    name: "Soplica Pigwowa (40ml)",
    volume: 500,
    priceFortyM: 10,
    fullBottleWeight: 865,
    emptyBottleWeight: 412,
    alcoWeight: 465,
  },
  {
    id: 5,
    name: "Soplica Śliwka (40ml)",
    volume: 500,
    priceFortyM: 10,
    fullBottleWeight: 865,
    emptyBottleWeight: 412,
    alcoWeight: 465,
  },
  {
    id: 6,
    name: "Gin Bombay (40ml)",
    volume: 700,
    priceFortyM: 16,
    fullBottleWeight: 1200,
    emptyBottleWeight: 500,
    alcoWeight: 700,
  },
];

export const initialItemsState = {};
vodkas.forEach((vodka) => {
  initialItemsState[vodka.id] = 0;
});
