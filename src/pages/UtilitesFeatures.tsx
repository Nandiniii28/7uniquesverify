import React from "react";

const UtilitiesOverview: React.FC = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149392285.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                        alt="Utilities API Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Elevating Efficiency:{" "}
                        <span className="text-[#4a90e2]">
                            Real-world Applications
                        </span>{" "}
                        of Our Utilities API
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our Utilities API caters to a diverse range of industries—financial institutions, e-commerce platforms, logistics and supply chains, telecommunications, and more. It delivers tailored, reliable, and scalable solutions that streamline operations, enhance compliance, and improve overall workflow automation.
                    </p>
                    <p className="text-gray-600">
                        Whether you're verifying customer identities, validating data in real time, or ensuring regulatory compliance, the Utilities API is built to integrate seamlessly and operate efficiently across critical business functions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UtilitiesOverview;
