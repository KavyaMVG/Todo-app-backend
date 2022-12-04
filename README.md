# Todo Application

Application with to maintain a todo-list and it's CRUD operations

## Technology used

Mongo DB, Node JS, Express JS, Mongoose.

# Instructions

### clone the repository

`https://github.com/KavyaMVG/Chat-app-backend.git`

### change directory to the project directory

`cd todo-backend`

### Dependencies

`npm install`

### Create `.env` file and add following values

```
PORT=<Port the application should run on>
MONGO_URL=<Your Mongo URL>
TOKEN_KEY=<Some-Secure-Key>

```

### Run the project

`nodemon app.js`. <br>
If you have trouble running the project with nodemon make sure you install it or you can just use `node app.js`

### Using the API

To save a todo

```
POST /todo/addTodo

{
   title: "Grocery shopping",
   tasks: ['Buy milk', 'Buy Tomato'],
   userId: "ttys453762878",
}

```

To search todo

```
GET /todo/search/?search=<query>&userId=<ID>

```

## Author

<a href="https://github.com/kavyamvg"> <img src="https://github.com/kavyamvg.png" alt="Kavya M V" style="width:50px;"/></a>

### Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Make the appropriate changes in the files
- Commit your changes (`git commit -m 'Message goes here'`)
- Push to the branch (`git push`)
- Create a Pull Request

### Bug / Feature Request

If you find a bug or to request a new feature, kindly open an issue [here](https://github.com/KavyaMVG/Todo-app-backend/issues/new).
