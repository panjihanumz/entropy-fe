import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "pages/home";
import Landing from "pages/landing";
import Welcome from "pages/welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
