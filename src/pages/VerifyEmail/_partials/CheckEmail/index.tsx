import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { DivWrapper } from "../../styled";

const CheckEmail = () => {
  return (
    <DivWrapper>
      <h1 className="title">Verify Email</h1>
      <p>Please enter the OTP sent to your email.</p>
      <Button type="primary">
        <Link to="/enter-otp">Enter OTP</Link>
      </Button>
    </DivWrapper>
  );
};

export default CheckEmail;
