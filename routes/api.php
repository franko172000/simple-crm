<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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



Route::prefix('/v1/user/')->group(function(){
    Route::post('login', 'UserController@login');
        
    Route::group(['middleware' => ['jwt.auth','getUserFromToken']],function(){
        Route::put('update-account', 'UserController@updateAccount');
    });
});


Route::prefix('/v1/company/')->group(function(){
    Route::group(['middleware' => ['jwt.auth','getUserFromToken']],function(){
        Route::post('create', 'CompanyController@creatCompany')->middleware('user.access:admin');
        Route::post('upload-logo', 'CompanyController@uploadLogo')->middleware('user.access:company');
        Route::get('get-all', 'CompanyController@getCompanies')->middleware('user.access:admin');
        Route::get('get/{id}', 'CompanyController@getOneCompany')->middleware('user.access:admin,company');
        Route::put('update', 'CompanyController@updateCompany')->middleware('user.access:admin,company');
        Route::get('get-profile', 'CompanyController@getProfile')->middleware('user.access:company');
        Route::delete('delete/{id}', 'CompanyController@deleteCompany')->middleware('user.access:admin');
    });
});

Route::prefix('/v1/employee/')->group(function(){
    Route::group(['middleware' => ['jwt.auth','getUserFromToken']],function(){
        Route::post('create', 'EmployeeController@createEmployee')->middleware('user.access:admin');
        Route::post('upload-photo', 'EmployeeController@uploadPic')->middleware('user.access:admin');
        Route::get('get-all', 'EmployeeController@getAllEmployees')->middleware('user.access:admin,company');
        Route::get('get/{id}', 'EmployeeController@getOneEmployee')->middleware('user.access:admin,employee');
        Route::put('update', 'EmployeeController@updateEmployee')->middleware('user.access:admin,employee');
        Route::get('get-profile', 'EmployeeController@getProfile')->middleware('user.access:employee');
        Route::delete('delete/{id}', 'EmployeeController@deleteEmployee')->middleware('user.access:admin');
    });
});

Route::prefix('/v1/admin/')->group(function(){
    Route::group(['middleware' => ['jwt.auth','getUserFromToken']],function(){
        Route::post('create-user', 'AdminController@createUser')->middleware('user.access:admin');
        Route::post('upload-photo', 'AdminController@uploadPic')->middleware('user.access:admin');
        Route::get('get-all-users', 'AdminController@getAllAdminUsers')->middleware('user.access:admin');
        Route::get('get-user/{id}', 'AdminController@getOneUser')->middleware('user.access:admin');
        Route::get('get-profile', 'AdminController@getProfile')->middleware('user.access:admin');
        Route::put('update', 'AdminController@updateUser')->middleware('user.access:admin');
        Route::delete('delete/{id}', 'AdminController@deleteAdminUser')->middleware('user.access:admin');
    });
});


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
