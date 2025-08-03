export default function VideoCart({ src, dec, price }) {
  return (
    <div className="flex items-center  bg-white h-[70px] w-[250px] mt-5 ml-10">
      <img
        src={src}
        alt={dec}
        className="h-16 w-16 object-cover  mr-4"
      />
      <div>
        <h3 className="text-sm font-semibold mb-1">{dec}</h3>
        <p className="text-base font-bold">{price}</p>
      </div>
    </div>
  );
}
