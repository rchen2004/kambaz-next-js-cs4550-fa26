"use client";
import { useState } from "react";

const input = "rounded border border-gray-300 px-2 py-1";
const button = "inline-block rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700";
const symbols: Record<string, string> = { add: "+", subtract: "−", multiply: "×", divide: "÷" };

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const [operation, setOperation] = useState("add");
  const [output, setOutput] = useState("");
  const calculate = async () => {
    const params = new URLSearchParams({ a, b, operation });
    const response = await fetch(`/api/lab5/calculator?${params}`);
    const data = await response.json();
    setOutput(response.ok
      ? `${data.a} ${symbols[data.operation]} ${data.b} = ${data.result}`
      : `Error: ${data.error}`);
  };
  return (
    <div id="wd-calculator-next-web-api">
      <h3>Calculator (Next.js Route Handler)</h3>
      <div className="my-2 flex flex-wrap gap-2">
        <input id="wd-calculator-a" type="number" className={input}
          value={a} onChange={(e) => setA(e.target.value)} />
        <select id="wd-calculator-operation" className={input}
          value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">+</option>
          <option value="subtract">−</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
        <input id="wd-calculator-b" type="number" className={input}
          value={b} onChange={(e) => setB(e.target.value)} />
        <button id="wd-calculator-calculate" className={button} onClick={calculate}>
          Calculate
        </button>
      </div>
      <p id="wd-calculator-result">{output}</p>
      <hr className="my-4" />
    </div>
  );
}
