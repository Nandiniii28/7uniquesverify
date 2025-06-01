import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function HomeHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="pb-0 md:pb-10 bg-white ">
      <div className="px-6 sm:pt-5 md:pt-20 lg:pt-24 bgImg flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-8">
        {/* Right: Hero Image */}
        <div
          className="w-full md:w-1/2 relative mb-8 md:mb-0 flex justify-center md:justify-end"
          data-aos="fade-up"
        >
          <img
            src="/img/4.png"
            alt="Hero visual with businesswoman and VOIP"
            className="w-full max-w-xs sm:max-w-md md:max-w-[420px] h-auto object-contain"
            style={{ filter: "drop-shadow(0px 4px 24px rgba(0,0,0,0.04))" }}
          />
        </div>

        {/* Left: Headline and CTA */}
        <div
          className="w-full md:w-1/2 flex flex-col text-left pt-0"
          data-aos="fade-up"
        >
          <h1 className="font-extrabold text-[#373533] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight mb-6">
            Empowering Your Business
            <br />
            with Reliable VOIP and
            <br />
            Cloud Services.
          </h1>
          <p className="text-[#9c9e99] text-base md:text-lg leading-relaxed tracking-wide mb-8 max-w-lg">
            The power of VOIP, telecom, and cloud technologies to deliver
            seamless communication solutions for businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
            <a
              href="/about-us"
              className="inline-block text-center px-8 py-3 text-base font-bold rounded-lg shadow-sm transition bg-[#2dc1e3] hover:bg-[#79d9ef] text-white focus:outline-none focus:ring-2 focus:ring-[#79d9ef]"
            >
              Know More
            </a>
            <a
              href="/contact-us"
              className="inline-block text-center px-8 py-3 text-base font-bold rounded-full border transition focus:outline-none focus:ring-2 focus:ring-[#2dc1e3] shadow"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-gray-200 bg-[#f7fbff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch border-r border-gray-200">
            <div className="w-full sm:w-48 border-b sm:border-b-0 sm:border-r border-gray-200 py-6 flex items-center justify-center sm:justify-start">
              <p className="text-gray-700 text-[13px] leading-5 font-normal text-center sm:text-left max-w-[120px]">
                Trusted by high-
                <br />
                growth Companies
                <br />
                and investors
              </p>
            </div>
            <div
              className="relative w-full sm:flex-1 overflow-hidden py-6 flex"
              aria-label="Trusted companies slider"
            >
              <div
                className="flex space-x-12 whitespace-nowrap animate-marquee"
                style={{ animation: "marquee 20s linear infinite" }}
              >
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Sisyphus company logo with green geometric shapes"
                    className="h-10 w-10"
                    src="/img/logo/cloth.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Seven Unique Branded Cloth
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Capsule company logo with two overlapping blue circles"
                    className="h-6 w-6"
                    src="/img/logo/FINUNIQUE-LOGO.png"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Finunique
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Lightbox company logo with black cube icon"
                    className="h-6 w-6"
                    src="/img/logo/digi.png"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    DigiHub
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Luminous company logo with green wavy lines"
                    className="h-6 w-20"
                    src="/img/logo/finunique-rummy-logo.png"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Finunique Rummy 
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Layers company logo with purple layered shapes"
                    className="h-6 w-6"
                    src="/img/logo/ABDKS-LOGO.png"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    ABDKS
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Sisyphus company logo with green geometric shapes"
                    className="h-6 w-20"
                    src="/img/logo/LOGO.png"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Edusphere
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Sisyphus company logo with green geometric shapes"
                    className="h-10 w-10"
                    src="/img/logo/THE-BOOK-STORE.png"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    The Book Store
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Capsule company logo with two overlapping blue circles"
                    className="h-10 w-10"
                    src="/img/logo/Dentel.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Seven Unique Dentel
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Lightbox company logo with black cube icon"
                    className="h-10 w-20"
                    src="/img/logo/real-estate_1.png"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Seven Unique Real State
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
