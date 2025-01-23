import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Root from "./Layouts/Root";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Facilities from "./Pages/Facilities";
import Admission from "./Pages/Admission";
import ClassDetails from "./components/ClassDetails";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route
          path="classes/:classId"
          element={<ClassDetails />}
          loader={() => fetch("/data.json")}
        />
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
