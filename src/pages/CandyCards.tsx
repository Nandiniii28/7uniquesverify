import React from "react";

const CandyReasons: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Top Reasons to Choose <span className="text-[#29a9c5]">CANDY</span> by 7Unique Verify
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/2302_i402_024_f_m004_c9_smartphone_data_protection_flat_composition.jpg"
              alt="Personalised Journey"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Personalized User Flow: The CANDY Advantage
            </h3>
            <p className="text-gray-600">
              CANDY by 7Unique Verify lets you design user experiences that adapt in real-time—offering dynamic, need-based journeys for your users and partners.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/5041145.jpg"
              alt="Trustworthy Efficiency"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Real-Time Accuracy: Built to Scale
            </h3>
            <p className="text-gray-600">
              CANDY delivers instant, verified results with every API call. It's reliable, scalable, and eliminates manual effort—trusted by modern Indian businesses.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="/img/freepik_br_2a54e175-a781-46e8-a102-8aaf0ab9f2b9 (1).png"
              alt="Reliable KYC Verification"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Hassle-Free KYC: Verified in Seconds
            </h3>
            <p className="text-gray-600">
              Say goodbye to bulk errors. With CANDY’s smart backend, you get fast KYC checks—saving you time, cost, and manual overhead for good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandyReasons;
