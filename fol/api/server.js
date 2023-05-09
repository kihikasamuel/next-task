// this file will be useful for starting server for test purposes but not where we are testing API
const app = require('./index');
const port = 5000;

app.listen(port, () => {
    console.log("Server is running on port: "+port);
});