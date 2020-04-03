<?php

namespace App\Http\Controllers;

use App\Company;
use App\Responses\ServerResponses;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Validator;
use DB;

class CompanyController extends Controller {
    private $companyModel;
    private $userModel;
    private $validator;
    private $responses;
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
        $filename = "";
        $image = null;
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

        if($request->hasFile('logo')){
            $image = $request->file('logo');
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
            $user->user_type = "company";
            $user->save();

            if($request->hasFile('logo')){
                $filename = time()."_".$user->id."_logo.".$image->getClientOriginalExtension();
                $path = public_path("profile-pic/company/");
                $image->move($path,$filename);
            }

            //add conpamy data
            $this->companyModel->user_id = $user->id;
            $this->companyModel->name = $form['name'];
            $this->companyModel->contact_person = $form['contact_person'];
            $this->companyModel->url = $form['url'];
            $this->companyModel->logo = $filename;
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
        $companyObj = $this->companyModel->select(DB::raw("name,contact_person,url,logo AS company_logo, 
        user_id as companyid, (SELECT COUNT(*) AS total FROM employee WHERE company_id = companyid) AS employee_count, (SELECT email FROM users where id = companyid) AS email"));
         
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

    public function getProfile(Request $request){
        $form = $request->all();
        $company = $this->companyModel->select(DB::raw("name,contact_person,url,logo AS company_logo, 
        user_id as companyid, (SELECT COUNT(*) AS total FROM employee WHERE company_id = companyid) AS employee_count, (SELECT email FROM users where id = companyid) AS email"))
        ->where('user_id',$form['user']->id)->firstOrFail();
        return $this->responses::getSuccess(["user"=>$company]);
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
            'email' => 'email|unique:users,email,'.$form['user_id'],
            'url' => 'required|min:2',
            'user_id' => 'required',
        ];

        //start the validation
        $validator = $this->validator::make($form,$rules,$messages);

        if(!$validator->fails()){

            //udate account login detail
            if(isset($form['email']) || isset($form['password'])){
                $userData = [];
                if(isset($form['email']))
                    $userData["email"]=$form['email'];
                if(isset($form['password']))
                    $userData["password"]=$this->hash::make($form['password']);    

                $this->userModel::where('id',$form['user_id'])->update($userData);
            }


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

    public function uploadLogo(Request $request){
        $form = $request->all();
        $user =  $form['user'];
        $filename = "";
        if($request->hasFile('logo')){
            $image = $request->file('logo');
            $allowedImageTypes = ["image/jpeg","image/jpg","image/png","image/gif"];
            $imageMime = $image->getMimeType();
            if(!in_array($imageMime,$allowedImageTypes)){
                return $this->responses::getBadRequest("Invalid image format");
            }else{
                $filename = time()."_".$user->id."_logo.".$image->getClientOriginalExtension();
                $path = public_path("profile-pic/company/");
                $image->move($path,$filename);
                $result = $this->companyModel::where('user_id',$user->id)
                ->update(["logo"=>$filename]);
                return $this->responses::getSuccess([],"Image uploaded successfully");
            }
        }else{
            return $this->responses::getBadRequest("Please upload photo");
        }
    }
}
