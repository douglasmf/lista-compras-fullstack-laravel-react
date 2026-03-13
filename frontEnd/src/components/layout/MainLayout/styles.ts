import styled from "styled-components";
import { theme } from "../../../themes/Theme";

export const MainStyle = styled.div`
  box-shadow: ${theme.shadows.shadowMd};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100%;
`;

export const Container = styled.div`
  height: calc(100vh - 64px);
  background: ${theme.colors.background};
  max-width: 1048px;
  width: 100%;
  margin: 0 auto;
  box-shadow: ${theme.shadows.shadowMd};

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 64px;
    height: calc(100vh - 64px);
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;