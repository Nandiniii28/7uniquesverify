import { motion } from "framer-motion";
import { useEffect } from 'react';
import AOS from 'aos';
export default function HomeServices() {
  const services = [
    { icon: "fas fa-money-check-alt", label: "Hosted VOIP Solutions" },
    { icon: "fas fa-phone-alt", label: "Unified Communications" },
    { icon: "fas fa-server", label: "SIP Trunking Services" },
    { icon: "fas fa-fax", label: "Virtual Phone Numbers" },
  ];
useEffect(() => {
  AOS.init({
    duration: 800, 
    once: false,  
  });
}, []);
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        <div>
          <p className="text-xs font-semibold text-gray-600 mb-1">OUR SERVICES</p>
          <h2 className="text-3xl font-semibold leading-tight max-w-md mb-6">
          Customized Identity Verification Services for Every Business Need.

          </h2>
          <p className="text-gray-600 max-w-sm" data-aos="zoom-in">
          We specialize in delivering innovative identity verification and compliance solutions designed to streamline the way businesses onboard, verify, and build trust.

          </p>

          <div className="mt-10 space-y-4 max-w-md">
            {services.map((service, index) => (
              <ServiceButton
                key={index}
                icon={service.icon}
                label={service.label}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        <div>
          <div
            className="bg-blue-50 rounded-2xl p-6 flex justify-center items-center"
            data-aos="fade-left"
          >
            <img
              alt="Laptop screen"
              className="rounded-2xl max-w-full h-auto"
              src="/img/laptop.png"
              width="720"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceButtonProps = {
  icon: string;
  label: string;
  delay: number;
};

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, label, delay }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      }}
      whileHover={{ scale: 1.05 }}
      className="details-flex w-full rounded-xl py-4 px-6 font-semibold flex items-center justify-between transition duration-300 shadow-sm bg-gradient-to-r from-[#2dc1e3] to-[#6de4ff] text-white"
    >
      <span className="flex items-center gap-3">
        <i className={`${icon} text-lg`}></i>
        {label}
      </span>
      <i className="fas fa-chevron-right"></i>
    </motion.button>
  );
};

