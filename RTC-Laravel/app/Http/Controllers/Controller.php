<?php

namespace App\Http\Controllers;

use App\Events\WebSocketEvent;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function test()
    {
        $data = [
            'message' => 'Hello World!',
        ];
        $event = broadcast(new WebSocketEvent($data))->toOthers();
        return $event;
    }
}
