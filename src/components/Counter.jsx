import { useEffect, useState } from "react";

export default function counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("tariq");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const changename = () => {
    setName("ali");
  };

  useEffect(() => {
    printHI();
  }, [count]);

  useEffect(() => {
    printname();
  }, [name]);

  function printHI() {
    console.log("counter updated");
  }

  const printname = () => {
    console.log("name updated");
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>name: {name}</h2>
      <button onClick={changename}>change name</button>
    </div>
  );
}
