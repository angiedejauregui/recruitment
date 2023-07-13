import { Route, Routes } from "react-router-dom";
import Candidates from "./components/Candidates";
import Users from "./components/Users";
import "./scss/app.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Candidates />} />
        <Route path="/" element={<Users />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
