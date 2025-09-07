import Man from '../Man/Man';
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
     title : "REGULAR FIT ABSTRACT PRINT SHIRT" ,
     des : "WIRA - WHITE",
      price : "₹ 3,499"},

    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/KURTO25WHITEhm_900x.webp?v=1751455359",
         title : "LINEN BLEND MANDARIN COLLAR SHIRT" ,
        des : "KURTO 25 - WHITE",
        price : "₹ 3,999"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/holla26blackhm_900x.webp?v=1751455248",
        title : "REGULAR FIT PLAIN CASUAL SHIRT" ,
        des : "HOLLA-26 - BLACK",
        price : "₹ 2,999"},
         {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/ZELODUSKYRED_1_-hm_900x.webp?v=1751266225",
     title : "REGULAR FIT FLORAL PRINT SHIRT" ,
     des : "ZELO - DUSKY RED",
      price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/LAYERR-26DARKBROWN02572_900x.webp?v=1748432515",
         title : "DOUBLE LAYER COTTON SHIRT" ,
        des : "LAYERR-26 - DARK BROWN",
        price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/ORISBLACKhm_bc09c751-3019-4517-bde6-2f9de111c9d9_900x.webp?v=1748427770",
        title : "SLIM FIT RINSE WASH DENIM" ,
        des : "ORIS - BLACK",
        price : "₹ 3,999"},
         {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/MERO-25DARKBLUEHM_900x.webp?v=1750228620",
     title : "REGULAR FIT VISCOSE STRIPED SHIRT" ,
     des : "MERO-25 - DARK BLUE",
      price : "₹ 2,799"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/lassenlswhite-00604-HERO1_900x.webp?v=1753704616",
         title : "100% LINEN RELAXED FIT EMBROIDERED SHIRT" ,
        des : "LASSEN LS - WHITE",
        price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/MERO25PURPLE-HM_900x.webp?v=1749018743",
        title : "REGULAR FIT VISCOSE STRIPED SHIRT" ,
        des : "MERO-25 - LIGHT PURPLE",
        price : "₹ 2,799"},
        


        
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/KURTO25WHITEhm_900x.webp?v=1751455359",
         title : "LINEN BLEND MANDARIN COLLAR SHIRT" ,
        des : "KURTO 25 - WHITE",
        price : "₹ 3,999"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/LURIPURPLE_1_-HM_900x.webp?v=1751885992",
        title : "REGULAR FIT PLAIN CASUAL SHIRT" ,
        des : "HOLLA-26 - BLACK",
        price : "₹ 2,999"},
         {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/ZELODUSKYRED_1_-hm_900x.webp?v=1751266225",
     title : "REGULAR FIT FLORAL PRINT SHIRT" ,
     des : "ZELO - DUSKY RED",
      price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/PRESSOAW25RUSThm_900x.webp?v=1751455801",
         title : "DOUBLE LAYER COTTON SHIRT" ,
        des : "LAYERR-26 - DARK BROWN",
        price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/ORISBLACKhm_bc09c751-3019-4517-bde6-2f9de111c9d9_900x.webp?v=1748427770",
        title : "SLIM FIT RINSE WASH DENIM" ,
        des : "ORIS - BLACK",
        price : "₹ 3,999"},
         {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/MERO-25DARKBLUEHM_900x.webp?v=1750228620",
     title : "REGULAR FIT VISCOSE STRIPED SHIRT" ,
     des : "MERO-25 - DARK BLUE",
      price : "₹ 2,799"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/lassenlswhite-00604-HERO1_900x.webp?v=1753704616",
         title : "100% LINEN RELAXED FIT EMBROIDERED SHIRT" ,
        des : "LASSEN LS - WHITE",
        price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/MERO25PURPLE-HM_900x.webp?v=1749018743",
        title : "REGULAR FIT VISCOSE STRIPED SHIRT" ,
        des : "MERO-25 - LIGHT PURPLE",
        price : "₹ 2,799"},


        
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/OBLEDARKNAVY_REMOVEPANTGREENBAND_00733_900x.webp?v=1748513486",
         title : "STRIPES ON SLEEVE RELAXED FIT SHIRT" ,
        des : "OBLE - DARK NAVY",
        price : "₹ 3,999"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/COMO26DUSKYBROWNhm_900x.webp?v=1751453387",
        title : "SATIN STRETCH PLAIN SHIRT" ,
        des : "HOLLA-26 - BLACK",
        price : "₹ 2,999"},
         {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/ZELODUSKYRED_1_-hm_900x.webp?v=1751266225",
     title : "REGULAR FIT FLORAL PRINT SHIRT" ,
     des : "ZELO - DUSKY RED",
      price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/LAYERR-26DARKBROWN02572_900x.webp?v=1748432515",
         title : "DOUBLE LAYER COTTON SHIRT" ,
        des : "LAYERR-26 - DARK BROWN",
        price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/VLAD-DBLUE02752_900x.webp?v=1748513337",
        title : "SLIM FIT RINSE WASH DENIM" ,
        des : "ORIS - BLACK",
        price : "₹ 3,999"},
         {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/8909196505868hm_900x.webp?v=1745924557",
     title : "REGULAR FIT VISCOSE STRIPED SHIRT" ,
     des : "MERO-25 - DARK BLUE",
      price : "₹ 2,799"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/pressoAW25LIGHTGREYhm_900x.webp?v=1751455776",
         title : "100% LINEN RELAXED FIT EMBROIDERED SHIRT" ,
        des : "LASSEN LS - WHITE",
        price : "₹ 3,299"},
    {src : "https://cdn.shopify.com/s/files/1/0752/6435/files/MERO25PURPLE-HM_900x.webp?v=1749018743",
        title : "REGULAR FIT VISCOSE STRIPED SHIRT" ,
        des : "MERO-25 - LIGHT PURPLE",
        price : "₹ 2,799"},
    
]


export default function Mancon() {
    return(
        <>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {Item.map((item, index) => (
                <Man
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