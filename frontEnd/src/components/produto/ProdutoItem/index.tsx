import { FiEdit, FiTrash } from "react-icons/fi";
import type { Produto } from "../../../types/Produto";
import {
  Container,
  Info,
  Name,
  Price,
  Actions
} from "./styles";

interface Props {
  produto: Produto;
  onEditar: (produto: Produto) => void;
  onRemover: (id: number) => void;
}

export function ProdutoItem({
  produto,
  onEditar,
  onRemover
}: Props) {
  return (
    <Container>
      <Info>
        <Name>{produto.nome}</Name>
        <Price>R$ {produto.valor.toFixed(2)}</Price>
      </Info>

      <Actions>
        <button onClick={() => onEditar(produto)}>
          <FiEdit size={16} />
        </button>

        <button onClick={() => onRemover(produto.id)}>
          <FiTrash size={16} />
        </button>
      </Actions>
    </Container>
  );
}