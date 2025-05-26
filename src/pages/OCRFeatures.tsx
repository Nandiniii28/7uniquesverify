import React from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

const OCRFeatures: React.FC = () => {
  const features = [
    {
      title: "Ease of Use",
      description:
        "SprintVerify’s AI-driven OCR Software is extremely user-friendly and easy to implement within your existing workflow. Simplify document verification without added complexity.",
      icon: <FaRegSmileWink className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Integration Capabilities",
      description:
        "OCR API can integrate seamlessly with your existing systems to optimize productivity, streamline workflows, and enable real-time collaboration across teams.",
      icon: <MdIntegrationInstructions className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Real-time Processing",
      description:
        "SprintVerify’s OCR API processes documents in real-time—delivering instant verification results. Make quicker decisions and increase efficiency at every step.",
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
            alt="AI OCR Software Illustration"
            className="w-full h-auto object-contain "
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Exploring the{" "}
            <span className="text-[#29a9c5]">Capabilities of </span>
            AI OCR Software API
          </h2>
          <p className="text-gray-600">
            SprintVerify’s AI OCR Software offers powerful capabilities for modern businesses. By automating document interpretation and verification, it enhances accuracy, efficiency, and integration in real-time.
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

