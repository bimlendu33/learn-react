import { Link } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <div className="m-5">
        <div className="mb-4 d-flex align-items-baseline">
          <h4>Learn React</h4>
          <div className="text-small" style={{ marginLeft: "8px" }}>
            <Link to={"/"}>Back</Link>
          </div>
        </div>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
