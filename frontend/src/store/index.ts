import { atom } from "recoil";
import { Customer, Pizza, SelectedPizza } from "../local-backend/types";

export const pizzaList = atom<Pizza[]>({
  key: "pizzaListState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const customerList = atom<Customer[]>({
  key: "customerListState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const selectedCustomer = atom<Customer>({
  key: "selectedCustomerState", // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});

export const selectedPizzas = atom<SelectedPizza[]>({
  key: "selectedPizzasState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const checkoutValue = atom<number>({
  key: "checkoutValueState",
  default: 0,
});
