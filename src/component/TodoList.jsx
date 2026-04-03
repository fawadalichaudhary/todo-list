import { Trash } from "lucide-react";
import React, { useState } from "react";
import Data from "./Data.json";

const TodoList = () => {
    const [Todos, setTodos] = useState(Data);
    const [input, setInput] = useState("");

    const addTask = (e) => {
        e.preventDefault();

        if (!input) return;

        const newId = Object.keys(Todos).length + 1;

        setTodos({
            ...Todos,
            [newId]: input
        });

        setInput("");
    };

    const deleteTask = (id) => {
        const newTodos = { ...Todos };
        delete newTodos[id];
        setTodos(newTodos);
    };

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="bg-[#9465FF] h-96 w-80 p-2.5 rounded-sm">
                <div className="bg-black/45 h-full w-full overflow-y-auto ">
                    <form className="p-5 text-white flex justify-center gap-2.5">
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
                            <div key={id} className="bg-[#C005AA] flex gap-2 items-center justify-between w-4/5 px-4 pt-2 pb-4 rounded-sm text-xs">
                                <div className="overflow-x-auto text-white">{Todos[id]}</div>

                                <button onClick={() => deleteTask(id)}>
                                    <Trash className="text-white h-5 w-3" />
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TodoList;