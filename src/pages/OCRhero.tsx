import React from "react";

const OCRHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered OCR Software & API by 7Unique Verify
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Faster. Smarter. Automated Verification at Scale.
          </h2>
          <p className="text-lg mb-4 text-white">
            At 7Unique Verify, we empower businesses with next-gen OCR solutions that simplify data extraction and document verification across KYC, banking, HR, and compliance workflows.
          </p>
          <p className="mb-4 text-white">
            Our AI-driven OCR API reads and interprets scanned documents, transforming raw images into structured, searchable, and verified data — all in real time.
          </p>
          <p className="mb-4 text-white">
            From IDs and passports to invoices and bank statements, automate your document processing with unmatched speed, accuracy, and reliability.
          </p>
          <p className="mb-6 text-white">
            Join the leading businesses that trust 7Unique Verify to streamline onboarding, boost compliance, and cut operational delays.
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
            src="https://img.freepik.com/free-vector/application-programming-interface-concept-set-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-2579.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="OCR API Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OCRHero;
