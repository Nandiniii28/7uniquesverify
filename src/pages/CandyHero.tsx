export default function CandyHero() {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left text section */}
        <div className="md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CANDY – Identity as a Service
          </h1>
          <p className="text-lg text-white mb-4">
            Elevate Your Identity Management with AI-Powered IDaaS. CANDY simplifies your identity verification processes like never before.
          </p>
          <p className="mb-4 text-white">
            As a cutting-edge Identity Gateway, it offers customizable workflows and smooth compliance solutions while granting access to over <strong>100+ Identity checks</strong>.
          </p>
          <p className="mb-4 text-white">
            With its no-code approach, CANDY ensures ease of use, promising accuracy and reliability. Whether it's banking or HRM onboarding, it reduces delays in verification processes.
          </p>
          <p className="mb-4 text-white">
            Compliance with industry standards is non-negotiable—CANDY makes it effortless with autonomous workflows tailored to your needs.
          </p>
          <p className="mb-6 text-white">
            We deliver tailored solutions that streamline your business use cases while increasing customer conversion rates.
          </p>
          <a
            href="#"
            className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Right image section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/endpoint-concept-illustration_114360-2583.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="CANDY Hero Banner"
            className="w-[90%] md:w-[120%] max-w-none h-auto"
          />
        </div>
      </div>
    </section>
  );
}
