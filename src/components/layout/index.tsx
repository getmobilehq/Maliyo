import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/png/logo.png";
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";
import { StyledSection, StyledHeader, StyledMain, CloseButton } from "./styled";

export const Layout: FC = ({ children }) => {
  const history = useHistory();

  return (
    <StyledSection className="section-verify-email">
      <StyledHeader>
        <nav>
          <div className="logo-wrapper">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="close-icon">
            <CloseButton onClick={() => history.push("/")}>
              <CloseIcon />
            </CloseButton>
          </div>
        </nav>
      </StyledHeader>

      <StyledMain>{children}</StyledMain>
    </StyledSection>
  );
};
