// eslint-disable-next-line react/prop-types

const SwiperImg = ({ Carousel, avatar }) => {
  const [name, description, uri] = Carousel;
  return (
    <div className="swiper-slide h-auto flex flex-col">
      {/* img */}
      <img
        className="w-full aspect-[7/4] object-cover"
        src={uri}
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
        </div>
        {/* Title */}
        <div
          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
          style={{ cursor: "pointer" }}
        >
          {name}
        </div>
        <div className="text-sm text-gray-500 italic">{description}</div>
      </div>
    </div>
  );
};

export default SwiperImg;
