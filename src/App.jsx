import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {

  return (
    <>
      <h1>This is the app!</h1>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
