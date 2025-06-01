import type React from "react"

const RefundCancellationPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24 pt-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Refund and Cancellation Policy</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Cancellation Policy</h2>
            <p>
              You may cancel your subscription or service at any time through your account dashboard or by contacting
              our support team. Cancellations will take effect at the end of your current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Refund Eligibility</h2>
            <p>
              Refunds may be available under certain circumstances, including service outages, billing errors, or if you
              cancel within the first 7 days of a new subscription. API usage charges for completed transactions are
              generally non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Refund Process</h2>
            <p>
              To request a refund, please contact our support team with your account details and reason for the refund
              request. We will review your request and respond within 5-7 business days. Approved refunds will be
              processed within 10-15 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Pro-rated Refunds</h2>
            <p>
              In cases where a partial refund is applicable, we will calculate the refund amount on a pro-rated basis
              for the unused portion of your subscription period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Non-refundable Items</h2>
            <p>
              The following items are generally non-refundable: completed API transactions, setup fees, custom
              development work, and services used beyond the trial period (unless due to service issues on our end).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Billing Disputes</h2>
            <p>
              If you believe there is an error in your billing, please contact us immediately. We will investigate the
              issue and make appropriate adjustments if an error is confirmed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Service Credits</h2>
            <p>
              In cases where a full refund is not applicable, we may offer service credits that can be applied to future
              usage or subscription fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact for Refunds</h2>
            <p>
              For all refund and cancellation requests, please contact our support team through the contact information
              provided on our website. Include your account details and specific reason for the request.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default RefundCancellationPage
