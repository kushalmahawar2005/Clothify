import Product from "./Product";

const Item = [
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/LAYERRMD26RUSThm_900x.webp?v=1751455483",
     title : "MANDARIN COLLAR  LAYER SHIRT" ,
     des : "LAYERR-MD-26 - RUST",
      price : "₹ 3299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/HERO_7c109915-b917-440a-a14a-5fe90a7571ef_900x.jpg?v=1743586778",
         title : "EMBROIDERED CUBAN COLLAR SHIRT" ,
        des : "CHATE - BLACK",
        price : "₹ 2,529"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/brisoffwhite-00455-HERO1_900x.jpg?v=1753250563",
        title : "EMBROIDERED BOXY FIT SHIRT" ,
        des : "BRIS - OFF WHITE",
        price : "₹  2,262"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/WIRAWHITEhm_900x.webp?v=1751456830",
    title : "COMING SOON" ,
    des : "ARIA - OLIVE",
    price : "₹ 2,449"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/EKELLIGHTBEIGE_2_900x.webp?v=1747142246",
     title : "REGULAR FIT SOLID SHIRT" ,
     des : "EKEL - LIGHT BEIGE",
      price : "₹ 2,999"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/PELDENDUSKYPINKCC08886_900x.webp?v=1739429477",
         title : "FLORAL PRINT VISCOSE FABRIC SHIRT" ,
        des : "CHATE - BLACK",
        price : "₹ 2,529"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/KURTO25WHITEhm_900x.webp?v=1751455359",
        title : "LINEN BLEND MANDARIN COLLAR SHIRT" ,
        des : "KURTO 25 - WHITE",
        price : "₹ 3,999"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/CINEXLS-25BLUEhm_7ac6691c-91e9-4176-8caa-e176a287d09f_900x.webp?v=1745319484",
    title : "LINEN BLEND SHIRT" ,
    des : "CINEX LS-25 - BLUE",
    price : "₹  2,624"}
]


export default function Productjs() {
    return(
        <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {Item.map((item, index) => (
                <Product
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