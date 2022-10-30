import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Addusers from "./Components/Addusers/Addusers";
import Home from "./Components/Home/Home";

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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
