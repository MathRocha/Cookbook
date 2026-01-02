import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { List } from "./pages/list";
import { Detail } from "./pages/detail";

const router = createBrowserRouter([
  { path: "/", element: <List /> },
  { path: "/:id", element: <Detail /> },
  { path: "*", element: <h1>Rota não encontrada</h1> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
