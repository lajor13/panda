import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Envelope from "./components/Envelope";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      [
        <Route path="/panda/" element={<RootLayout />}>
          <Route index element={<Envelope />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Envelope />} />
        </Route>
      ]
    )
  );

  return (
    <div className="max-w-[1440px] mx-auto bg-purple-100">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
