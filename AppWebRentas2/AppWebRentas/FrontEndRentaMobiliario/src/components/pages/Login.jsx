import "../../assets/css/StylesLogin.css"

export const Login =()=>{

    const togglePassword =(e)=>{
        var passwordInput = document.getElementById("password");
        var passwordIcon = document.getElementById("password-icon");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordIcon.classList.remove("fa-eye");
            passwordIcon.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            passwordIcon.classList.remove("fa-eye-slash");
            passwordIcon.classList.add("fa-eye");
        }
    }

    return (
        <div className="bodyLogin">
        <div className="left-side">
            <img alt="Company logo" src="./img/5.jpeg"/>
        </div>
        <div className="right-side">
            <div className="login-container">
                <h2><strong>Inicio de sesión</strong></h2>
                <form>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Usuario o correo" type="text"/>
                    </div>
                    <div className="mb-3">
                        <div className="input-group">
                            <input className="form-control" id="password" placeholder="Contraseña" type="password"/>
                            <span className="input-group-text pass-eye" onClick={togglePassword}>
                                <i className="fas fa-eye" id="password-icon"></i>
                            </span>
                        </div>
                    </div>
                    <button className="btn btn-custom" type="submit">Iniciar sesión</button>
                    <div className="mb-3 form-check">
                        <input className="form-check-input checkbox" id="remember" type="checkbox"/>
                        <label className="form-check-label bold" for="remember">Recordar contraseña</label>
                    </div>
                    <div className="form-text mt-1">
                        ¿Todavía no tienes una cuenta? <a href="#">Regístrate</a>
                    </div>
                </form>
            </div>
        </div>
    </div>    
    );
}