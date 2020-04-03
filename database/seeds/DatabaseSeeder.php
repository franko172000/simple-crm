<?php

use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
            //set the path for the csv files
        
        // $this->call(UsersTableSeeder::class);
        $this->seedUser();
        $this->seedCompnay();
        $this->seedEmployee();
        $this->seedAdmin();
    }

    private function seedCompnay(){
        $file = base_path("/database/seeds/csv/comapny.csv"); 
        
        //read the data into an array
        $data = array_map('str_getcsv', file($file));

        DB::table('company')->truncate();
        //loop over the data
        foreach($data as $row) {
            $item = array([
                'user_id' => $row[0],
                'name' => $row[1],
                'contact_person' => $row[2],
                'url' => $row[3],
            ]);
            DB::table('company')->insert($item );
        }
    }
    private function seedUser(){
        $file = base_path("/database/seeds/csv/users.csv"); 
        
        //read the data into an array
        $data = array_map('str_getcsv', file($file));

        DB::table('users')->truncate();
        //loop over the data
        foreach($data as $row) {
            $item = array([
                'id' => $row[0],
                'email' => $row[1],
                'password' => $row[2],
                'user_type' => $row[3],
            ]);
            DB::table('users')->insert($item );
        }
    }
    private function seedEmployee(){
        $file = base_path("/database/seeds/csv/employee.csv"); 
        
        //read the data into an array
        $data = array_map('str_getcsv', file($file));

        DB::table('employee')->truncate();
        //loop over the data
        foreach($data as $row) {
            $item = array([
                'user_id' => $row[0],
                'first_name' => $row[1],
                'last_name' => $row[2],
                'company_id' => $row[4],
            ]);
            DB::table('employee')->insert($item );
        }
    }

    private function seedAdmin(){
        $file = base_path("/database/seeds/csv/admin.csv"); 
        
        //read the data into an array
        $data = array_map('str_getcsv', file($file));

        DB::table('employee')->truncate();
        //loop over the data
        foreach($data as $row) {
            $item = array([
                'user_id' => $row[0],
                'first_name' => $row[1],
                'last_name' => $row[2],
                'role' => $row[4],
            ]);
            DB::table('admin')->insert($item );
        }
    }
}
