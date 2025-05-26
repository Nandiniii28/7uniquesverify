import React from "react";

const VarificationCards: React.FC = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
            <div className="max-w-full mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
                    Unlock Success: <span className="text-[#29a9c5]">SprintVerify's</span> Employment BGV Checks API
                </h2>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
                    {/* Block 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
                        <img
                            src="https://img.freepik.com/premium-vector/two-steps-verification-illustration-flat-design-illustration_108061-441.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                            alt="Personalised Journey"
                            className="w-full h-48 object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Seamless Integration
                        </h3>
                        <p className="text-gray-600">
                           Our Background Verification is designed for easy integration with your existing systems. With just a few lines of code, you can begin verifying employment BGV Verification information quickly and effortlessly.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
                        <img
                            src="https://img.freepik.com/premium-photo/3d-illustration-data-phishing-concept-hacker-cyber-criminals-phishing-stealing-private-personal-data-password-email-credit-card-online-scam-malware-password-phishing_68971-1744.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                            alt="Trustworthy Efficiency"
                            className="w-full h-48 object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Accurate and Reliable Data
                        </h3>
                        <p className="text-gray-600">
                            We, at SprintVerify, understand the significance of accurate and reliable data, especially regarding background checks and being your BGV Checks API provider, we prioritise and ensure that you receive up-to-date information from trusted sources, such as government websites. In short, we minimise your workload and provide you with accurate information promptly.
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
                        <img
                            src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-document-protection_516790-2134.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                            alt="Reliable KYC Verification"
                            className="w-full h-48 object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Prevent Fraud
                        </h3>
                        <p className="text-gray-600">
                            The institutions need to have secure processes when it comes to verifying identities and preventing fraudulent activity. With SprintVerify’s employment background Checks API, you can rest assured that you’re using a powerful tool that can detect and eliminate any false identities or fraudulent attempts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VarificationCards;

