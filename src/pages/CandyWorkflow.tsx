import React from "react";
import { motion } from "framer-motion";
import { 
  PencilSquareIcon, 
  UserPlusIcon, 
  IdentificationIcon,
  ArrowPathIcon
} from "@heroicons/react/24/solid";

const CandyWorkflow: React.FC = () => {
  const steps = [
    {
      icon: <PencilSquareIcon className="w-5 h-5" />,
      title: "Create",
      description: "Design a verification flow as per your business logic. CANDY allows you to control how each API step behaves—customized for your onboarding, KYC, or vendor screening process."
    },
    {
      icon: <UserPlusIcon className="w-5 h-5" />,
      title: "Assign",
      description: "Assign the process to users, customers, or candidates. They complete the journey independently—no manual follow-ups or repetitive tasks needed."
    },
    {
      icon: <IdentificationIcon className="w-5 h-5" />,
      title: "Verify IDs",
      description: "As users complete the flow, results sync back to your dashboard instantly. Make real-time onboarding decisions—fast, compliant, and secure."
    },
    {
      icon: <ArrowPathIcon className="w-5 h-5" />,
      title: "Automate",
      description: "Set up rules for automatic approvals or escalations based on verification results, reducing manual review workload."
    }
  ];

  return (
    <section className="relative pt-20 pb-5 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-[#fcf9f7] to-[#f3f8fb] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f9f0eb] rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white text-[#b7603d] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            Smart Automation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The <span className="text-[#b7603d]">CANDY</span> Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How Does CANDY Automate Workflow for Your Business?
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Image with floating stats - Now on the left */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex items-center order-1"
          >
            <div className="relative w-full">
              <img
                src="/img/worksflow.jpg"
                alt="Workflow Illustration"
                className="w-full h-auto rounded-2xl shadow-2xl border-8 border-white"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">Results You'll Love</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f9f0eb] p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#b7603d]">70%</div>
                    <div className="text-xs text-gray-600">Faster Onboarding</div>
                  </div>
                  <div className="bg-[#f3f8fb] p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#b7603d]">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps with connecting lines - Now on the right */}
          <div className="lg:w-1/2 order-2">
            <div className="relative h-full">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#b7603d] via-[#b7603d] to-[#b7603d]"></div>
              
              <div className="space-y-8 pl-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -left-12 top-0 h-8 w-8 rounded-full bg-[#b7603d] flex items-center justify-center shadow-md">
                      <div className="text-white">
                        {step.icon}
                      </div>
                      <span className="absolute -right-2 -top-2 bg-white text-[#b7603d] text-xs font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-[#b7603d]">
                        {index + 1}
                      </span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#b7603d]/30 transition-all">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandyWorkflow;