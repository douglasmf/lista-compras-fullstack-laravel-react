import { http } from './http'
import type { Produto } from '../types/Produto'

export const produtoService = {
  async listar(listaId: number): Promise<Produto[]> {
    const response = await http.get(`/listas/${listaId}/produtos`)
    return response.data.data ?? response.data;
  },

  async buscar(
    listaId: number,
    produtoId: number): Promise<Produto>{
    const response = await http.get(`listas/${listaId}/produtos/${produtoId}`)
    return response.data.data;
  },

  async criar(
    listaId: number, 
    nome: string, 
    valor: number): Promise<Produto> {
    const response = await http.post(`/listas/${listaId}/produtos`, {nome, valor} )

    return response.data.data ?? response.data;
  },

  async atualizar(
    listaId: number,
    produtoId:number, 
    nome: string, 
    valor: number
  ): Promise<Produto> {
    const response = await http.put(`/listas/${listaId}/produtos/${produtoId}`, {nome, valor})
    return response.data.data
  },

  async remover(
    listaId: number,
    produtoId: number): Promise<void> {
    await http.delete(`/listas/${listaId}/produtos/${produtoId}`)
  }
}