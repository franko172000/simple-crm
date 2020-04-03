<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;
//use DB;

class DataCSVUserSeeder extends CsvSeeder
{
    public function __construct()
    {
        // $this->file = '/database/seeds/csv/users.csv';
        // $this->tablename = 'users';
        // $this->mapping = ['id', 'email', 'password','user_type','remember_token','created_at','updated_at'];
        // $this->header = FALSE;
        $this->table = 'users';
        $this->filename = base_path().'/database/seeds/csv/users.csv';
        //$this->file = '/database/seeds/csv/users.csv';
        $this->mapping = [
            0 => 'id',
            1 => 'email',
            2 => 'password',
            3 => 'user_type',
            4 => 'remember_token',
            5 => 'created_at',
            6 => 'updated_at',
        ];
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //DB::disableQueryLog();
        
        parent::run();
    }
}
