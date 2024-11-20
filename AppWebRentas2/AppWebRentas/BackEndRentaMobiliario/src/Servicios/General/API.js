module.exports.version = (req, res)=>{
    res.send("<div>"+
        "<h1>API SFP Control de directorios</h1>"+
        "<h2>Versión: 1.0.0</h2>"+
        "<h5>Autor: Raymundo M. Luna</h5>"+
        "<style>"+
        "    *{text-align: center;}"+
        "    div{"+
        "    position: absolute;"+
        "    top: 50%;"+
        "    left: 50%;"+
        "    transform: translate(-50%, -50%);}"+
        "</style>"+
        "</div>");
};