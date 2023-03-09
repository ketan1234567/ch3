const product=require('../model/Product')


//getCode
getCodeController=async(req,resp)=>{
    let result=await product.find({});
    resp.send(result);
}


//create Code
homecontroller=async(req,resp)=>{
    let data=new product(req.body);
    let result=await data.save();
    console.log(result);
    resp.send(result);
}
//deleteCode 
deleteController=async(req,resp)=>{
    let result=await product.deleteOne(req.params);
    console.log(result);
    resp.send(result);
}
//updateCode
updateController=async(req,resp)=>{
    let result=await product.updateOne(req.params,
        {
            $set:req.body
        });
    console.log(result);
    resp.send(result);
}
module.exports={homecontroller,deleteController,updateController,getCodeController};
