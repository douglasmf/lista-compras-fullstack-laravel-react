<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProdutoRequest;
use App\Http\Requests\UpdateProdutoRequest;
use App\Http\Resources\ProdutoResource;
use App\Models\Lista;
use App\Models\Produto;
use App\Services\ListaService;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    public function index(Lista $lista)
    {
        return ProdutoResource::collection($lista->produtos);
    }

    public function store(
        StoreProdutoRequest $request,
        Lista $lista,
        ListaService $listaService
    ) {
        $produto = $lista->produtos()->create($request->validated());

        $listaService->recalcularValorTotal($lista);

        return new ProdutoResource($produto);
    }

    public function show(Lista $lista,Produto $produto)
    {
        return new ProdutoResource($produto);
    }


    public function update(
        UpdateProdutoRequest $request,
	Lista $lista,        
	Produto $produto,
        ListaService $listaService
    ) {
        $produto->update($request->validated());

        $listaService->recalcularValorTotal($lista);

        return new ProdutoResource($produto);
    }

    public function destroy(
	Lista $lista,        
	Produto $produto,
        ListaService $listaService
    ) {
        $produto->delete();

        $listaService->recalcularValorTotal($lista);

        return response()->noContent();
    }
}
