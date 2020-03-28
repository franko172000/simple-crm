<?php

namespace App\Http\Controllers;

use App\Company;
use App\Employee;
use App\Responses\ServerResponses;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Validator;

class EmployeeController extends Controller {
    private $employeeModel;
    private $userModel;
    private $validator;
    private $hash;

    public function __construct(Employee $employee, Validator $validator, User $userModel, Hash $hash, ServerResponses $responses){
        $this->employeeModel = $employee;
        $this->validator = $validator;
        $this->userModel = $userModel;
        $this->responses = $responses;
        $this->hash = $hash;
    }

    public function createEmployee(Request $request){
        $form = $request->all();
        $user =  null;
        $response= [];
        //set validation rules and messages
        $messages = [
            'email.required' => 'Please enter your username',
            'password.required' => 'Please enter your password',
            'first_name.required' => 'Please enter first name',
            'last_name.required' => 'Please enter last name',
            'company_id.required' => 'Please enter company id',
        ];

        $rules = [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:2',
            'first_name' => 'required|min:2',
            'last_name' => 'required|min:2',
            'company_id' => 'required',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){
            //create user
            $user = $this->userModel;
            $user->email = $form['email'];
            $user->password = $this->hash::make($form['password']);
            $user->user_type = "employee";
            $user->save();

            //add conpamy data
            $this->employeeModel->user_id = $user->id;
            $this->employeeModel->first_name = $form['first_name'];
            $this->employeeModel->last_name = $form['last_name'];
            $this->employeeModel->company_id = $form['company_id'];
            $this->employeeModel->save();

            return $this->responses::getSuccessNewResource();

        }else{
            throw new ValidationException($validator);
        }
    }

    public function deleteEmployee(Request $request, $id){
        $userID = $id;
        if(empty($id)){
            return $this->responses::getBadRequest("employee id not set");
        }else{
            $result = $this->employeeModel::where('user_id',$userID)->delete();

            if($result === 1){
                //add conpamy data
                return $this->responses::getSuccess();
           }else{
               return $this->responses::getNoFound("employee not found");
           }
        }
    }

    public function getAllEmployees(Request $request){
        $body = $request->all();
        $uer = $body['user'];

        $recordPerPage = isset($body['limit']) ? $body['limit'] : 0;
        $page = isset($body['page']) ? $body['page'] : "";

        $employeeObj = $this->employeeModel;

        //check is user is a company
        if($uer->user_type === "company"){
            $employeeObj::where('company_id',$uer->user_id);
        }

        //check is user is an admin
        if(isset($body['company_id']) && !empty($body['company_id'])  && $uer->user_type === "admin"){
            $employeeObj::where('company_id',$body['company_id']);
        }

        if(!empty($page)){
            $pagenum = $page;
            $offset = ($pagenum - 1) * $recordPerPage;
            $employee = $employeeObj->offset($offset)->limit($recordPerPage)->get();
        }else{
            $employee = $employeeObj->get();
        }

        return $this->responses::getSuccess(["employees"=>$employee]);
    }

    public function getOneEmployee(Request $request, $id){
        if(empty($id)){
            return $this->responses::getBadRequest("employee id not set");
        }else{
            $company = $this->employeeModel::where('user_id',$id)->firstOrFail();
            return $this->responses::getSuccess(["employee"=>$company]);
        }
    }
    
    public function updateEmployee(Request $request){
        $form = $request->all();
        $user =  null;
        $response= [];
        //set validation rules and messages
        $messages = [
            'first_name.required' => 'Please enter first name',
            'last_name.required' => 'Please enter last name',
            'user_id.required' => 'Please enter company user id',
        ];

        $rules = [
            'first_name' => 'required',
            'last_name' => 'required',
            'user_id' => 'required',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){

            $data = ["first_name"=>$form['first_name'],"last_name"=>$form['last_name']];
            if(isset($form['company_id'])){
                $data['company_id'] = $form['company_id'];
            }

            $result = $this->employeeModel::where('user_id',$form['user_id'])
            ->update($data);
            
            if($result === 1){
                 //add conpamy data
                 $user =  $this->employeeModel::where('user_id',$form['user_id'])->first();
                 return $this->responses::getSuccess(["employee"=>$user],"updated");
                
            }else{
                return $this->responses::getNoFound("employee does not exist");
            }
           
        }else{
            throw new ValidationException($validator);
        }
    }
}
