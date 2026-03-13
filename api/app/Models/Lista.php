<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'valor_total',
    ];

    public function produtos()
    {
        return $this->hasMany(Produto::class);
    }
}
