import React, { useState } from "react";
import Cha01 from "../../assets/png/CHA_01 1.png";
import Group634 from "../../assets/png/Group 634.png";
import { StyledRow } from "../../components/layout/styled";
import OTPForm from "./_partials/OTPForm";
import SuccessEmail from "./_partials/SuccessEmail";

const EnterOTP = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <StyledRow>
      {!isVerified && (
        <>
          <div className="img-wrapper">
            <img src={Cha01} alt="Cha01" />
          </div>

          <OTPForm setIsVerified={setIsVerified} />
        </>
      )}

      {isVerified && (
        <>
          <div className="img-wrapper">
            <img src={Group634} alt="Group 634" />
          </div>

          <SuccessEmail />
        </>
      )}
    </StyledRow>
  );
};

export default EnterOTP;
