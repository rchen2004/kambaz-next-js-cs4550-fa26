"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "rounded border border-gray-300 px-2 py-1";
const button = "inline-block rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <div className="my-2 flex gap-2">
        <input id="wd-path-parameter-a" type="number" className={input}
          value={a} onChange={(e) => setA(e.target.value)} />
        <input id="wd-path-parameter-b" type="number" className={input}
          value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div className="flex flex-wrap gap-2">
        <a id="wd-path-parameter-add" className={button}
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
          Add {a} + {b}
        </a>
        <a id="wd-path-parameter-subtract" className={button}
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
          Subtract {a} - {b}
        </a>
        <a id="wd-path-parameter-multiply" className={button}
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
          Multiply {a} * {b}
        </a>
        <a id="wd-path-parameter-divide" className={button}
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
          Divide {a} / {b}
        </a>
      </div>
      <hr className="my-4" />
    </div>
  );
}
