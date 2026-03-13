<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $fillable = [
        'lista_id',
        'nome',
        'valor',
    ];

    public function lista()
    {
        $this->belongsTo(Lista::class);
    }
}
