import { Customer, Pizza, PricingRules } from "./types";

const customers: Customer[] = [
  { name: "Microsoft", id: 1, code: "ms" },
  { name: "Amazon", id: 2, code: "amz" },
  { name: "Facebook", id: 3, code: "fb" },
];

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Small Pizza",
    description: "10'' pizza for one person",
    prices: 11.99,
  },
  {
    id: 2,
    name: "Medium Pizza",
    description: "12'' pizza for one person",
    prices: 15.99,
  },
  {
    id: 3,
    name: "Large Pizza",
    description: "15'' pizza for one person",
    prices: 21.99,
  },
];

const pricingRules: PricingRules = {
  ms: {
    1: function (quantity: number = 0, prices: number = 0) {
      return Math.floor(quantity / 3) * 2 * prices + (quantity % 3) * prices;
    },
  },
  amz: {
    3: function (quantity: number = 0, _prices: number = 0) {
      return quantity * 19.99;
    },
  },
  fb: {
    2: function (quantity: number = 0, prices: number = 0) {
      return Math.floor(quantity / 5) * 4 * prices + (quantity % 5) * prices;
    },
  },
};

export { customers, pizzas, pricingRules };
