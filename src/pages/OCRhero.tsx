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
            AI-Driven OCR Software & OCR API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Revolutionizing Verification: AI-Powered OCR Software by SprintVerify
          </h2>
          <p className="text-lg mb-4 text-white">
            As we become a part of the fintech landscape, we understand how businesses always search for means to streamline their verification process and enhance productivity.
          </p>
          <p className="mb-4 text-white">
            One such effective method is by leveraging AI-powered OCR API, which enables computers to read and interpret text from scanned documents or images.
          </p>
          <p className="mb-4 text-white">
            With SprintVerify’s technology, businesses can automate the verification process faster and more accurately than ever before.
          </p>
          <p className="mb-6 text-white">
            This robust technology allows you to scan and extract data from documents such as IDs, passports, invoices, and receipts — and verify the extracted information against predefined criteria.
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
