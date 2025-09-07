export default function Child({ src, title, des, price }) {

    return (
        <>
            <div id="Child" className="mb-10">
                <div className="flex justify-center">
                    <img src={src} alt="img" className="h-[300px] w-[250px] " />
                </div>
                <div className="mt-5 ml-5 font-thin tracking-wide">
                    <h3 className="data">{title}</h3>
                    <p className="data1">{des}</p>
                    <div className="flex justify-between">
                        <p className="data mt-2  ">{price}</p>
                        <button className="border rounded px-3 py-1 text-xs sm:text-sm min-w-[70px] max-w-[100px] h-auto cursor-pointer hover:bg-gray-100 transition">Add To Cart</button>
                    </div>
                </div>


            </div>

        </>
    );
}