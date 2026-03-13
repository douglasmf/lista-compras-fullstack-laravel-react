<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProdutoResource extends JsonResource
{

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'lista_id' => $this->lista_id,
            'nome' => $this->nome,
            'valor' => $this->valor,

        ];
    }
}
