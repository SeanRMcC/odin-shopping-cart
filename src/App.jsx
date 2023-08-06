import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./index.css";

function App() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
