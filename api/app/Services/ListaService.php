<?php

namespace App\Services;

use App\Models\Lista;

class ListaService
{
    public function recalcularValorTotal(Lista $lista): void
    {
        $total = $lista->produtos()->sum('valor');

        $lista->update([
            'valor_total' => $total
        ]);
    }
}
