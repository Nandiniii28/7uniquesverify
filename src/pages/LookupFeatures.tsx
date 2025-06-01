import React from "react";
import { MdContactPhone } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";

const LookupFeatures: React.FC = () => {
  const features = [
    {
      title: "Smart Access to Verified User Data",
      description:
        "7Unique Verify’s Mobile Number Lookup API lets you fetch critical details like telecom info, UPI-linked VPAs, and UANs in seconds—perfect for real-time user profiling and onboarding checks.",
      icon: <MdContactPhone className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Boosted Identity & VPA Verification",
      description:
        "Easily validate phone numbers tied to financial credentials or employment IDs. Our API helps detect mismatches and block potential fraud before it affects your system.",
      icon: <RiShieldCheckLine className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Faster Operations with Better Accuracy",
      description:
        "Speed up customer verification, reduce transaction errors, and automate backend checks. Our API fits perfectly into your fintech, HRMS, or KYC stack without extra overhead.",
      icon: <HiOutlineAdjustments className="text-[#29a9c5] text-xl mr-2" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/online-translator-concept-illustration_114360-6613.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="Phone Number Lookup Features"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore the <span className="text-[#29a9c5]">Top Features of Mobile Lookup API</span>
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

export default LookupFeatures;
