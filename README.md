# Internet-Commerce-Back-End

## Introduction
This is the README for the Internet Commerce challenge of my coding bootcamp. This Repository contains many files that were supplied to me by my coding bootcamp, a few of which were modified by me to fit the specifications of the application required. This Repo contains: JS files, along with SQL files that are used in an application that handles requests for a database.

## Things Learned
During this Challenge, I learned a lot about Sequelize, models, and routing. I also learned a small bit more about Formatting my code and JSON.


### THIS APPLICATION ASSUMES THAT YOU ALREADY HAVE INSTALLED MYSQL SERVER
If you do not have mysql installed, or have not set up your MYSQL root password, or have not set up a user/password combo, this application will not work as advertised. If you need to install and set up mysql server, click on this [download link](https://dev.mysql.com/downloads/mysql/), and follow a guide to set up mysql server and set up the legacy authentication.

### Application Installation

- Before everything, Please ensure you have Node.js and MySQL server installed.
- After downloading the application files, open the application files in the vscode terminal (or in a terminal of your choosing), then run the command 'npm i'.
- Next, Please make a new file, name it '.env', and enter the following text into it (replace 'my username' and 'my password' with your credentials):
        
        DB_NAME='ecommerce_db'
        DB_USER='my username'
        DB_PASSWORD='my password'

    - please MAKE SURE TO FOLLOW THE ABOVE STEP, I didn't do it during the tutorial because I already have one in my project folder that has not been pushed up to github, but if you don't fill it out correctly the application WILL NOT RUN!
- After the above step is completed, you are going to have to log into MYSQL in the terminal (mysql -u root -p), then enter your password.
- After you have logged into your MySQL shell and edited the .env file, run the following commands to create the blank database:
    - source db/schema.sql
- After that, you can open another terminal in the same directory as 'server.js', then type in npm start. this will create a few blank tables in the e-commerce database to be seeded.
- After the tables have been created, stop the server by pressing control + C a few times, then enter 'npm run seed' in the non-mysql terminal you have open. This will seed the tables with data, and it will allow the application to start working.

### Application Use
- After you have completed all of the steps in the walkthrough section, we can start to use the application. type 'npm start watch' into the non-mysql terminal to start the application.
- To use the application, we will be sending requests to the local server we are running on our machines. We can use the application Insomnia to simplify this process. Although you can also use a web browser to do this as well, but it can be a bit of a pain as opposed to Insomnia.
- In this application there are 15 routes to use, 5 for each of the tables that are relevant (Products, Categories, Tags):
    - Get ALL from a table
        - to Get all from any table, simply select GET in insomnia, then type in 'http://localhost:3001/api/{table_name}' in the search bar (example: 'http://localhost:3001/api/categories'), and then hit Send, and you should have all the relevant data returned to you.
    - Get by ID from a table
        - to Get by ID from any table, simply select GET in insomnia, then type in 'http://localhost:3001/api/{table_name}/{id}' in the search bar (example: 'http://localhost:3001/api/categories/1'), and then hit Send, and you should have all the relevant data of that ID returned to you.
    - Post to a table
        - Posting to a table is relatively easy for the Tags and Categories tables, but requires a little more for the Products Table.
            - For the Tags and Categories Tables, select Post in insomnia, type in 'http://localhost:3001/api/{table_name}' in the search bar (example: 'http://localhost:3001/api/categories'). After that, under the body dropdown, select JSON and enter something like the following (the quotation marks are REQUIRED in json for things that aren't numbers so make sure you add them):
                ```
                {
                    'category_name': 'example'
                }
                ```
        
            - After that, click Send, and then go to one of the Gets to see it added to the table. The ID is auto Generated for each, so you do not have to worry about it at all.

            - For the Products Table, select Post in insomnia, type in 'http://localhost:3001/api/{table_name}' in the search bar (example: 'http://localhost:3001/api/categories'). After that, under the body dropdown, select JSON and enter something like the following (the quotation marks are REQUIRED in json for things that aren't numbers so make sure you add them):
                ```
                {
                    'product_name': 'example',
                    'price': 200.00,
                    'stock': 3,
                    'categoryId': 1
                    'tagIds': [1, 2, 3, 4]
                }
                ```

            - For the Products table, tagIds cannot be null, if they are you will get an error. categoryId can be null, but its nice to have it categorized. After entering the JSON, click Send, and then go to one of the Gets to see it added to the table. The ID is auto Generated for each, so you do not have to worry about it at all.
    - Put by ID to a table
        - to Put (Update) a row of a table, select Put in insomnia,and type in 'http://localhost:3001/api/{table_name}/{id}' in the search bar (example: 'http://localhost:3001/api/categories/1'). After that, under the body dropdown, select JSON and enter the key and value of what needs to be updated for the ID you entered. You do not need to include every key/value pair, only the ones you will be changing An example would be: 
            ```
            {
                'category_name': 'food'
            }
            ```

    - Delete by ID from a table
        - to Delete by ID from any table, simply select DESTROY in insomnia, then type in 'http://localhost:3001/api/{table_name}/{id}' in the search bar (example: 'http://localhost:3001/api/categories/1'), and then hit Send, and the data associated with that ID will be deleted from the table.




### Link to Video Walkthrough
[Click me!](https://drive.google.com/file/d/1bt8NkappyorpPz59LlHL_DsUCnuZVYAe/view?usp=sharing)