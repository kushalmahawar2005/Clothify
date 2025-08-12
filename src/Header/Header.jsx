import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Header({ setOpenCart , setShowLogin , showImages = true}) {
    return (
        <>
        <nav className="p-4 font-[Helvetica] text-black h-[90px] bg-stone-200 " id = "Home">
                <ul className="flex items-center pl-12 pr-8 ">
                  
                  <li className="ml-8"><a href="/" className=" hover:text-yellow-300 text-sm tracking-wide">HOME</a></li>
                  <li className="ml-8"><a href="#video" className=" hover:text-yellow-300 text-sm tracking-wide">ABOUT</a></li>
                  <li className="ml-8"><a href="Product" className=" hover:text-yellow-300 text-sm tracking-wide">PRODUCTS</a></li>
        
                  <img src = "https://thehouseofrare.com/cdn/shop/files/Frame_41820_250x.png?v=1720342909" alt = "logo"
                  className='h-[60px] w-[90px] ml-80'></img>

                  <li className="flex-1"></li>
        
                  <li className="mr-6"><a href="#"  onClick={() => setShowLogin(true) } className="text-black hover:text-yellow-300 text-sm tracking-wide ">LOGIN</a></li>
                <li className="flex items-center text-BLACK hover:text-yellow-300 cursor-pointer text-sm tracking-wide"
                onClick={() => setOpenCart(true)}>
                <ShoppingCartIcon className="mr-1 text-stone-700" />
                <span>CART</span>  
                </li>
                </ul>
              </nav>
              {showImages && (
                <div className='flex-row justify-center mb-10'>
                    <img src='https://thehouseofrare.com/cdn/shop/files/embroi_web_1200x.jpg?v=1753189659' alt='Co' className='h-[130vh] w-[100%]' />
                    <img src='https://thehouseofrare.com/cdn/shop/files/new_in_c0249835-ad77-40ac-86b8-10fa4c40612b_1200x.jpg?v=1752657379' alt='Co' className='h-[130vh] w-[100%]' />
                    <img src='https://thehouseofrare.com/cdn/shop/files/RAKHI-_WEB_1200x.webp?v=1753956293' alt='Co' className='h-[130vh] w-[100%]' />
                    <img src='https://thehouseofrare.com/cdn/shop/files/footwear_4313f7d4-ca3e-4a00-855b-856347ccb105_1200x.jpg?v=1752657479' alt='Co' className='h-[130vh] w-[100%]' />
                </div>
            )}
        </>
    );
}