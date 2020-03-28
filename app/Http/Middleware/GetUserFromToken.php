<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use JWTAuth;

class GetUserFromToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){
        $user = JWTAuth::parseToken()->authenticate();
        $request->request->add([
            "user"=>$user
        ]);
        return $next($request);
    }
}
