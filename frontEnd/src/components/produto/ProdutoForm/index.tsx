import { useEffect, useState } from "react";
import {
  Overlay,
  Modal,
  Title,
  Input,
  Button,
  CloseButton
} from "./styles";
import type { Produto } from "../../../types/Produto";
import { FiX } from "react-icons/fi";

interface Props {
  produtoEmEdicao: Produto | null;
  onCreate: (nome: string, valor: number) => void;
  onUpdate: (id: number, nome: string, valor: number) => void;
  onClose: () => void;
}

export function ProdutoForm({
  produtoEmEdicao,
  onCreate,
  onUpdate,
  onClose
}: Props) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  useEffect(() => {
    if (produtoEmEdicao) {
      setNome(produtoEmEdicao.nome);
      setValor(String(produtoEmEdicao.valor));
    } else {
      setNome("");
      setValor("");
    }
  }, [produtoEmEdicao]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nome.trim() || Number(valor) <= 0) {
      alert("Preencha os campos corretamente");
      return;
    }

    if (produtoEmEdicao) {
      onUpdate(produtoEmEdicao.id, nome, Number(valor));
    } else {
      onCreate(nome, Number(valor));
    }

    onClose();
  }

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}> <FiX size={20} /> </CloseButton>

        <Title>
          {produtoEmEdicao ? "Editar Produto" : "Novo Produto"}
        </Title>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input
            type="number"
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />

          <Button type="submit">
            {produtoEmEdicao ? "Salvar" : "Adicionar"}
          </Button>
        </form>
      </Modal>
    </Overlay>
  );
}