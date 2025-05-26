import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function HomeHero() {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true, 
    easing: 'ease-out',
  });
}, []);

  return (
    <section className="pb-0 md:pb-10 bg-white ">
      <div className=" px-6 sm:pt-[20px] md:pt-[80px] lg:pt-[100px] bgImg flex flex-row-reverse items-left md:gap-1 lg:gap-2">
        {/* Left: Headline and CTA */}

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2  relative mb-12 md:mb-0" data-aos="fade-up">
          <img
            src="/img/4.png"
            alt="Hero visual with businesswoman and VOIP"
            className="md:w-[420px] h-auto object-contain"
            style={{ filter: "drop-shadow(0px 4px 24px rgba(0,0,0,0.04))" }}
          />
        </div>
        <div className="text-left flex flex-col items-left pt-12 md:pt-0" data-aos="fade-up">
        <h1 className="font-extrabold text-[#373533] text-3xl xs:text-4xl md:text-5xl lg:text-[48px] leading-tight mb-6">
  Empowering Your Business
  <br />
  with Reliable Identity
  <br />
  and Compliance Solutions.
</h1>

<p className="text-[#9c9e99] w-full text-base md:text-lg leading-relaxed tracking-wide mb-8 max-w-lg">
  The power of API-driven verification to deliver seamless, secure, and scalable identity and compliance solutions for modern businesses.
</p>

          <div className="flex flex-row gap-5 mb-8 w-full">
            <a
              href="/about-us"
              className="inline-block px-8 py-3 text-base font-bold rounded-lg shadow-sm transition bg-[#2dc1e3] hover:bg-[#79d9ef] text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#79d9ef]"
            >
              Know More
            </a>
            <a
              href="/contact-us"
              className="inline-block px-8 py-3 text-base font-bold rounded-full   border transition focus:outline-none focus:ring-2 focus:ring-[#2dc1e3] shadow"
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
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/4edd764a-2893-4cde-2597-209dc184bccf.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Sisyphus
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Capsule company logo with two overlapping blue circles"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/3f671bb8-3045-4782-9609-787458533a51.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Capsule
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Lightbox company logo with black cube icon"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/1f09ea28-97c7-4e23-8e2a-7a91764ba64f.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Lightbox
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Luminous company logo with green wavy lines"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/3872533c-090e-40bf-4610-1719e8c50fc7.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Luminous
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Layers company logo with purple layered shapes"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/d3fc4b4c-a556-49bf-4ca6-336bfc6e42bd.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Layers
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Sisyphus company logo with green geometric shapes"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/4edd764a-2893-4cde-2597-209dc184bccf.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Sisyphus
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Sisyphus company logo with green geometric shapes"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/4edd764a-2893-4cde-2597-209dc184bccf.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Sisyphus
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Capsule company logo with two overlapping blue circles"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/3f671bb8-3045-4782-9609-787458533a51.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Capsule
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Lightbox company logo with black cube icon"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/1f09ea28-97c7-4e23-8e2a-7a91764ba64f.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Lightbox
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Luminous company logo with green wavy lines"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/3872533c-090e-40bf-4610-1719e8c50fc7.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Luminous
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Layers company logo with purple layered shapes"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/d3fc4b4c-a556-49bf-4ca6-336bfc6e42bd.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Layers
                  </span>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <img
                    alt="Sisyphus company logo with green geometric shapes"
                    className="h-6 w-6"
                    src="https://storage.googleapis.com/a1aa/image/4edd764a-2893-4cde-2597-209dc184bccf.jpg"
                  />
                  <span className="font-semibold text-gray-900 text-[15px] leading-6">
                    Sisyphus
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
