import { useState } from 'react'

function ToDoList() {
    const [Tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [checkedTodos, setcheckedTodos] = useState([]);

    function updateInput(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        setTasks([...Tasks, {todo : newTask, checked : false}]);
        setNewTask("");
    }

    function deleteTask(idx) {

        const updatedTasks = Tasks.filter((val, index) => index !== idx);

        // console.log(updatedTasks)

        setTasks(updatedTasks);
    }

    function updateTask(todo, idx) {
        setNewTask(todo);

        const updatedTasks = Tasks.filter((val, index) => index !== idx);

        setTasks(updatedTasks);
    }

    function checkedTask(idx) {
        let selectedTodo = Tasks[idx];

        selectedTodo['checked'] = selectedTodo['checked'] ? false : true;

        setcheckedTodos([...checkedTodos, selectedTodo]);

        // console.log(selectedTodo);

        // const updatedTasks = Tasks.filter((val, index) => index !== idx);

        // setTasks(updatedTasks);

    }

    return (
        <div className='flex justify-center items-center flex-col gap-5 bg-blue-400 w-[60%] m-auto mt-5 p-8 rounded-[20px] max-sm:w-[95%] max-sm:p-4'>
            <div className= 'flex gap-1 w-[100%]'>

                <input
                    type="text"
                    value={newTask}
                    placeholder='Enter a todo to add'
                    onChange={updateInput}
                    className=' border-[2px] border-black rounded-[10px] w-[100%] p-2 outline-none text-white'
                />

                <button 
                    className=' text-2xl  text-white font-bold bg-green-400 px-5 rounded-[10px] cursor-pointer hover:bg-green-300'
                    onClick={addTask}>
                    Add</button>
            </div>

            <div className="todo-container w-[100%] flex flex-col gap-2">
                {Tasks.map((todos, idx) => {
                    return (
                        <div className='w-[100%] bg-blue-200 rounded-[10px] p-1 flex justify-between items-center'>
                            <div className='flex gap-2 items-center justify-center'>
                                <input
                                    type="checkbox"
                                    onClick={() => {checkedTask(idx)}}
                                />
                                {todos.checked ? <p className=' font-semibold line-through text-shadow-gray-500 opacity-[0.4]'>{todos.todo}</p> : <p className=' font-semibold'>{todos.todo}</p>}
                            </div>

                            <div className='flex gap-1'>

                                <button
                                    className='bg-orange-400 p-2 rounded-[10px] text-white font-bold cursor-pointer hover:bg-orange-300'
                                    onClick={() => {updateTask(todos.todo, idx)}}
                                >Update</button>

                                <button
                                    className='bg-red-800 p-2 rounded-[10px] text-white font-bold cursor-pointer hover:bg-red-700'
                                    onClick={() => {deleteTask(idx)}}>
                                Delete</button>

                            </div>
                        </div>
                    )
                })}
            </div>
        
        </div>
    )
}

export default ToDoList;