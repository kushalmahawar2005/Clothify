import { useState } from "react";
import Header from "../Header/Header";
import Cart from "./Cart";
import Login from "../Login/Login"; 
import Productjs from "../Products/Productjs";
import { useNavigate } from "react-router-dom";


export default function Layout() {
  const [openCart, setOpenCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItem] = useState([]);
   const navigate = useNavigate();

  const addToCart = (product) => {
  const existingProduct = cartItems.find((item) => item.title === product.title);

  if (existingProduct) {
    
    const updatedCart = cartItems.map((item) =>
      item.title === product.title
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItem(updatedCart);
  } else {
    setCartItem([...cartItems, { ...product, quantity: 1 }]);
  }

  setOpenCart(true);
};

const increaseQty = (title) => {
  setCartItem((prevItems) =>
    prevItems.map((item) =>
      item.title === title ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQty = (title) => {
  setCartItem((prevItems) =>
    prevItems
      .map((item) =>
        item.title === title
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) 
  );
};


  return (
    <>
      <Header setOpenCart={setOpenCart} setShowLogin={setShowLogin} />
      <section className="mt-4 sm:mt-5 px-2 sm:px-8 w-full">
        <h3 className="ml-2 sm:ml-15 text-xs sm:text-sm tracking-wide font-semibold hover:underline cursor-pointer">PRODUCTS</h3>
        <hr className="border border-[#b1aeae] my-2" />
        <Productjs addToCart={addToCart} />
        <div className="flex justify-center mt-4">
          <button className="border rounded px-3 py-1 text-xs sm:text-sm w-auto min-w-[70px] max-w-[100px] h-auto cursor-pointer hover:bg-gray-100 transition" onClick={() => navigate("/product")}>VIEW MORE</button>
        </div>
      </section>
      <Cart openCart={openCart} setOpenCart={setOpenCart} cartItems={cartItems} increaseQty={increaseQty} decreaseQty={decreaseQty} />
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}
