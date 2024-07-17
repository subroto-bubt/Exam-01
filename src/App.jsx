import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import TaskView from "./Pages/TaskView";
import Contact from "./Pages/Contact";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/taskview" element={<TaskView />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
