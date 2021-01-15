import { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplay: false,
      taskEditTing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
      sort: {
        name: "",
        value: "",
      },
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("task")) {
      var tasks = JSON.parse(localStorage.getItem("task"));
      this.setState({
        task: tasks,
      });
    }
    //this.onCloseForm();
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }

  onGenerage = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Học lập trình",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Web",
        status: false,
      },
      {
        id: this.generateID(),
        name: "Mobie",
        status: true,
      },
    ];

    //console.log("task1", tasks);

    localStorage.setItem("task", JSON.stringify(tasks));
  };

  onToggleForm = () => {
    this.setState({
      isDisplay: !this.state.isDisplay,
      taskEditTing: null,
    });
  };

  onCloseForm = () => {
    this.setState({
      isDisplay: false,
      taskEditTing: null,
    });
  };

  onOpenForm = () => {
    this.setState({
      isDisplay: true,
    });
  };

  onSubmit = (data) => {
    var { task } = this.state;

    if (data.id === "") {
      data.id = this.generateID();
      task.push(data);
    } else {
      //Edit
      var index = this.findIndex(data.id);
      task[index] = data;
    }
    this.setState({
      task: task,
      taskEditTing: null,
    });

    localStorage.setItem("task", JSON.stringify(task));
  };

  onUpdateStatus = (id) => {
    var { task } = this.state;
    //console.log(id);
    var index = this.findIndex(id);
    if (index !== -1) {
      task[index].status = !task[index].status;
    }
    this.setState({
      task: task,
    });

    localStorage.setItem("task", JSON.stringify(task));
  };

  findIndex = (id) => {
    var { task } = this.state;
    var Result = -1;
    task.forEach((task, index) => {
      if (task.id === id) {
        Result = index;
      }
    });
    return Result;
  };

  // Delete
  onDeleteItem = (id) => {
    // console.log(id);
    var { task } = this.state;
    var index = this.findIndex(id);

    if (index !== -1) {
      task.splice(index, 1);
      this.setState({ people: task });
    }
    //console.log(task);
    localStorage.setItem("task", JSON.stringify(task));
  };

  // Update

  onUpdate = (id) => {
    var { task } = this.state;
    var index = this.findIndex(id);
    //console.log(index);
    var taskEditTing = task[index];
    this.setState({
      taskEditTing: taskEditTing,
    });

    //console.log(this.state.taskEit);
    this.onOpenForm();
  };

  //filter
  onFilter = (filterName, filterStatus) => {
    //console.log(filterName, "-", filterStatus);
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };

  //Search
  onSearch = (keyword) => {
    //console.log(keyword);
    this.setState({
      keyword: keyword,
    });
  };

  // Sort
  onSort = (name, value) => {
    //console.log(name, value);
    this.setState({
      sort: {
        name: name,
        value: value,
      },
    });
    //console.log(this.state.sort);
  };

  render() {
    var { task, isDisplay, taskEditTing, filter, keyword } = this.state; // var task = this.state.task
    if (filter) {
      if (filter.name) {
        // xét khác 0 , khác null , khác undefine
        task = task.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }

      task = task.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }

    // nếu có keyword thì mình mới thực hiện hành dông này
    if (keyword) {
      task = task.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    console.log(this.state.sort.name);
    var { name } = this.state.sort;
    var { value } = this.state.sort;

    if (name && value) {
      if (name === "name" && value === 1) {
        // return task.sort;
        //console.log(task);
        // eslint-disable-next-line array-callback-return
        task.sort((a, b) => {
          if (a.name > b.name) return 1;
          else if (a.name < b.name) return -1;
          else return 0;
        });
      }
    }

    var genDisplay = isDisplay ? (
      <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        tasksss={taskEditTing}
      />
    ) : (
      ""
    );

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={isDisplay ? " col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
          >
            {/* Task form */}
            {genDisplay}
          </div>
          <div
            className={
              isDisplay
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5 icon"></span>Thêm Công Việc
            </button>
            <button
              type="button"
              className="btn btn-danger ml-10 close"
              onClick={this.onGenerage}
            >
              <span className="fa fa-plus ml-10"></span> Thêm
            </button>
            <br />
            <Control onSearch={this.onSearch} onSort={this.onSort} />
            <div className="row mt-15">
              <TaskList
                task={task}
                onUpdateStatus={this.onUpdateStatus}
                onDeleteItem={this.onDeleteItem}
                onUpdate={this.onUpdate}
                onFilter={this.onFilter} // nhận lại dữ liệu từ thèn con props vào
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
