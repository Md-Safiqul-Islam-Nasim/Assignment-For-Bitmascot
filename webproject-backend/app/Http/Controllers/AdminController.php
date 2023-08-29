<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AdminController;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; 
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{

    function adminlogin(Request $req){
        $email = $req->input('email');
        $password = $req->input('password');
        $user = Admin:: where('email',$req->email)->first();
        $userpass = Admin:: where('password',$req->password)->first();
        $isValid = true;
        if(!$user || !$userpass)
        {   
            $isValid =! $isValid;
        }
        return response()->json(['isValid' => $isValid , $user]);
    }
}
