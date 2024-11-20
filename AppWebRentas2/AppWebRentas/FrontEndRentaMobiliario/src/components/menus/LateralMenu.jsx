export const LateralMenu = () => {
  return (
    <div className="col-2 sidebar d-flex flex-column align-items-center">
      <a className="nav-link" href="./login">
        <i className="fas fa-user"></i>
        <span className="bold">Login</span>
      </a>
      <a className="nav-link" href="#">
        <i className="fas fa-shopping-cart"></i>
        <span className="bold">Paquetes</span>
      </a>
      <a className="nav-link" href="#">
        <i className="fas fa-book"></i>
        <span className="bold">Agenda</span>
      </a>
      <a className="nav-link mt-auto" href="#">
        <i className="fas fa-phone"></i>
        <span className="bold">Contacto</span>
      </a>
    </div>
  );
};
