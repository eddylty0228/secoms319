import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
const [product, setProduct] = useState([]);
const [oneProduct, setOneProduct] = useState([]);
useEffect(() => {
  getAllProducts();
}, []);
function App() {
  return <div className="App"></div>;
}

export default App;
