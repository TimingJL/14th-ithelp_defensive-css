import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Day03 from './pages/Day03_title-and-icon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day03" element={<Day03 />} />
    </Routes>
  );
}

export default App;
