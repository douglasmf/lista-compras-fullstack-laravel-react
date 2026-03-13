<?php

namespace Database\Seeders;

use App\Models\Lista;
use App\Models\Produto;
use App\Services\ListaService;
use Illuminate\Database\Seeder;

class ListaProdutoSeeder extends Seeder
{
    public function run(): void
    {
        $listaService = app(ListaService::class);

        /* Lista 1 */
        $listaMercado = Lista::create([
            'nome' => 'Compra do Mercado',
            'valor_total' => 0,
        ]);

        Produto::create([
            'lista_id' => $listaMercado->id,
            'nome' => 'Arroz',
            'valor' => 25.00
        ]);

        Produto::create([
            'lista_id' => $listaMercado->id,
            'nome' => 'Feijão',
            'valor' => 9.50
        ]);

        Produto::create([
            'lista_id' => $listaMercado->id,
            'nome' => 'Óleo',
            'valor' => 8.00
        ]);

        $listaService->recalcularValorTotal($listaMercado);

        /* Lista 2 */

        $listaChurrasco = Lista::creATE([
            'nome' => 'Churrasco',
            'valor_total' => 0
        ]);

        Produto::create([
            'lista_id' => $listaChurrasco->id,
            'nome' => 'Carne',
            'valor' => 85.00
        ]);
        Produto::create([
            'lista_id' => $listaChurrasco->id,
            'nome' => 'Carvão',
            'valor' => 30.00
        ]);
        Produto::create([
            'lista_id' => $listaChurrasco->id,
            'nome' => 'Refrigerante',
            'valor' => 18.00
        ]);

        $listaService->recalcularValorTotal($listaChurrasco);
    }
}
