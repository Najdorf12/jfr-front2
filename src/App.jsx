import { BrowserRouter, Routes, Route } from "react-router-dom";

import JFR from "./components/JFR";
import AdminPage from "./components/Admin/AdminPage";
import Login from "./components/Admin/Login";
import Register from "./components/Admin/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JFR />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
