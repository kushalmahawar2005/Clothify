import FacebookIcon from '@mui/icons-material/Facebook';
 export default function Footer() {
    return (
            <>
            <div>
            <img src = "https://thehouseofrare.com/cdn/shop/files/app_download_a3d6eac8-fbf8-459a-b912-9fb0062e9565_1200x.png?v=1752657730" alt="img" className="h-[110vh] w-[100%]"/>
             <img src = "https://thehouseofrare.com/cdn/shop/files/landing_page_stores_2x_1_1200x.jpg?v=1737617696" alt="img" className="h-[110vh] w-[100%]"/>
             <img src = "https://thehouseofrare.com/cdn/shop/files/GIF-2_1200x.gif?v=1738241746" alt="img" className="h-[110vh] w-[100%]"/>
            </div>
            <div>
                <h2 className="mt-15 ml-15  text-5xl text-[#2F2F2F]">Let's Connect</h2>
                <p className="mt-10 ml-15 text-sm text-[#2F2F2F]">Subscribe our Newsletter</p>

                <input type="email" placeholder="Enter Your Email Address" className="mt-10 ml-15 text-sm text-[#2F2F2F] w-[400px] mail"/>

            </div>

            <div>
                <ul>
                    <h2>Follow Us</h2>
                    <img src= {FacebookIcon} alt= "Img" className='h-[100px] w-[50px]' />
                </ul>

                <ul>

                </ul>
            </div>
            </>
    );
}