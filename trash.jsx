import { useState } from "react"
import { useTranslation } from "react-i18next"


const styles = {
    container: "w-full my-4 text-left",
    popup: "p-4 min-w-[300px]  rounded-md bg-secondary absolute top-[40%] left-[40%] "
}

// const styles= {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     padding: 4,
// }

export default function Trash({ todos, setTodos }) {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()

    const handleOpen = () => {
        setOpen(!open)
    }
    const handleBack = (id) => {
        let updated = todos.find((el) => el.id == id)
        updated.isDeleted = false
        setTodos([...todos])
    }
    const filteredTodos = todos.filter((el) => (el.isDeleted == true))
    return (
        <div className={styles.container}>
            <button onClick={handleOpen}>
                <img src="/images/trash.svg" alt="trash" />
            </button>

            {open && (
                <div className={styles.popup}>
                    <button onClick={handleOpen}>X</button>
                    <h1 className="text-4xl  text-center py-4">{t('deletedItems')}</h1>
                    <ul>
                        {filteredTodos.length > 0 ? filteredTodos?.map(el => (
                            <li key={el.id} className="flex justify-between py-2">{el.title}
                                <button onClick={() => handleBack(el.id)} className="cursor-pointer bg-primary" ><img src="./images/undo.svg" alt="recover" /></button>
                            </li>
                        )) : <h2 className="text-2xl  text-center py-4">{t('emptyTrash')}</h2>}
                    </ul>
                </div>
            )}
        </div>
    )
}
