<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; 
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    function registerUser(Request $req){
        
        $user = new User;
        $user->first_name = $req->input('first_name');
        $user->last_name = $req->input('last_name');
        $user->address = $req->input('address');
        $user->phone_Number = $req->input('phone_Number');
        $user->email = $req->input('email');
        $user->birthdate = $req->input('birthdate');
        $user->password = Hash::make($req->input('password'));
        
        $user->save();
        return $user;
    }
    function login(Request $req){
        $isValid = true;
        $user = User::where('email' , $req-> email)->first();
        if(!$user || !Hash::check($req->password,$user->password)){
            $isValid =! $isValid;
        }
        return response()->json(['isValid' => $isValid , $user]);
    }
    function adminlogin(){
        
    }
    public function checkemailunique(Request $request)
    {
        $email = $request->input('email');

        $unique = User::where('email', $email)->first();

        return response()->json(['unique' => !$unique]);
    }   
    function userlist(){
        return User::all();
    }
    function search($key){
        return User :: where('first_name','Like',"%$key%")->get();
    } 
}
