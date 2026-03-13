import styled from "styled-components";
import {theme} from "../../../themes/Theme";

export const Container = styled.div`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.md};
  border-radius: 8px;
  box-shadow: ${theme.shadows.shadowSm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-weight: 500;
  color: ${theme.colors.textPrimary};
`;

export const Price = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
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