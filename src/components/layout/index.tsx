import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/png/logo.png";
import { StyledSection, StyledHeader, StyledMain } from "./styled";

export const Layout: FC = ({ children }) => {
  return (
    <StyledSection className="section-verify-email">
      <StyledHeader>
        <nav>
          <div className="logo-wrapper">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </nav>
      </StyledHeader>

      <StyledMain>{children}</StyledMain>
    </StyledSection>
  );
};
