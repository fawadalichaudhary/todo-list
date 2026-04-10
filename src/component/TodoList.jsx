import { Loader2, Trash } from "lucide-react";
import { useState } from "react";
import TodoCard from "./TodoCard";

const TodoList = () => {
    const [Todos, setTodos] = useState({});
    const [input, setInput] = useState("");


    const addTask = (e) => {
        e.preventDefault();

        if (!input) return;
        const newId = Math.max(...Object.keys(Todos), 0) + 1
        setTodos({
            ...Todos,
            [newId]: input
        });
        console.log("after todo", Todos)


        setInput("");
    };

    const delay = (timeInMs) => new Promise(resolve => setTimeout(resolve, timeInMs))

    const deleteTask = async (id) => {
        await delay(1000)
        const newTodos = { ...Todos };
        delete newTodos[id];
        setTodos(newTodos);
    };

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="bg-[#9465FF] h-96 w-80 p-2.5 rounded-sm">
                <div className="bg-black/45 h-full w-full overflow-y-auto p-5 space-y-5">
                    <form className="text-white flex justify-center gap-2.5">
                        <input
                            className="bg-[#19738B] h-10 rounded-lg pl-3"
                            type="text"
                            placeholder="Enter task"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                        <button
                            className="bg-amber-500 h-10 w-20 rounded-xs text-black"
                            type="submit"
                            onClick={addTask}
                        >
                            Add
                        </button>
                    </form>

                    <div className="flex gap-2 flex-col justify-between items-center ">
                        {Object.keys(Todos).map((id) => (
                            <div key={id} className="w-full">
                                <TodoCard value={Todos[id]} deleteTask={() => deleteTask(id)} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TodoList;