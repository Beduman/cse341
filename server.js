const mongodb = require("./data/database.js");
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello");
});
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});

mongodb.initDb((err) =>{
    if(err){
        console.log(err)
    }
    else{
        app.listen(port , ()=> {console.log(`Database is listening and node is running on port ${port}`)});
    }
})