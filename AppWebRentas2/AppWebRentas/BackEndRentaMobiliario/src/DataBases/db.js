var mysql = require("mysql");
var config = require("../../config");

var connectionAdmin = null;
	try{
		connectionAdmin = mysql.createPool({
			host: config.HOST,
			user: config.USER_ADMIN,
			password: config.PASS_ADMIN,
			database: config.DATA_BASE,
		});
		//console.log(connection);
		//console.log("Conectado a la base de datos "+config.USER_ADMIN);
	}catch(error){
		console.log("Error a conectar a la base d edatos. "+error.message+" "+config.USER_ENLACE);
	}

module.exports = {
	connectionAdmin,
};
