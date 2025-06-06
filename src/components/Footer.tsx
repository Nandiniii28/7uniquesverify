import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="bg-[#f6fafd] border-t border-[#eaeaea] pt-12 pb-6">
      <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 pb-10">
        {/* Logo and About */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          <Link to="/contact-us" className="flex items-center gap-2">
            <img
              src="/img/verfiy.png"
              alt="7Unique Verify Logo"
              className="w-50 h-50"
            />
          </Link>
          <p className="mb-6 leading-relaxed text-sm text-gray-700">
            7Unique Verify is your trusted partner for simplified and fast identity verification solutions. Eliminate paperwork, reduce fraud, and verify users with ease using our robust API stack.
          </p>
          <div className="flex gap-3 mt-2 text-[#2dc1e3] text-2xl">
            <Link to="/contact-us" aria-label="Facebook" className="hover:text-[#81e7fd]">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="/contact-us" aria-label="LinkedIn" className="hover:text-[#81e7fd]">
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link to="/contact-us" aria-label="X Twitter" className="hover:text-[#81e7fd]">
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link to="/contact-us" aria-label="YouTube" className="hover:text-[#81e7fd]">
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-black mb-4">Products</h3>
          <ul className="space-y-4">
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
              
            ].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Single Link */}
        <div>
          <h3 className="font-semibold text-black mb-4">Single Link</h3>
          <ul className="space-y-4">
            {[
              "Document Verification",
              "User",
              "Email Authentication",
              "Liveness check API",
              "OCR Validation",
              "Whatsapp Verification",
              "Face Match API",
              "Name Match API"
            ].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-black mb-4">Company</h3>
          <ul className="space-y-4">
            {["Products", "Candy", "Disclaimer"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-black mb-4">Resources</h3>
          <ul className="space-y-4">
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
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#eaeaea] pt-6 text-center text-[#9c9e99] text-sm">
        <span>© 2025 7Unique Verify. All rights reserved.</span>
      </div>
    </footer>
  );
}
