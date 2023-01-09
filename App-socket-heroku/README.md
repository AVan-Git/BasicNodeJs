# Server socket IO - heroku
Khoa pham : https://www.youtube.com/watch?v=4jmEjnbneK0&list=PLaDCaCbr3vmlmCC84sCzhHySIi73pipwV&index=3
## library
    - express
    - ejs
    - socket.io
    - nodemon

##### npm add express ejs 
##### npm install socket.io
##### npm add -D nodemon  || "start" : "nodemon server.js",

## heroku
    $ heroku login

    $ cd my-project/
    $ git init
    $ heroku git:remote -a app-socket-heroku-khoapham
    ## Create a new Git repository
    $ cd my-project/
    $ git init
    $ heroku git:remote -a app-socket-heroku-khoapham
    ## Deploy your application
    $ git add .
    $ git commit -am "make it better"
    $ git push heroku master

    ## note 
    - sua them file Procfile (  web: node Server.js ) // ghi lenh chay
    - sua link socket IO - https://app-socket-heroku-khoapham.herokuapp.com/


<img src="" alt="không tồn tại" >

