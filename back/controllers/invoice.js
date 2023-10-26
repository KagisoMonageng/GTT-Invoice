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

    const{ cl_name,cl_surname,cl_email,item,description,quantity,total,inv_no} = req.body;
    const date =  new Date()

    const sql = "INSERT INTO invoice (cl_name,cl_surname,cl_email,item,description,quantity,total,date,inv_no) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
    pool.query(sql,[cl_name,cl_surname,cl_email,item,description,quantity,total,date,inv_no],(err,result) =>{
        if(err){
            console.log(err)
            res.status(400).json({message:"Failed to store invoice"});
        }
        else{
            res.status(201).json({message:"Invoice saved"});
        }
    })   
}