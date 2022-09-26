export type Rule = {
  [key: number]: (quantity: number, prices: number) => number;
};

export type PricingRules = {
  [key: string]: Rule;
};

export type Pizza = {
  id: number;
  name: string;
  description: string;
  prices: number;
};

export type Customer = {
  name: string;
  id: number;
  code: string;
};

export type SelectedPizza = {
  id: number;
  quantity: number;
  prices: number;
};
