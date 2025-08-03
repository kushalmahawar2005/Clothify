import { FaShoppingCart } from "react-icons/fa";

export default function Cart({ openCart, setOpenCart }) {
  return (
    <>
     
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 ${
          openCart ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button
            onClick={() => setOpenCart(false)}
            className="text-gray-600 text-xl font-bold"
          >
            ×
          </button>
        </div>

        
        <div className="p-4 space-y-4">
          <div className="border p-2 rounded">
            <h3 className="text-sm font-semibold">Product 1</h3>
            <p className="text-xs text-gray-600">₹99</p>
          </div>
        </div>
      </div>

     
      {openCart && (
        <div
          onClick={() => setOpenCart(false)}
          className="fixed inset-0 bg-black opacity-30 z-30"
        ></div>
      )}
    </>
  );
}
