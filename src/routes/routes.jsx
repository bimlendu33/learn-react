import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import UseStateEx from "../pages/use-state/UseStateEx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/use-state" element={<UseStateEx />} />
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default AppRoutes;
