<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Validation\ValidationException;



class AuthController extends Controller
{
    // Register method
    public function register(Request $request)
    {
        try {
            // Validate the input data
            $validatedData = $request->validate([
                'name' => 'required|unique:users|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
            ]);

            //create user
            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
            ]);
            
            return response()->json([
                'message' => 'User registered successfully!',
                'user' => $user,
            ], 200);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error 500!',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    // Login method
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 422);
        }

        // Return a success message
        return response()->json([
            'message' => 'Logged in successfully!',
            'user' => Auth::user(),
        ]);
    }

    // Logout method
    public function logout(Request $request)
    {

        Auth::logout();

        return response()->json([
            'message' => 'Logged out successfully!',
        ]);
    }
}
