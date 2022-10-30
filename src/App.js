import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Addusers from "./Components/Addusers/Addusers";
import Home from "./Components/Home/Home";
import Update from "./Components/Update/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch(`http://localhost:5000/users`),
    },
    {
      path: "/user/add",
      element: <Addusers></Addusers>,
    },
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
