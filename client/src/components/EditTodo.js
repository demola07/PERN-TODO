import React, { useState } from 'react';

const EditTodo = ({ todo }) => {
  const [description, setdescription] = useState(todo.description);

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-warning'
        data-toggle='modal'
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div class='modal' id={`id${todo.todo_id}`} onClick={() => setdescription(todo.description)}>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h4 class='modal-title'>Edit Your Todo</h4>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                onClick={() => setdescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div class='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={e => setdescription(e.target.value)}
              />
            </div>

            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-warning'
                data-dismiss='modal'
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type='button'
                class='btn btn-danger'
                data-dismiss='modal'
                onClick={() => setdescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
