import React from "react";

const FraudDetectionHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
           Fraud Detection API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
           Fraud Detection APIs: Enhancing Risk Management
          </h2>
          <p className="text-lg mb-4 text-white">
           Thoroughly assess potential partners, clients, and businesses with our Fraud Check API, enhancing risk management and ensuring comprehensive fraud prevention API solutions.
          </p>
          <p className="mb-4 text-white">
           Our Fraud Detection leverages advanced algorithms to provide in-depth assessments of potential partners, clients, and businesses. By analyzing a wide range of fraud indicators, including transactional patterns, behavioural anomalies, and historical data, our API enhances risk management strategies and enables businesses to detect and prevent fraudulent activities effectively.
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
            src="https://img.freepik.com/free-vector/virtual-machines-operating-system-data-storage_335657-3133.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740" 
            alt="KYC Verification Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px]  lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FraudDetectionHero;