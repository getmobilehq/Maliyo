import React from "react";
import { ReactComponent as Check } from "../../../../assets/svg/check.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AccountVerified = () => {
  return (
    <StyledWrapper>
      <Check />

      <h2>Your Account has been verified successfully.</h2>
      <p>We would get back to you shortly.</p>
      <Link to="/">Go back Home</Link>
    </StyledWrapper>
  );
};

export default AccountVerified;

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
  }

  h2 {
    font-size: 32px;
    font-weight: 800;
    color: #262626;
  }

  p {
    color: #8c8c8c;
  }

  a {
    text-decoration: underline;
  }
`;
