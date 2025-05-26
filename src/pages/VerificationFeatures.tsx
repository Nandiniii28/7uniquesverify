import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const VerificationFeatures: React.FC = () => {
    const features = [
        {
            title: "Elevate Verification Accuracy",
            description:
                "Employment Background Screening API provides accurate and current data on employment history, credentials, and education—helping you steer clear of candidates who misrepresent qualifications or experience.",
            icon: <FaUserCheck className="text-[#4a90e2] text-xl mr-2" />,
        },
        {
            title: "Boost Efficiency and Cut Costs",
            description:
                "Automate your background screening process to save time and resources. Speed up hiring and onboard qualified candidates quickly with a streamlined pre-employment verification workflow.",
            icon: <BsGraphUpArrow className="text-[#4a90e2] text-xl mr-2" />,
        },
        {
            title: "Minimise Risk & Strengthen Background Verification",
            description:
                "Avoid costly mistakes and reduce fraud by leveraging our BGV API. Ensure trustworthy, compliant hiring by mitigating legal and reputational risks.",
            icon: <AiOutlineSafetyCertificate className="text-[#4a90e2] text-xl mr-2" />,
        },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">

                <div className="w-full lg:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/recruitment-agency-abstract-concept_335657-3876.jpg?size=626&ext=jpg&ga=GA1.1.1350022135.1716399872&semt=ais"
                        alt="Background Verification Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Exploring the{" "}
                        <span className="text-[#4a90e2]">Capabilities of </span>
                        Employee Background Verification API
                    </h2>
                    <p className="text-gray-600">
                        The Employee Background Verification Screening API is a cutting-edge solution for businesses seeking dependable hiring insights. It integrates advanced technology for fast, accurate, and compliant verifications—making the hiring process smoother and more reliable.
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

export default VerificationFeatures;
