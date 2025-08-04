import { useState } from "react";
import Header from "../Header/Header";
import Cart from "./Cart";
import Login from "../Login/Login"; 
import Productjs from "../Products/Productjs";


export default function Layout() {
  const [openCart, setOpenCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItem] = useState([]);

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
      <section className='mt-5'>
            <h3 className='ml-15 text-sm tracking-wide font-semibold hover:underline cursor-pointer'>PRODUCTS</h3>
            <br></br>
            <hr className='border border-[#b1aeae]'></hr>
            <br/>
             <Productjs addToCart={addToCart} /> 
           
            <div className='flex justify-center data1'>
             <button className='border h-[30px] w-[100px] cursor-pointer'>VIEW MORE</button>
             </div>
            </section>
     
      <Cart openCart={openCart} setOpenCart={setOpenCart} cartItems={cartItems} increaseQty={increaseQty} decreaseQty={decreaseQty}/>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}
