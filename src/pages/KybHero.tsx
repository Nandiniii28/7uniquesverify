import React from "react";

const KybHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
          KYB Verification API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
          Enhance Business Verification with Advanced KYB Solutions
          </h2>
          <p className="text-lg mb-4 text-white">
           Enhance risk management by thoroughly assessing potential partners, clients, and businesses before integration with our comprehensive KYB solutions. As a trusted KYB service provider, we offer the best KYB check API to ensure the security and integrity of your business relationships.
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
            src="/img/recruit-agent-analyzing-candidates.png" 
            alt="KYC Verification Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default KybHero;
