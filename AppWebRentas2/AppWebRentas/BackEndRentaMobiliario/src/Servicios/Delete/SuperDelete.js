const { connectionAdmin } = require("../../DataBases/db");
const config = require("../../../config");
const jwt = require("jsonwebtoken");

function esTokenValido(token){
	if(token != undefined){		
		try{
			const expire = jwt.verify(token, config.JSON_KEY);
			return true;
		}catch(err){
			return false;
		}
	}else{
		return false;
	}
}

