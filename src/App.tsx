import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Layout/Home";

const Dash = React.lazy(() =>
  import("./pages/Dash").then(({ Dash }) => ({ default: Dash }))
);
const Counter = React.lazy(() =>
  import("./pages/Counter").then(({ Counter }) => ({ default: Counter }))
);
const Bmi = React.lazy(() =>
  import("./pages/Bmi").then(({ Bmi }) => ({ default: Bmi }))
);
const Calculator = React.lazy(() =>
  import("./pages/Calculator").then(({ Calculator }) => ({
    default: Calculator,
  }))
);
const Dashboard = React.lazy(() =>
  import("./pages/Dashboard").then(({ Dashboard }) => ({ default: Dashboard }))
);
const Wordle = React.lazy(() =>
  import("./pages/Wordle").then(({ Wordle }) => ({ default: Wordle }))
);
const NotFound = React.lazy(() =>
  import("./pages/NotFound").then(({ NotFound }) => ({ default: NotFound }))
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dice-game" element={<Dash />} />
            <Route path="/date-counter" element={<Counter />} />
            <Route path="/bmi-calc" element={<Bmi />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/weather-board" element={<Dashboard />} />
            <Route path="/wordle" element={<Wordle />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
