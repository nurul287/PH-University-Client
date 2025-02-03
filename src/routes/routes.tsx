import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Counter from "../components/Counter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Counter />,
      },
    ],
  },
]);

export default routes;
