export default function Cart({ openCart, setOpenCart, cartItems, increaseQty, decreaseQty }) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 ${
          openCart ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-between`}
      >
       
        <div>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">Your Cart</h2>
            <button
              onClick={() => setOpenCart(false)}
              className="text-gray-600 text-xl font-bold"
            >
              ×
            </button>
          </div>

         
          <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-150px)]">
            {cartItems.length === 0 ? (
              <p>No products in cart.</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="border p-2 rounded flex items-center gap-3">
                  <div className="w-[100px] mt-1">
                    <img
                      src={item.src}
                      alt="img"
                      className="h-[60px] w-[65px] object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-gray-600 mt-1">{item.price}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQty(item.title)}
                          className="w-[17px] py-0.1 text-[13px] bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="text-[12px]">{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(item.title)}
                          className="w-[17px] py-0.1 text-[13px] bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        
        <div className="px-5 py-3">
          <button className="w-full bg-black text-white py-2 rounded">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
