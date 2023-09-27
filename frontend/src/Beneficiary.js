import React from "react";

const Beneficiary = ({ beneficiary }) => {
  return (
    <div className="">
      <div className="">
        <div>
          {/* TODO: this images is auto all the users have same avator  */}
          <img
            src={`https://cdn-icons-png.flaticon.com/128/3135/3135715.png`}
            alt="Avatar"
            className="img"
          />
          <p>
            <b>Full Name:</b> {beneficiary.fullName}
          </p>
          <p>
            <b>Mobile:</b> {beneficiary.mobile}
          </p>
          <p>
            <b>Target Group:</b> {beneficiary.targetGroup}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficiary;
