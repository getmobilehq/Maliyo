import React, { useState } from "react";
import Group633 from "../../assets/png/Group 633.png";
import EnterEmailForm from "./_partials/EnterEmailForm";
import CheckEmail from "./_partials/CheckEmail";
import { StyledRow } from "../../components/layout/styled";

const VerifyEmail = () => {
  const [hasEnteredEmail, setHasEnteredEmail] = useState(false);

  return (
    <StyledRow>
      <div className="img-wrapper">
        <img src={Group633} alt="Group 633" />
      </div>

      {!hasEnteredEmail && (
        <EnterEmailForm setHasEnteredEmail={setHasEnteredEmail} />
      )}

      {hasEnteredEmail && <CheckEmail />}
    </StyledRow>
  );
};

export default VerifyEmail;
