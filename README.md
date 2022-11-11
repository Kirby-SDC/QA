# Express/postGres RESTful API
## Overview - No ORM, No pgAdmin just keys.

This is a RESTful API server architecture implemented to satisfy the requirements of Atelier's retail web application . It offers development features that automate seeding and importing. Create tables and import data from existing csv file/s while simulatenously implementing a new schema all from a single .sql file.

Out of the box it is setup to directly import .csv files from a directory into a database as defined by the .sql file.  If you want to change this you need to add your own .sql file with an appropriate schema and import statements pointing to where your local .csv files are stored.

If you simply want to test this you can just change the path the import statement is pointing to, below is an example.


```
COPY Question (id, product_id, question_body, question_date, asker_name, asker_email, reported, question_helpfulness)

FROM '/Users/andrewarsenault/Desktop/sdcdata/questions.csv' //this is the path you should change to your file

DELIMITER ',' CSV HEADER;
```


Fair warning if you start moving these files around in other directories, or have your package.json in a directory higher than you see in this repo, it may cause side effects.  I'm sure it can be refactored, but it will just be a bit more work than I'm going to explain in depth here.

I believe that's about it, otherwise follow the steps below and you should be good to go.  I will work on refactoring this to include the client files, and potentially allow you to create a new database on start. You should be able to run the client separately from the express server in this repo just make sure the ports don't conflict.  

If you have any questions, advice, help setting up or find bugs please reach out to me on Slack - Andrew Arsenault.

Thanks, good luck!

## Setup

You will likely have to change some of the paths to your .csv files if they're named differently, in a different location or you're not working on the QA module.

If you have any trouble you can feel free to contact me.

## Configure your connection

In the .env file change the config to represent your currently created database.  I am currently using the provided postgress default connection.

*Side note: As far as I know there is no way to create a database without at least logging into the template database that postgres makes for you. Also you could add your server port to this .env if you want*

```
{
  USERID = 'yourdatabaseusername',
  HOST = 'localhost',
  DATABASE = 'databasename',
  PASSWORD = 'yourpassword',
  PORT = 5432
}
```

## Install dependencies:

```
npm install
```

## Run the server and connect to database

*Running the server connects you to the database and allows you to listen to api calls.*

```
npm start
```

## Seeding the database

*Seeding the database will drop all tables if they exists and make them again.  It then imports the new tables with the data provided. To seed the database after connecting via the server just run the npm command below.*

```
npm seed
```

## Future goals

- Do this using async/awake/promises
- Use pools instead of clients
- Refactor to allow for the implementation of a new database
