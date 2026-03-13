import {http} from './http'
import type { Lista } from '../types/Lista'

export const listaService = {
    async listar(): Promise<Lista[]> {
        const response = await http.get('/listas')
        return response.data.data ?? response.data;
    },

    async buscar(id: number): Promise<Lista> {
        const response = await http.get(`/listas/${id}`)
        return response.data.data
    },

    async criar(nome:string): Promise<Lista> {
        const response = await http.post('/listas', {nome})
        return response.data.data ?? response.data;
    },

    async atualizar(id: number, nome:string): Promise<Lista> {
        const response = await http.put(`/listas/${id}`, {nome})
        return response.data.data;
    },

    async remover(id: number): Promise<void> {
        await http.delete(`/listas/${id}`)
    }
    
}