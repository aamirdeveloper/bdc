const Validator = require('fastest-validator');
const models = require('../models');
const jwt = require('jsonwebtoken'); 
const helper = require('../helper');
const fs = require('fs');
const { Op } = require("sequelize");

/*const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname);
    }
});
const uploadImg = multer({storage: storage}).single('image');*/

function index(req, res){
    let resp = helper.check_token(req);
    if(resp !== "Successfully Verified")
    {
        console.error(`Token error`, resp);
        res.json(resp);
    }
    else
    {
        let user = helper.get_userId_token(req);
        let userId = user.userId;
        
        models.User.findOne({where:{id:userId}}).then(result =>{
            user_data = result;
            
            var arr = {
                status: 1, 
                "message": "success",
                "userId": user_data.id,
                "firstName": user_data.fullName,
                "email": user_data.email,
                "phone": user_data.phone
            };
            
            res.status(200).json(arr);

        }).catch(error => {
            res.status(200).json({
                status: 2,
                message: "Something went wrong!",
                error: error
            });
        });
    }
}



function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = {
    index:index
};