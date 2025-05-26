import React from "react";

const CandyReasons: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Top Reasons to Opt for <span className="text-[#29a9c5]">CANDY</span>
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
              Personalised Journey: The CANDY Difference
            </h3>
            <p className="text-gray-600">
              CANDY empowers your business to craft tailored experiences for both users and partners by dynamically adjusting the interaction based on unique preferences, needs, and behaviours.
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
              Trustworthy Efficiency: Enhancing Solutions with CANDY
            </h3>
            <p className="text-gray-600">
              Our API is built with a robust and reliable platform, ensuring accurate & verified results in real-time. Say goodbye to manual errors and trust in our API’s precise ID verification process.
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
              Reliable KYC Verification: Efficiency at its Best
            </h3>
            <p className="text-gray-600">
              With CANDY, you can save significant time and resources—no more manual data entry or cross-checking multiple sources for bulk verification. Our API delivers quick and accurate results, allowing you to focus on more critical tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandyReasons;

