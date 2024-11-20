const {connectionSuper, connectionAdmin, connectionEnlace} = require("../../DataBases/db");
const config = require("../../../config");
const jwt = require("jsonwebtoken");

function esTokenValido(token){
	if(token != undefined){		
		try{
			const expire = jwt.verify(token, config.JSON_KEY);
			return (Date.now() < expire.exp)? true:false;
		}catch(err){
			return false;
		}
	}else{
		return false;
	}
}

function esTokenPerfil(token){
	if(token != undefined){		
		try{
			const expire = jwt.verify(token, config.JSON_KEY);
			return expire.perfil;
		}catch(err){
			return "";
		}
	}else{
		return "";
	}
}

function getConn(token){
	if(esTokenPerfil(token) === "Super"){
		return connectionSuper;
	}else if(esTokenPerfil(token) === "Admin"){
		return connectionAdmin;
	}else if(esTokenPerfil(token) === "Enlace"){
		return connectionEnlace;
	}
}

module.exports.updateEnlaceSuper= (req, res)=>{//

	if(esTokenValido(req.headers.token)){
		var con = getConn(req.headers.token);
		
		const EnlaceId = req.body.idEnlace;
		const EnName = req.body.NameUser;
		const AppP = req.body.AppP;
		const AppM = req.body.AppM;
		const EnEmail = req.body.Email;
		const EnTel = req.body.Tel;
		
		var sql = "call updateEnlaceSuper(?, ?, ?, ?, ?, ?);";
		
		try {
			con.query(sql, [EnlaceId, EnName, AppP, AppM, EnEmail, EnTel],(err, result)=>{
				if(!err){
					res.status(200).json({res:"OK"});
				}else{
					res.status(400).json("Error "+err.message);
				}
			});
		} catch (error) {
			res.status(400).json(error.message);
		}	
	}else{
		res.status(401).json({res: "token invalido"});
	}
};

module.exports.actualizarDatosAdmin= (req, res)=>{//

	if(esTokenValido(req.headers.token)){
		var con = getConn(req.headers.token);
	
		const AdminId = req.body.idAdmin;
		const EnName = req.body.NameUser;
		const AppP = req.body.AppP;
		const AppM = req.body.AppM;
		const EnEmail = req.body.Email;
		const EnTel = req.body.Tel;
		
		var sql = "call actualizarDatosAdmin(?, ?, ?, ?, ?, ?);";
		
		try {
			con.query(sql, [AdminId, EnName, AppP, AppM, EnEmail, EnTel], (err, result)=>{
				if(!err){
					res.status(200).json({res:"OK"});
				}else{
					res.status(400).json("Error "+err.message);
				}
			});
		} catch (error) {
			res.status(400).json(error.message);
		}
	}else{
		res.status(401).json({res: "token invalido"});
	}
};

module.exports.updatePlanillaSuper= (req, res)=>{//

	if(esTokenValido(req.headers.token)){}else{res.status(401).json({res: "token invalido"});}
	var con = getConn(req.headers.token);
	
	const PlanillaId = req.body.PlanillaId;
    const PlName = req.body.NameUser;
    const AppP = req.body.AppP;
    const AppM = req.body.AppM;
    const EnEmail = req.body.Email;
    const EnTel = req.body.Tel;
	
	var sql = "call updatePlanillaSuper(?, ?, ?, ?, ?, ?);";
	
	try {
        con.query(sql, [PlanillaId, PlName, AppP, AppM, EnEmail, EnTel],(err, result)=>{
            if(!err){
                res.status(200).json({res:"OK"});
            }else{
                res.status(400).json("Error "+err.message);
            }
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports.finSesion =(req, res)=>{//

	if(esTokenValido(req.headers.token)){var con = getConn(req.headers.token);
	
		var sql = "call finSesion(?);";
		
		try {
			con.query(sql, req.headers.token, (err, result)=>{
				if(!err){
					res.status(200).json({res:"OK"});
				}else{
					//console.log("Error "+err.message);
					res.status(400).json("Error "+err.message);
				}
			});
		} catch (error) {
			res.status(400).json(error.message);
		}
	}else{
		res.status(401).json({res: "token invalido"});
	}
	
};

module.exports.sesionAbandonada =(req, res)=>{//

	//console.log(req.headers.token);

	if(esTokenValido(req.headers.token)){
		var con = getConn(req.headers.token);
		
		var sql = "call sesionAbandonada(?);";
		
		try {
			con.query(sql, req.headers.token, (err, result)=>{
				if(!err){
					res.status(200).json({res:"OK"});
				}else{
					//console.log("Error "+err.message);
					res.status(400).json("Error "+err.message);
				}
			});
		} catch (error) {
			res.status(400).json(error.message);
		}	
	}else{
		res.status(401).json({res: "token invalido"});
	}
	
};


module.exports.updateComiteEstatus =(req, res)=>{//

	//console.log(req.headers.token);

	if(esTokenValido(req.headers.token)){
		var con = getConn(req.headers.token);
		
		const idComP = req.body.idCom;		
		const nuevoP = req.body.nuevo;	
		
		//console.log(req.body);
		
		var sql = "call updateComiteEstatus(?, ?);";
		
		try {
			con.query(sql, [idComP, nuevoP], (err, result)=>{
				if(!err){
					//console.log(result);
					res.status(200).json({res:"OK"});
				}else{
					//console.log("Error "+err.message);
					res.status(400).json("Error "+err.message);
				}
			});
		} catch (error) {
			res.status(400).json(error.message);
		}	
	}else{
		res.status(401).json({res: "token invalido"});
	}
	
};

