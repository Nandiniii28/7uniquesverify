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
          Transform Your Financial Services with SprintVerify's Financial Checks API 
          </h2>
          <p className="text-lg mb-4 text-white">
           Are you looking to streamline your financial services and provide tailored solutions for your customers?
          </p>
          <p className="mb-4 text-white">
            Look no further than SprintVerify’s Financial Checks API.
          </p>
          <p className="mb-4 text-white">
            SprintVerify’s powerful tool allows you to quickly and easily verify vital financial information, such as account balances, transaction history, and more. 
          </p>
           <p className="mb-6 text-white">
           SprintVerify’s Financial Checks API is an effective solution for businesses that seek to ensure the completeness and accuracy of their customer’s financial information. It is by integrating this API into your existing systems, that you can fast-track the process of gathering and verifying the financial data, while also enjoying enhanced decision-making and reduced risk. Well, Don’t let outdated manual processes hold you back. Take advantage of the Best Credit Score Check API and revolutionise your financial services. Sounds too good to be true? Wait until you unlock the magic of Best Financial Checks API.
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
            alt="KYC Verification Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px]  lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FinancialHero;

