import type React from "react"

const TermsConditionsPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24 pt-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using SprintVerify's services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
            <p>
              SprintVerify provides identity verification, document authentication, and related API services. Our
              services are designed to help businesses verify identities, prevent fraud, and ensure compliance with
              regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account credentials and for all
              activities that occur under their account. Users must not use our services for any illegal or unauthorized
              purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Data Privacy and Security</h2>
            <p>
              We are committed to protecting your privacy and the security of your data. All personal information
              collected is handled in accordance with our Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Service Availability</h2>
            <p>
              While we strive to maintain high service availability, we do not guarantee uninterrupted access to our
              services. Scheduled maintenance and unforeseen technical issues may cause temporary service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              SprintVerify shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Users will be notified of significant changes, and
              continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              For questions regarding these terms and conditions, please contact our support team through the contact
              information provided on our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default TermsConditionsPage
