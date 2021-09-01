import styled from "styled-components";

const DivWrapper = styled.div`
  /* margin: auto 10rem; */
  padding: 1rem;

  @media screen and (min-width: 1440px) and (max-width: 2560px) {
    max-width: 600px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
    margin-top: 2rem;
    width: 100%;
  }

  .title {
    font-size: 36px;
    font-weight: 700;
    color: #000;

    @media screen and (min-width: 1440px) and (max-width: 2560px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
      width: 100%;
      text-align: center;
    }
  }

  p {
    color: #acacac;
    font-size: 18px;

    @media screen and (min-width: 1440px) and (max-width: 2560px) {
      font-size: 25px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  form {
    .ant-form-item-label {
      #verify-email-form_email::before {
        display: none;
      }
    }

    @media screen and (min-width: 1440px) and (max-width: 2560px) {
      input,
      button {
        height: 56px;
        font-size: 20px;
      }
    }
  }
`;

export { DivWrapper };
