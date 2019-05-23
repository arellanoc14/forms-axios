import React from 'react';

const Forms = (props) => {
	const {submit,value,onChange} = props;
  return (
     <form onSubmit = {submit}>
          <input placeholder = 'entertask'
          	value = {value}
          	onChange = {onChange}

          />
          <button type =  "submit">
          		Click
          </button>
     </form>
  )
}

export default Forms;