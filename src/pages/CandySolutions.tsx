import React from "react";

type Feature = {
  title: string;
  icon: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Customizable UI",
    icon: "/img/user-experience.png",
    description:
      "CANDY lets you fully personalize the interface to reflect your brand identity—meeting both design goals and user journey expectations.",
  },
  {
    title: "Downtime Protection",
    icon: "/img/secure-data.png",
    description:
      "Built with resilience, CANDY ensures continuity with automatic fallbacks—your service stays live even when APIs face interruptions.",
  },
  {
    title: "Stronger Security",
    icon: "/img/encrypted.png",
    description:
      "With real-time threat monitoring, encryption, and MFA, CANDY by 7Unique Verify protects every transaction and user session end to end.",
  },
  {
    title: "Smoother Operations",
    icon: "/img/workflow.png",
    description:
      "Automate your identity workflows and reduce manual load. CANDY helps boost speed, accuracy, and internal efficiency.",
  },
];

const CandySolutions: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Stay Ahead of the Pack with
          <br />
          <span className="text-[#29a9c5]">Our CANDY Solution?</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="h-24 w-24 rounded-full outline outline-4 outline-offset-2 outline-[#29a9c5] flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CandySolutions;
