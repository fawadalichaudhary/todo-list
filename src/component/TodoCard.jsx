import { Loader2, Trash } from 'lucide-react'
import { useState } from 'react'

const TodoCard = ({ value, deleteTask }) => {
    const [isDeleting, setIsDeleting] = useState(false)
    return (
        <div className="bg-[#C005AA] flex gap-2 items-center justify-between w-full px-4 pt-2 pb-4 rounded-sm text-xs">
            <div className=" text-white">{value}</div>
            <button onClick={() => { deleteTask(); setIsDeleting(true) }}>
                {isDeleting ? <Loader2 className="text-white h-5 w-3 animate-spin" /> : <Trash className="text-white h-5 w-3" />}
            </button>
        </div>
    )
}

export default TodoCard