# Sportmate Database Application

Every year there are less and less people playing and therefore it is harder to find a partner to play with
https://www.statista.com/statistics/899391/tennis-participation-uk/

This is an applcation whose main purpose is to make arrangements to play tennis. It is a sport which is not very popular and sometimes it is difficult to find a partner to play with. The application aims to collect people data that people who don't know each other can arrange to play. 

The application is designed to show all available tennis fields in the area. Then the user is guided through the login process. After logging in users can enter their data such as Name, Email, Gender, Experience, Tennis field, Contact. The entered data can be edited and also deleted. Afterwards the user can log off by clicking on logout button.


## Description

- [Database Application Repo](https://github.com/ostenda/DatabaseApplication "Repo")
- [Hosted Web Application](https://blooming-temple-54875.herokuapp.com/ "Hosted Web Application")

Professional README.md file. This file should contain information on how to run the project in development and production.
Your project's, version-controlled, source files

## Getting Started

### Dependencies

List of modules used in the project: 

+-- axios@0.24.0
+-- bcrypt@5.0.1
+-- body-parser@1.19.1
+-- bootstrap@5.1.3
+-- cross-env@7.0.3
+-- dotenv@11.0.0
+-- ejs@3.1.6
+-- express@4.17.2
+-- express-session@1.17.2
+-- md5@2.3.0
+-- mongoose@6.1.6
+-- morgan@1.10.0
+-- nodemon@2.0.15



### Installing

#### To Run this project Clone it 
```
git clone https://github.com/ostenda/DatabaseApplication.git
```

and install modules using
```
npm install
```

You are ready to go. To execute this project type
```
npm start
```


## System Overview


The application is based on model, view, controller (MVC). The main purpose of this model is to divide the application into structures so that each section has a specific purpose. 

Folder structure in the project


    .
    ├── DatabasesProject
      ├── assets        #add components css/js
         └── css
         └── img
         └── js
      ├── server
         └── controller  # database controller CRUD
         └── database    # connection string
         └── model       # database model schema
         └── routes      #routes menagment
         └── services    #routes rendering pages
      ├── views            
          └── include    



A high-level overview of how the system functions, you can use screen shots if it helps. You should consider aspects such as:

Briefly describing all datastores including databases, file systems and media data stores
Key views and interfaces
Including a diagram of the key system components and how they are linked



# Key Design Decisions

## Database Design

The application uses MongoDB which is a non-relational NoSQL database.

The application has one database (myFirstDatabase) which has two collections: myFirstDatabase.userdbs and myFirstDatabase.users

myFirstDatabase.userdbs collection collects the data of users who log in to the profile and fill in the data. The data structure of this collection looks as follows: 

```
{"_id":{"$oid":"61eab87d6566dd6fe173ad56"},
"name":"123","email":"ostenda95@gmail.com",
"exp":"Very ",
"field":"Michal Ostenda","
contact":"qwr5135415",
"status":"Inactive",
"__v":{"$numberInt":"0"}}
```
myFirstDatabase.users collection collects the data of users who register in to the webside. The data structure of this collection looks as follows: 

```
{"_id":{"$oid":"61ea8677ba99e5326fbfbdab"},
"email":"4ostem21@solent.ac.uk",
"password":"$2b$10$ZXoJVgPK9P4e03i8pDm44uaAAK2sXI2hNtmLuyXKdUS.4Hzgg8M4C",
"createdAt":{"$date":{"$numberLong":"1642759799979"}},
"updatedAt":{"$date":{"$numberLong":"1642759799979"}},
"__v":{"$numberInt":"0"}}
```




## Conclusion and Reflection

When inventing the programme, I wanted it to have the possibility of being extended with new functions in the future. 
I think it is ambitious but unfortunately due to poor time management it needs many improvements. 

The application has a problem with logging in.
System reads new user data into the database, encrypts password with hash code but unfortunately when it comes to the login attempt system deletes password for not correct. 

Therefore, as soon as you enter the site, all the functions are displayed. Such which only the logged in user should have.

The application has not been tested. I did some research on this topic but I did not have time to write tests. A very good framework for unit tests is 'mocha'. It is one of the oldest and best known testing plugins with a lot of documentation. 

Another issue is the main feature I wanted to add to the program and that is a google map which has all the tennis courts in the area marked with pins. I started to implement the google maps API but I had to focus on the most important aspects of the program and leave this.

The program has a very large potential because I do not have to limit myself to one sport. It is possible to differentiate any sport by creating new collections in the database. 

Translated with www.DeepL.com/Translator (free version)


## Authors

Contributors name: Michal Ostenda


## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the GNU General Public License v3.0 License - see the LICENSE.md file for details
