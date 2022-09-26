import { pricingRules } from "./data";
import { SelectedPizza } from "./types";

export function checkout(
  userCode: string,
  items: SelectedPizza[],
  rules = pricingRules
) {
  let totalPrice: number = 0;
  items.forEach((item) => {
    const rule = rules[userCode]?.[item.id];
    if (!rule) {
      totalPrice += item.prices * item.quantity;
    } else {
      totalPrice += rule(item.quantity, item.prices);
    }
  });

  return totalPrice;
}

export function updateSelected(
  arr: SelectedPizza[],
  item: SelectedPizza,
  id?: number
) {
  const index = arr.findIndex((item) => item.id === id);
  if (index === -1) {
    return [...arr, item];
  }

  if (!item) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  } else {
    return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
  }
}
