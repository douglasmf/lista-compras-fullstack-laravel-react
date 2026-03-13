import { useState } from "react";
import type { Lista } from "../../../types/Lista";
import { useNavbarLogic } from "./functions";
import { ListaItem } from "../../lista/ListaItem";
import { ListaForm } from "../../lista/ListaForm";
import {
  Container,
  Header,
  List,
  EmptyMessage,
  AddButton,
  SearchInput
} from "./styles";

type Props = {
  listas: Lista[];
  listaSelecionada: Lista | null;
  onSelectLista: (lista: Lista) => void;
  onCreateLista: (nome: string) => Promise<void>;
  onDeleteLista: (id: number) => void;
  onUpdateLista: (id: number, nome: string) => Promise<void>;
  isOpen?: boolean;
};

export function Navbar({
  listas,
  listaSelecionada,
  onSelectLista,
  onCreateLista,
  onDeleteLista,
  onUpdateLista,
  isOpen = true
}: Props) {
  const { isSelected } = useNavbarLogic(listaSelecionada);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listaEmEdicao, setListaEmEdicao] = useState<Lista | null>(null);
  const [busca, setBusca] = useState("");

  function abrirNovaLista() {
    setListaEmEdicao(null);
    setIsModalOpen(true);
  }

  function editarLista(lista: Lista) {
    setListaEmEdicao(lista);
    setIsModalOpen(true);
  }

  function fecharModal() {
    setIsModalOpen(false);
    setListaEmEdicao(null);
  }

  const listasFiltradas = listas.filter(lista =>
    lista.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container $isOpen={isOpen}>
      <Header>
        <strong>Listas</strong>
        <AddButton onClick={abrirNovaLista}>+</AddButton>
      </Header>

      <SearchInput
        type="text"
        placeholder="Buscar..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {listasFiltradas.length === 0 ? (
        <EmptyMessage>Nenhuma lista encontrada</EmptyMessage>
      ) : (
        <List>
          {listasFiltradas.map(lista => (
            <ListaItem
              key={lista.id}
              lista={lista}
              isSelected={isSelected(lista)}
              onSelect={onSelectLista}
              onEdit={editarLista}
              onDelete={onDeleteLista}
            />
          ))}
        </List>
      )}

      {isModalOpen && (
        <ListaForm
          listaEmEdicao={listaEmEdicao}
          onCreate={onCreateLista}
          onUpdate={onUpdateLista}
          onClose={fecharModal}
        />
      )}
    </Container>
  );
}