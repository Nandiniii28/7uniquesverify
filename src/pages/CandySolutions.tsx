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
      "CANDY offers a flexible front-end design feature, allowing you to tailor the interface to align perfectly with your branding and meet your UI/UX requirements.",
  },
  {
    title: "Downtime Protection",
    icon: "/img/secure-data.png",
    description:
      "With CANDY, your users are guaranteed a seamless experience, thanks to automated fallback options, which ensure uninterrupted service even during API downtimes.",
  },
  {
    title: "Stronger Security",
    icon: "/img/encrypted.png",
    description:
      "Security is our top priority. With advanced encryption and multi-factor authentication, CANDY keeps your data safe and secure while monitoring for real-time threats.",
  },
  {
    title: "Smoother Operations",
    icon: "/img/workflow.png",
    description:
      "By automating repetitive tasks and eliminating manual processes, CANDY enhances productivity and operational efficiency across your organization.",
  },
];

const CandySolutions: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
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
