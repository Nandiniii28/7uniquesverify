import type React from "react"

const DisclaimerPage: React.FC = () => {
  return (
    <main className="mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24 pt-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <p>
              The content on this website is provided for general informational purposes only. While every effort is made to keep the information accurate and current, 7Unique Verify makes no warranties—express or implied—regarding completeness, reliability, suitability, or availability of the content, services, products, or related graphics on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Service Limitations</h2>
            <p>
              Use of any information or services provided is strictly at your own risk. Under no circumstances shall 7Unique Verify be held liable for any direct, indirect, incidental, or consequential loss or damage, including but not limited to loss of data or business profits, arising from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">External Links</h2>
            <p>
              This website may contain links to third-party websites that are not under the control of 7Unique Verify. We are not responsible for the nature, accuracy, or content of those external sites. Inclusion of such links does not imply endorsement or recommendation of the views expressed therein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Accuracy</h2>
            <p>
              While our APIs aim to deliver high-accuracy verification results, we do not guarantee the absolute accuracy of third-party data sources. Users are encouraged to independently verify any critical data before taking business or legal decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Service Availability</h2>
            <p>
              We strive to ensure uninterrupted access to our website and APIs. However, 7Unique Verify is not liable for temporary unavailability caused by technical issues beyond our control, including system downtime or external disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>
              For questions or concerns regarding this disclaimer, please contact our support team via the details available on the <a href="/contact-us" className="text-blue-600 underline">Contact Us</a> page.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default DisclaimerPage
