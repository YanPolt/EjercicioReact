import "./Museo";
const Obra = (prop) => {
  return (
    <div className="row">
      <div className="col-12 col-md-3 mb-3 d-flex  justify-content-center">
        <div className="card menuItems text-center h-100">
          <img src={prop.obra.name} alt="" />
          <div className="card-body d-flex align-items-center flex-column">
            <h5 className="card-title">{prop.obra.name}</h5>
            <div></div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-9  mb-3 ">
        <div className="card w-100 h-100">
          <p className="description">{prop.obra.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Obra;
