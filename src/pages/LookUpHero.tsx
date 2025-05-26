import React from "react";

const LookUpHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
           Phone Number Lookup API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
           Verify & Transform Customer Engagement with Phone Number Lookup APIs
          </h2>
          <p className="text-lg mb-4 text-white">
          Elevate your business's capabilities with SprintVerify's Mobile Number Lookup APIs, conducting initial checks to verify the identity and transform customer engagement. Now, Effortlessly access customer data with mobile number retrieval, enabling streamlined verifications, and enhanced communications.
          </p>
          <p className="mb-4 text-white">
          Now, you can Verify customer identities accurately, validate information from mobile numbers for secure payments, and deliver personalized messages with ease. Unlock the full potential of your business and stay ahead in today's dynamic digital landscape with SprintVerify's innovative Phone Number Lookup APIs.
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
            src="https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740" 
            alt="KYC Verification Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px]  lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LookUpHero;