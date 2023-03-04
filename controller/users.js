const { Console } = require('console');
const User = require('../model/user');

exports.getUsers = async(req, res, next) => {
    const users = await User.findAll();
    console.log(users[1].dataValues);
    res.status(200).json({allUser: users});
}

exports.addUser = async(req, res, next) => {

    try{
        console.log(req.body);
        const name = req.body.userName;
        const phone = req.body.phoneNum;
        const email = req.body.userEmail;

        const data = await User.create({
            name: name,
            phone: phone,
            email: email
        })
        console.log("after creating-->"+JSON.stringify(data));
        res.status(201).json({newUserDetail: data});
    }
    catch(err){
        res.status(500).json({
            error: err
        })
    }
}

exports.deleteUser = async(req, res, next) => {
    const userId = req.params.id;
    console.log(userId);
    await User.destroy({where:{id:userId}});
    res.sendStatus(200);

}