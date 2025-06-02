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
              You can cancel your subscription or service at any time directly from your account dashboard. Alternatively, you can reach out to our customer support team for assistance. 
            </p>
            <p>
              Please note that any cancellation will take effect at the end of your current billing cycle. For monthly subscriptions, this means you will continue to have access to the service until the end of the current month. For annual subscriptions, cancellation will be effective at the end of the year.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Refund Eligibility</h2>
            <p>
              Refunds may be provided under specific circumstances, including but not limited to:
            </p>
            <ul className="list-disc ml-6">
              <li>Service outages or technical issues that prevent access to the service for an extended period.</li>
              <li>Billing errors such as incorrect charges or overbilling.</li>
              <li>Cancellation within the first 7 days of a new subscription (with no usage of the service).</li>
            </ul>
            <p>
              Please note that API usage charges for successfully completed transactions are non-refundable, as these are processed in real-time and cannot be reversed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Refund Process</h2>
            <p>
              To initiate a refund request, please contact our customer support team and provide the following details:
            </p>
            <ul className="list-disc ml-6">
              <li>Your account information (email address, username, or account ID).</li>
              <li>A detailed reason for your refund request.</li>
              <li>Any supporting documents or screenshots related to your issue (if applicable).</li>
            </ul>
            <p>
              Once your request is received, our team will review it and provide a response within 5-7 business days. If your request is approved, the refund will be processed within 10-15 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Pro-rated Refunds</h2>
            <p>
              In cases where a refund is applicable for part of the subscription period (e.g., if you cancel mid-month), we will calculate the refund amount on a pro-rated basis for the unused portion of your subscription. This ensures fairness for both parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Non-refundable Items</h2>
            <p>
              The following items are typically non-refundable:
            </p>
            <ul className="list-disc ml-6">
              <li>Completed API transactions (once the service is used or the transaction is processed).</li>
              <li>Setup fees and customization charges for services that require specialized work or adjustments.</li>
              <li>Custom development work, unless agreed upon by both parties before the commencement of the work.</li>
              <li>Services or subscriptions used beyond the trial period, unless there is a service failure or issue on our end.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Billing Disputes</h2>
            <p>
              If you believe there is an error in your billing statement, we encourage you to contact us immediately. Our team will investigate the issue and make the necessary adjustments if a billing error is confirmed.
            </p>
            <p>
              For disputes related to charges or payment discrepancies, please ensure that you contact us within 30 days of the transaction date. After this period, the charges will be considered final.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Service Credits</h2>
            <p>
              In some cases, a full refund may not be possible, but we may offer service credits that can be used towards future subscription fees or additional services. This option will be offered at our discretion based on the circumstances of your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact for Refunds</h2>
            <p>
              For all refund and cancellation requests, please reach out to our support team through the contact details provided on our website. Be sure to include your account information and clearly state the reason for your refund or cancellation request.
            </p>
            <p>
              Our customer support team is available 24/7 and is dedicated to resolving your concerns as quickly as possible.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default RefundCancellationPage
