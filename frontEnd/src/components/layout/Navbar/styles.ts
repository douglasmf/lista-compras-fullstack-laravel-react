import styled from "styled-components";
import {theme} from "../../../themes/Theme";

export const Overlay = styled.div<{ $isOpen: boolean }>`
  opacity: 0;
  pointer-events: none;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 5;
  }
`;

export const Container = styled.aside<{ $isOpen: boolean }>`
  position: relative;
  width: 280px;
  background: ${theme.colors.surface};
  border-right: 1px solid ${theme.colors.border};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  /* Desktop */
  @media (min-width: ${theme.breakpoints.tablet}) {
    position: relative;
    transform: translateX(0);
  }

  /* Mobile */
  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 64px;
    left: 0;
    height: calc(100vh - 64px);
    z-index: 30;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(-100%)"};
    box-shadow: ${theme.shadows.shadowSm};
  }
`;

export const Header = styled.div`
  padding: ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const SearchInput = styled.input`
  margin: ${theme.spacing.md};
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: 6px;
  font-size: ${theme.fontSizes.sm};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const AddButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

export const EmptyMessage = styled.p`
  padding: ${theme.spacing.md};
  color: ${theme.colors.textSecondary};
`;
