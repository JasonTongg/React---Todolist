import logo from './logo.svg';
import Todoitem from './components/Todoitem'
import Inputform from './components/InputForm';
import './App.css';
import React from 'react';
import EditData from './components/EditData'
import DeleteData from './components/DeleteData'

class App extends React.Component {
  state = {
    todo: [
      {
        id: 1,
        text: "Belajar Advance Object Oriented Programming"
      },
      {
        id: 2,
        text: "Belajar GitLab"
      }
    ],
    isEdit: false,
    editData: {
      id: "",
      text: ""
    },
    isDelete: false,
    deleteData: {
      id: ""
    }
  }

  change = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        text: e.target.value,
      }
    })
  }

  saveChange = e => {
    e.preventDefault();
    let {id, text} = this.state.editData;
    let newFile = {id: id, text: text};
    let newTodo = this.state.todo;
    let findId = newTodo.indexOf(newTodo.find(item => item.id === id));
    newTodo.splice(findId,1,newFile)

    this.setState({
      todo: newTodo,
      isEdit: false,
      editData: {
        id: "",
        text: ""
      }
    })
  }

  openEdit = (id, text) => {
      this.setState({
        isEdit: true,
        editData: {
          id,
          text
        }
      })
  }

  closeEdit = () => {
    this.setState({
      isEdit: false,
    })
  }

  openConfirm = (id) => {
    this.setState({
      isDelete: true,
      deleteData:{
        id: id
      }
    })
  }

  closeConfirm = () => {
    this.setState({
      isDelete: false,
    })
  }

  delete = id => {
    this.setState({
      todo: this.state.todo.filter(item => item.id !== id),
      isDelete: false,
    });
  }

  addData = (text) => {
    this.setState({
      todo: [...this.state.todo, {id: this.state.todo.length+1, text: text}]
    })
  }

  render(){
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="" className="logo--image"/>
          <p className="logo--text">React Todolist</p>
        </div>
        <div className="todoitem">
          {this.state.todo.map(item => {
            return(
              <Todoitem text={item.text} id={item.id} open={this.openEdit} openConfirm={this.openConfirm}></Todoitem>
            )
          })}
        </div>
        <div className="inputitem">
          <Inputform add={this.addData}></Inputform>
        </div>
        <EditData edit={this.state.isEdit} editData={this.state.editData.text} change={this.change} save={this.saveChange} close={this.closeEdit}></EditData>
        <DeleteData confirm={this.state.isDelete} del={this.delete} closeConfirm={this.closeConfirm} data={this.state.deleteData.id}></DeleteData>
      </div>
    );
  }
}

export default App;
