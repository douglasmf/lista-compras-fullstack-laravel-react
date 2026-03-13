import { useEffect, useState, useMemo } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Navbar } from "../../components/layout/Navbar";
import { MainContent } from "../../components/layout/MainContent";
import { ProdutoItem } from "../../components/produto/ProdutoItem";
import { ProdutoForm } from "../../components/produto/ProdutoForm";

import type { Lista } from "../../types/Lista";
import type { Produto } from "../../types/Produto";

import { listaService } from "../../services/listaService";
import { produtoService } from "../../services/produtoService";

export function Home() {
  const [listas, setListas] = useState<Lista[]>([]);
  const [listaSelecionada, setListaSelecionada] = useState<Lista | null>(null);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState<Produto | null>(null);
  const [isProdutoModalOpen, setIsProdutoModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleMenu() {
    setIsNavOpen(prev => !prev);
  }

  function closeMenu() {
    setIsNavOpen(false);
  }

  // Total calculado automaticamente
  const total = useMemo(() => {
    return produtos.reduce((acc, p) => acc + p.valor, 0);
  }, [produtos]);

  async function carregarListas() {
    const data = await listaService.listar();
    setListas(data);
  }

  useEffect(() => {
    carregarListas();
  }, []);

  useEffect(() => {
    if (!listaSelecionada) return;

    async function carregarProdutos() {
      const data = await produtoService.listar(listaSelecionada!.id);
      setProdutos(data);
    }

    carregarProdutos();
  }, [listaSelecionada]);

  // ==============================
  // LISTAS
  // ==============================

  async function handleCreateLista(nome: string) {
    const novaLista = await listaService.criar(nome);
    setListas(prev => [novaLista, ...prev]);
  }

  async function handleUpdateLista(id: number, nome: string) {
    try {
      const listaAtualizada = await listaService.atualizar(id, nome);

      setListas(prev =>
        prev.map(lista =>
          lista.id === id ? listaAtualizada : lista
        )
      );

      if (listaSelecionada?.id === id) {
        setListaSelecionada(listaAtualizada);
      }
    } catch (error) {
        alert("Erro ao atualizar lista");
        console.error(error);
    }  
}
  async function handleDeleteLista(id: number) {
    await listaService.remover(id);

    setListas(prev => prev.filter(l => l.id !== id));

    if (listaSelecionada?.id === id) {
      setListaSelecionada(null);
      setProdutos([]);
    }
  }

  // ==============================
  // PRODUTOS
  // ==============================

  async function handleCreateProduto(nome: string, valor: number) {
    if (!listaSelecionada) return;

    const novoProduto = await produtoService.criar(
      listaSelecionada.id,
      nome,
      valor
    );

    setProdutos(prev => [novoProduto, ...prev ]);
  }

  async function handleUpdateProduto(
    id: number,
    nome: string,
    valor: number
  ) {
    if (!listaSelecionada) return;

    const atualizado = await produtoService.atualizar(
      listaSelecionada.id,
      id,
      nome,
      valor
    );

    setProdutos(prev =>
      prev.map(p => (p.id === id ? atualizado : p))
    );
  }

  async function handleDeleteProduto(id: number) {
    if (!listaSelecionada) return;

    await produtoService.remover(listaSelecionada.id, id);
    setProdutos(prev => prev.filter(p => p.id !== id));
  }

  function handleEditProduto(produto: Produto) {
    setProdutoEmEdicao(produto);
    setIsProdutoModalOpen(true);
  }

  return (
    <MainLayout onToggleMenu={toggleMenu}>
      <Navbar
        listas={listas}
        listaSelecionada={listaSelecionada}
        onSelectLista={(lista) => {
          setListaSelecionada(lista);
          closeMenu();
        }}
        onCreateLista={handleCreateLista}
        onDeleteLista={handleDeleteLista}
        onUpdateLista={handleUpdateLista}
        isOpen={isNavOpen}
      />

  <MainContent
    listaSelecionada={listaSelecionada}
    total={total}
    onCreateProduto={() => {
      setProdutoEmEdicao(null);
      setIsProdutoModalOpen(true);
    }}
  >
    {!listaSelecionada && (
      <p>Selecione uma lista para visualizar os produtos.</p>
    )}

    {listaSelecionada && produtos.length === 0 && (
      <p>Nenhum produto na lista.</p>
    )}

    {listaSelecionada &&
      produtos.map(produto => (
        <ProdutoItem
          key={produto.id}
          produto={produto}
          onEditar={handleEditProduto}
          onRemover={handleDeleteProduto}
        />
      ))}
  </MainContent>
      {isProdutoModalOpen && (
        <ProdutoForm
          produtoEmEdicao={produtoEmEdicao}
          onCreate={handleCreateProduto}
          onUpdate={handleUpdateProduto}
          onClose={() => {
            setProdutoEmEdicao(null);
            setIsProdutoModalOpen(false);
          }}
        />
      )}
    </MainLayout>
  );
}