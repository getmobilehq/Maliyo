import styled from "styled-components";

const DivWrapper = styled.div`
  padding: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
    margin-top: 2rem;
  }

  .title {
    font-size: 36px;
    font-weight: 700;
    color: #000;

    @media screen and (max-width: 768px) {
      font-size: 24px;
      width: 100%;
      text-align: center;
    }
  }

  p {
    color: #acacac;
    font-size: 18px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  form .ant-form-item-label {
    #verify-email-form_email::before {
      display: none;
    }
  }
`;

export { DivWrapper };
