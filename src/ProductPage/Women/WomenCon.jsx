import Women from '../Women/Women'

const Item = [
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/JANTABBLACK01175_900x.webp?v=1754998289",
        title: "POLKA PRINT BREEZY ORGANZA TOP",
        des: "LAYERR-MD-26 - RUST",
        price: "₹ 3299"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/summerpartyglow0310_900x.webp?v=1753274939",
        title: "SLEEVELESS ORGANZA TOP WITH TIE-UP",
        des: "RONRU - BLACK",
        price: "₹ 2,529"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/ARDHANBLACK-0218-TBGT00078JADELIME_900x.webp?v=1743494844",
        title: "BLACK SEQUINED HALTER NECK MAXI DRESS",
        des: "ARDHAN - METALLIC BLACK",
        price: "₹  2,262"
    },


    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/HUSHED0896_900x.webp?v=1750415936",
        title: "VELVET STRAP FLARED DRESS",
        des: "HARBO - PURPLE",
        price: "₹ 3,499"
    },

    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/HUSHED0072_900x.webp?v=1750417043",
        title: "EMBROIDED ORGANZA TOP",
        des: "PREVAN - WHITE",
        price: "₹ 3,999"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/VARFABLACK_HM_900x.webp?v=1753787021",
        title: "GLASS ORGANZA TOP WITH EMBELLISHED COTTEN",
        des: "VARFA - BLACK",
        price: "₹ 2,999"
    },
    {
        src: "https://thehouseofrare.com/cdn/shop/files/plp_8_900x.webp?v=4346450887163314476",
        title: "REGULAR FIT FLORAL PRINT SHIRT",
        des: "ZELO - DUSKY RED",
        price: "₹ 3,299"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/JANLOMTOFFWHITE_900x.webp?v=1747649155",
        title: "SLEEVELESS CROCHET LACE CROP TOP",
        des: "JANLOM - T - WHITE",
        price: "₹ 3,299"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/ONERLERDUSKYGREEN00260_b6ffc87e-b66d-4e88-bdbe-3ce762fa1277_900x.webp?v=1743494455",
        title: "ADJUSTABLE WAIST FRONT OPEN HOODIE",
        des: "ONERLER - DUSKY GREEN",
        price: "₹ 3,999"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/janert_black-01705_hm_900x.webp?v=1752135358",
        title: "POLKA PRINT HALTER NECK FLARED MAXI ",
        des: "JANERT - BLACK",
        price: "₹ 9,999"
    },

    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/summerpartyglow0310_900x.webp?v=1753274939",
        title: "SLEEVELESS ORGANZA TOP WITH TIE-UP",
        des: "RONRU - BLACK",
        price: "₹ 2,529"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/ARDHANBLACK-0218-TBGT00078JADELIME_900x.webp?v=1743494844",
        title: "BLACK SEQUINED HALTER NECK MAXI DRESS",
        des: "ARDHAN - METALLIC BLACK",
        price: "₹  2,262"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/JANTABBLACK01175_900x.webp?v=1754998289",
        title: "POLKA PRINT BREEZY ORGANZA TOP",
        des: "LAYERR-MD-26 - RUST",
        price: "₹ 3299"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/HUSHED0072_900x.webp?v=1750417043",
        title: "EMBROIDED ORGANZA TOP",
        des: "PREVAN - WHITE",
        price: "₹ 3,999"
    },
     {
        src: "https://thehouseofrare.com/cdn/shop/files/plp_8_900x.webp?v=4346450887163314476",
        title: "EMBROIDED ORGANZA TOP",
        des: "PREVAN - WHITE",
        price: "₹ 3,999"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/VARFABLACK_HM_900x.webp?v=1753787021",
        title: "GLASS ORGANZA TOP WITH EMBELLISHED COTTEN",
        des: "VARFA - BLACK",
        price: "₹ 2,999"
    },

]


export default function Womencon() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {Item.map((item, index) => (
                    <Women
                        key={index}
                        src={item.src}
                        title={item.title}
                        des={item.des}
                        price={item.price}

                    />
                ))}
            </div>

        </>
    );
}