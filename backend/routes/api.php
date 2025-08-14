<?php

use App\Http\Controllers\TaskController;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/task', [TaskController::class, 'index']);
Route::post('/task/create', [TaskController::class, 'store']);
