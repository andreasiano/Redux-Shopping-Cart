import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import CheckOut from './components/CheckOut'
import { useSelector } from "react-redux";

function App() {
  const {isOpen} = useSelector((state) => state.checkout)
  return (
    <div className="px-10">
      <Navbar/>
      <ShoppingContainer/>
      {isOpen && <CheckOut/>}
    </div>
  );
}

export default App;
