<?php
namespace App\Responses;
/**
 * Class to handle json response with status code
 */
class ServerResponses {

   /**
    * Return json response with 200 http status coede *
    * @param array $data
    * @param string $message
    * @return object json object
    */
    public static function getSuccess(array $data = [], string $message = ""){
       return response()->json(["status"=>true, "data"=>$data, "message"=>$message],200);
    }

    public static function getSuccessNewResource(array $data = [], string $message = ""){
      return response()->json(["status"=>true, "data"=>$data, "message"=>$message],201);
   }

    /**
     * Return json response with 400 http status coede *
     *
     * @param string $message
     * @return object json object
     */
    public static function getBadRequest(string $message){
       return response()->json(["status"=>false, "message"=>$message, 'error'=>"Bad request", 'statusCode'=>400] ,400);
    }

    /**
     * Return json response with 404 http status coede *
     *
     * @param string $message
     * @return object json object
     */
    public static function getNoFound(string $message){
       return response()->json(["status"=>false, "message"=>$message, 'error'=>"Not found", 'statusCode'=>404],404);
    }

    public static function getForbidden(string $message){
      return response()->json(["status"=>false, "message"=>$message, 'error'=>"Forbidden", 'statusCode'=>403],403);
   }

    public static function getUnauthorized(string $message){
      return response()->json(["status"=>false, "message"=>$message, 'error'=>"Unauthorized access", 'statusCode'=>402],402);
   }
}