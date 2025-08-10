import { useState } from 'react';
// import ToDoContainer from './ToDoContainer';

function ToDoList() {
    const [Tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [checkedTodos, setcheckedTodos] = useState([]);
    const [finishedButton, setfinishedButton] =useState(false);

    function updateInput(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== ''){
            setTasks([...Tasks, {todo : newTask, checked : false}]);
            setNewTask("");
        }
    }

    function deleteTask(specificArray, setspecificArray, idx) {

        const updatedTasks = specificArray.filter((val, index) => index !== idx);

        console.log(updatedTasks);

        setspecificArray(updatedTasks);
    }

    function updateTask(todo, idx, specifiArray, setspecificArray) {
        setNewTask(todo);

        const updatedTasks = specifiArray.filter((val, index) => index !== idx);

        setspecificArray(updatedTasks);
    }

    function checkedTask(specifiArray, setspecificArray, idx) {
        let selectedTodo = specifiArray[idx];

        selectedTodo['checked'] = selectedTodo['checked'] ? false : true;

        if (selectedTodo['checked']) {
            setcheckedTodos([...checkedTodos, selectedTodo]);
        }

        else {
            setTasks([...Tasks, selectedTodo]);
        }

        // console.log(setcheckedTodos);

        const updatedTasks = specifiArray.filter((val, index) => index !== idx);

        setspecificArray(updatedTasks);
        // console.log(checkedTodos);

        // const updatedTasks = Tasks.filter((val, index) => index !== idx);

        // setTasks(updatedTasks);

    }

    return (
        <div className='flex justify-center items-center flex-col gap-5 bg-blue-400 w-[60%] m-auto mt-5 p-8 rounded-[20px] max-sm:w-[95%] max-sm:p-4'>
            <h2 className='text-white font-bold text-[35px]'>Taskify - Manage your todos at one place</h2>

            <h3 className='text-white text-[20px] font-bold self-start'>Add a todo</h3>
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

            <div className='self-start flex justify-center items-center gap-2'>
                <input type="checkbox" id='finsihed' onClick={() => {setfinishedButton(finishedButton ? false : true)}}/>
                <label htmlFor="finsihed" className='text-white'>Show Finished</label>
            </div>

            <div className='border-gray-600 border-[1px] w-[97%] bg-black mt-3'></div>

            {finishedButton ? <div className="todo-container w-[100%] flex flex-col gap-2">
                {checkedTodos.map((todos, idx) => {
                    return (
                        <div className='w-[100%] bg-blue-200 rounded-[10px] p-1 flex justify-between items-center'>
                            <div className='flex gap-2 items-center justify-center'>
                                <input
                                    type="checkbox"
                                    onClick={() => {checkedTask(checkedTodos, setcheckedTodos, idx)}}
                                    checked
                                />
                                {todos.checked ? <p className=' font-semibold line-through text-shadow-gray-500 opacity-[0.4]'>{todos.todo}</p> : <p className=' font-semibold'>{todos.todo}</p>}
                            </div>

                            <div className='flex gap-1'>

                                <button
                                    className='bg-orange-400 p-2 rounded-[10px] text-white font-bold cursor-pointer hover:bg-orange-300'
                                    onClick={() => {updateTask(todos.todo, idx, checkedTodos, setcheckedTodos)}}
                                >Update</button>

                                <button
                                    className='bg-red-800 p-2 rounded-[10px] text-white font-bold cursor-pointer hover:bg-red-700'
                                    onClick={() => {deleteTask(checkedTodos, setcheckedTodos, idx)}}>
                                Delete</button>

                            </div>
                        </div>
                    )
                })}
            </div> : <div className="todo-container w-[100%] flex flex-col gap-2">
                {Tasks.map((todos, idx) => {
                    return (
                        <div className='w-[100%] bg-blue-200 rounded-[10px] p-1 flex justify-between items-center'>
                            <div className='flex gap-2 items-center justify-center'>
                                <input
                                    type="checkbox"
                                    onClick={() => {checkedTask(Tasks,setTasks, idx)}}
                                    checked={false}
                                />
                                {todos.checked ? <p className=' font-semibold line-through text-shadow-gray-500 opacity-[0.4]'>{todos.todo}</p> : <p className=' font-semibold'>{todos.todo}</p>}
                            </div>

                            <div className='flex gap-1'>

                                <button
                                    className='bg-orange-400 p-2 rounded-[10px] text-white font-bold cursor-pointer hover:bg-orange-300'
                                    onClick={() => {updateTask(todos.todo, idx, Tasks, setTasks)}}
                                >Update</button>

                                <button
                                    className='bg-red-800 p-2 rounded-[10px] text-white font-bold cursor-pointer hover:bg-red-700'
                                    onClick={() => {deleteTask(Tasks, setTasks, idx)}}>
                                Delete</button>

                            </div>
                        </div>
                    )
                })}
            </div>}
            
            
        
        </div>
    )
}

export default ToDoList;