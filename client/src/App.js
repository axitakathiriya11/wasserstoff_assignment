import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import AddTopic from "./components/AddTopic";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <LandingPage />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/AddTopic" element={<AddTopic />}></Route>
      </Routes>
    </div>
  );
}

export default App;
