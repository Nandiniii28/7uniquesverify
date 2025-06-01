import { Routes, Route, Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Services from "../pages/Services"
import ContactUsPage from "./contact-us/page"
import "bootstrap-icons/font/bootstrap-icons.css"
import Footer from "../components/Footer"
import BlogPage from "./blog/page"
import BlogDetail from "./blog/BlogDetails"
import ScrollToTop from "../components/ScrollToTop"
import MediaArticles from "./media-articels/page"
import ArticleDetail from "./media-articels/ArticleDetail"
import CandyPage from "./candy/page"
import KycPage from "./kyc/page"
import KybPage from "./kyb/page"
import FraudDetection from "./fraud-detection/page"
import PhoneLookUpPage from "./phone-number-lookup/page"
import FinancialCheckPage from "./financial-checks/page"
import EmployeeVarificationPage from "./employee-verification/page"
import OCRPage from "./ocr/page"
import UtilitiesPage from "./utilities/page"

import CrimeCheckAPIPage from "./crime-check-api/page"
import BankAccountVerificationPage from "./bank-account-verification/page"
import AadhaarVerificationPage from "./aadhaar-verification/page"
import PANVerificationPage from "./pan-verification/page"
import CKYCSearchPage from "./ckyc-search-download/page"
import PassportVerificationPage from "./passport-verification/page"
import DrivingLicenseVerificationPage from "./driving-license-verification/page"
import RCVerificationPage from "./rc-verification/page"
import VoterIDVerificationPage from "./voter-id-verification/page"
import MCAVerificationPage from "./mca-verification/page"
import MobileVerificationAPIPage from "./mobile-verification-api/page"
import DocumentVerificationPage from "./document-verification/page"
import UserPage from "./user/page"
import EmailAuthenticationPage from "./email-authentication/page"
import LivenessCheckAPIPage from "./liveness-check-api/page"
import OCRValidationPage from "./ocr-validation/page"
import WhatsappVerificationPage from "./whatsapp-verification/page"
import FaceMatchAPIPage from "./face-match-api/page"
import ProductsPage from "./products/page"
import DisclaimerPage from "./disclaimer/page"
import TermsConditionsPage from "./terms-and-conditions/page"
import PrivacyPolicyPage from "./privacy-policy/page"
import RefundCancellationPage from "./refund-cancellation/page"
import BuzzingForBharatPage from "./buzzing-for-bharat/page"

function Placeholder({ name }: { name: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">{name} Page</h1>
      <nav className="flex flex-wrap gap-2 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/news-articles">Blog</Link>
        <Link to="/authentications/sign-in">Sign In</Link>
        <Link to="/authentications/sign-up">Sign Up</Link>
        <Link to="/utility/style-guide">Style Guide</Link>
        <Link to="/utility/changelog">Changelog</Link>
        <Link to="/utility/license">License</Link>
      </nav>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/candy" element={<CandyPage />} />
        <Route path="/kyc" element={<KycPage />} />
        <Route path="/kyb" element={<KybPage />} />
        <Route path="/fraud-detection" element={<FraudDetection />} />
        <Route path="/phone-number-lookup" element={<PhoneLookUpPage />} />
        <Route path="/financial-checks" element={<FinancialCheckPage />} />
        <Route path="/employee-verification" element={<EmployeeVarificationPage />} />
        <Route path="/ocr" element={<OCRPage />} />
        <Route path="/utilities" element={<UtilitiesPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/media-articles" element={<MediaArticles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/news/:slug" element={<Placeholder name="Blog Single" />} />
        <Route path="/services/:service" element={<Placeholder name="Service Single" />} />
        <Route path="/product/:product" element={<Placeholder name="Pricing Single" />} />
        <Route path="/utility/style-guide" element={<Placeholder name="Style Guide" />} />
        <Route path="/utility/changelog" element={<Placeholder name="Changelog" />} />
        <Route path="/utility/license" element={<Placeholder name="License" />} />
        <Route path="/404" element={<Placeholder name="404 Not Found" />} />
        <Route path="/401" element={<Placeholder name="401 Password Protected" />} />
        <Route path="/authentications/sign-in" element={<Placeholder name="Sign In" />} />
        <Route path="/authentications/sign-up" element={<Placeholder name="Sign Up" />} />
        <Route path="/authentications/forget-password" element={<Placeholder name="Forgot Password" />} />
        <Route path="/authentications/reset-password" element={<Placeholder name="Reset Password" />} />

        {/* New API Pages */}
        <Route path="/crime-check-api" element={<CrimeCheckAPIPage />} />
        <Route path="/bank-account-verification" element={<BankAccountVerificationPage />} />
        <Route path="/aadhaar-verification" element={<AadhaarVerificationPage />} />
        <Route path="/pan-verification" element={<PANVerificationPage />} />
        <Route path="/ckyc-search-&-download" element={<CKYCSearchPage />} />
        <Route path="/passport-verification" element={<PassportVerificationPage />} />
        <Route path="/driving-license-verification" element={<DrivingLicenseVerificationPage />} />
        <Route path="/rc-verification" element={<RCVerificationPage />} />
        <Route path="/voter-id-verification" element={<VoterIDVerificationPage />} />
        <Route path="/mca-verification" element={<MCAVerificationPage />} />
        <Route path="/mobile-verification-api" element={<MobileVerificationAPIPage />} />

        {/* Additional Services */}
        <Route path="/document-verification" element={<DocumentVerificationPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/email-authentication" element={<EmailAuthenticationPage />} />
        <Route path="/liveness-check-api" element={<LivenessCheckAPIPage />} />
        <Route path="/ocr-validation" element={<OCRValidationPage />} />
        <Route path="/whatsapp-verification" element={<WhatsappVerificationPage />} />
        <Route path="/face-match-api" element={<FaceMatchAPIPage />} />

        {/* Company Pages */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/refund-cancellation" element={<RefundCancellationPage />} />
        <Route path="/buzzing-for-bharat" element={<BuzzingForBharatPage />} />

        <Route path="*" element={<Placeholder name="404 Not Found" />} />
      </Routes>``
      <Footer />
    </>
  )
}
