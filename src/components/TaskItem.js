import { Component } from 'react';

class TaskItem extends Component{

    onUpdateStatus = () => {
        //console.log(this.props.task.id);
          this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteItem =() =>{
        //console.log(this.props.task.id);
        //console.log(this.props.task);
        this.props.onDeleteItem(this.props.task.id);
    }

    onUpdate = () =>{
        //console.log(this.props.task.id);
        //console.log(this.props.task);
        this.props.onUpdate(this.props.task.id);
    }
    
    // onSua = () =>{
    //     console.log("Sua");
    //     console.log(this.props.task);
    //     //this.props.onSua(this.props.task.id);
    // }


    render(){
        var {task , index} = this.props;
     
        //console.log(task.status);
      return(

                <tr>
                    <td>{index + 1}</td>
                    <td className="text-center">{task.name}</td>
                    <td className="text-center">
                        <span className= { task.status === true ? "label label-danger" : "label label-success"} 
                                        onClick = { this.onUpdateStatus }
                        
                        >
                                {task.status === true ? 'Kích hoạt' : 'ẩn'}
                        </span>
                                    
                    </td>
                    <td className="text-center">
                        <button type="button" 
                                className="btn btn-warning"
                                onClick = { this.onUpdate }
                              

                                >
                            <span className="fa fa-pencil mr-5"></span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" 
                                className="btn btn-danger"
                                onClick = { this.onDeleteItem }
                        >
                            <span className="fa fa-trash mr-5"
                                
                            ></span>Xóa
                        </button>
                    </td>
                </tr>
            
        
        )
    }
};

export default TaskItem;
