import type React from "react"

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24 pt-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, use our services,
              or contact us for support. This may include personal information such as your name, email address, phone
              number, and business information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, process transactions,
              send communications, and comply with legal obligations. We may also use your information for security
              purposes and to prevent fraud.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy. We may share information with service providers, legal
              authorities when required by law, or in connection with business transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services, comply with legal
              obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we
              will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the
              right to access, update, delete, or restrict the processing of your information. Contact us to exercise
              these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage
              patterns, and provide personalized content. You can control cookie settings through your browser
              preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any material changes by posting
              the new policy on our website and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us using the
              contact information provided on our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicyPage
