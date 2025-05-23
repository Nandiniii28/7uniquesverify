export default function ContactUsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-16 mb-20">
      {/* Contact Us heading */}
      <section className="text-center max-w-2xl mx-auto mb-16 relative">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 relative z-10 inline-block">
          Contact Us
        </h1>
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 grid-rows-4 gap-6 opacity-10 pointer-events-none select-none"
          style={{ color: "#00C853" }}
        >
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border border-gray-300 rounded-sm" />
          ))}
        </div>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-md mx-auto relative z-10">
          We are passionate about transforming the way businesses communicate.
          Specializing in VOIP, telecom.
        </p>
      </section>

      {/* Get in Touch form */}
      <section
        aria-label="Get in Touch form"
        className="bg-[#F4FAFF] rounded-xl p-8 max-w-5xl mx-auto mb-16 relative"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Get in Touch
        </h2>
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 grid-rows-4 gap-6 opacity-10 pointer-events-none select-none"
          style={{ color: "#00C853" }}
        >
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border border-gray-300 rounded-sm" />
          ))}
        </div>
        <form className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <input
              className="flex-1 rounded-md border border-gray-200 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Name*"
              required
              type="text"
            />
            <input
              className="flex-1 rounded-md border border-gray-200 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter Email*"
              required
              type="email"
            />
          </div>
          <input
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Mobile No."
            type="tel"
          />
          <textarea
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Example Text"
            rows={4}
          ></textarea>
          <button
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-xs rounded-full px-5 py-2"
            type="submit"
          >
            Submit Now
          </button>
        </form>
      </section>

      {/* Contact information */}
      <section
        aria-label="Contact information"
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
      >
        {[
          {
            iconPath1: "bi bi-geo-alt-fill",
            label: "Location:",
            value: "saaszf@gmail.com",
          },
          {
            iconPath1: "bi bi-envelope-fill",
            label: "Email address:",
            value: "zaivoip@gmail.com",
          },
          {
            iconPath1: "bi bi-telephone-fill",
            label: "Phone number:",
            value: "(800) 555-0175 5934",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#F4FAFF] rounded-xl p-6 flex flex-col items-start space-y-4"
          >
            <i className={`${item.iconPath1} text-xl text-blue-500`}></i>
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">{item.label}</p>
              <p className="font-bold text-xs">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Start Your Journey section */}
      <section
        aria-label="Start Your Journey call to action"
        className="bg-[#F4FAFF] rounded-xl p-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 relative"
      >
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-3">
            Start Your Journey
            <br />
            With our team.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mb-6">
            We are passionate about transforming the way businesses communicate.
            Specializing in VOIP, telecom.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-xs rounded-full px-5 py-2">
            Get Started
          </button>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-sm">
          <img
            alt="Call Report graph with green line chart and partial face of a person wearing a headset"
            className="rounded-lg shadow-lg"
            height="120"
            width="320"
            src="https://storage.googleapis.com/a1aa/image/88cc44c8-612d-48e8-aa67-258f3a67233e.jpg"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 grid-rows-4 gap-6 opacity-10 pointer-events-none select-none"
          style={{ color: "#00C853" }}
        >
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border border-gray-300 rounded-sm" />
          ))}
        </div>
      </section>
    </main>
  );
}
