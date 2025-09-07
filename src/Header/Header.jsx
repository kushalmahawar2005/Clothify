import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Header({ setOpenCart , setShowLogin , showImages = true}) {
    return (
        <>
    <nav className="p-2 sm:p-4 font-[Helvetica] text-black h-[70px] sm:h-[90px] bg-stone-200 w-full" id="Home">
      <ul className="flex flex-wrap items-center justify-between px-2 sm:pl-12 sm:pr-8 w-full">
        <div className="flex items-center">
          <li className="ml-2 sm:ml-8"><a href="/" className="hover:text-yellow-300 text-xs sm:text-sm tracking-wide">HOME</a></li>
          <li className="ml-2 sm:ml-8"><a href="#video" className="hover:text-yellow-300 text-xs sm:text-sm tracking-wide">ABOUT</a></li>
          <li className="ml-2 sm:ml-8"><a href="#product" className="hover:text-yellow-300 text-xs sm:text-sm tracking-wide">PRODUCTS</a></li>
        </div>
        <li className="flex-1 hidden sm:block"></li>
        <img src="https://thehouseofrare.com/cdn/shop/files/Frame_41820_250x.png?v=1720342909" alt="logo"
          className="h-[40px] w-[60px] sm:h-[60px] sm:w-[90px] mx-auto sm:ml-80" />
        <div className="flex items-center">
          <li className="mr-2 sm:mr-6"><a href="#" onClick={() => setShowLogin(true)} className="text-black hover:text-yellow-300 text-xs sm:text-sm tracking-wide">LOGIN</a></li>
          <li className="flex items-center text-black hover:text-yellow-300 cursor-pointer text-xs sm:text-sm tracking-wide"
            onClick={() => setOpenCart(true)}>
            <ShoppingCartIcon className="mr-1 text-stone-700" />
            <span>CART</span>
          </li>
        </div>
      </ul>
    </nav>
    {showImages && (
      <div className="flex flex-col gap-4 justify-center mb-10 w-full">
        <img src="https://thehouseofrare.com/cdn/shop/files/embroi_web_1200x.jpg?v=1753189659" alt="Co" className="w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[130vh] object-cover" />
        <img src="https://thehouseofrare.com/cdn/shop/files/new_in_c0249835-ad77-40ac-86b8-10fa4c40612b_1200x.jpg?v=1752657379" alt="Co" className="w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[130vh] object-cover" />
        <img src="https://thehouseofrare.com/cdn/shop/files/RAKHI-_WEB_1200x.webp?v=1753956293" alt="Co" className="w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[130vh] object-cover" />
        <img src="https://thehouseofrare.com/cdn/shop/files/footwear_4313f7d4-ca3e-4a00-855b-856347ccb105_1200x.jpg?v=1752657479" alt="Co" className="w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[130vh] object-cover" />
      </div>
    )}
        </>
    );
}