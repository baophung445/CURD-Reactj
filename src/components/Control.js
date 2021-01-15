import { Component } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  onClick = (sortBy, sortStatuss) => {
    this.props.onSort(sortBy,sortStatuss);
  
    
  };

  render() {
    var { keyword } = this.state;

    return (
      <div className="row mt-15">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa..."
              name="keyword"
              value={keyword}
              onChange={this.onChange}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.onSearch}
              >
                <span className="fa fa-search mr-5 icon"></span>Tìm
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
              <li onClick={() => this.onClick("name", 1)}>
                <a href="/#" role="button" className="sort-selected">
                  <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
                </a>
              </li>
              <li onClick={() => this.onClick("name", -1)}>
                <a href="/#" role="button" className="sort-selected">
                  <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
                </a>
              </li>
              <li role="separator" className="divider"></li>
              <li onClick={() => this.onClick("status", 1)}>
                <a href="/#" role="button">
                  Trạng Thái Kích Hoạt
                </a>
              </li>
              <li onClick={() => this.onClick("status", -1)}>
                <a href="/#" role="button">
                  Trạng Thái Ẩn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
