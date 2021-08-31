import styled from "styled-components";

const StyledSection = styled.section`
  padding: 0 3rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const StyledHeader = styled.header`
  margin: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledMain = styled.main`
  min-height: calc(100vh - (61px + 64px));
  padding-top: 3rem;
  padding-bottom: 6rem;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

export { StyledMain, StyledSection, StyledHeader, StyledRow, CloseButton };
