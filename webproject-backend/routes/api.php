<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('registerUser', [UserController::class,'registerUser']);
Route::post('/checkemailunique', [UserController::class,'checkemailunique']);
Route::post('login', [UserController::class,'login']);
Route::post('userprofile', [UserController::class,'userprofile']);
Route::get('userlist' , [UserController::class,'userlist']);
Route::get('search/{key}' , [UserController::class,'search']);

Route::post('adminlogin' , [AdminController::class,'adminlogin']);




