import { useState } from "react";
import viteLogo from "/vite.svg";

const Demo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <p className="read-the-docs">
        Delete this Component from ./src/components & Remove route configuration from ./route/app.route.tsx
      </p>
      <p className="read-the-docs">after that start your development</p>
    </>
  );
};

export default Demo;
