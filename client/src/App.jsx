import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/Auth" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
