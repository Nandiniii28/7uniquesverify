import React from "react";

const FinancialHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Financial Checks API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Power Smarter Lending with 7Unique Verify’s Financial APIs
          </h2>
          <p className="text-lg mb-4 text-white">
            Looking to automate financial verification, reduce manual errors, and enhance decision-making?
          </p>
          <p className="mb-4 text-white">
            7Unique Verify’s Financial Checks API enables you to instantly retrieve and validate financial details like ITR, credit score, bank account info, and more.
          </p>
          <p className="mb-4 text-white">
            Whether you're a lender, NBFC, insurance company, or fintech startup — our API suite helps assess creditworthiness, minimize fraud risk, and stay compliant.
          </p>
          <p className="mb-6 text-white">
            Integrate in minutes. Make informed decisions. Go beyond legacy processes and unlock faster onboarding, safer underwriting, and seamless customer journeys.
          </p>
          <a
            href="#"
            className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-api-infographic_23-2149388657.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="Financial API Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FinancialHero;
