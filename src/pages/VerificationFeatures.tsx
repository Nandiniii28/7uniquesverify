import React from "react";
import { FaUserCheck, FaChartLine, FaShieldAlt } from "react-icons/fa";

const VerificationFeatures: React.FC = () => {
    const features = [
        {
            title: "Elevate Verification Accuracy",
            description: "Our Employment Background Screening API provides accurate and current data on employment history, credentials, and education—helping you steer clear of candidates who misrepresent qualifications or experience.",
            icon: <FaUserCheck className="text-white text-2xl" />,
            bgColor: "bg-gradient-to-br from-[#b7603d] to-[#d47a4a]"
        },
        {
            title: "Boost Efficiency and Cut Costs",
            description: "Automate your background screening process to save time and resources. Speed up hiring and onboard qualified candidates quickly with a streamlined pre-employment verification workflow.",
            icon: <FaChartLine className="text-white text-2xl" />,
            bgColor: "bg-gradient-to-br from-[#9c4d2f] to-[#b7603d]"
        },
        {
            title: "Minimize Risk & Strengthen Verification",
            description: "Avoid costly mistakes and reduce fraud by leveraging our BGV API. Ensure trustworthy, compliant hiring by mitigating legal and reputational risks.",
            icon: <FaShieldAlt className="text-white text-2xl" />,
            bgColor: "bg-gradient-to-br from-[#d47a4a] to-[#e8915e]"
        }
    ];

    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Transform Your Hiring With Our{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b7603d] to-[#e8915e]">
                            Verification API
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Advanced technology for smarter, safer, and faster employment verification.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 ${feature.bgColor.replace("bg-gradient-to-br", "bg-gradient-to-r")}`}></div>
                            <div className="bg-white p-8 pt-12 h-full">
                                <div className={`${feature.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6 transform group-hover:-translate-y-1 transition-all duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                                <div className="mt-6">
                                    <div className="w-8 h-0.5 bg-[#b7603d]"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gradient-to-r from-[#b7603d] to-[#e8915e] rounded-2xl p-0.5">
                    <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Ready to streamline your hiring process?
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Integrate our verification API in minutes and start making better hiring decisions today.
                            </p>
                            <button className="bg-gradient-to-r from-[#b7603d] to-[#e8915e] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                                Request a Demo
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <img 
                                src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg" 
                                alt="Team collaboration"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerificationFeatures;