// eslint-disable-next-line react/prop-types

const SwiperImg = ({ Carousel, avatar }) => {
  return (
    <div className="swiper-slide h-auto flex flex-col">
      {/* img */}
      <img
        className="w-full aspect-[7/4] object-cover"
        src={Carousel}
        width={259}
        height={148}
        alt="Carousel 01"
      />
      {/* White box */}
      <div className="grow bg-white px-4 pb-6">
        {/* Avatars */}
        <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
          <img
            className="rounded-full border-2 border-white box-content"
            src={avatar}
            width={36}
            height={36}
            alt="Avatar 01"
          />
          {/* <img
            className="rounded-full border-2 border-white box-content"
            src={Avatar02}
            width={36}
            height={36}
            alt="Avatar 02"
          />
          <img
            className="rounded-full border-2 border-white box-content"
            src={Avatar03}
            width={36}
            height={36}
            alt="Avatar 03"
          />
          <img
            className="rounded-full border-2 border-white box-content"
            src={Avatar04}
            width={36}
            height={36}
            alt="Avatar 04"
          /> */}
        </div>
        {/* Title */}
        <a
          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
          href="#0"
        >
          Digital Art
        </a>
        <div className="text-sm text-gray-500 italic">34 collections</div>
      </div>
    </div>
  );
};

export default SwiperImg;
