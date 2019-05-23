import React, { Component } from 'react';
import axios from 'axios';
import styled, {css} from 'styled-components';
import TodosList from './TodosList';
import "./App.css";
const apiEndpoint = "http://localhost:3000/todos"
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
      ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
    `
const InputArea = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;  
class App extends Component {
    state = {
      task: "",
      comment: "",
      todos:[]
    };

    handleChangeTask = e =>{this.setState({task: e.target.value})};
    handleComment = e => {this.setState({comment: e.target.value})};

    async componentDidMount() {
      const {data:todos} = await axios.get(apiEndpoint);
      this.setState({todos});
    }
    handleSubmit = async (e) => {
     e.preventDefault();
     const obj = {task: this.state.task, comment: this.state.comment};
     const { data:todo } = await axios.post(apiEndpoint, obj);
     const todos = [todo, ...this.state.todos];
     this.setState({todos})
    };
    handleDelete = async (todo) => {
      await axios.delete(apiEndpoint + "/"+ todo.id);
      const todos = this.state.todos.filter(f => f.id !== todo.id);
      this.setState({todos})
    };
    handleUpdate = async (todo) => {
      todo.task = this.state.task;
      todo.comment = this.state.task;
      await axios.put(apiEndpoint + '/' + todo.id)
      const todos = [...this.state.todos];
      const index = todos.indexOf(todo);
      todos[index] = {...todo};
      this.setState({ todos })
    }
    render() {
        return (
            <div
             className = "App"
             onSubmit = {this.handleSubmit}>
              <div className = "forms">
                <form>
                  <InputArea value = {this.state.task}      
                   onChange = {this.handleChangeTask} type = "text" />     
                       <label>todos</label>
                        <InputArea value = {this.state.comment} 
                            onChange = {this.handleComment}>
                        </InputArea>
                        <label>Comments</label>   
                    <div id = "formBtn">
                       <Button type = 'submit'>Add</Button>
                    </div>
                </form>
                  <TodosList 
                    todos = {this.state.todos}
                    buttonDelete = {this.handleDelete}
                    buttonUpdate = {this.handleUpdate}/>
              </div>
            </div>
        );
    }
}

export default App;

