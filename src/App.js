import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Day03 from './pages/Day03_title-and-icon';
import Day04 from './pages/Day04_buttons';
import Day05 from './pages/Day05_category-tag';
import Day06 from './pages/Day06_image-ratio';
import Day07 from './pages/Day07_flexbox-wrapping';
import Day08 from './pages/Day08_long-content';
import Day09 from './pages/Day09_short-content';
import Day10 from './pages/Day10_lock-scroll-chaining';
import Day11 from './pages/Day11_using-fixed-height';
import Day12 from './pages/Day12_using-fixed-width';
import Day13 from './pages/Day13_forgetting-background-repeat';
import Day14 from './pages/Day14_responsive-height-design';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day03" element={<Day03 />} />
      <Route path="/day04" element={<Day04 />} />
      <Route path="/day05" element={<Day05 />} />
      <Route path="/day06" element={<Day06 />} />
      <Route path="/day07" element={<Day07 />} />
      <Route path="/day08" element={<Day08 />} />
      <Route path="/day09" element={<Day09 />} />
      <Route path="/day10" element={<Day10 />} />
      <Route path="/day11" element={<Day11 />} />
      <Route path="/day12" element={<Day12 />} />
      <Route path="/day13" element={<Day13 />} />
      <Route path="/day14" element={<Day14 />} />
    </Routes>
  );
}

export default App;
