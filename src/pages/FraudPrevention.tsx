import React from "react";

const FraudPrevention: React.FC = () => {
  return (
    <section className="bg-white pb-10 pt-8 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    
        <div className="w-full lg:w-1/2 order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Leveraging Cutting-Edge APIs for <span className="text-[#29a9c5]">Fraud Prevention</span>
          </h2>
          
          <p className="text-gray-600 mb-4">
            By leveraging our fraud prevention APIs, businesses can enhance their fraud detection capabilities and mitigate transaction risks effectively. Our comprehensive suite of APIs offers a reliable and scalable solution for businesses looking to safeguard against fraudulent activities.
          </p>
          
         
        </div>

        <div className="w-full lg:w-1/2 order-2 flex justify-center">
          <img
            src="/img/20943595.jpg" 
            alt="CANDY Use Cases"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FraudPrevention;