import Video from "./Video";

let Item = [
    {src : "https://cdn.live2.ai/uploads/house-of-rare/video/transcoded/muted/083ab35eb5.mp4"},
    {src : "https://cdn.live2.ai/uploads/house-of-rare/video/transcoded/muted/df9d5db629.mp4"},
    {src : "https://cdn.live2.ai/uploads/house-of-rare/video/transcoded/muted/5910ab074b.mp4"},
    {src : "https://cdn.live2.ai/uploads/house-of-rare/video/transcoded/muted/cf7b0cd82e.mp4"},
    {src : "https://cdn.live2.ai/uploads/house-of-rare/video/transcoded/muted/beb07f169f.mp4"},
    {src : "https://cdn.live2.ai/uploads/house-of-rare/video/transcoded/muted/2f39a000f2.mp4"},
    {src : "https://cdn.live2.ai/uploads/house-of-rare/video/transcoded/muted/44b6e7d9f1.mp4"},
    {src : "https://cdn.live2.ai/uploads/house-of-rare/video/transcoded/muted/9995bb851e.mp4"},
    
];


export default function VideoSec() {
    return (
        <>
        <div className="flex overflow-x-scroll scroll-smooth Scroll">
        {
            Item.map((items , index) => (
                <Video
                key={index}
                src={items.src}
                />
                
        ))}
        </div>
        </>
    )
}