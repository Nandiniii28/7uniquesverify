import React from "react";

const LookUpCards: React.FC = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
            <div className="max-w-full mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
                    Why <span className="text-[#29a9c5]">SprintVerify's</span> Phone Number Lookup API Stands Out?
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
                            Effortless Identity Verification with Phone Number Lookup API
                        </h3>
                        <p className="text-gray-600">
                            Our Mobile Number Lookup API simplifies identity verification, offering a user-friendly interface for developers and end-users. Seamless integration ensures accurate verification, enhancing the overall user experience.
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
                            Fraud Prevention Through Mobile Number Lookup
                        </h3>
                        <p className="text-gray-600">
                            Institutions can rely on our Mobile Number Lookup process to prevent fake identities effectively. Our powerful API detects and eliminates fraudulent attempts, boosting security measures with confidence.
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
                            Accurate and Reliable Verification
                        </h3>
                        <p className="text-gray-600">
                            Our mobile number lookup process conducts individual identity verification by cross-referencing personal information with government agency records. This ensures accurate, trustworthy, and legally valid results, enhancing trust and compliance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LookUpCards;

