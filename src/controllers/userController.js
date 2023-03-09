const userModel = require("../models/userModel");



const signUp = async function (req, res) {
    try{

        const {name,email,password}=req.body   
        // console.log(req.body)

    if(!name) return res.status(400).send({ status: false, message: `Name is required.` });
    
    //------------------------------email validation--------------------------------->
    if (!email)  return res.status(400).send({ status: false, message: `email is required.` });
         
    // if (!emailregex.test(email))
    // return res.status(400).send({ status: false, message: ` '${email}' this email is not valid.` });

    let duplicateEmail = await userModel.findOne({email:email })
    if (duplicateEmail) return res.status(400).send({ status: false, message: `this Email is already Registred.` });


//    //------------------------------password validation--------------------------------->  
    if (!password)
    return res.status(400).send({ status: false, message: `password is required.` });
         
    // if (!passwordregex.test(password))
    // return res.status(400).send({ status: false, message: ` Password Length Should be Between 8-15 Caractor.` });
     
    
  
   let createUser= await userModel.create({name,email,password})
   
    res.status(201).send({ status: true, data: createUser})
    
    }
   catch(error){
    res.status(500).send({message : error.message})

   }
}





module.exports = { signUp };