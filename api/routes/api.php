<?php

use App\Http\Controllers\ListaController;
use App\Http\Controllers\ProdutoController;
use Illuminate\Support\Facades\Route;

Route::apiResource('listas', ListaController::class);

Route::apiResource('listas.produtos', ProdutoController::class);
