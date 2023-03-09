const express=require('express');
const router=express.Router();
const {deleteController, homecontrollers,updateController,getCodeController} = require('../controlller/homeController')
router.post("/create",homecontrollers)
router.delete("/delete/:id",deleteController)
router.delete("/update/:id",updateController)
router.get("/list",getCodeController)

module.exports={homecontroller,deleteController,updateController,getCodeController};