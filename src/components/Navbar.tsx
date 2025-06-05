import { Link, useLocation } from "react-router-dom";
import { useState } from "react";



const navLinks = [
  {
    to: "/product",
    label: "Product",
    dropdown: true,
  },
  { to: "/home", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/media-articles", label: "Media & Article" },
  { to: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname.startsWith(path);

  const productItems = [
    {
      icon: "bi bi-person-bounding-box",
      title: "CANDY",
      desc: "Introducing CANDY by 7Unique Verify — a smart verification platform that uses AI to deliver real-time, accurate identity checks.",
      to: "/candy",
    },
    {
      icon: "bi bi-person-vcard-fill",
      title: "KYC",
      desc: "Easily verify user identities to ensure compliance and build trust with your customers using secure KYC APIs.",
      to: "/kyc",
    },
    {
      icon: "bi bi-person-rolodex",
      title: "KYB",
      desc: "Get in-depth business insights and verify company credentials before onboarding with our KYB solutions.",
      to: "/kyb",
    },
    {
      icon: "bi bi-person-fill-slash",
      title: "Fraud Detection",
      desc: "Use smart API tools to flag and stop fraud attempts before they impact your platform or customers.",
      to: "/fraud-detection",
    },
    {
      icon: "bi bi-check2-circle",
      title: "Phone Number Lookup",
      desc: "Verify and validate mobile numbers to ensure accurate user data and prevent fraud in real-time.",
      to: "/phone-number-lookup",
    },
    {
      icon: "bi bi-check2-all",
      title: "Financial Checks",
      desc: "Confirm bank account ownership and carry out financial verifications with reliable, fast API integrations.",
      to: "/financial-checks",
    },
    {
      icon: "bi bi-person-check",
      title: "Employee Background Verification",
      desc: "Strengthen hiring with complete employee checks and safeguard your company from potential risks.",
      to: "/employee-verification",
    },
    {
      icon: "bi bi-person-lock",
      title: "AI Driven OCR Software",
      desc: "Digitize and auto-fill documents in seconds with our AI-based OCR software for faster onboarding.",
      to: "/ocr",
    },
    {
      icon: "bi bi-bezier",
      title: "Utilities",
      desc: "Simplify tasks like bill payments and service access using integrated, fast, and scalable utility APIs.",
      to: "/utilities",
    },
  ];
  
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-16 py-6 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center gap-2 font-bold text-xl text-[#373533]"
        >
          <img src="/img/verfiy.png" alt="7unique Logo" className="w-50 h-10" />
        </Link>

        {/* Hamburger for Mobile */}
        <button
          className={`md:hidden text-2xl text-[#373533] transition duration-200 ${
            menuOpen ? "text-[#2dc1e3] rotate-90" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`fas ${
              menuOpen ? "bi bi-chevron-bar-right" : "bi bi-layout-sidebar-inset"
            }`}
          ></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block hamburgerMenu active" : "hidden"
          } md:flex gap-8 items-start md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:shadow-none shadow-md transition-all duration-300 p-4 md:p-0 z-50`}
        >
          {navLinks.map((link) => (
            <li
              key={link.to}
              className="group relative"
              onMouseEnter={() => !menuOpen && setHovered(link.to)}
              onMouseLeave={() => !menuOpen && setHovered(null)}
            >
              {link.dropdown ? (
                <>
                  <div
                    className={`font-medium text-base flex items-center gap-1 cursor-pointer hover:text-[#2dc1e3] transition-colors ${
                      isActive(link.to) ? "text-[#2dc1e3]" : "text-[#373533]"
                    }`}
                    onClick={() => {
                      if (menuOpen) {
                        setHovered(hovered === link.to ? null : link.to);
                      }
                    }}
                  >
                    {link.label}
                    <i
                      className={`fa-solid ${
                        hovered === link.to ? "bi bi-chevron-up" : "bi bi-chevron-down"
                      } text-xs`}
                    ></i>
                  </div>

                  {/* Mega Menu */}
                  <div
                    className={`${
                      hovered === link.to ? "block" : "hidden"
                    } absolute md:left-0 md:w-[1000px] bg-white rounded-md shadow-lg z-40 transition-all duration-200 ${
                      menuOpen ? "relative w-full mt-3" : ""
                    }`}
                  >
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                      {productItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.to}
                          className="flex items-start gap-3 max-w-[280px] cursor-pointer no-underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          <div className="bg-[#e6f0ff] text-[#2a5db0] text-lg mt-[3px] flex justify-center items-center w-7 h-7 rounded-sm border border-[#2a5db0]">
                            <i className={item.icon}></i>
                          </div>
                          <div>
                            <h3 className="text-[15px] font-normal text-black leading-5">
                              {item.title}
                            </h3>
                            <p className="text-[11px] text-[#4a4a4a] leading-4 mt-1 max-w-[180px]">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className={`block py-2 font-medium text-base hover:text-[#2dc1e3] transition-colors ${
                    location.pathname === link.to ? "text-[#2dc1e3]" : "text-[#373533]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}

          {/* CTA Button (Mobile version) */}
          <li className="block md:hidden mt-3">
            <Link
              to="/pricing"
              className="block text-center bg-[#2dc1e3] text-white font-semibold rounded px-6 py-2 shadow hover:bg-[#79d9ef] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* CTA Button (Desktop version) */}
        <Link
          to="/pricing"
          className="hidden md:inline bg-[#2dc1e3] text-white font-semibold rounded px-6 py-2 ml-6 shadow hover:bg-[#79d9ef] transition-colors"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
