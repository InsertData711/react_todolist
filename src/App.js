import "./App.css";
import { Header } from "./components/header/Header";
import { Detail } from "./pages/Detail/Detail";
import Main from "./pages/main/Main";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
