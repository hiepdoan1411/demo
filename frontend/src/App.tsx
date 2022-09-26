import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  checkoutValue,
  customerList,
  pizzaList,
  selectedCustomer,
  selectedPizzas,
} from "./store";
import { useEffect } from "react";
import { customers, pizzas } from "./local-backend/data";
import CustomerComponent from "./components/Customer";
import PizzaComponent from "./components/Pizza";
import { checkout } from "./local-backend/utils";

export default function App() {
  const [customersState, setCustomersState] = useRecoilState(customerList);
  const [pizzasState, setPizzasState] = useRecoilState(pizzaList);
  const selectedPizzasValue = useRecoilValue(selectedPizzas);
  const selectedCustomerValue = useRecoilValue(selectedCustomer);
  const [value, setValue] = useRecoilState(checkoutValue);

  useEffect(() => {
    setCustomersState(customers);
    setPizzasState(pizzas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (event: any) => {
    const totalPrices = checkout(
      selectedCustomerValue?.code,
      selectedPizzasValue
    );
    setValue(totalPrices);
    event.preventDefault();
  };

  return (
    <div>
      <form id="form" onSubmit={onSubmit}>
        <div
          style={{
            display: "flex",
            width: 600,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            {customersState.map((item) => (
              <CustomerComponent
                id={item.id}
                key={item.id}
                name={item.name}
                code={item.code}
              />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {pizzasState.map((item) => (
              <PizzaComponent
                key={item.id}
                id={item.id}
                prices={item.prices}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <button type="submit">Checkout</button>
      </form>
      <div>{value}</div>
    </div>
  );
}
