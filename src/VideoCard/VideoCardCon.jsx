import VideoCart from "./VideoCard";

let Item = [
  {
    src: "https://cdn.live2.ai/i/odbo0jy20z?f=auto&h=120",
    dec: "Rare Habbit Men..",
    price: "₹2,493"
  },
  {
    src: "https://cdn.live2.ai/i/1z0nvd30oe?f=auto&h=120",
    dec: "Rare Rabbit Men",
    price: "₹4,493"
  },
  {
    src: "https://cdn.live2.ai/i/6nr2njkw9s?f=auto&h=120",
    dec: "Rare Rabbit Shoes",
    price: "₹2,493"
  },
  {
    src: "https://cdn.live2.ai/i/6nr2njkw9s?f=auto&h=120",
    dec: "Rare Rabbit Men",
    price: "₹2,493"
  },
   {
    src: "https://cdn.live2.ai/i/qiy0w6ptiw?f=auto&h=120",
    dec: "Rare Rabbit Men",
    price: "₹2,493"
  },
  
  
];

export default function VideoCardCon() {
  return (
    <div className="flex overflow-x-auto flex-nowrap gap-4 py-2 px-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-x-visible">
      {Item.map((item, idx) => (
        <div className="min-w-[150px] sm:min-w-0 flex-shrink-0">
          <VideoCart
            key={idx}
            src={item.src}
            dec={item.dec}
            price={item.price}
          />
        </div>
      ))}
    </div>
  );
}
