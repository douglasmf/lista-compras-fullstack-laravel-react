import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { HeaderStyle,Container, Title, ToggleButton } from './styles';

type Props = {
  onToggleMenu: () => void;
};

export function Header({ onToggleMenu }: Props) {
  return (
    <HeaderStyle>
      <Container>
        <ToggleButton onClick={onToggleMenu}>
          <FiMenu size={22} />	
        </ToggleButton>
        <Title>
        <FiShoppingCart size={22} />        
          Lista de Compras
        </Title>
      </Container>
    </HeaderStyle>
  );
}
