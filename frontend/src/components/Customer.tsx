import { useRecoilState } from "recoil";
import { selectedCustomer } from "../store";

export default function CustomerComponent({
  name,
  code,
  id,
}: {
  name: string;
  code: string;
  id: number;
}) {
  const [, setCustomer] = useRecoilState(selectedCustomer);
  const onChange = (event: any) => {
    setCustomer({ id, name, code: event.target.value });
  };

  return (
    <>
      <input
        type="radio"
        id="form"
        name="customer"
        value={code}
        onChange={onChange}
      />
      <label htmlFor="html">{name}</label>
      <br />
    </>
  );
}
