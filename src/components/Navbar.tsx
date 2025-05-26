import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  {
    to: "/product",
    label: "Product",
    dropdown: [
      { to: "/product/feature1", label: "Feature 1" },
      { to: "/product/feature2", label: "Feature 2" },
      { to: "/product/feature3", label: "Feature 3" },
    ],
  },
  { to: "/home", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/media-articles", label: "Media & Article" },
  { to: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center gap-2 font-bold text-xl text-[#373533]"
        >
          <img src="/img/verfiy.png" alt="7unique Logo" className="w-50 h-10" />
        </Link>

        {/* Hamburger for Mobile */}
        <button
          className={`md:hidden text-2xl  text-[#373533] transition duration-200 ${
            menuOpen ? "text-[#2dc1e3] rotate-90" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`fas ${menuOpen ? "bi bi-chevron-bar-right" : "bi bi-layout-sidebar-inset"}`}
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
              className=" group"
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
                        hovered === link.to
                          ? "bi bi-chevron-up"
                          : "bi bi-chevron-down"
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
  {[
    {
      icon: "fas fa-shield-alt",
      title: "CANDY Engine",
      desc: "Customize your KYC journey with CANDY — our intelligent, API-based identity workflow builder for real-time verification.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Digital KYC",
      desc: "Verify Aadhaar, PAN, and other government IDs securely and instantly through seamless API integrations.",
    },
    {
      icon: "fas fa-user-friends",
      title: "KYB Verification",
      desc: "Evaluate business entities, directors, and partners to ensure regulatory compliance and reduce onboarding risks.",
    },
    {
      icon: "fas fa-building",
      title: "Fraud Detection",
      desc: "Leverage risk signals and data intelligence to identify fraudulent behaviors before they impact your business.",
    },
    {
      icon: "fas fa-wave-square",
      title: "Phone Number Intelligence",
      desc: "Validate mobile number status and metadata to ensure genuine users and prevent telecom-based fraud.",
    },
    {
      icon: "fas fa-share-alt",
      title: "Bank Account Verification",
      desc: "Instantly match bank account numbers with user identities to ensure ownership and reduce chargeback risks.",
    },
    {
      icon: "fas fa-database",
      title: "Employee Background Checks",
      desc: "Verify employee identity, criminal history, and employment records to foster a trustworthy workplace.",
    },
    {
      icon: "fas fa-database",
      title: "AI-Powered OCR",
      desc: "Auto-extract document data using smart OCR to accelerate digital KYC and reduce manual errors.",
    },
    {
      icon: "fas fa-database",
      title: "Utility Verification",
      desc: "Authenticate customer address and identity using utility data for deeper risk assessment.",
    },
  
  ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 max-w-[280px] cursor-pointer"
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
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className={`block py-2 font-medium text-base hover:text-[#2dc1e3] transition-colors ${
                    location.pathname === link.to
                      ? "text-[#2dc1e3]"
                      : "text-[#373533]"
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
