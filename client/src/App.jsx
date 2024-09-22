import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header isAuthenticated={true}></Header>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
    </BrowserRouter>
  );
}

export default App;
