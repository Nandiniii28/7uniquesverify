import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";

export default function Footer() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <footer
      className="border-t border-[#eaeaea] pt-12 pb-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-background-wallpaper-design-vector-image-with-curve-line-backdrop-presentation_1110513-430.jpg?ga=GA1.1.389685255.1745228264&semt=ais_hybrid&w=740')" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-5 gap-5 pb-10">
        {/* Products - moved to first column */}
        <div>
          <h3 className="font-semibold text-black mb-6 text-lg relative pb-2">
            Products
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#b7603d]"></span>
          </h3>
          <ul className="space-y-2">
            {[
              "Crime Check API",
              "Bank Account Verification",
              "Aadhaar Verification",
              "PAN Verification",
              "CKYC Search & download",
              "Passport Verification",
              "Driving License Verification",
              "RC Verification",
              "Voter ID Verification",
              "MCA Verification",
              "Mobile Verification API",
            ].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={`inline-block py-1 text-gray-700 hover:text-[#b7603d] transition-colors duration-300 relative group ${activeLink === path ? 'text-[#b7603d]' : ''}`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b7603d] transition-all duration-300 ${activeLink === path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single Link - second column */}
        <div>
          <h3 className="font-semibold text-black mb-6 text-lg relative pb-2">
            Single Link
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#b7603d]"></span>
          </h3>
          <ul className="space-y-2">
            {[
              "Document Verification",
              "User",
              "Email Authentication",
              "Liveness check API",
              "OCR Validation",
              "Whatsapp Verification",
              "Face Match API",
              "Name Match API"
            ].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={`inline-block py-1 text-gray-700 hover:text-[#b7603d] transition-colors duration-300 relative group ${activeLink === path ? 'text-[#b7603d]' : ''}`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b7603d] transition-all duration-300 ${activeLink === path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Resources - fourth column */}
        <div>
          <h3 className="font-semibold text-black mb-6 text-lg relative pb-2">
            Resources
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#b7603d]"></span>
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Contact Us", path: "/contact-us" },
              { name: "Terms and Conditions", path: "/terms-and-conditions" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Refund and Cancellation", path: "/refund-cancellation" },
              { name: "Documentation", path: "/documentation" },
              { name: "Blog", path: "/blog" },
              { name: "Buzzing for भारत", path: "/buzzing-for-bharat" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`inline-block py-1 text-gray-700 hover:text-[#b7603d] transition-colors duration-300 relative group ${activeLink === item.path ? 'text-[#b7603d]' : ''}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b7603d] transition-all duration-300 ${activeLink === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company - third column */}
        <div>
          <h3 className="font-semibold text-black mb-6 text-lg relative pb-2">
            Company
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#b7603d]"></span>
          </h3>
          <ul className="space-y-2">
            {["Products", "Candy", "Disclaimer"].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={`inline-block py-1 text-gray-700 hover:text-[#b7603d] transition-colors duration-300 relative group ${activeLink === path ? 'text-[#b7603d]' : ''}`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b7603d] transition-all duration-300 ${activeLink === path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Logo and About - moved to last column (right side) */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/contact-us" className="flex items-center gap-2">
            <img
              src="/img/7unique_verify-removebg-preview.png"
              alt="7Unique Verify Logo"
              className="w-50 h-50"
            />
          </Link>
          <p className="mb-4 leading-relaxed text-sm text-gray-700">
            7Unique Verify is your trusted partner for simplified and fast identity verification solutions. Eliminate paperwork, reduce fraud, and verify users with ease using our robust API stack.
          </p>

          {/* Support Information */}
          <div className="mb-4">
            <h4 className="font-semibold text-black mb-2 text-md">Support</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p className="hover:text-[#b7603d] transition-colors duration-300 inline-block">080-69489510</p>
              <p className="hover:text-[#b7603d] transition-colors duration-300 inline-block">support@digio.in</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 text-[#b7603d] text-2xl">
            <Link to="/contact-us" aria-label="Facebook" className="hover:text-[#d19983] transition-colors duration-300">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="/contact-us" aria-label="LinkedIn" className="hover:text-[#d19983] transition-colors duration-300">
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link to="/contact-us" aria-label="X Twitter" className="hover:text-[#d19983] transition-colors duration-300">
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link to="/contact-us" aria-label="YouTube" className="hover:text-[#d19983] transition-colors duration-300">
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-[#eaeaea] pt-6 text-center text-[#9c9e99] text-sm">
        <span>© 2025 7Unique Verify. All rights reserved.</span>
      </div>
    </footer>
  );
}