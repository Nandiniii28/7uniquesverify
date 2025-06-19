import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiShield, FiFileText, FiZap } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";

const FraudFeatures: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      title: "Reliable Documentation",
      description:
        "With 7Unique Verify's fraud indicators, keep your user, partner, or vendor records verified and consistently updated. From onboarding to audits, maintain compliance with dependable and tamper-free documentation.",
      icon: <FiFileText className="text-[#8B5A2B] text-2xl" />,
      bgColor: "bg-[#F8F3EE]",
    },
    {
      title: "Built-in Financial Safety",
      description:
        "Stop fraud before it happens. Use 7Unique Verify's APIs to flag suspicious user data and prevent risky transactions in real-time—ensuring your platform stays secure and financially protected.",
      icon: <FiShield className="text-[#8B5A2B] text-2xl" />,
      bgColor: "bg-[#F1ECE8]",
    },
    {
      title: "Plug & Play Integration",
      description:
        "Our APIs are developer-friendly and quick to integrate. Whether you use legacy systems or new tech stacks, 7Unique Verify fits right in—without interrupting your workflow.",
      icon: <FiZap className="text-[#8B5A2B] text-2xl" />,
      bgColor: "bg-[#F5EFEB]",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#FAF7F5] py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative">
              <img
                src="https://img.freepik.com/free-vector/secure-data-concept-illustration_114360-8966.jpg?w=1380&t=st=1700000000~exp=1700000600~hmac=abc123"
                alt="Fraud Protection Illustration"
                className="w-full h-auto object-contain rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block"
              >
                <div className="flex items-center">
                  <div className="bg-[#8B5A2B] p-2 rounded-full mr-3">
                    <MdSecurity className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Real-time Alerts</p>
                    <p className="text-sm text-gray-600">Fraud detection</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div>
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#8B5A2B] font-medium uppercase tracking-wider text-sm"
              >
                Fraud Prevention
              </motion.span>
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight"
              >
                Secure Your Business with{" "}
                <span className="text-[#8B5A2B]">Advanced Protection</span>
              </motion.h2>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mt-4"
              >
                7Unique Verify provides cutting-edge fraud detection to safeguard
                your operations and maintain trust with your customers.
              </motion.p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl ${feature.bgColor} transition-all duration-300 hover:shadow-md border border-transparent hover:border-[#8B5A2B]/30`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-[#8B5A2B]/10">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FraudFeatures;