# QA
## Overview

This is my repo for booting a server that can accept requests from a client. It also allows you to create your tables and import the tables with data from a csv file/s using .sql file to query your database. The intent here is to make it easier, hopefully, to deploy to AWS, with or without Docker.

Out of the box it is setup to directly import my personal .csv files from a directory into my database defined by the .sql file.  If you want to change this you need to add your own .sql file with import statements pointing to where your .csv files are.

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

In the connect.js file change the config to represent your currently created database.

*Side note: As far as I know there is no way to create a database without at least logging into the template database that postgres makes for you.*

```
let config = {
  user:'yourdatabaseusername',
  host:'localhost',
  database: 'databasename',
  password: 'yourpassword',
  port: 5432
}
```

## Install dependencies:

```
npm install
```

## Run the server and connect to database

```
npm start
```

## To seed the database

```
npm seed
```
