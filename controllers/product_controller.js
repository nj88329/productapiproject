const Product = require('../models/products');
const mongoose = require('mongoose')

//show the page using which we can add the new product
 module.exports.addproduct = function(req,res){
    return res.render('products',{
        title:'hello'
    })
}

//function to add the new product using post method
module.exports.addnewproduct = function(req,res){
 Product.create({
        name:req.body.name,
        quantity:req.body.quantity,
    },function(err, product){
       if(err){
           console.log('error', err);
           return;
       }
     return res.redirect('/product')
    })
}

// get the details of all the products using GET method
module.exports.getproduct =  function(req,res){
 Product.find({},function(err,product){
        //  res.render('home',{
        //      products:product
        //  })
      return  res.send(product)
    })
   
}


module.exports.showproduct =  function(req,res){
    Product.find({},function(err,product){
            res.render('home',{
                products:product
            })
         //return  res.send(product)
       })
      
   }


//delete action to delete the element from the database
module.exports.deleteProduct =async (req,res)=>{
try{
    // var _id = mongoose.Types.ObjectId.fromString(req.params._id);
  let del = await Product.findById(req.params._id)
  del.remove();
  
  res.send('deleted successfully')
  // console.log('err',err)
//   res.send(product);
//   product.remove();    
  }
  catch(e){
      console.log(e)
  }
}

//update product using the PUT method
module.exports.updateProduct = async(req,res)=>{
  try{
     let productToUpdate = await Product.findById(req.params._id)
     
      let sum = req.query.update_quantity;
    
    var x = parseInt(sum);
    productToUpdate.quantity+=x;
    productToUpdate.update({quantity:productToUpdate.quantity}, function(err, result){
    if(err)
        console.log(err)
    else
       console.log(result)
    })
    return  res.status(200).send('updated sucessfully');
  }
  catch(e){
    
   console.log(e)
  }         
}
