import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BorderRadiusPage from "./Pages/border-radius";
import BoxShadowPage from "./Pages/box-shadow";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <BorderRadiusPage /> },
      { path: "box-shadow", element: <BoxShadowPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
