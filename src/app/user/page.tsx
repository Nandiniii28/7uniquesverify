import type React from "react"

const UserPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">User Management System</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Comprehensive User Identity & Access Management
            </h2>
            <p className="text-lg mb-4 text-white">
              Manage user identities and access controls with our comprehensive User Management System. Streamline user
              onboarding, authentication, and profile management processes.
            </p>
            <p className="mb-4 text-white">
              Our system provides secure user registration, profile verification, role-based access control, and
              comprehensive user lifecycle management capabilities.
            </p>
            <p className="mb-6 text-white">
              Ideal for enterprises, SaaS platforms, and any application requiring robust user management and identity
              verification solutions.
            </p>
            <a
              href="#"
              className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
            >
              Get Started
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/user-management-concept-illustration_114360-1234.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="User Management"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserPage
