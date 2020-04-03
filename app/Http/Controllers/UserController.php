<?php

namespace App\Http\Controllers;

use App\AdminModel;
use App\Company;
use App\Employee;
use App\Responses\ServerResponses;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Validator;
use JWTAuth;

class UserController extends Controller{
    private $jwt;
    private $userModel;
    private $hash;
    private $validator;
    private $responses;
    private $admin;
    private $employee;
    private $company;
    public function __construct(JWTAuth $jWTAuth, User $user, AdminModel $admin, Employee $employee, Company $company, Hash $hash, Validator $validator, ServerResponses $responses)
    {
        $this->jwt = $jWTAuth;
        $this->userModel = $user;
        $this->hash = $hash;
        $this->validator = $validator;
        $this->responses = $responses;
        $this->admin = $admin;
        $this->employee = $employee;
        $this->company = $company;
    }

    public function login(Request $request){
        $form = $request->all();

        //set validation rules and messages
        $messages = [
            'email.required' => 'Please enter email',
            'password.required' => 'Please enter password',
        ];

        $rules = [
            'email' => 'required|email',
            'password' => 'required',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){
            $user  = $this->userModel::where('email', $form['email'])->firstOrFail();

            if($this->hash::check($form['password'],$user->password)){
                $jwt =  $this->jwt::fromUser($user);
                
                $userData = [];
                
                switch($user->user_type){
                    case "admin":
                        $admin = $this->admin::where('user_id',$user->id)->firstOrFail(['first_name','last_name']);
                        $userData['name'] = $admin->first_name." ".$admin->last_name;
                        
                    break;
                    case "employee":
                        $employee = $this->employee::where('user_id',$user->id)->firstOrFail(['first_name','last_name']);
                        $userData['name'] = $employee->first_name." ".$employee->last_name;
                    break;
                    case "company":
                        $company = $this->company::where('user_id',$user->id)->firstOrFail(['name']);
                        $userData['name'] = $company->name;
                    break;
                }

                $userData['acct_type'] = $user->user_type;

                return $this->responses::getSuccess(["user"=>$userData,"token"=>$jwt]);
            }else{
                return $this->responses::getUnauthorized("Invalid login");
            }
        }else{
            throw new ValidationException($validator);
        }
    }

    public function getTotalUsers(){
        $total = $this->userModel->count();
        return $this->responses::getSuccess(["total_users"=>$total]);
    }
    public function updateAccount(Request $request, $id = ""){
        $form = $request->all();

        $user =  !empty($id) ? $this->userModel::findOrFail($id) : $form['user'];
        
        $response= [];
        //set validation rules and messages
        $messages = [
            'email.required' => 'Please enter email',
            'user_type.required' => 'Please enter user type',
        ];

        $rules = [
            'email' => 'required|email|unique:users,email,'.$user->id,
            'user_type' => 'required',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){
            
            $user->email = $form['email'];
            $user->user_type = $form['user_type'];
            if(isset($form['password']) && !empty($form['password'])){
                $user->password = $form['email'];
            }
            $user->save();

            //$this->userModel::where('user_id',$user->user_id)->update($data);

            return $this->responses::getSuccess();
        }else{
            throw new ValidationException($validator);
        }
    }
}
