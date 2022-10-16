import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Layout/Home";
import { Dash } from "./pages/Dash";
import { Counter } from "./pages/Counter";
import { Bmi } from "./pages/Bmi";
import { Calculator } from "./pages/Calculator";
import { Dashboard } from "./pages/Dashboard";
import { Wordle } from "./pages/Wordle";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
