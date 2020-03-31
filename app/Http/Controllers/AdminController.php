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

class AdminController extends Controller {
    private $adminModel;
    private $userModel;
    private $validator;
    private $hash;

    public function __construct(AdminModel $admin, Validator $validator, User $userModel, Hash $hash, ServerResponses $responses){
        $this->adminModel = $admin;
        $this->validator = $validator;
        $this->userModel = $userModel;
        $this->responses = $responses;
        $this->hash = $hash;
    }

    public function createUser(Request $request){
        $form = $request->all();
        $user =  null;
        $response= [];
        //set validation rules and messages
        $messages = [
            'email.required' => 'Please enter your username',
            'password.required' => 'Please enter your password',
            'first_name.required' => 'Please enter first name',
            'last_name.required' => 'Please enter last name',
            'role.required' => 'Please enter role',
        ];

        $rules = [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:2',
            'first_name' => 'required|min:2',
            'last_name' => 'required|min:2',
            'role' => 'required',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){
            //create user
            $user = $this->userModel;
            $user->email = $form['email'];
            $user->password = $this->hash::make($form['password']);
            $user->user_type = "admin";
            $user->save();

            //add conpamy data
            $this->adminModel->user_id = $user->id;
            $this->adminModel->first_name = $form['first_name'];
            $this->adminModel->last_name = $form['last_name'];
            $this->adminModel->role = $form['role'];
            $this->adminModel->save();

            return $this->responses::getSuccessNewResource();

        }else{
            throw new ValidationException($validator);
        }
    }

    public function deleteAdminUser(Request $request, $id){
        $userID = $id;
        if(empty($id)){
            return $this->responses::getBadRequest("admin id not set");
        }else{
            $result = $this->adminModel::where('user_id',$userID)->delete();

            if($result === 1){
                $this->userModel::where('id',$userID)->delete();
                //add conpamy data
                return $this->responses::getSuccess();
           }else{
               return $this->responses::getNoFound("user not found");
           }
        }
    }

    public function getAllAdminUsers(Request $request){
        $body = $request->all();
        $uer = $body['user'];

        $recordPerPage = isset($body['limit']) ? $body['limit'] : 0;
        $page = isset($body['page']) ? $body['page'] : "";

        $adminObj = $this->adminModel;

        if(!empty($page)){
            $pagenum = $page;
            $offset = ($pagenum - 1) * $recordPerPage;
            $adminUsers = $adminObj->offset($offset)->limit($recordPerPage)->get();
        }else{
            $adminUsers = $adminObj->get();
        }

        return $this->responses::getSuccess(["users"=>$adminUsers]);
    }

    public function getOneUser(Request $request, $id){
        if(empty($id)){
            return $this->responses::getBadRequest("user id not set");
        }else{
            $admin = $this->adminModel::where('user_id',$id)->firstOrFail();
            return $this->responses::getSuccess(["user"=>$admin]);
        }
    }
    
    public function updateUser(Request $request){
        $form = $request->all();
        $user =  null;
        $response= [];
        //set validation rules and messages
        $messages = [
            'first_name.required' => 'Please enter first name',
            'last_name.required' => 'Please enter last name',
            'user_id.required' => 'Please enter company user id',
            'role.required' => 'Please enter user role',
        ];

        $rules = [
            'first_name' => 'required',
            'last_name' => 'required',
            'user_id' => 'required',
            'role' => 'required',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){

            $data = ["first_name"=>$form['first_name'],"last_name"=>$form['last_name'],"role"=>$form['role']];
            
            $result = $this->adminModel::where('user_id',$form['user_id'])
            ->update($data);
            
            if($result === 1){
                 //add conpamy data
                 $user =  $this->adminModel::where('user_id',$form['user_id'])->first();
                 return $this->responses::getSuccess(["user"=>$user],"updated");
                
            }else{
                return $this->responses::getNoFound("user does not exist");
            }
           
        }else{
            throw new ValidationException($validator);
        }
    }
}
