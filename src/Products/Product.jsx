export default function Product({src , title , des , price}) {
    return (
        
        <div className="mb-10">
            <div className="flex justify-center">
                <img src = {src} alt = "img" className="h-[300px] w-[250px] "/>
            </div>
                <div className="mt-5 ml-5 font-thin tracking-wide">
                <h3 className="data">{title}</h3>
                <p className="data1">{des}</p>
                <p className="data mt-2">{price}</p>
                </div>
            
        </div>

        
    );
}