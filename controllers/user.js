require('mongoose');
const Usr = require('../models/user');

const addUser = async (name,lastname,email) => {

    let existUser = await Usr.findOne({ email: email });
    console.log(existUser);
    if(!existUser) {
        
        const usr = new Usr(
            {
                
                name: name,
                lastname:lastname,
                email: email
            }
        );

        let user = await usr.save(); 
        console.log("usuario nuevo");
        console.log(user);
        return { user }; 

    }else{
        return false;
    }
}   

const getAllUsers = async (limit,offset) => {

    const users = await Usr.find({}).limit(limit).skip(offset);

    return users;
}

const getUser = async(id) => {

    const user = await Usr.findById(id);

    // await Usr.findOne({ _id: req.params.id })

    return user;
}

const editUser = async(user) => {

    const result = await Usr.findByIdAndUpdate(user._id,user,{new:true});

    return result;
}

module.exports = { addUser, getAllUsers, getUser, editUser }