import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/create" Component={Create}></Route>
      <Route path="/update/:id" Component={Update}></Route>
      <Route path="/read/:id" Component={Read}></Route>
    </Routes>
  );
}

export default App;
