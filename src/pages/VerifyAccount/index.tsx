import React, { useState, useEffect } from "react";
import { StyledRow } from "../../components/layout/styled";
import Group638 from "../../assets/png/Group 638.png";
import Cha01 from "../../assets/png/CHA_01 1.png";
import EnterAccountForm from "./_partials/EnterAccountForm";
import AccountDetails from "./_partials/AccountDetails";
import AccountVerified from "./_partials/AccountVerified";

export interface IAccountDataProps {
  account_name?: string;
  account_number?: string;
  bank?: string;
  bank_id?: number;
  student_id?: number;
}

const VerifyAccount = () => {
  const [hasEnteredAccount, setHasEnteredAccount] = useState(false);
  const [accountData, setAccountData] = useState<IAccountDataProps>({});
  const [isAccountVerified, setIsAccountVerified] = useState(false);

  useEffect(() => {
    if (accountData) {
      console.log("AccountData has been set");
    }
  }, [accountData]);

  const handleAccountConfirmation = () => {
    setHasEnteredAccount(false);
    setIsAccountVerified(true);
  };

  return (
    <StyledRow>
      {!hasEnteredAccount && !isAccountVerified && (
        <>
          <div className="img-wrapper">
            <img src={Group638} alt="Group 638" />
          </div>

          <EnterAccountForm
            setHasEnteredAccount={setHasEnteredAccount}
            setAccountData={setAccountData}
          />
        </>
      )}

      {hasEnteredAccount && (
        <>
          <div className="img-wrapper">
            <img src={Cha01} alt="Cha 01" />
          </div>

          <AccountDetails
            accountData={accountData}
            handleAccountConfirmation={handleAccountConfirmation}
          />
        </>
      )}

      {isAccountVerified && (
        <>
          <div className="img-wrapper">
            <img src={Cha01} alt="Cha 01" />
          </div>

          <AccountVerified />
        </>
      )}
    </StyledRow>
  );
};

export default VerifyAccount;
