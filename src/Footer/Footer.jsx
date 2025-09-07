
 export default function Footer({showImages = true}) {
    return (
            <>
            {showImages && (
                <div className="flex flex-col gap-4 w-full">
                    <img src="https://thehouseofrare.com/cdn/shop/files/app_download_a3d6eac8-fbf8-459a-b912-9fb0062e9565_1200x.png?v=1752657730" alt="img" className="w-full h-[30vh] sm:h-[60vh] md:h-[80vh] lg:h-[110vh] object-cover" />
                    <img src="https://thehouseofrare.com/cdn/shop/files/landing_page_stores_2x_1_1200x.jpg?v=1737617696" alt="img" className="w-full h-[30vh] sm:h-[60vh] md:h-[80vh] lg:h-[110vh] object-cover" />
                    <img src="https://thehouseofrare.com/cdn/shop/files/GIF-2_1200x.gif?v=1738241746" alt="img" className="w-full h-[30vh] sm:h-[60vh] md:h-[80vh] lg:h-[110vh] object-cover" />
                </div>
            )}
            <div className="px-4 sm:px-8 py-6">
                <h2 className="mt-4 sm:mt-8 text-2xl sm:text-5xl text-[#2F2F2F]">Let's Connect</h2>
                <p className="mt-4 sm:mt-10 text-xs sm:text-sm text-[#2F2F2F]">Subscribe our Newsletter</p>
                <input type="email" placeholder="Enter Your Email Address" className="mt-4 sm:mt-10 text-xs sm:text-sm text-[#2F2F2F] outline-none w-full sm:w-[400px] mail border rounded px-2 py-1" />
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-10 px-4 sm:px-8">
                <div className="mb-6 sm:m-0">
                    <h3 className="text-sm sm:text-base text-[#2F2F2F] font-bold">Follow Us</h3>
                    <div className="flex gap-3 mt-2">
                        <img src="/public/Icon/facebook.png" alt="icon" className="w-[15px]" />
                        <img src="/public/Icon/instagram.png" alt="icon" className="w-[15px]" />
                        <img src="/public/Icon/linkedin.png" alt="icon" className="w-[15px]" />
                        <img src="/public/Icon/youtube.png" alt="icon" className="w-[15px]" />
                    </div>
                </div>
                <div className="ml-0 sm:ml-10 mb-6 sm:m-0">
                    <h3 className="text-sm sm:text-base text-[#2F2F2F] font-bold mt-4 sm:mt-15">Company</h3>
                    <ul className="text-xs sm:text-[12px] mt-3 leading-[25px]">
                        <li>About us</li>
                        <li>HelpChat with us</li>
                        <li>Chat with us</li>
                        <li>Work for Rate</li>
                    </ul>
                </div>
                <div className="mb-6 sm:m-0">
                    <h3 className="text-sm sm:text-base text-[#2F2F2F] font-bold mt-4 sm:mt-15">Quick Links</h3>
                    <ul className="text-xs sm:text-[12px] mt-3 leading-[25px]">
                        <li>My Account</li>
                        <li>Return / Exchange</li>
                        <li>order Tracking</li>
                        <li>Store Location</li>
                    </ul>
                </div>
                <div className="flex ml-0 sm:ml-40 mt-4 sm:mt-15">
                    <ul className="text-[#53514d] italic text-xs sm:text-[13px]">
                        <li>Our Theme</li>
                        <li>Blogs</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-10 mb-6 sm:mb-10 px-4 sm:px-8">
                <div className="mb-2 sm:mb-0">
                    <p className="text-xs sm:text-[13px] text-[#53514d]">All Rights Reserved TheHouseOfRare © 2025</p>
                </div>
                <div className="mb-2 sm:mb-0">
                    <p className="text-xs sm:text-[13px] text-[#53514d]">Get it on</p>
                    <p className="text-[#53514d]">Google Pay</p>
                </div>
                <div>
                    <p className="text-xs sm:text-[13px] text-[#53514d]">Get it on</p>
                    <p className="text-[#53514d]">App Store</p>
                </div>
            </div>

            
            </>
    );
}