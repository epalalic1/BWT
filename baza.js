const Sequelize=require("sequelize");
const sequelize=new Sequelize("Baza4","root","", {
    host:"localhost",
    dialect:"mysql"}
    );
module.exports=sequelize;