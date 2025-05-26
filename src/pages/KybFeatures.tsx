import React from "react";
import { FaShieldAlt, FaCheckCircle, FaLaptop } from "react-icons/fa";

const KybFeatures: React.FC = () => {
  const features = [
    {
      title: "Safeguarding Against Risks",
      description:
        "Our KYB Business Verification service is designed to verify the authenticity and legitimacy of businesses, allowing organisations to mitigate risks effectively. By conducting comprehensive checks, we ensure that businesses adhere to regulatory requirements and industry standards, providing peace of mind to stakeholders.",
      icon: <FaShieldAlt className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Ensuring Compliance and Trustworthiness",
      description:
        "With our KYB Check API service, organisations can conduct thorough checks on potential partners and clients. By verifying key business information, ownership details, and regulatory compliance, we help businesses make informed decisions and maintain trustworthiness within their networks.",
      icon: <FaCheckCircle className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Seamless Digital Solutions for Enhanced Security",
      description:
        "As a leading eKYB service provider, we offer seamless digital solutions that prioritise convenience and security. Our platform streamlines the KYB process, enabling businesses to verify identities, assess risk factors, and onboard customers efficiently. By leveraging advanced technology and data analytics, we deliver reliable KYB API services that meet the evolving needs of modern businesses.",
      icon: <FaLaptop className="text-[#29a9c5] text-xl mr-2" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">

        <div className="w-full lg:w-1/2">
          <img
            src="/img/Data_security_05.jpg"
            alt="KYB Verification Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us:{" "}
            <span className="text-[#29a9c5]">
              Unmatched solutions by SprintVerify&apos;s KYB Verification
            </span>
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

export default KybFeatures;
