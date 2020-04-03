# Diagnosis app
This is a simple app CRM app

# Downloading the app
Open up a terminal on your machine, navigate to a directory of your choice clone the repo




# Setting up DB
1. Open up the .env file, replace the values shown below with your database configuration.
```bash
DB_DATABASE=your database name
DB_USERNAME=your database user
DB_PASSWORD=

```

# Basic setup
Install dependencies
```bash
$ Composer install
$ npm start
```
# Running Test
To run the test scripts, run the command below.
```bash
$ npm run test
```
# Running on Docker
1. make sure docker is already installed on your machine. Get it here (https://docs.docker.com/docker-for-windows/install/)
2. Open up a terminal on your machine and run the command
```bash
$ docker-compose up
```

# Endpoints
```bash
Get Diagnosis Records
Method : GET
/api/v1/diagnosis/get?limit=10&page=1

Get one Diagnosis Record
Method : GET
/api/v1/diagnosis/get-one?code=test

Edit Diagnosis Record
/api/v1/diagnosis/edit
Method : POST
body 
{
	"category" : "required",
	"diagnosis_code" : "required",
	"full_code": "required",
	"full_description" : "required",
	"partial_description" : "required"
}
            
Add Diagnosis Record
/api/v1/diagnosis/create
Method : POST
body 
{
	"category" : "required",
	"diagnosis_code" : "required",
	"full_description" : "required",
	"partial_description" : "required"
}

Delete Diagnosis Record
Method : DELETE
/api/v1/diagnosis/delete?code=test

Get Categories
Method : GET
/api/v1/category/get?limit=10&page=1

Get one category
Method : GET
/api/v1/category/get-one?code=test

Edit category
/api/v1/category/edit
Method : POST
body 
{
	"name" : "required",
	"code" : "required",
}
            
Add category
/api/v1/category/create
Method : POST
body 
{
	"name" : "required",
	"code" : "required",
}

Delete category
Method : DELETE
/api/v1/category/delete?code=test

```

#Author
Anyaso Franklin <br />
franko172000@gmail.com



