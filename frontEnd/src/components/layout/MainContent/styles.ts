import styled from "styled-components";
import {theme} from "../../../themes/Theme"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${theme.colors.background};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};
  background: ${theme.colors.surface};

  box-shadow: ${theme.shadows.shadowSm};
  z-index: 2;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
`;

export const AddButton = styled.button`
  padding: 8px 14px;

  border: none;
  border-radius: 6px;

  background: ${theme.colors.primary};
  color: white;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

export const ProductsArea = styled.div`
  flex: 1;
  overflow-y: auto;

  padding: ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  scrollbar-width: thin;
`;

export const EmptyMessage = styled.div`
  margin: auto;
  text-align: center;

  color: ${theme.colors.textSecondary};
  font-size: 16px;
`;

export const TotalBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: ${theme.spacing.md};

  border-top: 1px solid ${theme.colors.border};
  background: ${theme.colors.surface};

  font-weight: 600;
  font-size: 20px;

  box-shadow: ${theme.shadows.shadowSm};
`;