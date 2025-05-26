import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdSecurity } from "react-icons/md";
import { BiPlug } from "react-icons/bi";



const FraudFeatures: React.FC = () => {
    const features = [
        {
            title: "Robust Documentation",
            description:
                "Ensure accurate and reliable documentation for all users onboarded onto your system with the Fraud Check. Whether it's businesses, partners, or end-users, your documentation system remains robust and up-to-date, enhancing compliance and reducing risks associated with inaccurate information.",
            icon: <HiOutlineDocumentText className="text-[#29a9c5] text-xl mr-2" />,
        },
        {
            title: "Ensuring Financial Security",
            description:
                "Identify users with incorrect or fraudulent details using SprintVerify’s Fraud Check API and take proactive measures to block transactions, preventing financial damage and safeguarding your system against fraudulent activities. This proactive approach helps maintain the integrity of your financial processes and protects your business from potential losses.",
            icon: <MdSecurity className="text-[#29a9c5] text-xl mr-2" />,
        },
        {
            title: "Effortless Integration",
            description:
                "Easily integrate our Fraud Check API into your existing systems and workflows for seamless fraud prevention processes. Our API offers a user-friendly interface and hassle-free integration.",
            icon: <BiPlug className="text-[#29a9c5] text-xl mr-2" />,
        },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">

                <div className="w-full lg:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-infographic_23-2149383349.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                        alt="KYC Verification Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Safeguard Your Business:{" "}
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

export default FraudFeatures;
