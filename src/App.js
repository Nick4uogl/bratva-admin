import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PushProject from "./components/PushProject/PushProject.js"
import Statistic from "./components/Statistic/Statistic.js"
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PushProject />} />
        <Route path="statistic" element={<Statistic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
