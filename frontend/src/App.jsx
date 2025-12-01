import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddEdit from "./pages/AddEdit/AddEdit";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/edit/:id" element={<AddEdit />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
