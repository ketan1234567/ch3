const express=require('express');
const app=express();
const db=require('./dbConfg')
const product=require('./model/Product');
const { homecontroller, deleteController, updateController, getCodeController } = require('./controlller/homeController');

//

app.use(express.json());

app.use("/create",homecontroller);
app.use("/delete",deleteController);
app.use("/update",updateController);
app.use("/list",getCodeController);

app.listen(5000, function () {

    console.log('Node app is running on port 5000');
});





