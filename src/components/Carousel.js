import { useRef } from "react";

const Carousel = () => {
  const images = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/186a71018df06ce2bea1db55086d32e4",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/90b990bd1dc16bba234f5002627f71d3",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/2568f3f6928c7615151b9df37ed6f8b8",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1095c62afafd16a1e99289880fddfc5b",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/afb1b49f7fcb84d2b3a73a1139f33299",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1e3e7c66f97538f591be562b75297a8d",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/870fc64dc5157fb9b691934d2406ec8f",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62",
  ];

  const boxRef = useRef(null);

  const nextImage = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width; // Scroll to the right
    }
  };

  const prevImage = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width; // Scroll to the left
    }
  };

  return (
    <div className="relative bg-slate-400 h-[315px] shadow-lg overflow-hidden">
      <button
        onClick={prevImage}
        className="left-0 p-3 absolute mt-32 border border-white z-10 bg-gray-700"
      >
        <p className="text-[39px] text-white">&lt;</p>
      </button>
      <button
        onClick={nextImage}
        className="border border-white p-3 absolute right-0 mt-32 z-10 bg-gray-700"
      >
        <p className="text-[39px] text-white">&gt;</p>
      </button>

      <div
        ref={boxRef}
        className="h-[80%] w-full flex overflow-x-scroll scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="w-full h-full object-cover p-1"
            src={image}
            style={{ scrollSnapAlign: "start" }}
            alt={`carousel-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
