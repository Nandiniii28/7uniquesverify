import React from "react";
import { MdContactPhone } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";

const LookupFeatures: React.FC = () => {
    const features = [
        {
            title: "Comprehensive Information Access",
            description:
                "Our Phone Number Lookup API provides detailed customer information, including telecom operator details, Virtual Payment Addresses (VPA), and Universal Account Numbers (UAN), empowering businesses to fetch comprehensive data access for improved decision-making and customer interactions.",
            icon: <MdContactPhone className="text-[#29a9c5] text-xl mr-2" />,
        },
        {
            title: "Enhanced Verification Processes",
            description:
                "Seamlessly integrate our API to elevate customer verification processes, ensuring accuracy and reducing the risk of fraudulent activities. Verify identities, validate mobile numbers linked to VPAs or UANs, and enhance security measures effortlessly.",
            icon: <RiShieldCheckLine className="text-[#29a9c5] text-xl mr-2" />,
        },
        {
            title: "Streamlined Operations",
            description:
                "Optimize payment transactions, improve communication services, and streamline operational workflows with our Phone Number Lookup API. Simplify processes, enhance efficiency, and stay competitive in today's dynamic business environment.",
            icon: <HiOutlineAdjustments className="text-[#29a9c5] text-xl mr-2" />,
        },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">

                <div className="w-full lg:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/online-translator-concept-illustration_114360-6613.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                        alt="KYC Verification Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Exploring the {" "}
                        <span className="text-[#29a9c5]">Phone Number Lookup API's Features</span>
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
