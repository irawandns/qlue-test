import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
