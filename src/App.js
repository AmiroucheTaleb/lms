// import logo from './logo.svg';
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import Layout from "./layouts/Layout"
import ErrorPage from "./layouts/Error"
import Acceuil from "./pages/Accueil/Acceuil"
import Event from "./pages/Event/Event"
import Offre from "./pages/Offre/Offre"
import Carriere from "./pages/Carriere/Carriere"
import Calendarr from "./pages/Calendar/Calendar"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Acceuil />} />
      <Route path="/event" element={<Event />} />
      <Route path="/offre" element={<Offre />} />
      <Route path="/carriere" element={<Carriere />} />
      <Route path="/calendar" element={<Calendarr />} />
      <Route path="/*" element={<ErrorPage />} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
