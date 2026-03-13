import styled from "styled-components";
import {theme} from "../../../themes/Theme"

export const HeaderStyle = styled.header`
  width: 100%;
  background: #19439E;
  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

export const Container = styled.div`
  height: 64px;
  max-width: 1048px;
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.lg};
  box-shadow: ${theme.shadows.shadowSm};
  z-index: 20;
  margin: 0 auto;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.fontSizes.lg};
  font-weight: 600;
  color: ${theme.colors.surface};
`;

export const ToggleButton = styled.button`
  display: none;
  margin-right: ${theme.spacing.md};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${theme.colors.surface};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }
`;