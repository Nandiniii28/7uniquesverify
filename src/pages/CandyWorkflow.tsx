import React from "react";
import { PencilSquareIcon, UserPlusIcon, IdentificationIcon } from "@heroicons/react/24/outline";

const CandyWorkflow: React.FC = () => {
  return (
    <section className="bg-white pb-8 pt-4 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            How Does <span className="text-[#29a9c5]">CANDY</span> Customize Workflow for Partners?
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="flex items-center text-xl font-semibold mb-1 text-[#29a9c5]">
                <PencilSquareIcon className="w-6 h-6 mr-2" />
                Create
              </h3>
              <p>
                With CANDY, you have the flexibility to create a tailored plan that aligns perfectly with your business requirements.
                You decide how APIs will interact with your clients, customers, or partners in real time while seamlessly conducting ID Checks.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-xl font-semibold mb-1 text-[#29a9c5]">
                <UserPlusIcon className="w-6 h-6 mr-2" />
                Assign
              </h3>
              <p>
                Once the workflow is created, ID Checks can be assigned to customers or candidates.
                They can complete onboarding independently—removing the need for manual processing.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-xl font-semibold mb-1 text-[#29a9c5]">
                <IdentificationIcon className="w-6 h-6 mr-2" />
                Verify IDs
              </h3>
              <p>
                Results are automatically shared with the workflow creator, allowing real-time decisions on whether to onboard the customer, employee, or partner.
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


