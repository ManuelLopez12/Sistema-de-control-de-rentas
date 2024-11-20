export const Info = () => {
  return (
    <>
      <div className="text-right mt-5">
        <h1 className="display-4 bold">Renta de servicios para tu evento</h1>
        <p>Renta de servicios para tu evento.</p>
    </div>

      <button className="btn btn-success rent-button">Realizar renta</button>

      <div className="catalog-title mt-5">CATÁLOGO DE ARTÍCULOS</div>
      
      <div className="row mt-3 justify-content-center">
        
        <div className="col-12 col-md-3 catalog-item">
          <img
            alt="Sillas para eventos"
            src="./img/2.jpeg"
          />
          <button>SILLAS</button>
        </div>
        
        <div className="col-12 col-md-3 catalog-item">
          <img
            alt="Lonas para eventos"
            src="./img/1.jpeg"
          />
          <button>LONAS</button>
        </div>
        
        <div className="col-12 col-md-3 catalog-item">
          <img
            alt="Mesas para eventos"
            src="./img/3.jpeg"
          />
          <button>MESAS</button>
        </div>
        
        <div className="col-12 col-md-3 catalog-item">
          <img
            alt="Otros artículos para eventos"
            src="./img/4.jpeg"
          />
          <button>OTROS</button>
        </div>
      
      </div>
    </>
  );
};
