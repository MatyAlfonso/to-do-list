import React from 'react';


const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    //Here I can write JavaScript, code and functions
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button onClick={submitodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">Todas</option>
                    <option value="completed">Completadas</option>
                    <option value="uncompleted">Incompletas</option>
                </select>
            </div>
        </form>
    );
};

export default Form;