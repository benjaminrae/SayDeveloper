import styled from "styled-components";

const StyledPage = styled.main`
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export default StyledPage;
