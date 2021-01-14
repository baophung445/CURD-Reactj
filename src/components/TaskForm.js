import { Component } from "react";

// Phần chia component
class TaskForm extends Component {
  onCloseForm = () => {
    this.props.onCloseForm();
  };

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // CLEAR & CLOSR FORM
    this.onClear();
    this.onCloseForm();
  };

  onClear = (event) => {
    this.setState({
      name: "",
      status: false,
    });
  };

  // Thực hiện một lần khi mở form
  componentWillMount() {
    console.log("componentWillUnmount");
    //console.log(this.props.tasksss);
    if (this.props.tasksss) {
      this.setState({
        id: this.props.tasksss.id,
        name: this.props.tasksss.name,
        status: this.props.tasksss.status,
      });
    }
    //console.log(this.state);
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps);

    if (nextProps && nextProps.tasksss) {
        this.setState({
          id: nextProps.tasksss.id,
          name: nextProps.tasksss.name,
          status: nextProps.tasksss.status,
        });
      }
  }


  render() {
    var { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== "" ? "Cập nhập công việc" : "Thêm công viêc "}
            <span
              className="fa fa-times-circle text-right icon"
              onClick={this.onCloseForm}
            >
              {" "}
            </span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              onChange={this.onChange}
              value={this.state.status}
            >
              <option value={true}> Kích Hoạt</option>
              <option value={false}> Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy Bỏ{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
