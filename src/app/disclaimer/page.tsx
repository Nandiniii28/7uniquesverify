import type React from "react"

const DisclaimerPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24 pt-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <p>
              The information contained in this website is for general information purposes only. The information is
              provided by SprintVerify and while we endeavor to keep the information up to date and correct, we make no
              representations or warranties of any kind, express or implied, about the completeness, accuracy,
              reliability, suitability or availability with respect to the website or the information, products,
              services, or related graphics contained on the website for any purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Service Limitations</h2>
            <p>
              Any reliance you place on such information is therefore strictly at your own risk. In no event will we be
              liable for any loss or damage including without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with,
              the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">External Links</h2>
            <p>
              Through this website you are able to link to other websites which are not under the control of
              SprintVerify. We have no control over the nature, content and availability of those sites. The inclusion
              of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Accuracy</h2>
            <p>
              While we strive to provide accurate and up-to-date verification services, we cannot guarantee the absolute
              accuracy of all data sources. Users should verify critical information through multiple sources when
              making important decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Service Availability</h2>
            <p>
              Every effort is made to keep the website up and running smoothly. However, SprintVerify takes no
              responsibility for, and will not be liable for, the website being temporarily unavailable due to technical
              issues beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>
              If you have any questions about this disclaimer, please contact us at our support channels provided on the
              website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default DisclaimerPage
