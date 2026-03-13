import type { Lista } from "../../../types/Lista";
import * as S from "./styles";
import { FiEdit, FiTrash } from "react-icons/fi";
interface Props {
  lista: Lista;
  isSelected: boolean;
  onSelect: (lista: Lista) => void;
  onEdit: (lista: Lista) => void;
  onDelete: (id: number) => void;
}

export function ListaItem({
  lista,
  isSelected,
  onSelect,
  onEdit,
  onDelete
}: Props) {
  return (
    <S.Container $selected={isSelected}>
      <S.Name onClick={() => onSelect(lista)}>
        {lista.nome}
      </S.Name>

      <S.Actions>
        <button
          type="button"
          onClick={() => onEdit(lista)}
        >
          <FiEdit/>
        </button>

        <button
          type="button"
          onClick={() => onDelete(lista.id)}
        >
          <FiTrash/>
        </button>
      </S.Actions>
    </S.Container>
  );
}