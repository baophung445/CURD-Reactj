import { Component } from "react";

class Control extends Component {
  render() {
    return (
      <div className="row mt-15">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa..."
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">
                <span className="fa fa-search mr-5"></span>Tìm
              </button>
            </span>
          </div>
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a href="/#" role="button">
                  <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
                </a>
              </li>
              <li>
                <a href="/#" role="button">
                  <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
                </a>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <a href="/#" role="button">Trạng Thái Kích Hoạt</a>
              </li>
              <li>
                <a href="/#" role="button">Trạng Thái Ẩn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
