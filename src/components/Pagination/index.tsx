export const Pagination = () => {
  return (
    <>
      <hr className="mt-3" />

      <div className="row pb-3">
        <div className="col-12">
          <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
            <nav className="d-inline-block me-3">
              <ul className="pagination my-0">
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
