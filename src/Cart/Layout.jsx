import { useState } from "react";
import Header from "../Header/Header";
import Cart from "./Cart";
import Login from "../Login/Login"; 

export default function Layout() {
  const [openCart, setOpenCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header setOpenCart={setOpenCart} setShowLogin={setShowLogin} />
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}
