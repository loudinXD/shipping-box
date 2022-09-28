import logo from "./logo.svg";
import "./App.css";
import ShippingList from "./components/ShippingList";
import ShippingForm from "./components/ShippingForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // console.log(ShippingForm);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShippingForm />}></Route>
          <Route path="/list" element={<ShippingList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
