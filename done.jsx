import { useTranslation } from "react-i18next"

const style = {
     undo: "line-through rounded-[10px] text-green bg-primary w-[432px] h-[75px] flex px-[21px] items-center justify-between",
}
export default function Done({ todos, setTodos }) {
    const {t} = useTranslation()
    const handleUndo = (id) => {
        let updated = todos.find((el) => el.id == id)
        updated.isDone = false
        setTodos([...todos])
    }

    const filteredTodos = todos.filter((el)=>el.isDone && !el.isDeleted)
        return (
        <div className="flex flex-col items-start gap-[20px]">
            <h3 className="text-white text-[16px]">{t('done')} -  {filteredTodos.length}</h3>
            <ul className="flex flex-col gap-[16px] ">
                {filteredTodos?.map((el) => (
                 <li className={style.undo} key={el.id}>
                    {el.title}
                    <button onClick={() => handleUndo(el.id)} className="cursor-pointer"><img src="./images/undo.svg" alt="recover" /></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
