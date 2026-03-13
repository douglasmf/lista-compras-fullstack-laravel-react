import styled from "styled-components";
import {theme} from "../../../themes/Theme";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const Modal = styled.div`
  position: relative;
  background: ${theme.colors.surface};
  padding: ${theme.spacing.lg};
  border-radius: 10px;
  width: 340px;
  box-shadow: ${theme.shadows.shadowLg};

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: ${theme.spacing.md};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: 6px;
`;

export const Button = styled.button`
  width: 100%;
  padding: ${theme.spacing.sm};
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${theme.colors.textSecondary};
  background: transparent;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: ${theme.colors.textPrimary};
    transform: scale(1.1);
  }
`;