import Slider from "react-slick";

export default function BannerSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const images = [
        "https://cantabilshop.com/cdn/shop/files/2Desktop_Banner_150rs_Cashback_1.jpg?v=1752302568",
        "https://cantabilshop.com/cdn/shop/files/1_Desktop_Banner_150rs_Cashback_1.jpg?v=1752302715",
        "https://cantabilshop.com/cdn/shop/files/Shoes_Main_banner.jpg?v=1740471161"
    ];

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
    <Slider {...settings}>
        {images.map((src, index) => (
            <div key={index}>
                <img src={src} alt={`Slide ${index}`} style={{ width: "100%", height: "500px", objectFit: "cover" }} />
            </div>
        ))}
    </Slider>
</div>

    );
}
