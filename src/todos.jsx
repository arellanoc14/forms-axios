import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;`
const TodosP = props => {
   const {
   	task,
   	comment,
   	handleDelete,
   	handleUpdate
   } = props;
  return (
    <div>
    	<h1>{task}</h1>
    	<p>{comment}</p>
        <Button onClick = {handleDelete}>Delete</Button>
        <Button onClick = {handleUpdate}>update</Button>
    </div>
  )
}

export default TodosP;