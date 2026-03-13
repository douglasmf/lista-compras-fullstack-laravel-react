import type { ReactNode } from 'react';
import { Header } from '../Header';
import { Container, Content,MainStyle } from './styles';

type Props = {
  children: ReactNode;
  onToggleMenu: () => void;
};

export function MainLayout({ children, onToggleMenu }: Props) {
  return (
    <MainStyle>
      <Header onToggleMenu={onToggleMenu}/>
      <Container>
        <Content>{children}</Content>
      </Container>
    </MainStyle>
  );
}