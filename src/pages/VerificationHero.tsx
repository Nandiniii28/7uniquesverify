import React from "react";

const VerificationHero: React.FC = () => {
    return (
        <section
            className="w-full bg-cover bg-center min-h-screen flex items-center"
            style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
            <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left: Text content */}
                <div className="w-full md:w-2/3 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Employee Background Verification API
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                        Harness the Power of Background Verification Company: Now Hire Trusted Candidates with Employee Background Verification API
                    </h2>
                    <p className="text-lg mb-4 text-white">
                        Welcome to the forefront of employee screening and trust-building with our cutting-edge background verification API.
                        As a leading background verification API Provider, we offer comprehensive BGV checks services that encourage businesses to hire trusted candidates with confidence. With SprintVerify, you can harness the power of reliable data and streamline your hiring process with our advanced Employee background verification API.
                    </p>
                    <p className="mb-4 text-white">
                        In today’s cutthroat market, businesses cannot afford to make hiring mistakes. That is where the Employment Background Check API comes to the rescue. It is a must-have tool that enables you to manage your hiring process efficiently, giving you peace of mind and helping you make informed & reliable decisions with our leading-edge API.

                    </p>
                    <p className="mb-6 text-white">
                        Sounds interesting?
                        Now, boost your hiring process with SprintVerify’s Background Verification API. To elaborate, our solution offers unparalleled accuracy, speed, and security while empowering your HR team to conduct thorough pre-employee background Verification with ease.
                        Trust SprintVerify to enhance your HR operations and build a workforce you can rely on.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
                    >
                        Get Started
                    </a>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://img.freepik.com/premium-vector/summer-flat-illustration-beachfront-with-umbrellas-beach-gear_428731-153.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                        alt="KYC Verification Illustration"
                        className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px]  lg:max-w-[700px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default VerificationHero;
