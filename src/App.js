import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pizza/Navbar";
import Footer from "./Pizza/footer";
import Home from "./Pizza/home"
import cartItem from "./Pizza/cartItem";
//import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Home />
        <Footer />
    
    </div>
  );
}

export default App;
