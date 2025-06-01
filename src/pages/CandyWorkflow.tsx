import React from "react";
import { PencilSquareIcon, UserPlusIcon, IdentificationIcon } from "@heroicons/react/24/outline";

const CandyWorkflow: React.FC = () => {
  return (
    <section className="bg-white pb-8 pt-4 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            How Does <span className="text-[#29a9c5]">CANDY</span> Automate Workflow for Your Business?
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="flex items-center text-xl font-semibold mb-1 text-[#29a9c5]">
                <PencilSquareIcon className="w-6 h-6 mr-2" />
                Create
              </h3>
              <p>
                Design a verification flow as per your business logic. CANDY allows you to control how each API step behaves—customized for your onboarding, KYC, or vendor screening process.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-xl font-semibold mb-1 text-[#29a9c5]">
                <UserPlusIcon className="w-6 h-6 mr-2" />
                Assign
              </h3>
              <p>
                Assign the process to users, customers, or candidates. They complete the journey independently—no manual follow-ups or repetitive tasks needed.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-xl font-semibold mb-1 text-[#29a9c5]">
                <IdentificationIcon className="w-6 h-6 mr-2" />
                Verify IDs
              </h3>
              <p>
                As users complete the flow, results sync back to your dashboard instantly. Make real-time onboarding decisions—fast, compliant, and secure.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center">
          <img
            src="/img/worksflow.jpg"
            alt="Workflow Illustration"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CandyWorkflow;
