export const MainBanner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="input-group search-bar">
        <input className="form-control" placeholder="Buscar" type="text" />
        <button className="btn btn-outline-secondary lupa" type="button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="nav-links mt-3">
        <a className="me-3" href="#">
          Artículos/manual de usuario
        </a>

        <a className="me-3" href="#">
          Preguntas
        </a>

        <a href="#">Sobre nosotros</a>
      </div>
    </div>
  );
};
