# QA


### Setup

If you fork and clone this directly you should follow the steps below.  Additionally you will likely have to change some of the paths to your .csv files if they're named differently, in a different location or you're not working on the QA module.

If you have any trouble you can feel free to contact me.

## Configure your connection

In the connect.js file change the config to your database information

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
