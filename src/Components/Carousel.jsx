import { useContext, useEffect, useState } from "react";
import PostAuthor01 from "../assets/images/blog-author-01.jpg";
import PostAuthor02 from "../assets/images/blog-author-02.jpg";
import PostAuthor03 from "../assets/images/blog-author-03.jpg";
import PostAuthor04 from "../assets/images/blog-author-04.jpg";
import PostAuthor05 from "../assets/images/blog-author-05.jpg";
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import SwiperImg from "./Swiper/SwiperImg";
import { Web3Context } from "../utils/WalletContext";

Swiper.use([Navigation]);

const avatars = [
  PostAuthor01,
  PostAuthor02,
  PostAuthor03,
  PostAuthor04,
  PostAuthor05,
];

const Carousel = (props) => {
  const { contract, loadNFT } = useContext(Web3Context);
  const [nftList, setNftList] = useState([]);
  const { title = "" } = props;

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  useEffect(() => {
    const latestNftList = async () => {
      if (window.ethereum) {
        const list = await loadNFT();
        setNftList(list);
      }
    };
    if (contract) {
      latestNftList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract]);
  console.log(nftList);

  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">{title}</h2>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none ">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              {nftList &&
                nftList.map((i, idx) => {
                  return (
                    <SwiperImg
                      Carousel={i}
                      key={idx}
                      avatar={avatars[idx % 5]}
                    />
                  );
                })}
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
