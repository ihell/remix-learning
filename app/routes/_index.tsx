import { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState(0)
  const handleNumber = () => {
    setNumber(number + 1)
  }
  return (
    <>
      <p>total click : {number}</p>
      <button onClick={handleNumber} className="text-white bg-blue-500 rounded p-1">
        click
      </button>
    </>
  );
}
