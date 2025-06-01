import { useState } from "react"
import { Counter } from "./counter"

const styles = {
    item: " rounded-[10px] flex justify-between text-secondary bg-primary w-[432px] h-[75px] px-[21px] items-center",
    input: "border placeholder:text-grey-400 text-white  border-secondary rounded-[10px] px-[15px] py-[11px] text-[16px] h-[32px]",
    button: " flex justify-center items-center font-thin bg-secondary text-white  rounded-[10px] p-[5px]"

}

export default function ToDoList({ todos, setTodos }) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    const handleDelete = (id) => {
        let updated = todos.find((el) => el.id == id)
        updated.isDeleted = true
        setTodos([...todos])
    }
    const handleComplete = (id) => {
        let updated = todos.find((el) => el.id == id)
        updated.isDone = true
        setTodos([...todos])
    }
    const handleOpenEdiotor = (id, text) => {
        setEdit(id)
        setValue(text)
    }

    const handleEdit = () => {
        let updated = todos.find((el) => el.id == edit)
        updated.title = value
        setTodos([...todos])
        setValue('')
        setEdit(null)
    }
    const filteredTodos = todos.filter((el) => (!el.isDone && !el.isDeleted))
    return (
        <div className="flex flex-col items-start gap-[20px]">
           <Counter todos={filteredTodos}/>
            <ul className="flex flex-col gap-[16px] ">

                {filteredTodos?.map((el) => (
                    edit !== el.id ? <li key={el.id} className={styles.item}>
                        {el.title}
                        <span className='flex gap-2'>
                            <button onClick={() => handleComplete(el.id)} className="cursor-pointer"><img src="./images/check.svg" alt="complete" /></button>
                            <button onClick={() => handleDelete(el.id)} className="cursor-pointer"><img src="./images/trash.svg" alt="delete" /></button>
                            <button onClick={() => handleOpenEdiotor(el.id, el.title)} className="cursor-pointer" ><img src="./images/edit.svg"></img></button>
                        </span>
                    </li> : <li key={el.id} className={styles.item}>
                        <input
                            className={styles.input}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button
                            className={styles.button}
                            onClick={handleEdit}>
                            Done
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}