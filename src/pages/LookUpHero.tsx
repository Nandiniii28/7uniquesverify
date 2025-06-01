import React from "react";

const LookUpHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Phone Number Lookup API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Real-Time Identity Checks via Mobile Number Lookup
          </h2>
          <p className="text-lg mb-4 text-white">
            Supercharge your verification process with <strong>SprintVerify’s Phone Number Lookup API</strong>. Instantly access accurate user data—like VPA, UAN, and telecom info—directly from a mobile number.
          </p>
          <p className="mb-4 text-white">
            Whether you're enabling secure payments, onboarding users, or personalizing messages, our API ensures accurate, fast, and secure data retrieval—giving your business the edge in customer engagement and fraud prevention.
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
            src="https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="Phone Number Lookup API Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LookUpHero;
