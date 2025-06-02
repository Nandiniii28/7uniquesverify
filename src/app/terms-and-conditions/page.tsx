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
              By accessing and using 7Unique Verify's services, you agree to comply with and be bound by the following terms and conditions. These terms apply to all users, clients, and stakeholders. If you do not accept these terms in full, you are prohibited from accessing or using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Service Overview</h2>
            <p>
              7Unique Verify offers digital identity verification services, document validation, CKYC integration, bank account verification, PAN/Aadhaar validation, liveness detection, facial recognition, and other related APIs. These services are tailored for fintech, government agencies, enterprises, and businesses that require secure, real-time verification solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>
              Users must ensure the accuracy of the data submitted to our platform. Misuse of the APIs, attempts to reverse-engineer, scrape data, or use our services for unlawful purposes are strictly prohibited. You are responsible for keeping your access credentials secure and reporting any unauthorized activity promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Data Privacy & Compliance</h2>
            <p>
              7Unique Verify adheres to India’s data protection and privacy laws. We ensure that all customer data, including personally identifiable information (PII), is stored, processed, and transmitted securely. Data collected through our APIs is encrypted and used only for the purpose intended.
            </p>
            <p>
              We do not share user data with third parties without explicit consent, except when required by law enforcement or government authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Service Reliability</h2>
            <p>
              While we strive to provide uninterrupted access to our APIs and dashboard, 7Unique Verify does not guarantee constant availability. Routine updates, system upgrades, or unforeseen issues may result in temporary downtimes. Notifications for planned maintenance will be provided in advance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>
              All content, design, graphics, logos, and software components on this website and platform are the intellectual property of 7Unique Verify. Unauthorized reproduction, distribution, or commercial use of our assets is prohibited without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Payment Terms</h2>
            <p>
              Use of certain APIs may require prepaid credits or a subscription model. Payment details, refund policies, and usage limits are outlined in your account dashboard or agreed upon in your business contract. Non-payment may result in service suspension.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. API Usage and Fair Use Policy</h2>
            <p>
              Users are expected to follow the fair usage policy outlined for each API. Excessive, malicious, or automated abuse of services will result in immediate account suspension. 7Unique Verify reserves the right to monitor usage patterns and intervene where misuse is detected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Disclaimers</h2>
            <p>
              7Unique Verify does not warrant that its services will be error-free or fully accurate, particularly when dependent on third-party databases (e.g., RTO, UIDAI, CKYC, NPCI). While we take all reasonable measures to ensure data integrity, errors or delays may occur beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p>
              Under no circumstances shall 7Unique Verify be liable for damages, including but not limited to, direct, indirect, special, incidental, or consequential losses resulting from the use or inability to use our services. Users are advised to perform their own due diligence in critical verification workflows.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account if you violate these terms or misuse our services. Termination may be immediate and without prior notice if malicious activity is detected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">12. Modifications to Terms</h2>
            <p>
              These terms may be updated from time to time to reflect regulatory changes, feature updates, or security improvements. Users will be notified of significant changes through email or platform notification. Continued use of the service after changes implies acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">13. Governing Law</h2>
            <p>
              These terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">14. Contact Us</h2>
            <p>
              If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us at <a href="/contact-us" className="text-blue-600 underline">Contact Us</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default TermsConditionsPage
