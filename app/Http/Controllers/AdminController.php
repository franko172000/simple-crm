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
use DB;

class AdminController extends Controller {
    private $adminModel;
    private $userModel;
    private $validator;
    private $responses;
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
        $filename = "";
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

        if($request->hasFile('profile_logo')){
            $image = $request->file('profile_logo');
            $allowedImageTypes = ["image/jpeg","image/jpg","image/png","image/gif"];
            $imageMime = $image->getMimeType();
            if(!in_array($imageMime,$allowedImageTypes)){
                return $this->responses::getBadRequest("Invalid image format");
            }
        }

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){
            //create user
            $user = $this->userModel;
            $user->email = $form['email'];
            $user->password = $this->hash::make($form['password']);
            $user->user_type = "admin";
            $user->save();

            if($request->hasFile('profile_logo')){
                $filename = time()."_".$user->id."_photo.".$image->getClientOriginalExtension();
                $path = public_path("profile-pic/admin/");
                $image->move($path,$filename);
            }

            //add conpamy data
            $this->adminModel->user_id = $user->id;
            $this->adminModel->first_name = $form['first_name'];
            $this->adminModel->last_name = $form['last_name'];
            $this->adminModel->role = $form['role'];
            $this->adminModel->photo = $filename;
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

        $adminObj = $this->adminModel->select(DB::raw('first_name,last_name,photo 
        as profile_photo,user_id, role, (SELECT email FROM users where id = user_id) AS email'));


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
            $admin = $this->adminModel::where('user_id',$id)->firstOrFail();
        }else{
            $admin = $this->adminModel::where('user_id',$id)->firstOrFail();
            return $this->responses::getSuccess(["user"=>$admin]);
        }
    }

    public function getProfile(Request $request){
        $form = $request->all();
        $admin = $adminObj = $this->adminModel::where('user_id',$form['user']->id)->select(DB::raw('first_name,last_name, photo
        as profile_photo,user_id, role, (SELECT email FROM users where id = user_id) AS email'))->firstOrFail();
        return $this->responses::getSuccess(["user"=>$admin]);
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

            //udate account login detail
            if(isset($form['email']) || isset($form['password'])){
                $userData = [];
                if(isset($form['email']))
                    $userData["email"]=$form['email'];
                if(isset($form['password']))
                    $userData["password"]=$this->hash::make($form['password']);    

                $this->userModel::where('id',$form['user_id'])->update($userData);
            }
            
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

    public function uploadPic(Request $request){
        $form = $request->all();
        $user =  $form['user'];
        $filename = "";
        if($request->hasFile('profile_photo')){
            $image = $request->file('profile_photo');
            $allowedImageTypes = ["image/jpeg","image/jpg","image/png","image/gif"];
            $imageMime = $image->getMimeType();
            if(!in_array($imageMime,$allowedImageTypes)){
                return $this->responses::getBadRequest("Invalid image format");
            }else{
                $filename = time()."_".$user->id."_photo.".$image->getClientOriginalExtension();
                $path = public_path("profile-pic/admin/");
                $image->move($path,$filename);
                $result = $this->adminModel::where('user_id',$user->id)
                ->update(["photo"=>$filename]);
                return $this->responses::getSuccess([],"Image uploaded successfully");
            }
        }else{
            return $this->responses::getBadRequest("Please upload photo");
        }
    }
}
