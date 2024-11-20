const { connectionAdmin } = require("../../DataBases/db")
const config = require("../../../config")
const jwt = require("jsonwebtoken")

function esTokenValido(token){
	if(token != undefined){		
		try{
			const expire = jwt.verify(token, config.JSON_KEY)
			return true
		}catch(err){
			return false
		}
	}else{
		return false
	}
}

module.exports.creadenciales = (req, res)=>{ // inicio de sesion

	//if(esTokenValido(req.headers.token)){
		//var con = getConn(req.headers.token)
		const userP = req.params.user
		const passP = req.params.pass
		var sql = "select userName from usuario where userName=? and userPass=?"
		
		try {
			connectionAdmin.query(sql, [userP, passP],(err, result)=>{
				if(!err){
					res.status(200).json(result[0])
				}else{
					res.status(400).json("Error "+err.message)
				}
			})
			
		} catch (error) {
			res.status(400).json(error.message)
		}	
	//}else{
		//res.status(401).json({res: "token invalido"})
	//}	
	
}

module.exports.renta = (req, res)=>{ // realizar una renta

	//if(esTokenValido(req.headers.token)){
		//var con = getConn(req.headers.token)
		const paqueteP = req.params.paquete
		const unidadesP = req.params.unidades
		const colorP = req.params.color
		const fechaP = req.params.fecha
		const lugarP = req.params.lugar
		const EventP = req.params.evento

		//var sql = "select userName from usuario where userName=? and userPass=?"
		
		try {
			//connectionAdmin.query(sql, [userP, passP],(err, result)=>{
				//if(!err){
					//res.status(200).json(result[0])
					res.status(200).json({
						paqueteP,
						unidadesP,
						colorP,
						fechaP,
						lugarP,
						EventP,
					})
				//}else{
					res.status(400).json("Error "+err.message)
				//}
			//})
			
		} catch (error) {
			res.status(400).json(error.message)
		}	
	//}else{
		//res.status(401).json({res: "token invalido"})
	//}	
	
}

module.exports.inventario = (req, res)=>{ // inicio de sesion

	//if(esTokenValido(req.headers.token)){
		//var con = getConn(req.headers.token)
		const userP = req.params.user
		const passP = req.params.pass
		var sql = "select (select cantidad from monio) as monio,"+
	   "(select cantidad from funda) as funda,"+
	   "(select cantidad from mantel) as mantel,"+
	   "(select cantidad from cubre_mantel) as cubre_mantell;"
		
		try {
			connectionAdmin.query(sql,(err, result)=>{
				if(!err){
					res.status(200).json(result[0])
				}else{
					res.status(400).json("Error "+err.message)
				}
			})
			
		} catch (error) {
			res.status(400).json(error.message)
		}	
	//}else{
		//res.status(401).json({res: "token invalido"})
	//}	
	
}
