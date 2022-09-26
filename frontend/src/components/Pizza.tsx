import { useRecoilState } from "recoil";
import { Pizza } from "../local-backend/types";
import { updateSelected } from "../local-backend/utils";
import { selectedPizzas } from "../store";

export default function PizzaComponent({
  name,
  description,
  id,
  prices,
}: Pizza) {
  const [pizzaState, setPizzaState] = useRecoilState(selectedPizzas);

  const onChange = (event: any) => {
    setPizzaState(
      updateSelected(
        pizzaState,
        { id, quantity: event.target.value, prices },
        id
      )
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>{name}</span>
      <span>{description}</span>
      <span>{prices}</span>
      <span>
        <input type="number" min={0} onChange={onChange} />
      </span>
    </div>
  );
}
