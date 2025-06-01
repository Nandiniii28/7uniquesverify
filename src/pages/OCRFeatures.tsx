import React from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

const OCRFeatures: React.FC = () => {
  const features = [
    {
      title: "Effortless to Use",
      description:
        "7Unique Verify’s AI-based OCR tool is designed for simplicity. Whether you're automating KYC or onboarding users, it integrates smoothly without complicating your workflow.",
      icon: <FaRegSmileWink className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Seamless Integration",
      description:
        "Easily plug into your current system or app. Our OCR API supports fast integration, helping businesses speed up operations and reduce manual errors instantly.",
      icon: <MdIntegrationInstructions className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Real-Time Document Processing",
      description:
        "Get instant results with 7Unique Verify’s OCR API. Upload documents, extract data, and verify information in seconds — all with industry-grade accuracy.",
      icon: <AiOutlineThunderbolt className="text-[#29a9c5] text-xl mr-2" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="AI OCR Document Automation"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Unlocking the <span className="text-[#29a9c5]">Power of AI-Driven OCR</span> with 7Unique Verify
          </h2>
          <p className="text-gray-600">
            Our advanced OCR API automates the extraction of data from identity documents, bank statements, and cheques. Designed for speed, accuracy, and compliance — it’s the smarter way to handle verifications.
          </p>

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

export default OCRFeatures;
