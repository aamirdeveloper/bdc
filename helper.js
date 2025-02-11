function check_token(req) {
    const jwt = require('jsonwebtoken');
    require('dotenv').config();
    
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return "Successfully Verified";
        }else{
            // Access Denied
            error.status = 0;
            return error;
        }
    } catch (error) {
        // Access Denied
        error.status = 0;
        return error;
    }
}

function get_userId_token(req) {
    const jwt = require('jsonwebtoken');
    require('dotenv').config();
    
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified)
        {
            const token_data = jwt.decode(token, jwtSecretKey);
            return token_data;
        }
        else{
            // Access Denied
            return error;
        }
    } catch (error) {
        // Access Denied
        return error;
    }
}

function get_adminId_token(req) {
    const jwt = require('jsonwebtoken');
    require('dotenv').config();
    
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified)
        {
            const token_data = jwt.decode(token, jwtSecretKey);
            return token_data;
        }
        else{
            // Access Denied
            return error;
        }
    } catch (error) {
        // Access Denied
        return error;
    }
}

function check_key(req) {
    
    require('dotenv').config();
    
    let secretKey = process.env.SECRET_KEY;
  
    try {
        const token = req.header('Authorization');
        
        if(token === secretKey){
            return "Successfully Verified";
        }else{
            // Access Denied
            let error = {
               status: 0,
               message: "Incorrect Key"
            }
            return error;
        }
    } catch (error) {
        // Access Denied
        error = {
           status: 0,
           message: "Key Required"
        }
        return error;
    }
}

module.exports = {
  check_token,
  get_userId_token,
  get_adminId_token,
  check_key
}