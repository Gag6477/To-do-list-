import { useState, useTransition } from "react"
import { useTranslation } from "react-i18next"

const styles = {
    form: "w-full flex gap-[11px] ",
    input: "border placeholder:text-grey-400 text-white w-full border-secondary rounded-[10px] px-[15px] py-[11px] text-[16px] h-[32px]",
    button: " flex justify-center items-center font-thin bg-secondary text-white w-[32px] h-[32px] rounded-[10px] pb-[5px] text-4xl"

}
export default function Form({ setTodos }) {
    const [inputValue, setInputValue] = useState('')
    const {t} = useTranslation('')
    let count = 0
    count++

    const handleAdd = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            setTodos((todos) => [...todos, { id: Math.random(),title: inputValue, isDone:false, isDeleted:false }])
            // inputValue = ''
            setInputValue('') // for the render

            // setInputValue((val)=>val + "barev")
        }
    }

    return (
        <form action="#" className={styles.form} onSubmit={handleAdd}>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('addNewTask')}
                className={styles.input}
                type="text" />
            <button type="submit" className={styles.button}>+</button>
        </form>

    )
}