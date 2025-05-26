import React from "react";

const KycHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            KYC Verification API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            KYC API For Identity Verification Solutions - Ensuring Legitimacy, Building Trust
          </h2>
          <p className="text-lg mb-4 text-white">
            Verify a diverse array of identities to guarantee the legitimacy of your clients and users with our advanced KYC verification process. We provide comprehensive KYC solutions tailored to your needs.
          </p>
          <p className="mb-4 text-white">
            Our KYC API process goes beyond traditional methods, leveraging advanced technologies such as artificial intelligence and machine learning to ensure thorough and accurate identity verification.
          </p>
          <p className="mb-6 text-white">
            By analyzing a wide range of data points, document validation, and behavioural patterns, we can verify identities with a high degree of precision.
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
            src="/img/11671799_13146-removebg-preview.png" 
            alt="KYC Verification Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px]  lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default KycHero;

