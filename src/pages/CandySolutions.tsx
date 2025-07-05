import React from "react";
import { motion } from "framer-motion";

const CandySolutions: React.FC = () => {
  const features = [
    {
      title: "Customizable UI",
      description: "CANDY lets you fully personalize the interface to reflect your brand identity—meeting both design goals and user journey expectations.",
      icon: "/img/user-experience.png"
    },
    {
      title: "Downtime Protection",
      description: "Built with resilience, CANDY ensures continuity with automatic fallbacks—your service stays live even when APIs face interruptions.",
      icon: "/img/secure-data.png"
    },
    {
      title: "Stronger Security",
      description: "With real-time threat monitoring, encryption, and MFA, CANDY by 7Unique Verify protects every transaction and user session end to end.",
      icon: "/img/encrypted.png"
    },
    {
      title: "Smoother Operations",
      description: "Automate your identity workflows and reduce manual load. CANDY helps boost speed, accuracy, and internal efficiency.",
      icon: "/img/workflow.png"
    }
  ];

  return (
    <section className="relative pt-20 pb-5 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f9f9f9]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#f9f0eb]/30 to-[#f3f8fb]/30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#b7603d]/10 rounded-full filter blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#f3e8e3] text-[#b7603d] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Competitive Edge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Stay Ahead of the Pack with <br />
            <span className="text-[#b7603d]">Our CANDY Solution?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how CANDY gives your business the advantage in verification technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#b7603d]/20">
                <div className="flex flex-col items-center text-center">
                  {/* Icon with gradient background */}
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-[#f9f0eb] to-[#f3f8fb]">
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  {/* Animated underline */}
                  <div className="w-12 h-1 bg-[#b7603d] rounded-full mt-auto transition-all group-hover:w-16"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandySolutions;