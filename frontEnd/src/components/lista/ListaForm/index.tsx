import { useEffect, useState } from "react";
import type { Lista } from "../../../types/Lista";
import {Modal,Title,Input,Button} from "./styles";
import { CloseButton } from "../../produto/ProdutoForm/styles";
import { FiX } from "react-icons/fi";

interface Props {
  listaEmEdicao: Lista | null;
  onCreate: (nome: string) => Promise<void>;
  onUpdate: (id: number, nome: string) => Promise<void>;
  onClose: () => void;
}

export function ListaForm({
  listaEmEdicao,
  onCreate,
  onUpdate,
  onClose
}: Props) {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (listaEmEdicao) {
      setNome(listaEmEdicao.nome);
    } else {
      setNome("");
    }
  }, [listaEmEdicao]);

  function validar() {
    if (!nome.trim()) return "Nome é obrigatório";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const erro = validar();
    if (erro) {
      alert(erro);
      return;
    }

    try {
      setLoading(true);

      if (listaEmEdicao) {
        await onUpdate(listaEmEdicao.id, nome);
      } else {
        await onCreate(nome);
      }

      onClose();
    } catch (error) {
      alert("Erro ao salvar lista");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
      <Modal>
        <CloseButton onClick={onClose}>
          <FiX size={20} />
        </CloseButton>

        <Title>
          {listaEmEdicao ? "Editar Lista" : "Nova Lista"}
        </Title>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome da lista"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Button type="submit" disabled={loading}>
            {loading
              ? "Salvando..."
              : listaEmEdicao
              ? "Salvar"
              : "Criar"}
          </Button>
        </form>
      </Modal>
  );
}