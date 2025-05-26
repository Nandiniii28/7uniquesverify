const testimonials = [
  {
    name: 'Rohan Mehta',
    location: 'Mumbai, India',
    role: 'Operations Head, Fintech Startup',
    quote:
      "7UniqueVerify's seamless API integration has streamlined our KYC process. It's like having a digital compliance officer—fast, reliable, and always on point.",
    rating: 5,
  },
  {
    name: 'Anjali Verma',
    location: 'Delhi, India',
    role: 'HR Manager',
    quote:
      "Verifying employee documents is now effortless. 7UniqueVerify helps us onboard faster while staying fully compliant. It’s a must-have for modern HR teams.",
    rating: 5,
  },
  {
    name: 'Manish Gupta',
    location: 'Bangalore, India',
    role: 'CTO, Lending Platform',
    quote:
      "Real-time verification with 7UniqueVerify has drastically reduced our fraud rates. The tech is solid and support is responsive. Highly recommended.",
    rating: 5,
  },
];


function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center mb-2">
      {Array.from({ length: count }, (_, i) => (
        <img key={i} src="https://ext.same-assets.com/1049470090/2819598892.svg" alt="star" className="h-5 w-5 inline mr-1" />
      ))}
    </div>
  );
}

export default function HomeTestimonials() {
  return (
    <section className="bg-white py-16 section our-process">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#373533] mb-4 text-center">Real Stories from Satisfied Customers.</h2>
        <p className="text-lg text-[#9c9e99] text-center mb-10 max-w-2xl mx-auto">Our clients’ satisfaction is at the heart of everything we do. We take pride in delivering exceptional communication.</p>
        {/* Stars rating summary */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center mb-10">
          <img src="https://ext.same-assets.com/1049470090/3862656254.svg" alt="Rating Big Star" className="h-6 mr-1" />
          <span className="text-[#373533] font-bold text-lg mr-1">4.8/5</span>
          <img src="https://ext.same-assets.com/1049470090/3058743214.svg" alt="star small" className="h-4 w-4 mr-1" />
          <img src="https://ext.same-assets.com/1049470090/3058743214.svg" alt="star small" className="h-4 w-4 mr-1" />
          <span className="text-[#9c9e99] ml-1">Based on 14K+ reviews</span>
        </div>
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#ffffff] p-8 rounded-lg shadow-sm flex flex-col items-start border border-[#e7e7eb]">
              <Stars count={t.rating} />
              <blockquote className="text-base text-[#373533] mb-4">“{t.quote}”</blockquote>
              <div className="mt-auto">
                <div className="font-bold text-[#373533]">{t.name}</div>
                {t.role && <div className="text-sm text-[#9c9e99]">{t.role}</div>}
                {t.location && <div className="text-sm text-[#9c9e99]">{t.location}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
