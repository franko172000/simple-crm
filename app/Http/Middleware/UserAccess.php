<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use JWTAuth;

class UserAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$types){
        $param =  $request->only('user') ;
        $user = $param['user'];

        if(!in_array($user->user_type,$types)){
            return response()->json(["status"=>false, "error"=>"Forbidden", "statusCode"=>403, "message"=>"You are not allowed to access this resource"],403);
        }

        return $next($request);
    }
}
