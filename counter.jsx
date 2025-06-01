import { useTranslation } from "react-i18next"

export function Counter({todos}){
    const { t } = useTranslation()
    return (
        <h3 className="text-white text-[16px]">{t('tasksToDo')} -  {todos.length}</h3>
    )
}