import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Day03 from './pages/Day03_title-and-icon';
import Day04 from './pages/Day04_buttons';
import Day05 from './pages/Day05_category_tag';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day03" element={<Day03 />} />
      <Route path="/day04" element={<Day04 />} />
      <Route path="/day05" element={<Day05 />} />
    </Routes>
  );
}

export default App;
