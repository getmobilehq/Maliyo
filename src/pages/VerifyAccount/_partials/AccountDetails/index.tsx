import React, { FC, useState } from "react";
import { Checkbox, Button } from "antd";
import styled from "styled-components";
import api from "../../../../config/api";
import { IAccountDataProps } from "../..";
import { useAppSelector } from "../../../../redux/hooks";

interface IComponentProps {
  handleAccountConfirmation: () => void;
  accountData: IAccountDataProps;
}

const AccountDetails: FC<IComponentProps> = ({ handleAccountConfirmation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const accountData = useAppSelector((state) => state.student.accountData);

  const saveAccountDetial = async () => {
    try {
      if (checked) {
        setIsLoading(true);

        const { status, data } = await api.student.saveBankDetails({
          student: accountData.student_id,
          bank: accountData.bank_id,
          account_name: accountData.account_name,
          account_number: accountData.account_number,
        });

        console.log(data);

        if (status >= 200 && status < 300) {
          setIsLoading(false);
          handleAccountConfirmation();
        }
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <h1 className="title">Your Account Details</h1>
      <p>
        <strong>Account Name: </strong> {accountData.account_name || "--"}
      </p>
      <p>
        <strong>NUBAN Account: </strong> {accountData.account_number || "--"}
      </p>

      <p>
        <strong>Bank Name: </strong> {accountData.bank || "--"}
      </p>
      <Checkbox
        checked={checked}
        onChange={(e) => {
          e.target.checked ? setChecked(true) : setChecked(false);
        }}
      >
        By clicking on this box, you have agreed that your account details are
        correct.
      </Checkbox>
      <Button
        loading={isLoading}
        type="primary"
        onClick={saveAccountDetial}
        disabled={!checked}
      >
        Confirm
      </Button>
    </StyledWrapper>
  );
};

export default AccountDetails;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }

  .title {
    font-size: 36px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme["primary-color"]};

    strong {
      color: #3f3f3f;
    }
  }

  .ant-checkbox-wrapper {
    margin-bottom: 2rem;
  }
`;
