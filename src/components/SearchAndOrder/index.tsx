export const SearchAndOrder = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-12 col-md-7">
          <div className="d-flex flex-row-reverse justify-content-center justify-content-md-end">
            <form className="d-inline-block">
              <select className="form-select">
                <option>Ordenar pelo nome</option>
                <option>Ordenar pelo menor preço</option>
                <option>Ordenar pelo maior preço</option>
              </select>
            </form>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Digite aqui o que procura"
              />
              <button className="btn btn-dark">Buscar</button>
            </div>
          </form>
        </div>
      </div>
      <hr className="mt-3" />
    </>
  );
};
