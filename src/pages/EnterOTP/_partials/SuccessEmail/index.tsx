import React from "react";
import { ReactComponent as Check } from "../../../../assets/svg/check.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SuccessEmail = () => {
  return (
    <StyledWrapper>
      <Check />

      <h2>Your Email has been verified successfully</h2>
      <p>one of two steps completed.</p>
      <Link to="/verify-account">Verify Bank Account</Link>
    </StyledWrapper>
  );
};

export default SuccessEmail;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }

  svg {
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 800;
    color: #262626;

    @media screen and (max-width: 768px) {
      font-size: 24px;
      margin-botton: 5px;
    }
  }

  p {
    color: #8c8c8c;

    @media screen and (max-width: 768px) {
      margin-botton: 5px;
    }
  }

  a {
    text-decoration: underline;
  }
`;
