const Sequelize=require("sequelize");
const sequelize=new Sequelize("BazaTestovi","root","", {
    host:"localhost",
    dialect:"mysql"}
    );
module.exports=sequelize;