import type React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24 pt-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy outlines how <strong>7Unique Verify</strong> ("we", "our", or "us") collects, uses, and protects
              your personal data when you access or use our identity verification services and website. By using our platform,
              you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p>
              We collect the following types of information:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Full name, contact number, email address, government-issued IDs (such as Aadhaar, PAN, etc.).</li>
              <li><strong>Business Details:</strong> Company name, industry, business address, and user role.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, usage logs, and device data collected automatically when you use our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>
              Your data helps us to:
            </p>
            <ul>
              <li>Verify identities through APIs such as Aadhaar, PAN, CKYC, etc.</li>
              <li>Operate, maintain, and enhance our platform and services.</li>
              <li>Communicate with you regarding support, updates, and service-related information.</li>
              <li>Comply with regulatory and legal obligations.</li>
              <li>Detect, prevent, and address security and fraud risks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Sharing of Information</h2>
            <p>
              We do <strong>not</strong> sell your personal data. We may share your information with:
            </p>
            <ul>
              <li>Trusted service providers under strict confidentiality agreements.</li>
              <li>Regulatory or legal authorities as required by law.</li>
              <li>In the event of a business merger, acquisition, or transfer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We follow industry-standard encryption and security practices to protect your personal data. However, no
              method of electronic transmission over the internet is 100% secure, and we encourage users to also take
              necessary precautions on their devices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
            <p>
              We retain your information only as long as it is required to fulfill the purposes outlined in this policy
              and to comply with legal obligations. Data that is no longer needed is securely deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul>
              <li>Access or download the personal data we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your data under applicable laws.</li>
              <li>Object to or restrict the processing of your data.</li>
            </ul>
            <p>
              To exercise your rights, please contact us using the details provided in the “Contact Us” section below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Cookies & Tracking</h2>
            <p>
              We use cookies and tracking technologies for better performance, usage analytics, and personalized user
              experiences. You may disable cookies via your browser settings, but it may impact functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites. We are not responsible for the content or privacy
              practices of those websites and encourage you to review their policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be notified via email or website notice.
              Please revisit this page periodically for the latest version.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this privacy policy, you can reach out to our
              support team via email at <strong>support@7uniqueverify.com</strong> or through the contact page on our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
