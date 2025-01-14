import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import UseStateEx from "../pages/use-state/UseStateEx";
import UseReducerEx from "../pages/use-reducer-ex/UseReducerEx";
import UseRefEx from "../pages/use-ref-ex/UseRefEx";
import CustomHook1 from "../pages/custom-hooks/CustomHook1";
import CustomHook2 from "../pages/custom-hooks/CustomHook2";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/use-state" element={<UseStateEx />} />
      <Route path="/use-reducer-ex" element={<UseReducerEx />} />
      <Route path="/use-ref-ex" element={<UseRefEx />} />
      <Route path="/custom-hook1" element={<CustomHook1 />} />
      <Route path="/custom-hook2" element={<CustomHook2 />} />
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default AppRoutes;
