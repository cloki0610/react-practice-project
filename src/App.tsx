import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dice-game",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dash />
          </Suspense>
        ),
      },
      {
        path: "date-counter",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Counter />
          </Suspense>
        ),
      },
      {
        path: "bmi-calc",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Bmi />
          </Suspense>
        ),
      },
      {
        path: "calculator",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Calculator />
          </Suspense>
        ),
      },
      {
        path: "weather-board",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
        loader: ({ request, params }) =>
          import("./pages/Dashboard").then((module) =>
            module.loader({
              request,
              params,
            })
          ),
      },
      {
        path: "wordle",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Wordle />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
