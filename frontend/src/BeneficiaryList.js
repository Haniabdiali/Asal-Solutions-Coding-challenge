import React from "react";
import Beneficiary from "./Beneficiary";

const BeneficiaryList = ({ beneficiaries }) => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-2 bg-slate-200 shadow-2xl p-10 my-2 mx-10 rounded-lg">
        {beneficiaries.length > 0 &&
          beneficiaries.map((beneficiary) => (
            <div className="w-auto items-center px-8 py-8 border-spacing-10 border-x-2 border-y-2" key={beneficiary.id}>

              {/* TODO: breaking code into components only for readable, this data will use Beneficiary.js Component */}
              <Beneficiary beneficiary={beneficiary} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BeneficiaryList;
