export default function Women({ src, title, des, price }) {
    return (
        <>
         <div id="Women" className="mb-10">
                <div className="flex justify-center">
                    <img src={src} alt="img" className="h-[300px] w-[250px] " />
                </div>
                <div className="mt-5 ml-5 font-thin tracking-wide">
                    <h3 className="data">{title}</h3>
                    <p className="data1">{des}</p>
                    <div className="flex justify-between">
                        <p className="data mt-2  ">{price}</p>
                        <button className="border text-[10px] w-[100px] mr-14 cursor-pointer">Add To Cart</button>
                    </div>
                </div>


            </div>
        </>


        );
}