import React from "react";
import { RiShieldKeyholeLine } from "react-icons/ri";  // For Enhanced Security
import { FaBalanceScale } from "react-icons/fa";       // For Compliance
import { FiSettings } from "react-icons/fi";



const FinancialFeatures: React.FC = () => {
    const features = [
        {
            title: "Enhanced Security",
            description:
                "SprintVerify’s API provides an extra layer of security to protect your financial transactions from fraud and unauthorised access. With advanced encryption and authentication protocols, you can trust that your data is secure at every step of the transaction process.",
            icon: <RiShieldKeyholeLine className="text-[#29a9c5] text-xl mr-2" />,
        },
        {
            title: "Compliance",
            description:
                "Ensure that your transactions comply with regulatory requirements, reducing the risk of costly penalties. Being the Financial Checks API  provider, SprintVerify’s API is equipped with built-in compliance checks and reporting features, helping you stay ahead of the changing regulations and easily maintain compliance.",
            icon: <FaBalanceScale className="text-[#29a9c5] text-xl mr-2" />,
        },
        {
            title: "Effortless Integration",
            description:
                "Easily integrate our Fraud Indicators API into your existing systems and workflows for seamless fraud prevention processes. Our API offers a user-friendly interface and hassle-free integration.",
            icon: <FiSettings className="text-[#29a9c5] text-xl mr-2" />,
        },

    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">

                <div className="w-full lg:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/hand-drawn-cardano-illustration_23-2149214816.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                        alt="KYC Verification Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Unveiling the Power of Financial Checks API: {" "}
                        <span className="text-[#29a9c5]">Choosing SprintVerify's for Fraud Indicators API</span>
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

export default FinancialFeatures;
