import Child from '../Child/Child';
const Item = [
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BSHC00108_YELLOW_2.jpg?v=1753874541&width=700",
        title: "Boys Yellow Checkered Half Sleeves Spread",
        des: "LAYERR-MD-26 - RUST",
        price: "₹ 759"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BSHC00121_OLIVE_2.jpg?v=1753874646&width=700",
        title: "EMBROIDERED CUBAN COLLAR SHIRT",
        des: "CHATE - BLACK",
        price: "₹ 2,529"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BSHC00114_RUST_2.jpg?v=1753874652&width=700",
        title: "EMBROIDERED BOXY FIT SHIRT",
        des: "BRIS - OFF WHITE",
        price: "₹  2,262"
    },


    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BSHC00113_WHITE_2.jpg?v=1752913087&width=700",
        title: "REGULAR FIT ABSTRACT PRINT SHIRT",
        des: "WIRA - WHITE",
        price: "₹ 3,499"
    },

    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BSHC00110_BLUE_1.jpg?v=1753874654&width=700",
        title: "LINEN BLEND MANDARIN COLLAR SHIRT",
        des: "KURTO 25 - WHITE",
        price: "₹ 3,999"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BTSH00108_MIDNIGHTBLUE_2.jpg?v=1753939028&width=700",
        title: "REGULAR FIT PLAIN CASUAL SHIRT",
        des: "HOLLA-26 - BLACK",
        price: "₹ 2,999"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BTSH00095_NAVY_1.jpg?v=1753939031&width=700",
        title: "REGULAR FIT FLORAL PRINT SHIRT",
        des: "ZELO - DUSKY RED",
        price: "₹ 3,299"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BSHC00103_BLUE_2.jpg?v=1754027916&width=700",
        title: "DOUBLE LAYER COTTON SHIRT",
        des: "LAYERR-26 - DARK BROWN",
        price: "₹ 3,299"
    },
 
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BTSH00113_RED_7_7d5220a9-ebcd-45fa-adb2-994386476203.jpg?v=1754027943&width=700",
        title: "100% LINEN RELAXED FIT EMBROIDERED SHIRT",
        des: "LASSEN LS - WHITE",
        price: "₹ 3,299"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/BDNM00063_BLACK_1.jpg?v=1754027946&width=700",
        title: "REGULAR FIT VISCOSE STRIPED SHIRT",
        des: "MERO-25 - LIGHT PURPLE",
        price: "₹ 2,799"
    },




    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/IMG_0542.jpg?v=1748072880&width=700",
        title: "LINEN BLEND MANDARIN COLLAR SHIRT",
        des: "KURTO 25 - WHITE",
        price: "₹ 3,999"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/IMG_0314_1ed83831-78ab-4ecf-8e23-8d3ac62a3741.jpg?v=1748072882&width=700",
        title: "REGULAR FIT PLAIN CASUAL SHIRT",
        des: "HOLLA-26 - BLACK",
        price: "₹ 2,999"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0556/9826/0107/files/IMG_0288_eabe2598-22e6-4cd3-ba73-cccc8189b665.jpg?v=1748072896&width=700",
        title: "REGULAR FIT FLORAL PRINT SHIRT",
        des: "ZELO - DUSKY RED",
        price: "₹ 3,299"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/PRESSOAW25RUSThm_900x.webp?v=1751455801",
        title: "DOUBLE LAYER COTTON SHIRT",
        des: "LAYERR-26 - DARK BROWN",
        price: "₹ 3,299"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/ORISBLACKhm_bc09c751-3019-4517-bde6-2f9de111c9d9_900x.webp?v=1748427770",
        title: "SLIM FIT RINSE WASH DENIM",
        des: "ORIS - BLACK",
        price: "₹ 3,999"
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0752/6435/files/MERO-25DARKBLUEHM_900x.webp?v=1750228620",
        title: "REGULAR FIT VISCOSE STRIPED SHIRT",
        des: "MERO-25 - DARK BLUE",
        price: "₹ 2,799"
    },


]


export default function ChildCon() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {Item.map((item, index) => (
                    <Child
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