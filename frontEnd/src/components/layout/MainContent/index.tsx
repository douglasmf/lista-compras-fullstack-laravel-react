import type { ReactNode } from "react";
import type { Lista } from "../../../types/Lista";

import {
  Container,
  Header,
  Title,
  AddButton,
  ProductsArea,
  TotalBar,
  EmptyMessage
} from "./styles";

type Props = {
  children: ReactNode;
  total: number;
  listaSelecionada: Lista | null;
  onCreateProduto: () => void;
};

export function MainContent({
  children,
  total,
  listaSelecionada,
  onCreateProduto
}: Props) {

  // Nenhuma lista selecionada
  if (!listaSelecionada) {
    return (
      <Container>
        <EmptyMessage>
          Selecione uma lista para começar
        </EmptyMessage>
      </Container>
    );
  }

  const hasProdutos = Boolean(children);

  return (
    <Container>

      <Header>
        <Title>{listaSelecionada.nome}</Title>

        <AddButton onClick={onCreateProduto}>
          + Produto
        </AddButton>
      </Header>

      <ProductsArea>
        {hasProdutos ? (
          children
        ) : (
          <EmptyMessage>
            Nenhum produto na lista
          </EmptyMessage>
        )}
      </ProductsArea>

      <TotalBar>
        Total: R$ {total.toFixed(2)}
      </TotalBar>

    </Container>
  );
}