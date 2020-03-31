<?php

namespace App\Http\Controllers;

use App\Company;
use App\Responses\ServerResponses;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Validator;

class CompanyController extends Controller {
    private $companyModel;
    private $userModel;
    private $validator;
    private $hash;

    public function __construct(Company $company, Validator $validator, User $userModel, Hash $hash, ServerResponses $responses){
        $this->companyModel = $company;
        $this->validator = $validator;
        $this->userModel = $userModel;
        $this->responses = $responses;
        $this->hash = $hash;
    }

    public function creatCompany(Request $request){
        $form = $request->all();
        $user =  null;
        $response= [];
        //set validation rules and messages
        $messages = [
            'email.required' => 'Please enter your username',
            'password.required' => 'Please enter your password',
            'name.required' => 'Please enter company name',
            'contact_person.required' => 'Please enter contact person',
            'url.required' => 'Please enter url',
        ];

        $rules = [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:2',
            'name' => 'required|min:2',
            'contact_person' => 'required|min:2',
            'url' => 'required|min:2',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){
            //create user
            $user = $this->userModel;
            $user->email = $form['email'];
            $user->password = $this->hash::make($form['password']);
            $user->user_type = "company";
            $user->save();

            //add conpamy data
            $this->companyModel->user_id = $user->id;
            $this->companyModel->name = $form['name'];
            $this->companyModel->contact_person = $form['contact_person'];
            $this->companyModel->url = $form['url'];
            $this->companyModel->logo = $form['url'];
            $this->companyModel->save();


            return response()->json(["status"=>false, "message"=>"Company created"],201);

        }else{
            throw new ValidationException($validator);
        }
    }

    public function deleteCompany(Request $request, $id){
        $userID = $id;
        if(empty($id)){
            return response()->json(["status"=>false, "error"=>"bad request", "message"=>"compay id not set"],400);
        }else{
            $result = $this->companyModel::where('user_id',$userID)->delete();

            if($result === 1){
                $this->userModel::where('id',$userID)->delete();
                //add conpamy data
                return $this->responses::getSuccess();
           }else{
               return $this->responses::getNoFound("Company not found");
           }
        }
    }

    public function getCompanies(Request $request){
        $body = $request->all();
        $recordPerPage = isset($body['limit']) ? $body['limit'] : 0;
        $page = isset($body['page']) ? $body['page'] : "";
        $companyObj = $this->companyModel;
         
        if(!empty($page)){
            $pagenum = $page;
            $offset = ($pagenum - 1) * $recordPerPage;
            $company = $companyObj->offset($offset)->limit($recordPerPage)->get();
        }else{
            $company = $companyObj->get();
        }

        return $this->responses::getSuccess(["companies"=>$company]);
    }

    public function getOneCompany(Request $request, $id){
        if(empty($id)){
            return response()->json(["status"=>false, "error"=>"bad request", "message"=>"compay id not set"],400);
        }else{
            $company = $this->companyModel::where('user_id',$id)->first();
            if(!empty($company)){
                return $this->responses::getSuccess(["company"=>$company]);
            }else{
                return $this->responses::getNoFound("Company does not exist");
            }
        }
    }
    
    public function updateCompany(Request $request){
        $form = $request->all();
        $user =  null;
        $response= [];
        //set validation rules and messages
        $messages = [
            'name.required' => 'Please enter company name',
            'contact_person.required' => 'Please enter contact person',
            'url.required' => 'Please enter url',
            'user_id.required' => 'Please enter company user id',
        ];

        $rules = [
            'name' => 'required|min:2',
            'contact_person' => 'required|min:2',
            'url' => 'required|min:2',
            'user_id' => 'required',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){

            $result = $this->companyModel::where('user_id',$form['user_id'])
            ->update(["name"=>$form['name'],"contact_person"=>$form['contact_person'],"url"=>$form['url']]);
            
            if($result === 1){
                 //add conpamy data
                 return $this->responses::getSuccess();
                
            }else{
                return $this->responses::getNoFound("Company does not exist");
            }
           
        }else{
            throw new ValidationException($validator);
        }
    }
}
