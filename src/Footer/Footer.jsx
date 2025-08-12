
 export default function Footer({showImages = true}) {
    return (
            <>
            {showImages && (
            <div>
            <img src = "https://thehouseofrare.com/cdn/shop/files/app_download_a3d6eac8-fbf8-459a-b912-9fb0062e9565_1200x.png?v=1752657730" alt="img" className="h-[110vh] w-[100%]"/>
             <img src = "https://thehouseofrare.com/cdn/shop/files/landing_page_stores_2x_1_1200x.jpg?v=1737617696" alt="img" className="h-[110vh] w-[100%]"/>
             <img src = "https://thehouseofrare.com/cdn/shop/files/GIF-2_1200x.gif?v=1738241746" alt="img" className="h-[110vh] w-[100%]"/>
            </div>
            )}
            <div>
                <h2 className="mt-15 ml-15  text-5xl text-[#2F2F2F]">Let's Connect</h2>
                <p className="mt-10 ml-15 text-sm text-[#2F2F2F]">Subscribe our Newsletter</p>

                <input type="email" placeholder="Enter Your Email Address" className="mt-10 ml-15 text-sm text-[#2F2F2F] outline-none w-[400px] mail"/>

            </div>
            <div className="flex gap-10">
                <div className="m-15">
                    <h3 className="text-base text-[#2F2F2F] font-bold">Follow Us</h3>
                    <div className="flex gap-3 mt-2">
                        <img src = "/public/Icon/facebook.png"  alt="icon" className=" w-[15px]"/>
                        <img src = "/public/Icon/instagram.png"  alt="icon" className=" w-[15px]"/>
                        <img src = "/public/Icon/linkedin.png"  alt="icon" className=" w-[15px]"/>
                        <img src = "/public/Icon/youtube.png"  alt="icon" className=" w-[15px]"/>
                    </div>
                </div>
           
                <div className="ml-10">
                    <h3 className="text-base text-[#2F2F2F] font-bold mt-15">Company</h3>
                    <ul className="text-[12px] mt-3 leading-[25px]">
                        <li>About us</li>
                        <li>HelpChat with us</li>
                        <li>Chat with us</li>
                        <li>Work for Rate</li>
                        </ul>
                </div>

                <div>
                    <h3 className="text-base text-[#2F2F2F] font-bold mt-15">Quick Links</h3>
                    <ul className="text-[12px] mt-3 leading-[25px]">
                        <li>My Account</li>
                        <li>Return / Exchange</li>
                        <li>order Tracking</li>
                        <li>Store Location</li>
                    </ul>
                </div>

                <div className="flex ml-160 mt-15">
                    <ul className="text-[#53514d] italic text-[13px]">
                        <li>Our Theme</li>
                        <li>Blogs</li>
                        <li>Terms</li>
                    </ul>
                </div>

             </div>

        <div className="flex justify-between mt-10 mb-10">
            <div className="ml-15">
            <p className="text-[13px] text-[#53514d] ">All Rights Reserved TheHouseOfRare © 2025</p>
            </div>

            <div className="pl-180">
                <p className="text-[13px] text-[#53514d] ">Get it on</p>
                <p className="text-[#53514d] ">Google Pay</p>
            </div>

             <div className="mr-20 ">
                <p className="text-[13px] text-[#53514d] ">Get it on</p>
                <p className="text-[#53514d] ">App Store</p>
            </div>
        </div>

            
            </>
    );
}