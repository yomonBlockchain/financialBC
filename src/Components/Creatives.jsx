import CreativesImage from "../assets/images/creatives.jpg";
import Creative01 from "../assets/images/creative-01.jpg";
import Creative02 from "../assets/images/creative-02.jpg";
import Creative03 from "../assets/images/creative-03.jpg";
import Creative04 from "../assets/images/creative-04.jpg";
import CreativeBg01 from "../assets/images/creative-bg-01.jpg";
import CreativeBg02 from "../assets/images/creative-bg-02.jpg";
import CreativeBg03 from "../assets/images/creative-bg-03.jpg";
import CreativeBg04 from "../assets/images/creative-bg-04.jpg";
import CreativesItem from "./Swiper/CreativesItem";

const Creatives = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">
              Look around various Artists
            </h2>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="md:w-1/2" data-aos-id-cards>
              <div className="flex space-x-6">
                {/* Column 1 */}
                <div className="w-1/2 space-y-6">
                  {/* Item */}
                  <CreativesItem
                    data-aos="fade-down"
                    BackSrc={CreativeBg01}
                    AuthSrc={Creative01}
                    Updown={true}
                    AuthName="HanHo"
                    AuthLink="hanho@islab.re.kr"
                  />

                  {/* Item */}
                  <CreativesItem
                    data-aos="fade-right"
                    delay="200"
                    BackSrc={CreativeBg02}
                    AuthSrc={Creative02}
                    Updown={false}
                    AuthName="KyeongWoo"
                    AuthLink="KyeongWoo@islab.re.kr"
                  />
                </div>

                {/* Column 2 */}
                <div className="w-1/2 mt-6 space-y-6">
                  {/* Item */}
                  <CreativesItem
                    data-aos="fade-left"
                    delay="100"
                    BackSrc={CreativeBg03}
                    AuthSrc={Creative03}
                    Updown={true}
                    AuthName="Simon"
                    AuthLink="simon@islab.re.kr"
                  />

                  {/* Item */}
                  <CreativesItem
                    data-aos="fade-up"
                    delay="300"
                    BackSrc={CreativeBg04}
                    AuthSrc={Creative04}
                    Updown={false}
                    AuthName="BoGeum"
                    AuthLink="BoGeum@islab.re.kr"
                  />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="md:w-1/2 md:pl-10 lg:pl-20">
              <div className="text-center md:text-left">
                <img
                  className="inline-block mb-12"
                  src={CreativesImage}
                  width={330}
                  height={181}
                  alt="Creatives"
                />
                <h3 className="h3 font-cabinet-grotesk text-4xl mb-4">
                  Best Artist
                </h3>
                <p className="text-xl text-gray-500 mb-6">
                  They are not human. They are slave....
                </p>
                <div>
                  <div
                    className="btn text-white bg-blue-500 hover:bg-blue-600 shadow-sm"
                    href="/signup"
                  >
                    See more Artist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creatives;
