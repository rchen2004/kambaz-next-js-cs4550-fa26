"use client";
import "@/app/labs/lab2/tailwind/utilities.css";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";

const sayHello = (message: string) => {
  alert(message);
};

const sayName = () => {
  alert("Ryan");
};

const sample = () => {
  alert("Sample from parent");
};

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={sayHello}
        nameFunction={sayName}
        theOtherFunction={sample}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
    </div>
  );
}