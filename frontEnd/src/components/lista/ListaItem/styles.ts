import styled from "styled-components";
import { theme } from "../../../themes/Theme";

export const Container = styled.div<{ $selected: boolean }>`
  padding: ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${props => props.$selected ? theme.colors.primaryLight : "transparent"};

  &:hover {
    background: ${theme.colors.surfaceAlt};
  }
`;

export const Name = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textPrimary};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${theme.colors.textSecondary};

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;