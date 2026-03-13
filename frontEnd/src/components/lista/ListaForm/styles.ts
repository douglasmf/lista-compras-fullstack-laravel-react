import styled from "styled-components";
import {theme} from "../../../themes/Theme";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
`;

export const Modal = styled.div`
  position: absolute;
  top: 20%;
  left: 110%;
  background: ${theme.colors.surface};
  padding: ${theme.spacing.lg};
  border-radius: 10px;
  width: 280px;
  box-shadow: ${theme.shadows.shadowLg};
  border: 2px solid ${theme.colors.border};
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

  @media (max-width: ${theme.breakpoints.tablet}) {
    left: 60%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    left: 40%;
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

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
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

export const Button = styled.button`
  width: 100%;
  padding: ${theme.spacing.sm};
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;