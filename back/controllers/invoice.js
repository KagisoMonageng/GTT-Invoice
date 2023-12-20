const pool = require("../config/db_config");

exports.getAllInv = (req,res) =>{
    const sql = "SELECT * FROM invoice";
    pool.query(sql,(err,result) =>{
        if(err || result.rowCount == 0){
            res.status(400).json({message:"No invoices found"});
        }
        else{
            res.status(200).json(result.rows);
        }
    })   
}

exports.getInvoice = (req,res) =>{
    const sql = "SELECT * FROM invoice WHERE id = $1";
    pool.query(sql,[req.params.id],(err,result) =>{
        if(err){
            console.log(err)
            res.status(400).json({message:"Not found"});
        }
        else{
            res.status(200).json(result.rows[0]);
        }
    })   
}

exports.addInv = (req,res) =>{
    console.log("first")

    const{ name,fileUrl,total,quantity} = req.body;
    const sql = "INSERT INTO invoice (cl_name,inv_url,total,quantity) VALUES ($1,$2,$3,$4)";
    pool.query(sql,[name,fileUrl,total,quantity],(err,result) =>{
        if(err){
            console.log(err)
            res.status(400).json({message:"Failed to store invoice"});
        }
        else{
            res.status(201).json({message:"Invoice saved"});
        }
    })   
}