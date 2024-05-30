// Import the json-server library
const jsonServer = require('json-server');

// Create server using json-server library
const myserver = jsonServer.create();

// Create path to db.json file
const router = jsonServer.router('db.json'); // Assign the router to a variable

// Middleware to convert js to json
const middleware = jsonServer.defaults();

// Connect/use middleware and router in server
myserver.use(middleware);
myserver.use(router); // Use the router

// Setup port for the server
const port = process.env.PORT || 5000; // Correct the condition for port selection

// Listen server for resolving request
myserver.listen(port, () => {
    console.log(`myserver started at ${port}`);
});
