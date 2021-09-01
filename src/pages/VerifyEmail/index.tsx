import React, { useState } from "react";
import { Row, Col } from "antd";
import Group633 from "../../assets/png/Group 633.png";
import EnterEmailForm from "./_partials/EnterEmailForm";
import CheckEmail from "./_partials/CheckEmail";
import styled from "styled-components";

const VerifyEmail = () => {
  const [hasEnteredEmail, setHasEnteredEmail] = useState(false);

  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={10}>
        <div className="img-wrapper">
          <img src={Group633} alt="Group 633" />
        </div>
      </Col>

      {!hasEnteredEmail && (
        <Col xs={24} sm={24} md={12} lg={14}>
          <ContentWrapper>
            <EnterEmailForm setHasEnteredEmail={setHasEnteredEmail} />
          </ContentWrapper>
        </Col>
      )}

      {hasEnteredEmail && (
        <Col xs={24} sm={24} md={12} lg={14}>
          <ContentWrapper>
            <CheckEmail />
          </ContentWrapper>
        </Col>
      )}
    </Row>
  );
};

export default VerifyEmail;

const ContentWrapper = styled.div`
  /* margin: auto; */

  display: grid;
  place-items: center;
  height: 100%;
`;
