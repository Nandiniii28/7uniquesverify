import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdSecurity } from "react-icons/md";
import { BiPlug } from "react-icons/bi";

const FraudFeatures: React.FC = () => {
  const features = [
    {
      title: "Reliable Documentation",
      description:
        "With 7Unique Verify’s fraud indicators, keep your user, partner, or vendor records verified and consistently updated. From onboarding to audits, maintain compliance with dependable and tamper-free documentation.",
      icon: <HiOutlineDocumentText className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Built-in Financial Safety",
      description:
        "Stop fraud before it happens. Use 7Unique Verify’s APIs to flag suspicious user data and prevent risky transactions in real-time—ensuring your platform stays secure and financially protected.",
      icon: <MdSecurity className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Plug & Play Integration",
      description:
        "Our APIs are developer-friendly and quick to integrate. Whether you use legacy systems or new tech stacks, 7Unique Verify fits right in—without interrupting your workflow.",
      icon: <BiPlug className="text-[#29a9c5] text-xl mr-2" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-infographic_23-2149383349.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="Fraud Check Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Safeguard Your Business:{" "}
            <span className="text-[#29a9c5]">Why 7Unique Verify for Fraud Indicators API</span>
          </h2>

          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                {feature.icon}
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FraudFeatures;
