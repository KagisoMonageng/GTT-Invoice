const pool = require("../config/db_config");

exports.getAll = (req,res) =>{
    res.status(200).json({message:"Hello, i can still do this.."});
}