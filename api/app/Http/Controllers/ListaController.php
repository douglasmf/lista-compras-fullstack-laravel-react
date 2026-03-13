<?php

namespace App\Http\Controllers;

use App\Models\Lista;
use App\Http\Requests\StoreListaRequest;
use App\Http\Requests\UpdateListaRequest;
use App\Http\Resources\ListaResource;


class ListaController extends Controller
{
    public function index()
    {
        $listas = Lista::all();
        return ListaResource::collection($listas);
    }

    public function store(StoreListaRequest $request)
    {
        $lista = Lista::create([
            'nome' => $request->nome,
            'valor_total' => 0,
        ]);

        return new ListaResource($lista);
    }

    public function show(Lista $lista)
    {
        return new ListaResource($lista);
    }

    public function update(UpdateListaRequest $request, Lista $lista)
    {
        $lista->update([
            'nome' => $request->nome,
        ]);

        return new ListaResource($lista);
    }

    public function destroy(Lista $lista)
    {
        $lista->delete();
        return response()->json([
            'message' => 'Lista removida com sucesso'
        ], 204);
    }
}
